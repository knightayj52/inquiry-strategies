'use strict';
const TEACHING_GLOSSARY=[
 ['개념','여러 사례를 설명할 때 쓰는 생각의 이름입니다. 예: 참여, 변화, 관계. 수업에서는 구체적인 사례의 말과 연결해 뜻을 확인합니다.'],
 ['핵심 속성','그 개념에 해당하려면 꼭 갖추어야 하는 특징입니다. 다각형에서는 선분으로만 둘러싸임과 닫힘을 확인합니다.'],
 ['비예시','해당 개념에 속하지 않는 사례입니다. 다각형을 배울 때 원은 비예시이며, 잘못 그린 그림이라는 뜻은 아닙니다.'],
 ['근거','내 설명이 왜 타당한지 보여 주는 자료나 관찰입니다. 자료의 어느 문장이나 부분인지 짚을 수 있어야 합니다.'],
 ['일반화·관계 문장','여러 사례를 넘어 개념들이 어떻게 연결되는지 설명하는 문장입니다. 단어 목록이나 활동 소감과 다르며, 적용 범위와 근거를 검토합니다.'],
 ['잠정적 이해','지금까지의 근거로 세운 설명입니다. 새 근거가 나오면 고칠 수 있다는 뜻입니다.'],
 ['반례','어떤 설명이 적용된다고 한 범위 안에서 그 설명과 맞지 않는 사례입니다. 단순히 정보가 부족한 자료와 구별합니다.'],
 ['전이','배운 이해를 처음 보는 상황에서 사용하는 것입니다. 같은 예시를 다시 말하는 것만으로 확인하지 않습니다.']
];
function teachingSource(s){return `<section class="teach-material"><h3>먼저 준비하고 읽을 자료</h3>${TEACHING[s.n].material.split(/(?<=[.!?])\s+/).map(p=>`<p>${E(p)}</p>`).join('')}<p class="teach-caption">이 자료와 아래 반응은 수업 이해를 위해 구성한 예시입니다. 실제 조사 결과나 학생 발언이 아닙니다.</p></section>`;}
function teachingFigure(s,i){
 if(s.n==='개념 획득')return `<figure class="teach-figure"><div class="v-shape-pair">${(i===0?[['A','해당함'],['D','해당하지 않음']]:i===1?[['B','해당함'],['E','해당하지 않음']]:[['G','새로 판단'],['H','새로 판단']]).map(([id,label])=>vShape(id,label)).join('')}</div>${i===1?`<p class="teach-caption">위 쌍의 반응을 들은 뒤 아래 쌍을 추가합니다.</p><div class="v-shape-pair">${vShape('C','해당함')}${vShape('F','해당하지 않음')}</div>`:''}<figcaption>${i===0?'첫 쌍만 보여 주고 학생의 임시 설명을 듣습니다.':i===1?'교사용 미리보기입니다. 학생에게는 한 쌍씩 보여 주세요.':'정의를 사용해 이유를 설명하게 합니다.'}</figcaption></figure>`;
 if(s.n==='교차 비교표'&&i===0)return `<figure class="teach-figure"><figcaption>첫 열을 함께 채우는 예: 질문은 아래로 읽고, 답은 놀이터 자료에서 찾습니다.</figcaption><table class="teach-mini-table"><thead><tr><th>질문</th><th>놀이터</th></tr></thead><tbody><tr><th>무엇을 원했나요?</th><td>낡은 시설 개선</td></tr><tr><th>무엇을 검토했나요?</th><td>안전과 예산</td></tr><tr><th>어떻게 결정했나요?</th><td>위험 시설부터 수리</td></tr></tbody></table></figure>`;
 if(s.n==='교차 비교표'&&i>0)return `<figure class="teach-figure"><figcaption>지금 읽을 곳: <b>${i===1?'어떻게 결정했나요?':'무엇을 검토했나요?'}</b> — 아래 세 사례를 같은 질문으로 비교하세요.</figcaption><div class="v-evidence-grid">${CASES.map(c=>`<article class="v-evidence"><h4>${E(c.name)}</h4><p>${E(c[i===1?'result':'check'])}</p></article>`).join('')}</div></figure>`;
 return '';
}
function teachingSteps(s){return `<ol class="teach-steps">${TEACHING[s.n].steps.map(([look,say,reply,why],i)=>`<li class="teach-step" id="teach-step-${s.id}-${i}"><h3><span class="teach-number">${i+1}</span>${E(look)}</h3>${teachingFigure(s,i)}<div class="teach-turn"><h4>교사가 할 말·행동</h4><p>${E(say)}</p></div><div class="teach-reply"><h4>학생에게서 나올 수 있는 말</h4><p>${E(reply)}</p></div><div class="teach-reason"><h4>이 반응을 어떻게 보고 이어 갈까요?</h4><p>${E(why)}</p></div></li>`).join('')}</ol>`;}
function teachingGlossary(){return `<details class="resource-details teach-glossary"><summary>낯선 용어를 쉬운 말로 읽기</summary><dl>${TEACHING_GLOSSARY.map(([t,d])=>`<div><dt>${t}</dt><dd>${d}</dd></div>`).join('')}</dl></details>`;}
function teachingApplication(s){const t=TEACHING[s.n];return `<section class="teach-application"><h3>내 수업으로 가져가기</h3><div><h4>이해했는지 확인하기</h4><p>${E(t.check)}</p></div><div><h4>바꿔도 되는 부분과 준비할 일</h4><p>${E(t.adapt)}</p></div><div><h4>꼭 지킬 원리</h4><p>${E(t.keep)}</p></div><div><h4>학생이 막히면</h4><p>${E(GUIDE[s.n].help)}</p><p>이 질문도 어렵다면 위 자료의 한 부분을 함께 읽고, 말이나 그림으로 먼저 표현하게 합니다. 예시 답을 그대로 쓰게 하지는 않습니다.</p></div><div class="handoff"><h4>다음 학습으로 연결</h4><p>${E(GUIDE[s.n].next)}</p></div></section>`;}
function teachingCredits(s){const sources={
 '질문 만들기':['QFT · Right Question Institute','https://rightquestion.org/what-is-the-qft/','Source: The Question Formulation Technique was created by Dan Rothstein and Luz Santana, co-founders of the Right Question Institute (rightquestion.org).'],
 '보기–생각하기–궁금해하기':['See, Think, Wonder · Project Zero','https://pz.harvard.edu/resources/see-think-wonder','The See, Think, Wonder thinking routine was developed by Project Zero, Harvard Graduate School of Education.'],
 '연결–확장–도전':['Connect, Extend, Challenge · Project Zero','https://pz.harvard.edu/resources/connect-extend-challenge','The Connect, Extend, Challenge thinking routine was developed by Project Zero, Harvard Graduate School of Education.'],
 '전에는…지금은…':['I Used to Think… Now I Think… · Project Zero','https://pz.harvard.edu/resources/i-used-think-now-i-think','The I Used to Think… Now I Think… thinking routine was developed by Project Zero, Harvard Graduate School of Education.']
 };const r=sources[s.n];return `<aside class="teach-credits"><p>교실 장면과 발문은 개발자가 구성한 적용 예입니다. 시간과 자료 수는 운영 제안이며 원전의 필수 규칙이 아닙니다.</p>${r?`<p>${E(r[2])}</p><a href="${r[1]}" target="_blank" rel="noopener">공식 안내: ${E(r[0])}</a>`:''}</aside>`;}
flowContent=function(s){return `<section class="teach-walk"><div class="section-intro"><span class="eyebrow">수업 장면 따라 읽기</span><h3>자료를 보고, 묻고, 생각을 이어 갑니다</h3><p>아래 순서로 읽으세요. 학생 반응은 가능한 예이며, 그대로 말하게 하는 대본은 아닙니다. 세 묶음 안에 실제 활동 절차를 나누어 설명했습니다.</p></div>${teachingSource(s)}${teachingSteps(s)}<section class="teach-check"><h3>마지막에 이것을 확인하세요</h3><p>${E(TEACHING[s.n].check)}</p></section><div class="next-section"><button type="button" class="ui-button primary" data-guide-pane="coaching">내 수업에 맞게 바꾸기 →</button><button type="button" class="ui-button" data-guide-pane="resources">자료·도식 살펴보기</button></div>${teachingCredits(s)}</section>`;};
const coachingBeforeTeaching=coachingContent;
coachingContent=function(s,g,w){return `${teachingApplication(s)}${teachingGlossary()}<details class="resource-details"><summary>추가 지도 사례와 출처</summary>${coachingBeforeTeaching(s,g,w)}</details>${teachingCredits(s)}`;};
const openBeforeTeaching=openSheet;
openSheet=function(id){
 openBeforeTeaching(id);const s=S[id],t=TEACHING[s.n],g=GUIDE[s.n];if(!t)return;
 const overview=$('guide-pane-overview'),legacy=overview.querySelector('.legacy-guide');
 overview.innerHTML=`<section class="teach-intro"><span class="eyebrow">어떤 활동인가요?</span><p class="guide-summary">${E(t.meaning)}</p><p class="teach-caption">${E(g.time)} · 시간은 운영 예입니다. 아래 자료를 읽고 학생에게 보여 줄 부분을 먼저 정하세요.</p><div class="teach-route"><b>처음이라면 이 순서로</b><p>① 이 화면에서 자료 읽기 → ② 수업 따라가기 → ③ 내 수업에 맞게 바꾸기</p></div>${teachingSource(s)}<div class="overview-actions"><button type="button" class="ui-button primary" data-guide-pane="flow">이 자료로 수업 따라가기 →</button><button type="button" class="ui-button" data-print-teaching>수업 안내 인쇄</button></div><p class="teach-caption">자료·도식 탭에는 추가 예시와 기존 양식이 있습니다. 먼저 수업 흐름을 읽으면 표시와 칸의 의미를 이해하기 쉽습니다.</p></section>${teachingGlossary()}<details class="resource-details teach-theory"><summary>활용 상황과 전략의 배경</summary><p>${E(g.when)}</p><p>${E(s.what)}</p></details><div class="quiet-actions"><button type="button" class="text-button" data-print-guide>추가 자료까지 전체 인쇄</button><button type="button" class="text-button" data-open-unit>한 단원 따라가기</button></div>`;
 if(legacy)overview.append(legacy);
 const labels={overview:'먼저 이해하기',flow:'수업 따라가기',resources:'자료·도식',coaching:'내 수업에 적용'};
 for(const[key,label]of Object.entries(labels))$('guide-tab-'+key).textContent=label;
 const resources=$('guide-pane-resources');resources.insertAdjacentHTML('afterbegin',`<div class="teach-route"><b>도식은 수업 설명과 함께 보세요</b><p>이곳은 추가 자료입니다. 위 ‘수업 따라가기’에서 무엇을 보고 어떤 질문을 할지 먼저 확인할 수 있습니다.</p><button type="button" class="text-button" data-guide-pane="flow">수업 설명으로 돌아가기 →</button></div>`);
};
const gridBeforeTeaching=drawGrid;
drawGrid=function(){gridBeforeTeaching();$('grid').querySelectorAll('.card[data-id]').forEach(card=>{const s=S[+card.dataset.id],t=TEACHING[s.n];if(!t)return;card.querySelector(':scope > p').textContent=t.meaning;const out=card.querySelector('.card-output');out.innerHTML='<span>이럴 때</span>'+E(GUIDE[s.n].when);card.querySelector('.strategy-card-bottom span:last-child').textContent='수업 장면 읽기 ↗';});};drawGrid();
function teachingPrintHTML(s){return `<div class="teach-print"><p class="guide-summary">${E(TEACHING[s.n].meaning)}</p><p>${E(GUIDE[s.n].time)} · 운영 예 / 구성한 수업 장면</p>${teachingSource(s)}${teachingSteps(s)}${teachingApplication(s)}${teachingCredits(s)}<section class="teach-plan"><h3>내 수업 준비 메모</h3><p>학년·주제: _______________________________________</p><p>바꿀 자료와 미리 준비할 것: _________________________</p><p>학생에게 확인할 질문: ______________________________</p></section></div>`;}
const teacherPrintBeforeTeaching=teacherPrintHTML;
teacherPrintHTML=function(s){return teachingPrintHTML(s)+`<h2>추가 자료·작성 예시</h2>`+(VISUALS[s.n]?`<section class="v-print-document">${visualBody(s,{...visualState(s.id),mode:'complete',layout:'table'})}</section>`:'')+resourcesBeforeVisuals(s,WORKSHOPS[s.n])+provenance(s,WORKSHOPS[s.n]);};
$('sheetBody').addEventListener('click',e=>{if(e.target.closest('[data-print-teaching]'))printContent(S[activeStrategy].n+' · 교실 적용 안내',teachingPrintHTML(S[activeStrategy]));});
