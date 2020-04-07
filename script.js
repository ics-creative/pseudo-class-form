/**
 * フォーム全体の妥当性をチェックします
 */
const validate = () => {
  const validForm = document.querySelector("form:valid");
  const submitButton = document.querySelector("#submit");
  submitButton.disabled = validForm === null;
};

// 初期読み込み時に実行
validate();

// フォームに入力されたら、validate関数を実行
document.querySelectorAll("input,textarea").forEach(input => {
  input.addEventListener("input", validate);
});
