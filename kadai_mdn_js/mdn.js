const today = new Date();

const year = today.getFullYear();  // JSTの年を取得
const month = today.getMonth() + 1;  // JSTの月を取得。getMonth()は0から11までを返すので、+1を追加
const date = today.getDate();  // JSTの日を取得

console.log(`${year}年${month}月${date}日`);  // "年/月/日"形式でコンソールに出力