export type UpdateFavProps = {
    operation: "add" | "remove",
    name: string
}

export const favKey = "Favorites"

export function UpdateFavorites({operation, name}:UpdateFavProps){
    const saved = localStorage.getItem(favKey);
    if(saved){
        const presentFavorites:[string] = JSON.parse(saved);
        if(operation === "add"){
            if(presentFavorites.findIndex((item) => item === name) === -1){
                //item not in the list, lets add it.
                presentFavorites.push(name);
            }
        } else if (operation === "remove"){
            let dIndex = presentFavorites.findIndex((item) => item === name)
            if(dIndex !== -1){
                presentFavorites.splice(dIndex, 1);
            }
        }
        localStorage.setItem(favKey, JSON.stringify(presentFavorites));
    } else if (!saved) {
        if(operation === "add"){
            localStorage.setItem(favKey, JSON.stringify([name]))
        }
    }
}

export function GetFavorites(){
    const saved = localStorage.getItem(favKey);
    console.log(saved);
    if(saved){
        return JSON.parse(saved) as string[];
    }
    return undefined;
}