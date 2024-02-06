export const getButton = ({text, url, variant, action}) => {
    let config = {type: 'button', variant, text};

    if (typeof action === 'function') {
        config.action = () => action();
    } else {
        config.url = url;
    }

    return config;
}
export const getText = ({text, variant}) =>
    ({type: 'text', variant, text})
export const getImage = ({image, alt, width, height}) =>
    ({type: 'image', width: width ?? 160, height: height ?? 160, src: image, alt: alt ?? ''})

export const getIntemptModalConfig = (data, closeModal) => {
    let config = {
        title: '',
        body: [],
        footer: []
    };
    config.title = data.title ?? '';

    if (typeof data.preImageBody1 !== 'undefined') {
        config.body.push(getText({
            text: data.preImageBody1.replace(/\n/g, '<br/>'),
            variant: 'big'
        }));
    }

    if (typeof data.imageSrc !== 'undefined') {
        config.body.push(getImage({
            image: data.imageSrc,
            alt: data?.imageAlt,
            height: data?.imageHeight,
            width: data?.imageWidth
        }));
    }

    if (typeof data.body1 !== 'undefined') {
        config.body.push(getText({
            text: data.body1.replace(/\n/g, '<br/>'),
            variant: 'big'
        }));
    }

    if (typeof data.body2 !== 'undefined') {
        config.body.push(getText({
            text: data.body2.replace(/\n/g, '<br/>'),
            variant: 'small'
        }));
    }

    let buttons = [];
    if (typeof data.okButtonText !== 'undefined') {
        buttons.push(getButton({
            text: data.okButtonText,
            action: closeModal,
            type: 'premium'
        }));
    }

    if (typeof data.cancelButtonText !== 'undefined') {
        buttons.push(getButton({
            text: data.cancelButtonText,
            action: closeModal,
            type: 'outlined'
        }));
    }

    config.footer.push({type: 'buttons', buttons})

    return config;
}