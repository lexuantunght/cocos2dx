import React from 'react';
import { cc } from 'cocos2dx/lite';

function App() {
    React.useEffect(() => {
        const config = {
            debugMode: 1,
            frameRate: 60,
            id: 'gameCanvas',
            renderMode: cc.game.RENDER_TYPE_WEBGL,
            jsList: [],
            showFPS: __DEV__,
        };
        cc.game.run(config, function () {
            cc.view.enableRetina(cc.sys.os === cc.sys.OS_IOS ? true : false);
            cc.view.adjustViewPort(true);
            cc.view.resizeWithBrowserSize(true);
            cc.view.setDesignResolutionSize(960, 640, cc.ResolutionPolicy.NO_BORDER);
            cc.LoaderScene.preload(["favicon.ico"], () => {
                const s = new cc.Scene();
                cc.director.runScene(s);
            }, this);
        });
    }, []);

    return (
        <canvas id="gameCanvas" width={960} height={640} />
    );
}

export default App;
