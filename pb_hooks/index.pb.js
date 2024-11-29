routerAdd("get", "/calc", (c) => {
        const html = $template.loadFiles(
        `${__hooks}/views/layout.html`,
        `${__hooks}/views/calc.html`,
    ).render();
    return c.html(200, html);
});

routerAdd("get", "/settings", (c) => {
    const html = $template.loadFiles(
    `${__hooks}/views/layout.html`,
    `${__hooks}/views/settings.html`,
).render();
return c.html(200, html);
});

routerAdd("get", "/crm", (c) => {
    const html = $template.loadFiles(
    `${__hooks}/views/layout.html`,
    `${__hooks}/views/crm.html`,
).render();
return c.html(200, html);
});