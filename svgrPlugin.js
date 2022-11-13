function templateFunc(
  { imports, componentName, props, jsx, exports },
  { tpl },
) {
  // добавляем в парсер возможность в svg добавлять children
  const child = {
    type: 'JSXExpressionContainer',
    expression: { type: 'JSXText', value: 'props.children' },
  };

  jsx.children.push(child);

  return tpl`
    ${imports}
    const ${componentName} = (${props}) => ${jsx}
    ${exports}
  `;
}

module.exports = templateFunc;
