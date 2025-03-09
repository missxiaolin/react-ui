export const getColor = (name: string, arr: string[]) => {
    const obj: any = {}
    arr.forEach((item, index) => {
        if (index === 0) {
            obj[name] = item
        } else {
            obj[`${name}Light-${index}`] = item
        }
    })

    return obj
}
