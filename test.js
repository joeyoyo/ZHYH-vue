function unescapeHtml(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/& lt;/g, '<')
    .replace(/& gt;/g, '>')
    .replace(/& quot;/g, '"')
    .replace(/& #39;/g, "'") // 替换HTML实体编码的单引号
    .replace(/& nbsp;/g, ' '); // 替换非断行空格
}

var originalString = "123123123123123你好啊啊啊&amp; lt;img src='https://zjn-v2-test.oss-cn-guangzhou.aliyuncs.com/988597012196888576.png&#34; alt='undefined'&amp; gt;";
var decodedString = unescapeHtml(originalString);

console.log(decodedString);