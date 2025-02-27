export function timeString(time: number): string {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor((time / 60) % 60);
    const hours = Math.floor(time / 60 / 60);

    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

export function elementIsChildOf(element: HTMLElement, other: HTMLElement) {
    let parent: HTMLElement | null = element;

    while (parent != null) {
        if (parent == other) return true;
        parent = parent?.parentElement;
    }
    return false;
}

export function coerceBetween(value: number, min: number, max: number) {
    if (value < min) return min;
    if (value > max) return max;
    return value;
}
