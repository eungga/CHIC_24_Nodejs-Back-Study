Q1.동기적으로 파일을 읽으려 할때, 어떤 메소드를 사용해야 할까?
1. fs.readFileSync
2. fs.readFile
3. fs.Fileread
4. fs.FilereadSync

Q2. 다음 중 __안에 들어갈 함수 이름을 쓰시오
/*  비동기로 함수를 실행할 경우 라도 논리적으로
 A동작이 완료되고 B동작이 실행되어야 하는 경우가 있다.
  예를들면 텍스트파일이나 서버로부터 비동기로 파일을
  읽는동작(동작A) 과 읽은 파일을 가공하는 동작(동작B)가 있는 경우
 B를 __로 A함수의 인자로 호출하면 이를 방지하고 A가 동작을 완료하고 B를 실행 할 수가 있다.
*/

Q3. // 빈칸을 채워서 아래 코드가 올바르게 작동하도록 하시오
var p = {
  v1: 'value1',
  v2: 'value2'
};

function f1() {
  console.log(this.v1);
}

function f2() {
  console.log(this.v2);
}
p.____ = f1;
p.____ = f2;

p.f1(); // 'value1' 출력
p.f2(); // 'value2' 출력
