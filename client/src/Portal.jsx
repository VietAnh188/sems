import React from 'react';
import { createPortal } from 'react-dom';
import './portal.scss';

let portalRoot = document.getElementById('portal-root');

if (!portalRoot) {
    const portalRootDiv = document.createElement('div');
    portalRootDiv.id = 'portal-root';
    portalRootDiv.style.display = 'grid';
    portalRootDiv.style.placeItems = 'center';
    document.body.appendChild(portalRootDiv);
    portalRoot = portalRootDiv;
}

const Portal = ({ visible, children }) => {
    return createPortal(
        <div className={`portal ${visible ? '' : 'hide'}`}>{children}</div>,
        portalRoot
    );
};

export default Portal;
