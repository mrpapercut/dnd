const createElement = (tagname = '') => {
    return (attributes = {}, ...content) => {
        const el = document.createElement(tagname);

        for (let attr in attributes) {
            switch (attr) {
                case 'events':
                    if (!(attributes[attr] instanceof Object)) {
                        throw new Error('Error: attribute "events" is not an object');
                    } else {
                        for (let event in attributes[attr]) {
                            el.addEventListener(event, attributes[attr][event]);
                        }
                    }
                    break;

                case 'styles':
                    if (!(attributes[attr] instanceof Object)) {
                        throw new Error('Error: attribute "styles" is not an object');
                    } else {
                        for (let style in attributes[attr]) {
                            el.style[style] = attributes[attr][style];
                        }
                    }
                    break;

                case 'className':
                    el.classList.add(attributes[attr]);
                    break;

                default:
                    el.setAttribute(attr, attributes[attr]);
            }
        }

        if (!Array.isArray(content)) {
            content = [content];
        }

        content.forEach(child => {
            if (child instanceof HTMLElement) {
                el.appendChild(child);
            } else if (child === null) {
                // do nothing
            } else if (typeof child === 'string') {
                let span = document.createElement('span');
                span.innerText = child;

                el.appendChild(span);
            } else if (Array.isArray(child)) {
                child.forEach(c => el.appendChild(c));
            }
        });

        return el;
    }
}

export default createElement;
