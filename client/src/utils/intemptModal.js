export const getText = ({text, variant}) =>
    ({type: 'text', variant, text})
export const getImage = ({image, alt, width, height}) =>
    ({type: 'image', width: width ?? 160, height: height ?? 160, src: image, alt: alt ?? ''})

export const getIntemptModalConfig = (modalData, setModal, closeModal, params = {}) => {
    const {
        body1, body2, title, preImageBody1,
        imageAlt, imageSrc, imageWidth, imageHeight,
        okButtonText, okButtonType, okButtonVariant, okButtonRoute, okButtonAction,
        cancelButtonText, cancelButtonType, cancelButtonVariant, cancelButtonRoute, cancelButtonAction,
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
        buttons.push(getButton({
            modalData, params, closeModal, setModal,
            text: okButtonText,
            type: okButtonType,
            variant: okButtonVariant,
            route: okButtonRoute,
            action: okButtonAction
        }));
    }

    if (typeof cancelButtonText !== 'undefined') {
        buttons.push(getButton({
            modalData, params, closeModal, setModal,
            text: cancelButtonText,
            type: cancelButtonType,
            variant: cancelButtonVariant,
            route: cancelButtonRoute,
            action: cancelButtonAction
        }));
    }

    config.footer.push({type: 'buttons', buttons})

    console.log(config)

    return config;
}

const getButton = ({
    modalData, params, text, type, variant =  'primary',
    route, action, closeModal, setModal
}) => {
    const defaultProps = {text, variant, type: 'button'};

    if (typeof text !== 'undefined' && typeof type !== 'undefined') {
        switch (type) {
            case 'route': {
                return {
                    url: getRoute(route, params),
                    ...defaultProps
                }
            }
            case 'action': {
                return {
                    action: getAction({
                        modalData, setModal, closeModal, action
                    }),
                    ...defaultProps
                }
            }
            default: {
                return {
                    url: '#',
                    ...defaultProps
                };
            }
        }
    }
}

const getAction = ({modalData, setModal, closeModal, action}) => {
    if (typeof action !== 'undefined') {
        switch (action) {
            case 'closeDialog': {
                return () => closeModal()
            }
            case 'openSuccessDialog': {
                return () => setModal({
                    open: true,
                    closeOnBackdrop: false,
                    ...getIntemptModalConfig({
                        "title": modalData.successDialogTitle ?? '',
                        "body1": modalData.successDialogBody1 ?? '',
                        "body2": modalData.successDialogBody2 ?? '',
                        "imageAlt": modalData.successDialogImageAlt ?? '',
                        "imageSrc": modalData.successDialogImageSrc ?? '',
                        "imageWidth": modalData.successDialogImageWidth ?? '',
                        "imageHeight": modalData.successDialogImageHeight ?? '',
                        "okButtonText": modalData.successDialogOkButtonText ?? '',
                        "okButtonType": modalData.successDialogOkButtonType ?? '',
                        "okButtonAction": modalData.successDialogOkButtonAction ?? '',
                        "okButtonVariant": modalData.successDialogOkButtonVariant ?? '',
                    }, setModal, closeModal)
                })
            }
            default: {
                return () => closeModal()
            }
        }
    }

    return () => closeModal()
}

const getRoute = (route, parameters) => {
    if (route !== undefined) {
        const pattern = new RegExp(Object.keys(parameters).map(key =>
            key.replace(/[\[\].*+?^${}()|\\]/g, '\\$&')
        ).join('|'), 'g');

        return route.replace(pattern, match => parameters[match]);
    }

    return '#'
}