/* The test starts a temporary local HTTP server. Run:
   NODE_PATH=<directory containing playwright> CHROME_PATH=<optional chromium executable> node tests/classroom.cjs
   Set TEST_URL to test a deployed site instead. Test evidence goes outside the repository in /tmp/inquiry-qa.
*/
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const http=require('node:http');
const path=require('node:path');
(async()=>{
 fs.mkdirSync('/tmp/inquiry-qa',{recursive:true});
 const server=http.createServer((req,res)=>{const name=new URL(req.url,'http://localhost').pathname;const file=path.join(__dirname,'..',name==='/'?'index.html':name);try{res.setHeader('Content-Type',file.endsWith('.css')?'text/css':file.endsWith('.js')?'text/javascript':'text/html; charset=utf-8');res.end(fs.readFileSync(file));}catch(e){res.writeHead(404);res.end();}});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH||undefined,args:['--no-sandbox','--disable-dev-shm-usage']});
 const page=await browser.newPage({viewport:{width:1280,height:900}});const errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.goto(process.env.TEST_URL||`http://127.0.0.1:${server.address().port}`,{waitUntil:'networkidle'});
 await page.waitForSelector('.situation-panel');
 const data=await page.evaluate(()=>{
  const issues=[];
  if(S.length!==47||STD.length!==600)issues.push(`counts ${S.length}/${STD.length}`);
  for(const s of S){if(!GUIDE[s.n])issues.push(`missing guide ${s.n}`);openSheet(s.id);if(!$('sheetBody').textContent.includes('다음 학습으로 연결'))issues.push(`incomplete ${s.n}`);}
  for(const d of STD)for(const n of [6,8,10]){const ls=planFor(d,n);if(ls.length!==n)issues.push(`count ${d.c}/${n}`);for(const l of ls){const mins=l.acts.reduce((a,x)=>a+x[1],0)+(l.withReflect?5:0);if(mins!==40)issues.push(`minutes ${d.c}/${n}/${l.n}/${mins}`);}}
  closeSheet();return {strategies:S.length,standards:STD.length,issues};
 });assert.deepEqual(data.issues,[]);await page.waitForTimeout(250);
 for(let i=0;i<7;i++){await page.locator(`[data-situation="${i}"]`).click();assert.ok(await page.locator('#grid .card').count()>=2);await page.locator('#grid .card').first().click();await page.locator('#closeBtn').click();await page.waitForTimeout(230);}
 await page.locator('#q').fill('프레이어');assert.equal(await page.locator('#grid .card').count(),1);await page.locator('#q').fill('');
 await page.screenshot({path:'/tmp/inquiry-qa/desktop.png',fullPage:false});
 await page.evaluate(()=>{openSheet(byName('교차 비교표').id);chooseGuidePane('resources');});assert.equal(await page.locator('.workshop .case-card').count(),3);
 await page.evaluate(()=>{window.print=()=>{};});await page.locator('[data-print-worksheet]').click();assert.ok(await page.locator('#printArea .lesson-table').count());
 const worksheet=await page.locator('#printArea').innerText();assert.ok(!worksheet.includes('가능한 응답'));assert.ok(worksheet.includes('놀이터 개선'));
 const printChecks=await page.evaluate(()=>{const issues=[];for(const name of Object.keys(WORKSHOPS)){const s=byName(name);printWorksheet(s);if(!$('printArea').textContent.includes('이름:'))issues.push(name);}printWorksheet(byName('교차 비교표'));return issues;});assert.deepEqual(printChecks,[]);
 await page.emulateMedia({media:'print'});await page.pdf({path:'/tmp/inquiry-qa/worksheet.pdf',format:'A4',printBackground:true});
 await page.evaluate(()=>window.dispatchEvent(new Event('afterprint')));await page.emulateMedia({media:'screen'});
 await page.screenshot({path:'/tmp/inquiry-qa/workshop.png'});
 await page.locator('#closeBtn').click();await page.waitForTimeout(230);
 await page.locator('[data-v="unit"]').click();assert.equal(await page.locator('.unit-step').count(),8);
 await page.locator('[data-print-unit]').click();assert.ok((await page.locator('#printArea').innerText()).includes('자료 E'));
 await page.evaluate(()=>window.dispatchEvent(new Event('afterprint')));
 await page.locator('[data-v="standards"]').click();await page.locator('#fQ').fill('자료');await page.locator('.std').first().click();await page.locator('#toPlan').click();
 await page.locator('[data-plan-field="question"]').fill('참여와 결정은 어떻게 연결될까?');await page.locator('[data-plan-field="materials"]').fill('사례 A와 B');await page.locator('#materialsReady').check();
 const select=page.locator('[data-plan-lesson]').first();const opts=await select.locator('option').evaluateAll(nodes=>nodes.map(n=>n.value));await select.selectOption(opts[1]);
 const chosen=await page.locator('[data-plan-lesson]').first().inputValue();
 const plan=await page.evaluate(()=>({i:planStd,n:planN,text:planText()}));assert.ok(plan.text.includes('참여와 결정은 어떻게 연결될까?'));assert.ok(plan.text.includes('사례 A와 B'));
 await page.reload({waitUntil:'networkidle'});await page.evaluate(({i,n})=>openPlan(i,n),plan);assert.equal(await page.locator('[data-plan-field="question"]').inputValue(),'참여와 결정은 어떻게 연결될까?');assert.equal(await page.locator('[data-plan-lesson]').first().inputValue(),chosen);
 await page.locator('[data-n="6"]').click();assert.equal(await page.locator('.lesson').count(),6);
 // Malicious-looking draft input stays literal in text and copied output.
 await page.locator('[data-plan-field="concept"]').fill('<img src=x onerror="window.testInjected=true">');await page.locator('[data-n="8"]').click();await page.locator('[data-n="6"]').click();assert.equal(await page.evaluate(()=>window.testInjected),undefined);
 await page.locator('[data-reset-plan]').click();assert.equal(await page.locator('[data-plan-field="question"]').inputValue(),'');
 await page.locator('#closeBtn').click();await page.waitForTimeout(230);
 await page.setViewportSize({width:390,height:844});await page.locator('[data-v="strategies"]').click();await page.screenshot({path:'/tmp/inquiry-qa/mobile.png'});
 assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth));
 await page.evaluate(()=>openSheet(byName('새 사례에 적용·검증').id));assert.ok(await page.evaluate(()=>$('sheet').getBoundingClientRect().right<=innerWidth+1));await page.waitForTimeout(350);assert.ok(await page.evaluate(()=>$('sheetBody').scrollWidth<=$('sheetBody').clientWidth+1),'dialog horizontal overflow');await page.screenshot({path:'/tmp/inquiry-qa/mobile-workshop.png'});
 await page.keyboard.press('Escape');await page.waitForTimeout(230);assert.equal(await page.locator('#sheet').isVisible(),false);
 await page.emulateMedia({colorScheme:'dark'});await page.screenshot({path:'/tmp/inquiry-qa/dark.png'});
 assert.deepEqual(errors,[]);console.log(JSON.stringify({...data,errors,checks:'47 guides; 600 × 3 plan allocations; 7 situations; search; 5-workshop data path; worksheet/unit print; edits, persistence, switching/reset; literal text; mobile/dark/keyboard'},null,2));
 await browser.close();server.close();
})().catch(e=>{console.error(e);process.exit(1)});
