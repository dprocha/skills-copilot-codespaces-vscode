function skillsMember() {
  var member = document.getElementById("member");
  var memberValue = member.options[member.selectedIndex].value;
  var memberText = member.options[member.selectedIndex].text;
  var memberSkill = document.getElementById("memberSkill");
  memberSkill.value = memberText;
}