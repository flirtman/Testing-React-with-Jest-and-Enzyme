export const findByTestAttr = (component, attr) => {
    const elem = component.find(`[data-test='${attr}']`);
    return elem;
}
