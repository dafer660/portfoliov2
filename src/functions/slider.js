export function handleSliderClick(direction, data, slide) {
    if (direction === 'left') {
        if (slide > 0) {
            return (slide - 1)
        } else {
            return 2
        }
    } else {
        if (slide < data.length - 1) {
            return (slide + 1)
        } else {
            return 0
        }
    }
}

export function handleTouchStart(e) {
    return (e.touches[0].clientX)
}

export function handleTouchMove(e, position) {
    const touchDown = position

    if (touchDown === null) {
        return null
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 10) {
        //handleSliderClick()
        return {
            position: null,
            direction: 'right'
        }
    }

    if (diff < -10) {
        //handleSliderClick('left')
        return {
            position: null,
            direction: 'left'
        }
    }

}