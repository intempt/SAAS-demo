export const getButton = ({text, url, variant, action}) => {
    let config = {type: 'button', variant, text};

    if (typeof action === 'function') {
        config.action = () => action();
    } else {
        config.url = url;
    }

    return config;
}
export const getText = ({text, variant}) => ({type: 'text', variant, text})
export const getSvg = ({svg}) => ({type: 'svg', width: 160, height: 160, html: svg})

export const getIntemptModalConfig = (data, closeModal) => {
    let config = {
        title: '',
        body: [],
        footer: []
    };

    config.title = data.title ?? '';

    if (typeof data.svg !== 'undefined') {
        config.body.push(getSvg({svg: data.svg}));
    }

    if (typeof data.body1 !== 'undefined') {
        config.body.push(getText({
            text: data.body1,
            variant: 'big'
        }));
    }

    if (typeof data.body2 !== 'undefined') {
        config.body.push(getText({
            text: data.body2,
            variant: 'small'
        }));
    }

    let buttons = [];
    if (typeof data.button1 !== 'undefined') {
        buttons.push(getButton({
            text: data.button1,
            url: '#',
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

    console.log(config)

    return config;
}