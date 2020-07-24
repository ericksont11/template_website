// with the properties contained inside
export default function movement(position, e) {
    if (e.keyCode === 37 && (position[0] > 0)) {
        return [-1,0]
    } else if (e.keyCode === 38 && (position[1] > 0)){
        return [0,-1]
    } else if (e.keyCode === 39 && (position[0] < 95)){
        return [1,0]
    } else if (e.keyCode === 40 &&  (position[1] < 95)){
        return [0,1]
    } else {
        return [0,0]
    }
}