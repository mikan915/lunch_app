'use strict';
const lunchList = [
  {
    name:"学食の定番カレーライス",
    desc:"安くて早い大学生の味方！午後の授業に向けてエネルギー補給。",
    budget:"one",
    mood:"heavy",
    tag:"500円以下/ガッツリ"
  },
  {
    name:"かけうどん+おにぎり1個",
    desc:"お財布に優しく、胃にも優しい組み合わせ。",
    budget:"one",
    mood:"light",
    tag:"500円以下/さっぱり"
  },
  {
    name:"コンビニのサラダチキン&スープ",
    desc:"時間がない日やヘルシーに済ませたい日にぴったり。",
    budget:"one",
    mood:"light",
    tag:"500円以下/さっぱり"
  },
  {
    name:"牛丼(並盛)",
    desc:"提供スピード抜群！紅生姜をたっぷりのせてどうぞ。",
    budget:"one",
    mood:"heavy",
    tag:"500円以下/ガッツリ"
  },
  {
    name:"唐揚げ定食",
    desc:"ジューシーな唐揚げと大盛りごはんで午後も頑張れる！",
    budget:"mid",
    mood:"heavy",
    tag:"1000円以上/ガッツリ"
  },
  {
    name:"濃厚豚骨ラーメン",
    desc:"無性に麺が食べたい日はこれ！替え玉するかは気分次第。",
    budget:"mid",
    mood:"heavy",
    tag:"1000円以上/ガッツリ"
  },
  {
    name:"トマトとモッツァレラのパスタ",
    desc:"ちょっとおしゃれにカフェ気分でランチタイム。",
    budget:"mid",
    mood:"light",
    tag:"1000円以上/さっぱり"
  },
  {
    name:"おろしポン酢ハンバーグ定食",
    desc:"お肉は食べたいけれど、後味はさっぱりさせたい時に最適。",
    budget:"mid",
    mood:"light",
    tag:"1000円以上/さっぱり"
  }
];

const assessment = document.getElementById("assessment");
const startArea = document.getElementById("start-area");
const resultCard = document.getElementById("result-card");
const menuName = document.getElementById("menu-name");
const menuDesc = document.getElementById("menu-desc");
const menuTag = document.getElementById("menu-tag");

assessment.addEventListener(
  'click',
  () => {
    const selectedBudget = document.getElementById("budge").value;
    const selectedMood = document.getElementById("mood").value;

    const filteredList = lunchList.filter((item) => {
      const matchBudget = selectedBudget === "all" || item.budget === selectedBudget;
      const matchMood = selectedMood === "all" || item.mood === selectedMood;
      return matchBudget && matchMood;
    });

    const randomIndex = Math.floor(Math.random() * filteredList.length);
    const selectedMenu = filteredList[randomIndex];

    menuName.textContent = selectedMenu.name;
    menuDesc.textContent = selectedMenu.desc;
    menuTag.textContent = selectedMenu.tag;

    startArea.classList.add("hidden");
    resultCard.classList.remove("hidden");

    const tweetArea = document.getElementById("tweet-area");
    tweetArea.innerText = ""; // 2回目以降に押したときボタンが増殖しないようにリセット

    const anchor = document.createElement("a");
    const hrefValue =
      "https://x.com/intent/tweet?button_hashtag=" +
      encodeURIComponent("今日のランチ診断") +
      "&ref_src=twsrc%5Etfw";

    anchor.setAttribute("href", hrefValue);
    anchor.setAttribute("class", "twitter-hashtag-button");
    anchor.setAttribute("data-text", `今日のランチは「${selectedMenu.name}」に決定！`);
    anchor.innerText = "Post #今日のランチ診断";

    tweetArea.appendChild(anchor);

    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.x.com/widgets.js");
    tweetArea.appendChild(script);
  }
);
