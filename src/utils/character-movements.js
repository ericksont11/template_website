// with the properties contained inside
export default function movement(position, e) {
    e.preventDefault();
    if (e.key === "ArrowLeft" && (position[0] > 0)) {
        return [-1,0]
    } else if (e.key === "ArrowUp" && (position[1] > 0)){
        return [0,-1]
    } else if (e.key === "ArrowRight" && (position[0] < 195)){
        return [1,0]
    } else if (e.key === "ArrowDown" &&  (position[1] < 95)){
        return [0,1]
    } else {
        return [0,0]
    }
}