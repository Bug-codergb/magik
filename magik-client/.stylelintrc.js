module.exports = { 
  root:true,
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "stylelint-config-html/vue",
  ] ,
  "ignoreFiles": ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts", "**/*.json"],
  "rules": {
    "function-url-quotes": "always", // URL 的引号 "always(必须加上引号)"|"never(没有引号)"
    "color-hex-length": "long", // 指定 16 进制颜色的简写或扩写 "short(16进制简写)"|"long(16进制扩写)"
    "rule-empty-line-before": "never", // 要求或禁止在规则之前的空行 "always(规则之前必须始终有一个空行)"|"never(规则前绝不能有空行)"|"always-multi-line(多行规则之前必须始终有一个空行)"|"never-multi-line(多行规则之前绝不能有空行)"
    "font-family-no-missing-generic-family-keyword": null, // 禁止在字体族名称列表中缺少通用字体族关键字
    "property-no-unknown": null, // 禁止未知的属性
    "no-empty-source": null, // 禁止空源码
    "selector-class-pattern": "never", // 强制选择器类名的格式
    "value-no-vendor-prefix": null, // 关闭 vendor-prefix (为了解决多行省略 -webkit-box)
    "no-descending-specificity": null, // 不允许较低特异性的选择器出现在覆盖较高特异性的选择器
    "selector-id-pattern":"never",
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": ["global", "v-deep", "deep"],
      },
    ],
  },
}