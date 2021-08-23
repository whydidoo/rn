function templateFunc(
  { template },
  opts,
  { imports, componentName, props, jsx, exports },
) {
  // добавляем в парсер возможность в svg добавлять children
  const child = {
    type: 'JSXExpressionContainer',
    expression: { type: 'JSXText', value: 'props.children' },
  };

  jsx.children.push(child);
  return template.ast`
    ${imports}
    const ${componentName} = (${props}) => ${jsx}
    ${exports}
  `;
}

module.exports = templateFunc;
