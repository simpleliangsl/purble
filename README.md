# purble
🟪 **Pu**t you**r** actions on ta**ble**!

Purble is a language in which sentences are formalized as `Result` + `Action` + `Arguments`. So you can easily list your actions into a table one by one. It looks clearer and more straightforward comparing with the lines of text code. Writing short scripts can be so free!

*Example: Go to bing.com for translating "purple" into Chinese*

Actions on Table:
|No.|Result|Action|Arguments|
|:-|:-|:-|:-|
|1|browser|getWebDriver|"chrome"|
|2||open|browser, "https://cn.bing.com/dict"|
|3|inputBox|find|browser, "input"|
|4||type|inputBox, "purple"|
|5|translatedText|find|browser, "text"|
|6||log|console, translatedText|

Compare with the lines of text code:
``` javascript
let browser = getWebDriver("chrome")
browser.open("https://cn.bing.com/dict")
let inputBox = browser.find("input")
inputBox.type("purple")
let translatedText = browser.find("text")
console.log(translatedText) // 紫色
```

![actions-on-table](https://github.com/simpleliangsl/purble/raw/main/actions-on-table.png)
