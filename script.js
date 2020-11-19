let rows = document.getElementsByClassName("conclusion")[0].children[0].textContent.split("\n");
let result = [];
for(var i = 0;i<rows.length;) {
  console.log(rows[i]);
  let original = rows[i].split('-')[0].replace(',',' ').trim();
  let explanation = rows[i].split('-')[1].replace(',',' ').trim();
  let explanation_en = rows[i+1].replace(',',' ');
  result.push(original +  "," + explanation + "," + explanation_en);
  i=i+2;
}
let message = document.createElement("div");
message.style = "background:#eeeeee; border:1px solid #cccccc; padding:5px 10px";

for(let i = 0;i<result.length;i++) {
  let element = document.createElement("span");
  element.style = "display:block"
  element.textContent = result[i];
  message.appendChild(element)
}
document.getElementsByClassName("conclusion")[0].appendChild(message);

message.scrollIntoView();
