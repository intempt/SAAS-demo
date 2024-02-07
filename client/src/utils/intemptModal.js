export const getButton = ({text, url, variant = 'primary', action}) => {
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

export const getIntemptModalConfig = (modalData, closeModal, params) => {
    const {
        body1, body2, title, preImageBody1,
        imageAlt, imageSrc, imageWidth, imageHeight,
        okButtonText, okButtonType, okButtonVariant,
        cancelButtonText, cancelButtonType, cancelButtonAction, cancelButtonVariant
    } = modalData;

    let config = {
        title: '',
        body: [],
        footer: []
    };
    config.title = title ?? '';

    if (typeof preImageBody1 !== 'undefined') {
        config.body.push(getText({
            text: preImageBody1.replace(/\n/g, '<br/>'),
            variant: 'big'
        }));
    }

    if (typeof imageSrc !== 'undefined') {
        config.body.push(getImage({
            image: imageSrc,
            alt: imageAlt,
            height: imageHeight,
            width: imageWidth
        }));
    }

    if (typeof body1 !== 'undefined') {
        config.body.push(getText({
            text: body1.replace(/\n/g, '<br/>'),
            variant: 'big'
        }));
    }

    if (typeof body2 !== 'undefined') {
        config.body.push(getText({
            text: body2.replace(/\n/g, '<br/>'),
            variant: 'small'
        }));
    }

    let buttons = [];
    if (typeof okButtonText !== 'undefined') {
        switch (okButtonType) {
            case 'route': {
                buttons.push(getButton({
                    text: okButtonText,
                    url: getRoute(modalData, params),
                    variant: okButtonVariant
                }));
                break;
            }
            case 'action': {
                buttons.push(getButton({
                    text: okButtonText,
                    action: closeModal,
                    variant: okButtonVariant
                }));
                break
            }
            default: {
                buttons.push(getButton({
                    text: okButtonText,
                    variant: okButtonVariant,
                    url: '#',
                }));
            }
        }
    }

    if (typeof cancelButtonText !== 'undefined') {
        buttons.push(getButton({
            text: cancelButtonText,
            action: closeModal,
            variant: cancelButtonVariant
        }));
    }

    config.footer.push({type: 'buttons', buttons})

    return config;
}

const getRoute = (modalData, parameters) => {
    const {okButtonType, okButtonRoute} = modalData;

    console.log(parameters)

    if (
        okButtonType === 'route' &&
        okButtonRoute !== undefined
    ) {
        const pattern = new RegExp(Object.keys(parameters).map(key =>
            key.replace(/[\[\].*+?^${}()|\\]/g, '\\$&')
        ).join('|'), 'g');

        return okButtonRoute.replace(pattern, match => parameters[match]);
    }

    return '#'
}