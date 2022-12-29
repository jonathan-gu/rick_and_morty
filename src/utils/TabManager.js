class TabManager {
    constructor(rootElement, componentMapping) {
        this.rootElement = rootElement
        this.componentMapping = componentMapping
    }

    async openTabById(id, params = null) {
        if (id in this.componentMapping) {
            const { component, params: [...props] = [] } = this.componentMapping[id]
            const paramsValue = params === null ? props : params
            const Component = await component(paramsValue)
            this.rootElement.innerHTML = ""
            this.rootElement.appendChild(Component)
        } else {
            console.error("Invalid id provided")
        }
    }
}

export default TabManager