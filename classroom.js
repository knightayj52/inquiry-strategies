/* 영쌤클래스 · 수업 적용 안내. 문헌의 개념을 참고해 구성한 운영 제안과 가상 예시입니다. */
'use strict';
const GUIDE = {};
// 전략 | 활용 상황 | 준비 자료 | 예상 시간 | 어려움에 대한 발문 | 다음 학습
const GUIDE_ROWS = [
['네 모퉁이','입장과 그 근거를 먼저 알아보고 싶을 때','입장 표지 4장, 논의 가능한 진술 1개, 이유 메모','15–20분','친구와 같은 자리라도 이유가 같나요? 아직 판단하기 어렵다면 어떤 정보가 필요한가요?','입장별 이유를 조사 질문으로 바꾸고 단원 말에 같은 진술을 다시 검토합니다.'],
['스펙트럼 진술','동의의 정도와 판단 기준의 차이를 드러낼 때','양 끝 기준이 적힌 선, 이름표 또는 익명 표식','10–15분','같은 위치를 골랐지만 기준이 다를 수 있어요. 어떤 기준으로 이곳을 골랐나요?','서로 다른 기준을 집중 단계에서 정의하고, 자료를 읽은 뒤 위치 변화를 설명합니다.'],
['도발적 자극','탐구할 만한 궁금증이 아직 드러나지 않을 때','핵심 개념과 관련된 대비 자료 2개, 질문 메모','10–15분','두 자료에서 같은 점과 다른 점을 하나씩 찾아볼까요? 무엇을 더 알아야 설명할 수 있나요?','질문을 모아 실제 조사할 수 있는 범위로 좁힙니다.'],
['질문 만들기','학생이 자신의 조사 질문을 만들고 고르게 할 때','질문 초점 1개, 규칙 안내, 질문 기록지','처음 35–40분','지금은 답을 찾지 않고 질문을 모읍니다. 이 질문은 무엇을 알아보는 데 도움이 되나요?','선정 질문마다 자료·방법·담당자를 정하고 실제 조사에 사용합니다.'],
['경험하기','말로만 배우던 개념을 구체적 경험과 연결할 때','역할 카드, 짧은 상황, 관찰·되돌아보기 기록지','25–40분','무슨 일이 있었나요? 누구에게 다르게 느껴졌나요? 그 장면을 설명할 말은 무엇인가요?','경험에서 나온 표현을 개념어와 연결하고 실제 사례와 비교합니다.'],
['보기–생각하기–궁금해하기','관찰과 추측이 섞여 있거나 자료에서 질문을 만들 때','관찰 자료 1개, 세 칸 기록지','15–20분','그렇게 생각하게 한 것은 자료의 어느 부분인가요? 보이는 특징과 생각을 나누어 적어 볼까요?','궁금한 점 중 조사할 질문을 고르고 관찰·해석 기록을 보관합니다.'],
['개념 획득','예·비예시를 비교하여 핵심 속성을 발견할 때','핵심 속성을 통제한 예시·비예시 카드, 새 판별 카드','25–35분','색이나 크기를 바꾸어도 예시일까요? 지금 가설로 설명되지 않는 카드는 무엇인가요?','새 사례 판별과 학생이 직접 만든 비예시로 정의를 점검합니다.'],
['프레이어 모델','정의는 말하지만 예와 비예시를 구별하지 못할 때','정의·특징·예시·비예시 네 칸, 사례 카드','20–25분','비예시가 아닌 까닭을 정의의 어떤 부분으로 설명할 수 있나요?','조사 후 처음 작성한 네 칸을 수정하고 바뀐 이유를 기록합니다.'],
['스펙트럼 분류','개념이 나타나는 정도와 판단 기준을 논의할 때','양 끝 기준, 경계가 다양한 사례 카드','20–25분','이웃 카드와 순서를 바꾸면 어떤 기준이 달라지나요?','합의한 기준을 새로운 사례에 적용하고 불일치를 토론합니다.'],
['전부·일부·전무','정의에 필요한 속성과 우연한 특징을 구별할 때','범위가 명확한 사례 묶음, 속성 카드, 세 칸 표','20–25분','지금 본 자료에서 전부라는 것과 모든 경우에 전부라는 것은 같을까요?','반례를 더 찾아 잠정 정의를 확인합니다. 사례 몇 개의 공통점만으로 확정하지 않습니다.'],
['개념 분류하기','분류 기준을 말로 표현하고 비교하게 할 때','같은 종류의 사례·낱말 카드 12장 안팎','15–20분','이 묶음의 이름은 무엇인가요? 다른 묶음과 겹치는 카드는 어떻게 설명할까요?','분류 기준을 개념의 속성으로 정리하고 다른 기준으로 재분류합니다.'],
['개념 지도 (사전)','개념 사이의 기존 연결과 빈틈을 진단할 때','주요 개념어 5개 안팎, 빈 종이','15–20분','두 단어 사이 선을 문장으로 읽어 볼까요? 아직 모르겠는 연결은 표시해 두어도 됩니다.','사전 지도를 저장하고 조사 후 근거를 붙여 수정합니다.'],
['사례 연구','공통 질문으로 구체적인 사실을 모을 때','비교 가능한 사례 자료 2–4개, 공통 조사 질문','자료당 20–40분','그 답은 어디에 있나요? 자료에 없으면 추측 대신 확인 필요라고 적어 볼까요?','같은 질문의 답을 교차 비교표로 옮깁니다.'],
['전문가 모둠','서로 다른 자료를 나누어 읽되 모두가 전체를 이해해야 할 때','분량·난도를 조정한 자료, 전문가·원모둠 기록지','35–40분','친구의 설명을 자기 말로 다시 설명해 볼까요? 빠진 정보는 무엇인가요?','모둠 결과와 별개로 개인별 설명을 확인하고 부족한 자료를 다시 읽습니다.'],
['다양한 출처 조사','자료 간 일치·불일치와 신뢰성을 검토할 때','같은 질문을 다룬 독립적인 자료 2개 이상, 출처표','30–40분','두 자료가 같은 원자료를 옮긴 것은 아닌가요? 작성 시기와 조사 방법은 어떤가요?','불일치 원인을 조사하고 확인된 사실과 미해결 내용을 나눕니다.'],
['현장 조사','실제 장소의 관찰·면담 자료가 필요할 때','질문별 기록표, 이동 계획, 동의 절차, 관찰 도구','사전 준비+현장 시간','사진을 많이 모으기보다 어떤 질문의 증거인지 표시해 볼까요?','현장 기록을 질문별로 정리하고 관찰과 해석을 구분합니다.'],
['학생 주도 조사 계획','질문은 있지만 조사 방법을 정하지 못할 때','질문·방법·자료·담당·일정·안전 점검표','20–30분','그 방법으로 질문에 답할 수 있나요? 어떤 자료가 나오면 답을 판단할 수 있나요?','작게 시험 조사한 뒤 계획을 수정하고 실행합니다.'],
['자료 읽기와 주석 달기','자료 전체를 베끼고 관련 근거를 고르지 못할 때','읽기 수준에 맞춘 짧은 자료, 탐구 질문, 기호 안내','20–25분','이 문장이 우리 질문에 어떤 도움을 주나요? 표시한 까닭을 여백에 적어 볼까요?','선택한 근거를 비교표나 주장–근거 기록에 옮깁니다.'],
['교차 비교표','조사 내용을 나열하지만 사례 사이의 관계를 찾지 못할 때','공통 질문으로 읽은 사례 3개, 비교표','30–40분','같은 질문의 행을 가로로 읽어 볼까요? 공통점과 다른 점은 무엇인가요?','찾은 패턴을 관계 문장으로 쓰고 각 문장에 근거 칸을 표시합니다.'],
['벤 다이어그램','두세 사례의 공통점과 차이를 분리해 볼 때','같은 기준으로 비교할 자료 2개, 겹친 원','20–25분','그 특징은 두 사례 모두에서 확인했나요? 비교 기준이 같나요?','공통점·차이가 생기는 조건을 묻고 개념 사이의 관계를 설명합니다.'],
['원인–결과 조직자','시간 순서나 동시 발생을 원인으로 단정할 때','원인 검토용 자료, 화살표 기록지','25–30분','먼저 일어났다는 것만으로 원인인가요? 다른 설명이나 영향을 준 조건은 없나요?','근거 있는 관계와 가설을 나누고 가설을 확인할 자료를 찾습니다.'],
['타임라인·순서 조직자','변화의 순서와 전환점을 설명해야 할 때','시점이 표시된 사건 자료, 시간축','20–30분','순서가 바뀌면 설명이 달라지나요? 변화가 큰 구간과 그 근거는 무엇인가요?','전환점 전후를 비교하고 변화의 조건을 조사합니다.'],
['개념 네트워크','개념어는 알지만 연결 관계를 설명하지 못할 때','개념 카드, 근거 자료, 연결선','25–30분','두 개념과 관계어를 한 문장으로 읽으면 뜻이 통하나요? 근거는 어디에 있나요?','중요한 연결을 골라 일반화를 쓰되 선의 수를 이해의 깊이로 평가하지 않습니다.'],
['데이터 표현하기','수집한 수치에서 패턴을 읽어야 할 때','출처·단위가 있는 자료, 적절한 그래프 양식','25–35분','축과 단위가 무엇인가요? 그래프가 보여 주는 사실과 원인 추측을 구별해 볼까요?','패턴을 설명한 뒤 원인은 추가 자료로 검토합니다.'],
['개념 은행','사례 이름만 나열하고 관계 문장을 만들기 어려울 때','뜻을 확인한 개념 카드와 근거 사례','15–20분','두 말을 연결하면 어떤 관계를 말할 수 있나요? 그 관계를 어느 사례에서 봤나요?','관계 문장을 비교하고 근거·조건을 검토합니다.'],
['문장 틀','관계는 이해하지만 말이나 글로 표현하기 어려울 때','관계에 맞는 틀 2개, 근거 자료','15–20분','이 틀의 동사가 자료와 맞나요? 틀 밖의 말로 더 정확히 설명해도 됩니다.','비계를 줄이며 독립적으로 쓰고 새로운 사례로 검토합니다.'],
['연결 4','여러 개념의 관계를 함께 검토할 준비가 되었을 때','뜻을 아는 개념 카드 12개 안팎','20–25분','네 단어가 모두 필요하나요? 단어를 줄이면 더 정확해지지는 않나요?','문장의 길이 대신 관계의 타당성과 근거로 서로 피드백합니다.'],
['개념적 질문','학생의 설명을 개별 사례에서 개념 관계로 연결할 때','사실·개념·논쟁 질문, 근거 자료','10–20분','다른 사례에서도 같은 관계가 보이나요? 다르게 생각하는 근거는 무엇인가요?','학생의 설명을 기록하고 근거가 부족한 관계는 조사로 되돌립니다.'],
['개념 매핑','사례·교과 개념·넓은 개념을 구별하고 연결할 때','사실 카드와 개념 카드, 층별 기록지','20–25분','더 넓은 말로 바꾼 뒤에도 원래 자료를 정확히 설명하나요?','필요한 추상 수준에서 관계를 진술하고 새 사례에 적용합니다.'],
['일반화 다듬기','첫 문장이 너무 넓거나 관계가 모호할 때','첫 문장, 지지 자료와 반례 후보, 수정 기록지','25–30분','이 자료는 문장을 반박하나요, 조건 밖인가요, 아니면 정보가 부족한가요?','수정 전후와 수정 이유를 남기고 아직 보지 않은 자료로 확인합니다.'],
['새 사례에 적용·검증','배운 관계를 새로운 맥락에서 사용할 수 있는지 확인할 때','기존 일반화, 새 사례, 적용 판단 기록지','25–30분','원래 문장의 조건이 여기에도 있나요? 자료 부족을 틀림과 구분할 수 있나요?','검토 결과에 따라 문장을 유지·수정하거나 추가 조사를 계획합니다.'],
['예측하기','배운 관계로 아직 확인하지 않은 결과를 추론할 때','확인 가능한 새 조건, 예측·이유·확인 기록지','예측 15분+확인 시간','어떤 관계 때문에 그렇게 예상했나요? 조건이 달라지면 예측도 달라지나요?','관찰 결과와 예측을 비교하고 관계뿐 아니라 실험·자료 조건도 점검합니다.'],
['행동하기','이해를 실제 선택이나 실천으로 연결할 때','실현 가능한 선택지, 계획·영향·성찰 기록','계획 20분+실행 시간','그 행동은 배운 관계와 어떻게 연결되나요? 영향을 받는 사람의 의견은 들었나요?','실천의 효과와 예상하지 못한 영향을 살피고 행동을 조정합니다.'],
['유추·비유 만들기','두 맥락의 관계 구조를 비교하여 설명할 때','비교할 두 상황, 대응·차이 표','20–25분','겉모습 말고 어떤 관계가 비슷한가요? 비유가 맞지 않는 부분은 어디인가요?','비유의 적용 범위를 명시하고 새 설명에 활용합니다.'],
['실제 문제 해결·산출물','이해를 활용해 구체적인 사용자 문제를 해결할 때','사용자·목적·제약 조건, 평가 기준','계획 1차시+제작 시간','보기 좋게 만든 것과 문제를 해결한 것은 어떻게 구분할까요?','사용자 피드백과 개념적 설명을 근거로 산출물을 수정합니다.'],
['전에는…지금은…','생각의 변화와 그 이유를 확인할 때','처음 기록, 현재 근거 자료','10–15분','생각이 같아도 괜찮아요. 새로 생긴 근거나 더 정확해진 부분은 무엇인가요?','바뀐 생각과 남은 질문을 다음 탐구에 사용합니다.'],
['출구 티켓','다음 수업 전에 이해와 어려움을 짧게 확인할 때','핵심 질문 1개, 근거 질문 1개, 짧은 답지','5분','오늘 한 활동 이름 대신 무엇을 이해했는지 사례로 설명해 볼까요?','응답을 이해·근거 부족·오개념으로 살펴 다음 수업 지원을 결정합니다.'],
['배움 공책·학습 일지','탐구 과정의 생각과 질문을 누적할 때','날짜·개념·근거·질문 기록 공간','매회 5–10분','오늘 기록과 지난 기록을 비교하면 무엇이 달라졌나요?','이전 질문을 다시 꺼내 확인하고 개념 설명을 수정합니다.'],
['연결–확장–도전','새 자료가 기존 이해에 미친 영향을 점검할 때','기존 생각과 새 자료, 세 항목 메모','10–15분','비슷하다는 말 뒤에 어떤 관계가 비슷한지 설명해 볼까요?','남은 어려움과 의문을 다음 조사 질문으로 구체화합니다.'],
['자기 평가와 목표 세우기','기준과 근거로 자신의 다음 학습을 정할 때','학생이 이해하는 기준 3–4개, 자기 산출물','15–20분','체크한 근거를 작품의 어디에서 찾을 수 있나요? 다음에는 무엇을 바꾸겠나요?','다음 활동 시작에 목표를 다시 읽고 실행 여부를 확인합니다.'],
['생각–짝–나누기','전체 발표 전에 각자 생각하고 말할 기회가 필요할 때','질문 1개, 개인 메모','7–10분','먼저 각자의 생각을 말해요. 짝의 생각 중 새롭게 들은 것은 무엇인가요?','개인 생각과 대화 후 생각을 비교하고 학급 질문으로 연결합니다.'],
['연역적 개념 제시','정의를 먼저 제공하고 판별 근거를 연습할 때','정확한 정의, 속성이 다른 예·비예시','20–25분','정의의 어느 표현이 이 판별의 근거인가요?','새 사례를 만들고 속성을 바꾸었을 때 판별이 달라지는지 확인합니다.'],
['오개념 교정 발문','학생의 기존 설명으로는 설명되지 않는 사례가 있을 때','예상 오개념, 대조 자료, 설명 수정 기록지','20–30분','처음 설명대로라면 무엇이 보여야 하나요? 실제 자료와 어디가 다른가요?','필요한 명시적 설명도 제공하고 다른 자료에서 새 이해를 다시 확인합니다.'],
['갤러리 워크','여러 모둠의 근거와 설명을 비교하고 수정할 때','공개 가능한 산출물, 초점 질문, 피드백 메모','20–30분','좋다는 평가 대신 어느 근거가 설명을 뒷받침하는지 적어 볼까요?','받은 피드백을 채택·보류한 이유와 함께 산출물을 수정합니다.'],
['생각 사다리','사실에서 패턴과 관계로 넘어가는 과정을 보이게 할 때','사실·패턴·관계 기록지, 사례 자료','20–25분','이 문장은 관찰한 사실인가요, 여러 사실에서 찾은 패턴인가요?','각 관계에 근거를 연결하고 더 필요한 사례를 찾습니다.'],
['총괄 수행과제 설계','새 맥락에서 이해를 종합적으로 평가할 때','목표·역할·대상·상황·산출물·기준, 새 자료','설계 1차시+수행 시간','활동에 참여한 것 외에 개념을 적용했다는 증거는 무엇인가요?','산출물뿐 아니라 개인의 선택 이유·근거·수정 과정을 평가합니다.'],
['골든벨·퀴즈 형성평가','정오답과 이유로 다음 지도를 조정할 때','개념·적용 문항, 전원 응답판, 이유 기록','10–15분','답을 맞힌 이유는 무엇인가요? 다른 선택지가 아닌 까닭도 설명할 수 있나요?','탈락 없이 응답 이유를 확인하고 오개념에 맞는 자료로 다시 지도합니다.']
];
GUIDE_ROWS.forEach(([name,when,prep,time,help,next])=>GUIDE[name]={when,prep,time,help,next});
const CASES = [
 {name:'놀이터 개선',need:'노후한 놀이기구를 고쳐 달라는 요구',voice:'어린이 설문으로 필요한 시설을 모았다.',check:'안전 점검에서 위험 시설을 먼저 고쳐야 했고 예산도 한정되어 있었다.',result:'위험 시설을 먼저 수리하고 새 놀이기구 설치는 다음 계획에서 검토하기로 했다.'},
 {name:'도서관 이용 시간',need:'저녁에도 도서관을 이용하고 싶다는 요구',voice:'이용자 설문과 직원 간담회를 열었다.',check:'추가 운영비와 근무 인력이 필요했다.',result:'모든 요일을 연장하는 대신 주 1회 시범 연장하고 이용 상황을 살피기로 했다.'},
 {name:'통학로 안전',need:'등굣길을 더 안전하게 해 달라는 요구',voice:'학생·학부모 의견과 위험 위치 표시 지도를 모았다.',check:'교통량과 도로 구조를 조사하고 시설 설치 기준을 확인했다.',result:'안전 표지를 먼저 보완하고 횡단 시설은 추가 검토하기로 했다.'}
];
const WORKSHOPS = {
 '보기–생각하기–궁금해하기':{
 context:'초등 3–4학년 적용 예 · 공동체의 의사결정', purpose:'자료에서 확인한 사실과 해석을 구분하고 조사할 질문을 만듭니다.',
 material:'아래 가상 공고문을 화면에 띄우거나 칠판에 씁니다. 가려진 실제 정답이 있는 활동이 아닙니다.',
 source:'[가상 공고문] 햇살마을 놀이터 이용 의견을 모읍니다. 어린이와 보호자는 금요일까지 의견함에 의견을 넣어 주세요. 다음 주 화요일에는 주민 간담회가 열립니다.',
 steps:[['2분','공고를 조용히 읽고 확인할 수 있는 내용을 찾게 합니다.','의견함과 간담회가 있다는 문장을 표시한다.'],['4분','“공고문에서 직접 확인할 수 있는 것은?”','보기 칸에 공고의 내용을 적는다.'],['5분','“그 내용으로 어떤 생각이 드나요? 근거는?”','생각과 그 생각을 하게 된 문장을 연결한다.'],['4분','“이 공고만으로 알 수 없어 더 알고 싶은 것은?”','궁금한 점을 질문으로 쓴다.'],['5분','짝과 비교하고 다음에 조사할 질문을 정합니다.','확인할 사실과 관계를 탐구할 질문을 구분한다.']],
 headers:['보기: 직접 확인한 것','생각: 해석과 근거','궁금: 더 알아볼 것'], rows:[['어린이와 보호자의 의견을 모은다.','여러 사람의 요구를 알아보려는 것 같다. 두 집단에게 의견을 요청했기 때문이다.','의견이 다르면 무엇을 기준으로 결정할까?']],
 trouble:[['“모두의 의견을 다 반영할 거예요.”','그것은 공고에 쓰인 사실인가요, 예상인가요? 실제 결정 자료를 더 봐야 알 수 있어요.'],['“그냥 좋아요.”','어느 문장을 보고 그렇게 느꼈나요? 그 문장을 먼저 표시해 볼까요?']],
 evidence:'관찰 1개와 그에 근거한 해석 1개를 구분하고, 자료만으로 답할 수 없는 질문을 제시하는지 봅니다.', bridge:'“의견을 모으면 요구가 모두 실현될까?”를 질문 벽에 남기고 사례 A–C를 조사합니다.',
 prompts:['공고에서 직접 확인한 내용은?','그 내용으로 어떤 생각이 드는가? 근거 문장은?','자료만으로 알 수 없어 더 알아보고 싶은 것은?'], note:'Project Zero의 루틴을 소개하는 개발자 작성 수업 예시입니다. 원본 안내는 아래 공식 링크에서 확인할 수 있습니다.'},
 '개념 획득':{
 context:'초등 3–4학년 수학 적용 예 · 다각형',purpose:'색·크기·방향 같은 우연한 특징과 선분·닫힘 같은 핵심 속성을 구분합니다.',
 material:'아래 도형 카드를 사용합니다. 크기·색만으로 예/비예시가 갈리지 않도록 배치합니다. 처음부터 카드 전체를 보여 주지 말고 한 쌍씩 제시합니다.',source:'도형 카드: 예시 A 삼각형, B 사각형, C 오각형 / 비예시 D 원, E 한 변이 열린 도형, F 곡선이 포함된 닫힌 도형. 새 판별 카드 G 기울어진 사각형, H 닫히지 않은 꺾은선.',
 steps:[['5분','A/D를 제시하고 구별되는 특징을 묻습니다.','“곧은 선인가?” 같은 잠정 가설을 쓴다.'],['7분','B/E를 더 보여 주며 가설을 검토합니다.','곧은 선만으로는 부족하고 닫혀 있어야 함을 확인한다.'],['6분','C/F를 비교하게 합니다.','닫힘만으로도 부족하며 선분으로 둘러싸여야 함을 설명한다.'],['6분','학생 표현을 모아 정의를 정리합니다.','선분으로만 둘러싸인 닫힌 도형이라는 정의를 확인한다.'],['6분','G/H를 판별하고 직접 비예시를 그리게 합니다.','색이나 방향 대신 속성으로 판별 이유를 쓴다.']],
 headers:['처음 가설','새 자료에서의 검토','수정한 설명'],rows:[['곧은 선이 있다.','E에도 곧은 선이 있지만 열려 있다.','선분으로만 둘러싸이고 닫혀 있어야 한다.'],['네모처럼 반듯해야 한다.','A와 기울어진 G도 예시이다.','방향이나 변의 수가 하나로 정해지는 것은 아니다.']],
 trouble:[['“기울어졌으니 사각형이 아니에요.”','종이를 돌려도 선분 수와 닫힘이 바뀌나요?'],['“원도 닫혀 있으니까 예시예요.”','닫혀 있다는 조건 외에 어떤 조건이 필요했나요?']],
 evidence:'처음 보지 않은 도형을 판별하며 핵심 속성을 근거로 설명하는지 확인합니다.',bridge:'프레이어 모델에 정의·속성·예·비예시를 정리하거나 다각형을 다른 기준으로 분류합니다.',prompts:['예시들이 가진 공통 속성은?','내 첫 가설로 설명되지 않는 카드는?','새 카드 G/H의 판별과 정의에 근거한 이유는?','핵심 속성 하나가 빠진 비예시를 그리고 설명하세요.'],note:'개념 획득의 예·비예시 비교 취지를 참고해 개발자가 구성한 다각형 수업입니다. 자료 개수·시간은 필수 규칙이 아닙니다.'},
 '교차 비교표':{
 context:'초등 3–4학년 사회 적용 예 · 공동체의 의사결정',purpose:'여러 사례를 같은 질문으로 비교하여 참여·요구·의사결정의 관계를 찾습니다.',material:'아래 가상 사례 A–C를 읽고 표를 채웁니다. 실제 지역의 조사 결과가 아닙니다.',source:'각 사례에서 요구 → 의견 수렴 → 검토 조건 → 결정을 찾습니다. 자료에 없는 정보는 추측으로 채우지 않습니다.',
 steps:[['5분','사례와 네 가지 공통 질문을 소개합니다.','사례와 질문을 확인한다.'],['12분','개별 또는 짝으로 자료의 근거를 표시하게 합니다.','한 사례의 내용을 세로 한 열에 정리한다.'],['8분','“같은 질문의 행을 가로로 읽으면?”','공통점과 차이점에 다른 표시를 한다.'],['10분','“주민의 요구는 어떤 과정을 거쳐 결정에 반영되나요?”','관계 문장을 쓰고 근거가 있는 칸을 연결한다.'],['5분','말이 너무 넓지 않은지 확인합니다.','모든 요구가 그대로 실현된 것은 아님을 덧붙인다.']],
 headers:['비교 질문',...CASES.map(c=>c.name)], rows:[['어떤 요구?',...CASES.map(c=>c.need)],['의견을 어떻게 모음?',...CASES.map(c=>c.voice)],['무엇을 검토?',...CASES.map(c=>c.check)],['어떻게 결정?',...CASES.map(c=>c.result)]],
 trouble:[['자료를 문장째 모두 베낍니다.','지금 답할 질문을 하나 고르고 그 답이 있는 문장만 표시해 볼까요?'],['“의견을 내면 다 이루어져요.”','결정 행을 가로로 비교해 볼까요? 요구와 같지 않은 부분은 무엇인가요?']],evidence:'한 행에서 두 사례 이상의 근거를 찾아 공통점과 차이를 설명하는지 봅니다.',bridge:'“공공의 의사결정에서는 주민의 요구와 실행 조건을 함께 고려한다” 등을 잠정 문장으로 쓰고 다듬습니다. 예시 문구의 재현을 평가하지 않습니다.',prompts:['사례별 요구·의견 수렴·검토 조건·결정을 표에 정리하세요.','같은 질문의 행을 가로로 비교한 공통점과 차이점은?','개념 사이의 관계를 한 문장으로 쓰고 근거 칸 2개를 표시하세요.'],note:'비교 기준과 표의 방향을 일관되게 적용한 개발자 작성 가상 사례입니다.'},
 '일반화 다듬기':{
 context:'초등 3–4학년 사회 적용 예 · 공동체의 의사결정',purpose:'자신 있게 말하는 것보다 근거에 맞는 관계와 적용 범위를 표현합니다.',material:'비교표, 첫 일반화, 수정 전후 기록지를 준비합니다.',source:'검토할 첫 문장: “주민이 의견을 내면 요구가 모두 실현된다.” 사례 A–C의 실제 결정 내용을 근거로 검토합니다.',
 steps:[['4분','첫 문장의 개념과 관계, 강한 표현을 표시합니다.','“의견”, “요구”, “모두 실현”을 구분한다.'],['8분','“이 문장과 다른 결과가 나타난 사례는?”','부분 수리·시범 연장·추가 검토를 근거로 든다.'],['8분','“요구와 결정 사이에서 고려한 것은?”','안전·예산·인력 등 조건을 찾는다.'],['6분','수정한 문장과 수정 이유를 함께 쓰게 합니다.','요구가 자동 실현된다는 관계를 고친다.'],['4분','다른 짝의 문장과 근거를 점검합니다.','새 사례에서 더 확인할 점을 남긴다.']],
 headers:['첫 문장','검토 근거','수정 예'],rows:[['주민이 의견을 내면 요구가 모두 실현된다.','세 사례에서 요구의 일부만 반영하거나 추가 검토했다.','공공의 의사결정에서는 주민의 요구와 실행 조건을 함께 고려한다.']],
 trouble:[['“항상”만 빼고 관계는 그대로 둡니다.','단어를 지운 것 말고 자료를 설명하는 관계가 어떻게 달라졌나요?'],['“모든 것은 서로 영향을 준다.”','이 자료에서 무엇과 무엇이 어떻게 연결되었는지 구체적으로 말해 볼까요?']],evidence:'어느 근거 때문에 어떤 표현을 고쳤는지 설명하는지 확인합니다. 어려운 개념어 수로 평가하지 않습니다.',bridge:'처음 보지 않은 급식 의견 사례에 적용하고 판단할 정보가 충분한지도 확인합니다.',prompts:['처음 관계 문장은?','지지하거나 수정하게 하는 자료는?','수정한 문장과 바꾼 이유는?','아직 확인하지 못한 조건은?'],note:'수정 문장은 가능한 학생 응답이며 정답이나 사회 현상 전체를 설명하는 법칙이 아닙니다.'},
 '새 사례에 적용·검증':{
 context:'초등 3–4학년 사회 적용 예 · 공동체의 의사결정',purpose:'새 사례가 문장을 지지하는지, 수정이 필요한지, 정보가 부족한지 구분합니다.',material:'기존 문장과 처음 보는 급식 사례 D, 개인 판단 기록지를 준비합니다.',source:'[가상 사례 D] 학생들은 설문에서 과일 메뉴 확대를 원했다. 급식 협의회는 알레르기, 영양 균형, 예산과 계절별 공급을 검토했다. 과일의 종류를 바꾸어 주 1회 시범 제공하고 남긴 양을 살피기로 했다. [자료 E] “학생 설문 뒤 메뉴가 달라졌다.”라는 한 문장만 전해졌다.',
 steps:[['4분','기존 문장의 관계와 적용 조건을 확인합니다.','요구와 실행 조건을 함께 살핀다는 관계를 읽는다.'],['8분','D를 읽고 관계에 해당하는 근거를 표시합니다.','설문 결과와 협의회의 검토 내용을 대응시킨다.'],['6분','E도 같은 결론을 내릴 수 있는지 묻습니다.','어떤 조건을 검토했는지 알 수 없음을 찾는다.'],['8분','판단과 이유를 개인별로 쓰게 합니다.','지지함과 자료 부족을 구분한다.'],['4분','추가 질문이나 수정할 표현을 공유합니다.','더 확인할 정보와 이유를 제시한다.']],
 headers:['새 자료','판단 예','근거·다음 질문'],rows:[['D: 급식 협의회 기록','이 사례는 문장을 지지한다.','요구 외에 알레르기·예산·공급을 검토했다. 한 사례의 일치가 모든 경우의 참을 증명하지는 않는다.'],['E: 메뉴가 달라졌다는 한 문장','판단할 자료가 부족하다.','결정 이유와 검토 조건을 알 수 없다. 회의 기록을 더 살펴봐야 한다.']],
 trouble:[['“메뉴가 바뀌었으니 맞아요.”','결과만 말하지 말고 어떤 과정을 거쳤는지 근거를 찾아볼까요?'],['“안 쓰여 있으니 실행 조건을 안 본 거예요.”','자료에 없음과 실제로 하지 않음은 같을까요? 무엇을 더 알아야 하나요?']],evidence:'이전 문장의 개념 관계를 새 자료에 대응시키고, 근거와 판단의 한계를 함께 설명하는지 봅니다.',bridge:'학급의 실제 의사결정에 적용할 질문 목록을 만들거나 일반화를 다시 수정합니다.',prompts:['적용할 관계 문장과 조건은?','새 자료에서 찾은 근거는?','지지함 / 수정 필요 / 자료 부족 / 적용 조건 밖 중 판단과 이유는?','문장을 수정하거나 더 조사할 내용은?'],note:'전이는 새 상황에서 이해를 사용하는 과정입니다. 자료 부족이나 적용 조건 밖 사례를 곧바로 반례로 처리하지 않습니다.'}
};
const tableHTML = (heads,rows,caption='') => `<div class="table-scroll" tabindex="0" role="region" aria-label="${E(caption||'수업 자료 표')}"><table class="lesson-table">${caption?`<caption>${E(caption)}</caption>`:''}<thead><tr>${heads.map(h=>`<th scope="col">${E(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map((v,i)=>i===0?`<th scope="row">${E(v)}</th>`:`<td>${E(v)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
function caseHTML(){return `<div class="case-set">${CASES.map((c,i)=>`<article class="case-card"><h4>가상 사례 ${String.fromCharCode(65+i)} · ${E(c.name)}</h4><p>${E(['요구: '+c.need+'.',c.voice,c.check,c.result].join(' '))}</p></article>`).join('')}</div>`;}
function shapeHTML(){return `<div class="shape-set" aria-label="다각형 판별 카드">${[
['A','예시','polygon points="24,82 75,15 125,82"'],['B','예시','rect x="30" y="20" width="90" height="65"'],['C','예시','polygon points="75,10 130,45 110,90 40,90 20,45"'],['D','비예시','circle cx="75" cy="50" r="35"'],['E','비예시','polyline points="125,55 125,85 25,85 25,20 125,20"'],['F','비예시','path d="M25 85 L25 20 Q125 0 125 85 Z"'],['G','새 판별','polygon points="45,10 130,35 105,90 20,65"'],['H','새 판별','polyline points="20,80 45,20 80,75 120,25"']
].map(([id,label,path])=>`<figure><figcaption>${id} · ${label}</figcaption><svg role="img" aria-label="도형 ${id}" viewBox="0 0 150 100"><${path} fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/></svg></figure>`).join('')}</div>`;}
function provenance(s,w){
 const specific=s.n==='보기–생각하기–궁금해하기'?'See, Think, Wonder was developed by Project Zero, Harvard Graduate School of Education. 공식 루틴의 저작권은 원저작자에게 있습니다.':s.n==='질문 만들기'?'Source: The Question Formulation Technique was created by Dan Rothstein and Luz Santana, co-founders of the Right Question Institute (rightquestion.org). 사실·개념·논쟁 분류는 개발자가 제안한 추가 활동입니다.':'아래 문헌은 이 전략의 배경 또는 관련 접근입니다. 시간·발문·자료 수·활동지·가상 사례는 개발자가 구성한 운영 제안이며 원전의 필수 규칙이 아닙니다.';
 return `<aside class="provenance"><b>근거와 구성 구분</b><p>${E(specific)}</p>${w?`<p>${E(w.note)}</p>`:''}<p>모든 적용 예시는 수업 설계를 위한 구성 예시이며 실제 학생 응답이나 실제 지역의 조사 결과가 아닙니다. 확인된 자료 없이 사례의 효과를 사실로 단정하지 마세요.</p><p>${s.src.map(k=>{const r=SRC[k];return r.u?`<a href="${E(r.u)}" target="_blank" rel="noopener">${E(r.t)}</a>`:E(r.t)}).join('<br>')}</p><small>개정: 2026-10-28 · 도서 쪽수와 전체 성취기준 원문은 이번 개정에서 모두 대조하지 않았습니다.</small></aside>`;
}
let activeStrategy=null;
const baseOpenSheet=openSheet;
openSheet=function(id){
 baseOpenSheet(id); activeStrategy=id;
 const s=S[id],g=GUIDE[s.n],w=WORKSHOPS[s.n],original=$('sheetBody').innerHTML;
 $('sheetBody').innerHTML=`<div class="guide-toolbar"><span class="guide-badge">${w?'자료 포함 상세 수업':'수업 적용 안내'}</span><button type="button" data-print-guide>교사 안내 인쇄</button>${w?'<button type="button" data-print-worksheet>학생 활동지 인쇄</button>':''}<button type="button" data-open-unit>연결 단원 보기</button></div>
 <p class="lead">${E(s.sum)}</p><div class="guide-quick"><div><b>이럴 때 사용해요</b><p>${E(g.when)}</p></div><div><b>수업 전에 준비해요</b><p>${E(g.prep)}</p></div><div><b>예상 운영</b><p>${E(g.time)} · ${w?'개인 생각 → 짝·모둠 비교 → 개인 설명':'학생별 생각을 먼저 남긴 뒤 공유'}</p><small>학생과 자료에 따라 조정하는 제안 시간입니다.</small></div><div><b>활동이 끝나면 남길 것</b><p>${E(s.out)}</p></div></div>
 <p class="note">대표 활용 단계: ${E(PH(s.p).n)} · 단계는 고정 순서가 아니며 성찰은 전 과정에 함께합니다.</p>
 ${w?workshopHTML(s,w):`<section class="sec"><h3>수업 진행</h3><ol class="steps">${s.steps.map(t=>`<li><span>${E(t)}</span></li>`).join('')}</ol><div class="say">${E(s.ex.say)}</div><p><b>적용 장면(구성 예시)</b> · ${E(s.ex.sub)} / ${E(s.ex.unit)}</p><p>${E(s.ex.text)}</p></section>`}
 <section class="guide-follow"><h3>학생 반응을 보고 이어 가기</h3><p><b>막힐 때 건넬 말</b><br>${E(g.help)}</p><p><b>이해를 확인할 기준</b><br>${E(w?w.evidence:s.chk)} · 활동지를 채웠는지만 보지 말고 학생이 근거를 들어 자기 말로 설명하는지 확인합니다.</p><p><b>다음 학습으로 연결</b><br>${E(w?w.bridge:g.next)}</p><p class="note"><b>지원 조절</b> · 읽기가 어려우면 자료를 짧게 나누어 읽어 주세요. 표현이 어려우면 말·그림으로 먼저 설명하게 하세요. 이미 설명할 수 있으면 새로운 사례나 다른 관점을 추가하세요.</p></section>
 ${provenance(s,w)}<details class="guide-more"><summary>기본 설명·도식·다른 적용 예시·성취기준 펼치기</summary>${original}</details>`;
};
function workshopHTML(s,w){
 return `<section class="workshop"><p class="eyebrow">${E(w.context)}</p><h3>자료를 보며 수업 따라 하기</h3><p><b>배움의 초점</b> · ${E(w.purpose)}</p><p>${E(w.material)}</p><div class="source-card"><b>수업 자료 · 가상/구성 예시</b><p>${E(w.source)}</p></div>${s.n==='개념 획득'?shapeHTML():''}${s.n==='교차 비교표'||s.n==='일반화 다듬기'?caseHTML():''}
 ${tableHTML(['시간','교사가 할 일·발문','학생이 할 일'],w.steps,'진행 흐름 · 시간은 운영 예시')}
 <details class="guide-more" open><summary>채워진 활동지 예시 보기</summary><p class="note">가능한 응답의 한 예입니다. 이 문장과 똑같이 쓰는 것을 목표로 삼지 않습니다.</p>${tableHTML(w.headers,w.rows,'학생 결과물 예시')}</details>
 ${tableHTML(['학생이 이렇게 반응하면','교사는 이렇게 도와주세요'],w.trouble,'학생 반응별 후속 발문')}</section>`;
}
const SITUATIONS=[
 ['사전 생각을 알고 싶어요',['개념 지도 (사전)','네 모퉁이'],'이미 가진 개념 연결과 입장의 근거를 확인합니다.'],
 ['개념의 뜻을 혼동해요',['개념 획득','프레이어 모델'],'정의의 핵심 속성과 예·비예시를 비교합니다.'],
 ['질문·조사 계획이 필요해요',['질문 만들기','학생 주도 조사 계획'],'목적에 맞는 질문과 조사 방법을 연결합니다.'],
 ['조사 내용만 나열해요',['교차 비교표','벤 다이어그램'],'같은 질문으로 사례를 비교해 공통점과 차이를 찾습니다.'],
 ['관계를 설명하기 어려워요',['개념적 질문','문장 틀','일반화 다듬기'],'사실의 근거에서 관계를 찾고 조건을 다듬습니다.'],
 ['새 상황에 적용하지 못해요',['새 사례에 적용·검증','예측하기'],'배운 관계와 새 자료를 연결하고 적용 범위를 확인합니다.'],
 ['이해했는지 확인하고 싶어요',['출구 티켓','자기 평가와 목표 세우기'],'학생별 설명과 근거로 다음 지원을 결정합니다.']
];
const finder=document.createElement('section');finder.className='situation-panel';
finder.innerHTML=`<div class="finder-top"><div><span class="eyebrow">수업 준비의 시작</span><h2>지금, 어떤 도움이 필요하세요?</h2><p>학생의 모습을 고르면 전략을 쓰는 이유와 준비 조건을 함께 볼 수 있어요.</p></div><button type="button" data-open-unit>처음이라면 · 한 단원 따라가기 →</button></div><div class="situation-options" role="group" aria-label="수업 상황 선택">${SITUATIONS.map((s,i)=>`<button type="button" data-situation="${i}" aria-pressed="false">${E(s[0])}</button>`).join('')}</div><div id="situationResults" aria-live="polite"></div>`;
$('view-strategies').prepend(finder);
finder.addEventListener('click',e=>{const b=e.target.closest('[data-situation]');if(!b)return;const [label,names,why]=SITUATIONS[+b.dataset.situation];finder.querySelectorAll('[data-situation]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));$('situationResults').innerHTML=`<p><b>${E(label)}</b> · ${E(why)}</p><div class="situation-grid">${names.map(n=>{const s=byName(n),g=GUIDE[n];return `<button type="button" class="situation-result" data-guide="${s.id}"><b>${E(n)} →</b><span>${E(g.when)}</span><small>준비: ${E(g.prep)}</small><small>남길 것: ${E(s.out)}</small></button>`}).join('')}</div>`;});
const UNIT_LESSONS=[
 ['1','참여','보기–생각하기–궁금해하기','가상 공고문을 읽고 관찰·생각·질문을 분리합니다.','공고 읽기 5분 → 개인 기록 10분 → 짝 비교 10분 → 질문 선정 10분 → 성찰 5분','공고문 기록과 질문 벽','의견을 모으면 요구가 모두 실현될까?','관찰과 추측을 구별하는가?','2차시에서 참여의 뜻을 정하고 3차시 조사 질문으로 사용합니다.'],
 ['2','집중','프레이어 모델','참여를 단순히 참석하는 것으로만 이해하는지 살핍니다. 의견 제시·의견 듣기·공동 활동 등의 예를 비교합니다.','사전 생각 5분 → 예 비교 10분 → 네 칸 작성 15분 → 짝 설명 5분 → 성찰 5분','참여의 잠정 정의와 예·비예시','참여에는 어떤 방식이 있을까?','예와 비예시를 선택한 근거를 말하는가?','3차시에서 사례 속 참여 방식과 그 역할을 표시합니다.'],
 ['3','조사','사례 연구','사례 A–C를 공통 질문으로 읽고 요구·의견 수렴·검토 조건·결정을 표시합니다.','질문 확인 5분 → 자료 읽기 15분 → 근거 표시 10분 → 짝 확인 5분 → 성찰 5분','근거 문장을 표시한 사례 기록','요구가 결정으로 이어지는 동안 무엇을 검토했나?','자료에 있는 사실과 없는 정보를 구별하는가?','4차시 비교표의 각 칸을 채울 근거가 됩니다.'],
 ['4','조직','교차 비교표','사례를 열에, 질문을 행에 놓고 가로로 비교합니다.','기록 확인 5분 → 표 작성 12분 → 행별 비교 8분 → 관계 문장 10분 → 성찰 5분','비교표와 첫 관계 문장','요구와 결정이 다른 이유는 무엇일까?','두 사례 이상의 근거로 공통점과 차이를 설명하는가?','5차시에서 첫 문장의 과도한 표현을 검토합니다.'],
 ['5','일반화','일반화 다듬기','“의견을 내면 요구가 모두 실현된다”를 사례 근거로 검토합니다. 학생의 다른 문장도 같은 기준으로 다룹니다.','첫 문장 5분 → 근거 검토 10분 → 조건 찾기 10분 → 수정과 이유 10분 → 성찰 5분','수정 전후 문장과 수정 이유','주민의 요구와 실행 조건은 의사결정에 어떻게 연결될까?','수정 이유를 자료로 설명하는가?','6차시에서 새 급식 사례에 적용합니다.'],
 ['6','전이','새 사례에 적용·검증','새 사례 D와 정보가 부족한 E에서 적용 여부를 판단합니다.','관계 확인 5분 → 새 자료 읽기 10분 → 개인 판단 10분 → 근거 비교 10분 → 성찰 5분','새 사례의 근거와 적용 판단','자료가 없는 것과 실제로 하지 않은 것은 같을까?','지지·수정·정보 부족·조건 밖을 구분하는가?','7차시에서 학급 문제를 검토할 질문으로 바꿉니다.'],
 ['7','전이','실제 문제 해결·산출물','학급 도서 구입 등 작은 문제를 정하고 요구와 실행 조건을 고려한 제안서를 씁니다.','문제 선택 5분 → 요구·조건 검토 10분 → 제안서 15분 → 피드백 5분 → 성찰 5분','요구·근거·제약·대안이 담긴 제안서','누구의 요구를 들었고 무엇을 함께 고려했나?','배운 관계가 제안의 선택 이유에 쓰이는가?','8차시에서 개인 설명과 함께 되돌아봅니다. 실제 실행 여부는 별도로 결정합니다.'],
 ['8','성찰','전에는…지금은…','처음 기록과 최종 설명을 비교하고 개인별 이해를 확인합니다.','처음 기록 5분 → 생각 비교 10분 → 개인 설명 10분 → 동료 피드백 10분 → 다음 목표 5분','생각 변화·근거·남은 질문','생각이 바뀌거나 더 정확해진 근거는 무엇인가?','새 맥락의 설명에 근거와 조건을 함께 사용하는가?','다음 학급 의사결정에서 목표와 질문을 다시 사용합니다.']
];
function renderUnit(){
 $('view-unit').innerHTML=`<section class="unit-hero"><span class="guide-badge">개발자 구성 단원 예시 · 8차시</span><h2>우리의 의견은 어떻게 결정에 반영될까?</h2><p>초등 3–4학년 사회·창체 적용 제안 · 참여 / 요구 / 의사결정</p><p>앞 차시의 기록이 다음 차시의 근거가 되는 흐름을 따라가 보세요. 실제 수업 실행·효과가 검증된 단원은 아니며, 성취기준과 학급 상황에 맞게 조정해야 합니다.</p><button type="button" data-print-unit>단원 안내·자료 인쇄</button></section><div class="guide-quick"><div><b>탐구할 관계</b><p>공공의 의사결정에서 주민의 요구와 실행 조건은 어떻게 연결될까요?</p></div><div><b>이해의 증거</b><p>학생이 처음 보지 않은 사례의 결정 과정을 설명하면서 요구와 조건을 모두 근거로 사용합니다.</p></div></div><p class="note">각 차시는 40분 예시입니다. 성찰을 매 차시에 포함하며, 자료 읽기나 개념 이해가 충분하지 않으면 조사·집중 단계로 돌아갑니다.</p><details class="guide-more"><summary>교사가 준비할 자료 전체 보기</summary><p>공고문 1장, 사례 A–C, 비교표, 수정 기록지, 새 사례 D/E를 준비하세요. 인쇄 버튼에 모든 가상 자료가 포함됩니다.</p><div class="source-card">${E(WORKSHOPS['보기–생각하기–궁금해하기'].source)}</div>${caseHTML()}<div class="source-card">${E(WORKSHOPS['새 사례에 적용·검증'].source)}</div></details><div class="unit-timeline">${UNIT_LESSONS.map(([n,phase,name,act,time,out,q,check,next])=>`<article class="unit-step"><div class="unit-number">${n}</div><div><span class="eyebrow">${phase} · ${n}차시</span><h3>${E(name)}</h3><p>${E(act)}</p><p class="timing">${E(time)}</p><p><b>핵심 질문</b> · ${E(q)}</p><p><b>남길 것</b> · ${E(out)}</p><p><b>확인할 이해</b> · ${E(check)}</p><p class="handoff"><b>이 기록의 다음 쓰임</b><br>${E(next)}</p><button type="button" data-guide="${byName(name).id}">전략·수업 안내 열기 →</button></div></article>`).join('')}</div><section class="guide-follow"><h3>마지막에 무엇을 확인하나요?</h3>${tableHTML(['학생의 설명','다음 지원'],[['사례 사실만 나열한다.','같은 질문으로 사례를 비교하도록 돕습니다.'],['관계를 말하지만 근거가 없다.','그 관계가 나타난 자료의 부분을 표시하게 합니다.'],['새 사례에 관계와 근거를 연결한다.','조건이나 다른 설명도 검토하게 합니다.']])}<p>위 응답 구분은 이 예시의 지도 판단을 위한 것이며 교육과정의 공식 A·B·C 성취수준을 대신하지 않습니다.</p></section>`;
}
renderUnit();
// Editable plans: a draft belongs to one standard and lesson count, and stays on this device.
const PLAN_KEY='inq-classroom-plan-v1';let planDrafts={};try{const parsed=JSON.parse(localStorage.getItem(PLAN_KEY)||'{}');if(parsed&&typeof parsed==='object'&&!Array.isArray(parsed))planDrafts=parsed;}catch(e){}
const draftFor=(i,n)=>{const k=`${i}:${n}`;if(!planDrafts[k]||typeof planDrafts[k]!=='object')planDrafts[k]={choices:{}};if(!planDrafts[k].choices||typeof planDrafts[k].choices!=='object')planDrafts[k].choices={};return planDrafts[k];};
function saveDraft(){try{localStorage.setItem(PLAN_KEY,JSON.stringify(planDrafts));return true}catch(e){return false}}
const basePlanFor=planFor;
planFor=function(d,N){const L=basePlanFor(d,N),draft=draftFor(d.i,N);L.forEach(l=>{const chosen=S.find(s=>s.n===draft.choices[l.n]&&s.p===l.p.id);if(chosen){l.s=chosen;l.out=chosen.out;l.chk=chosen.chk;l.acts=[['도입',10,chosen.steps[0]],['전개',20,chosen.steps.slice(1,-1).join(' → ')],['정리',l.withReflect?5:10,chosen.steps.at(-1)]];}});return L;};
const baseOpenPlan=openPlan;
openPlan=function(i,N){
 baseOpenPlan(i,N);activeStrategy=null;const d=STD[i],draft=draftFor(i,planN);
 const fields=[['concept','핵심 개념','예: 참여, 요구, 의사결정',draft.concept??concepts(d).join(', ')],['question','탐구 질문','사례를 넘어 탐구할 관계를 적어 주세요.',draft.question??''],['materials','실제 사용할 사례·자료','자료 제목·출처·준비할 내용',draft.materials??'']];
 $('sheetBody').insertAdjacentHTML('afterbegin',`<section class="plan-editor"><span class="guide-badge">규칙 기반 자동 설계 초안</span><p>문장의 핵심어와 교과별 규칙으로 전략을 배치했습니다. 검증된 완성 수업안이 아닙니다. 사례·질문을 입력하고 각 차시 전략을 조정해 사용하세요.</p><p><b>추천에 사용한 단서</b> · ${E(d.types.map(h=>h.words.length?h.words.join('·'):'직접 일치하는 핵심어 없음').join(' / '))}</p>${fields.map(([key,label,placeholder,value])=>`<label>${label}<textarea data-plan-field="${key}" rows="2" placeholder="${E(placeholder)}">${E(value)}</textarea></label>`).join('')}<p class="note">자료 준비: 아래 확인란은 자동 검증이 아닌 교사의 준비 점검입니다.</p><label class="ready-check"><input type="checkbox" id="materialsReady" ${draft.ready?'checked':''}> 사례의 사실·출처와 학생용 자료를 확인했습니다.</label><p id="draftStatus" role="status">수정 내용은 이 브라우저에 저장됩니다. 복사할 때 함께 포함됩니다.</p><button type="button" data-reset-plan>이 설계안의 내 수정 초기화</button></section>`);
 const L=planFor(d,planN);$('sheetBody').querySelectorAll('.lesson').forEach((el,j)=>{const l=L[j];el.insertAdjacentHTML('beforeend',`<label class="strategy-choice">이 차시 전략 바꾸기<select data-plan-lesson="${l.n}">${S.filter(s=>s.p===l.p.id).map(s=>`<option value="${s.id}" ${s.id===l.s.id?'selected':''}>${E(s.n)}</option>`).join('')}</select></label>`);});
 const level=$('sheetBody').querySelector('.lessons + .sec');if(level)level.innerHTML='<h4>관찰한 어려움에 맞춰 지원하기</h4><p>자료 읽기가 어려우면 분량을 줄이고 함께 읽습니다. 관계 표현이 어려우면 말·그림·문장 틀을 제공합니다. 근거를 들지 못하면 해당 자료에 표시하게 합니다. 독립적으로 설명하면 조건이 다른 새 사례를 제시합니다. 성취수준은 고정된 학생 유형으로 쓰지 않습니다.</p>';
};
const basePlanText=planText;
planText=function(){const draft=draftFor(planStd,planN);return `[교사가 조정한 설계 초안]\n핵심 개념: ${draft.concept??concepts(STD[planStd]).join(', ')}\n탐구 질문: ${draft.question||'(입력 필요)'}\n사례·자료: ${draft.materials||'(준비 필요)'}\n교사 자료 확인: ${draft.ready?'확인함':'미확인'}\n\n${basePlanText()}`;};
$('sheetBody').addEventListener('input',e=>{const field=e.target.dataset.planField;if(!field)return;draftFor(planStd,planN)[field]=e.target.value;const saved=saveDraft();$('draftStatus').textContent=saved?'이 브라우저에 저장했습니다.':'브라우저 저장을 사용할 수 없습니다. 텍스트 복사로 보관해 주세요.';});
$('sheetBody').addEventListener('change',e=>{if(e.target.id==='materialsReady'){draftFor(planStd,planN).ready=e.target.checked;const ok=saveDraft();$('draftStatus').textContent=ok?'준비 상태를 저장했습니다.':'저장할 수 없습니다. 텍스트 복사로 보관해 주세요.';}if(e.target.dataset.planLesson){const top=$('sheetBody').scrollTop;draftFor(planStd,planN).choices[e.target.dataset.planLesson]=S[+e.target.value].n;const ok=saveDraft();openPlan(planStd,planN);$('sheetBody').scrollTop=top;if(!ok)$('draftStatus').textContent='저장할 수 없습니다. 텍스트 복사로 보관해 주세요.';}});
function printContent(title,html){
 let area=$('printArea');if(area)area.remove();area=document.createElement('section');area.id='printArea';area.innerHTML=`<h1>${E(title)}</h1>${html}<footer>영쌤클래스 · 탐구 전략 사전 · 개발자 구성 수업 예시 · 2026-10-28<br>https://knightayj52.github.io/inquiry-strategies/</footer>`;document.body.append(area);document.body.classList.add('printing-guide');window.print();
}
window.addEventListener('afterprint',()=>{document.body.classList.remove('printing-guide');$('printArea')?.remove();});
function printWorksheet(s){const w=WORKSHOPS[s.n];if(!w)return;
 const blanks=w.rows.map(r=>r.map((v,i)=>i===0&&s.n==='교차 비교표'?v:'　　　　　　　　　　　　　　　　　'));
 printContent(s.n+' · 학생 활동지',`<p>이름: ____________________　날짜: ____________________</p><p>${E(w.purpose)}</p><div class="source-card">${E(w.source)}</div>${s.n==='교차 비교표'||s.n==='일반화 다듬기'?caseHTML():''}${s.n==='개념 획득'?shapeHTML():''}${tableHTML(w.headers,blanks,'내 생각과 근거 기록')}${w.prompts.map(q=>`<div class="writing-space"><b>${E(q)}</b><div></div></div>`).join('')}<p class="note">자료는 수업을 위해 만든 가상/구성 예시입니다. 자기 말과 근거로 설명해 주세요.</p>${s.n==='보기–생각하기–궁금해하기'?'<small>관련 루틴: Project Zero, Harvard Graduate School of Education · See, Think, Wonder. 이 활동지는 개발자가 구성한 적용 예시입니다.</small>':''}`);
}
document.addEventListener('click',e=>{
 const guide=e.target.closest('[data-guide]');if(guide){openSheet(+guide.dataset.guide);return}
 if(e.target.closest('[data-open-unit]')){if(!$('sheet').hidden)closeSheet();setView('unit');$('view-unit').scrollIntoView({behavior:'smooth'});return}
 if(e.target.closest('[data-print-guide]')&&activeStrategy!==null){const body=$('sheetBody').cloneNode(true);body.querySelector('.guide-more:last-child')?.remove();body.querySelector('.guide-toolbar')?.remove();body.querySelectorAll('details').forEach(d=>d.open=true);printContent(S[activeStrategy].n+' · 교사 안내',body.innerHTML);return}
 if(e.target.closest('[data-print-worksheet]')&&activeStrategy!==null){printWorksheet(S[activeStrategy]);return}
 if(e.target.closest('[data-print-unit]')){const body=$('view-unit').cloneNode(true);body.querySelectorAll('button').forEach(b=>b.remove());body.querySelectorAll('details').forEach(d=>d.open=true);printContent('우리의 의견은 어떻게 결정에 반영될까? · 8차시 안내',body.innerHTML);return}
 if(e.target.closest('[data-reset-plan]')){delete planDrafts[`${planStd}:${planN}`];saveDraft();openPlan(planStd,planN);}
});
// Keep keyboard focus inside the dialog and return it to the invoking control.
let returnFocus=null;let closeTimer=null;
const baseShowSheet=showSheet;
showSheet=function(){clearTimeout(closeTimer);if($('sheet').hidden)returnFocus=document.activeElement;baseShowSheet();};
closeSheet=function(){const sh=$('sheet'),bg=$('sheetBg');sh.classList.remove('on');bg.classList.remove('on');document.body.style.overflow='';clearTimeout(closeTimer);closeTimer=setTimeout(()=>{sh.hidden=true;bg.hidden=true;if(returnFocus?.isConnected)returnFocus.focus();},200);};
document.addEventListener('keydown',e=>{if(e.key!=='Tab'||$('sheet').hidden)return;const nodes=[...$('sheet').querySelectorAll('button,a[href],input,textarea,select,summary,[tabindex="0"]')].filter(el=>el.getClientRects().length&&!el.disabled);const first=nodes[0],last=nodes.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}});
// Tabs support arrow keys in addition to the standard Tab navigation.
document.querySelector('.views').addEventListener('keydown',e=>{const tabs=[...document.querySelectorAll('.views [role="tab"]')],i=tabs.indexOf(document.activeElement);if(i<0)return;let next;if(e.key==='ArrowRight')next=(i+1)%tabs.length;if(e.key==='ArrowLeft')next=(i-1+tabs.length)%tabs.length;if(e.key==='Home')next=0;if(e.key==='End')next=tabs.length-1;if(next!==undefined){e.preventDefault();setView(tabs[next].dataset.v);tabs[next].focus();}});
