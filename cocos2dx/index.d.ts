/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

 http://www.cocos2d-x.org


 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

/**
 * TypeScript definitions for https://github.com/cocos2d/cocos2d-html5
 *
 * 29/JUN/2013 - Adam Davidson
 */
declare function require(name:string);
declare module cc {
    var director: Director;
    var winSize:cc.Size;
    var view:GLView;
    var visibleRect : {
        topLeft: cc.Point;
        topRight: cc.Point;
        top: cc.Point;
        bottomLeft: cc.Point;
        bottomRight: cc.Point;
        bottom: cc.Point;
        center: cc.Point;
        left: cc.Point;
        right: cc.Point;
        width: number;
        height: number;
    };
    var KEY : {
        backspace: number;
        tab: number;
        enter: number;
        shift: number; //should use shiftkey instead
        ctrl: number; //should use ctrlkey
        alt: number; //should use altkey
        pause: number;
        capslock: number;
        escape: number;
        pageup: number;
        pagedown: number;
        end: number;
        home: number;
        left: number;
        up: number;
        right: number;
        down: number;
        insert: number;
        Delete: number;
        0: number;
        1: number;
        2: number;
        3: number;
        4: number;
        5: number;
        6: number;
        7: number;
        8: number;
        9: number;
        a: number;
        b: number;
        c: number;
        d: number;
        e: number;
        f: number;
        g: number;
        h: number;
        i: number;
        j: number;
        k: number;
        l: number;
        m: number;
        n: number;
        o: number;
        p: number;
        q: number;
        r: number;
        s: number;
        t: number;
        u: number;
        v: number;
        w: number;
        x: number;
        y: number;
        z: number;
        num0: number;
        num1: number;
        num2: number;
        num3: number;
        num4: number;
        num5: number;
        num6: number;
        num7: number;
        num8: number;
        num9: number;
        '*': number;
        '+': number;
        '-': number;
        'numdel': number;
        '/': number;
        f1: number; //f1-f12 dont work on ie
        f2: number;
        f3: number;
        f4: number;
        f5: number;
        f6: number;
        f7: number;
        f8: number;
        f9: number;
        f10: number;
        f11: number;
        f12: number;
        numlock: number;
        scrolllock: number;
        semicolon: number;
        ',': number;
        equal: number;
        '=': number;
        ';': number;
        comma: number;
        dash: number;
        '.': number;
        period: number;
        forwardslash: number;
        grave: number;
        '[': number;
        openbracket: number;
        ']': number;
        closebracket: number;
        backslash: number;
        quote: number;
        space: number
    }
    var SCROLLVIEW_DIRECTION_NONE : number;
    var SCROLLVIEW_DIRECTION_HORIZONTAL : number;
    var SCROLLVIEW_DIRECTION_VERTICAL : number;
    var SCROLLVIEW_DIRECTION_BOTH : number;
    var TABLEVIEW_FILL_TOPDOWN : number;
    var TABLEVIEW_FILL_BOTTOMUP : number;

    var CONTROL_STATE_NORMAL : number;
    var CONTROL_STATE_HIGHLIGHTED : number;
    var CONTROL_STATE_DISABLED : number;
    var CONTROL_STATE_SELECTED : number;
    var CONTROL_STATE_INITIAL : number;

    var _RENDER_TYPE_CANVAS : number;
    var _RENDER_TYPE_WEBGL : number;

    var eventManager: EventDispatcher;

    class Touch extends Class {
        getPreviousLocationInView(): Point;
        getLocation() : Point;
        getDelta();
        getStartLocationInView(): Point;
        getStartLocation(): Point;
        getId();
        setTouchInfo();
        getLocationInView();
        getPreviousLocation();
    }
    class Event extends Class {
        static TOUCH: number;
        static KEYBOARD: number;
        static ACCELERATION: number;
        static MOUSE: number;
        static CUSTOM: number;

        constructor(type: number);
        getType(): number;
        stopPropagation();
        isStopped(): boolean;
        getCurrentTarget();
    }

    class EventCustom extends Event {
        constructor(eventName: string);
        getEventName(): string;
        setUserData(data);
        getUserData();
    }

    class EventTouch extends Event {
        static MAX_TOUCHES: number;
        static EventCode : {BEGAN: number; MOVED: number; ENDED: number; CANCELLED: number};
        constructor(arr: Array<cc.Touch>);
        /**
         * Returns event code
         * @returns {number}
         */
        getEventCode(): number;

        /**
         * Returns touches of event
         * @returns {Array}
         */
        getTouches() : Array<cc.Touch>;
    }

    class EventMouse extends Event {
        static NONE : number;
        static DOWN : number;
        static UP : number;
        static MOVE : number;
        static SCROLL : number;
        static BUTTON_LEFT : number;
        static BUTTON_RIGHT : number;
        static BUTTON_MIDDLE : number;
        static BUTTON_4 : number;
        static BUTTON_5 : number;
        static BUTTON_6 : number;
        static BUTTON_7 : number;
        static BUTTON_8 : number;
        constructor(eventType: number);
        /**
         * Sets scroll data
         * @param {number} scrollX
         * @param {number} scrollY
         */
        setScrollData(scrollX:number, scrollY:number);
        /**
         * Returns the x axis scroll value
         * @returns {number}
         */
        getScrollX():number;
        /**
         * Returns the y axis scroll value
         * @returns {number}
         */
        getScrollY():number;

        /**
         * Sets cursor location
         * @param {number} x
         * @param {number} y
         */
        setLocation(x:number, y:number);
        /**
         * Returns cursor location
         * @return {cc.Point} location
         */
        getLocation():cc.Point;

        /**
         * Returns the current cursor location in screen coordinates
         * @return {cc.Point}
         */
        getLocationInView(): cc.Point;
        /**
         * Returns the delta distance from the previous location to current location
         * @return {cc.Point}
         */
        getDelta(): cc.Point;

        /**
         * Returns the X axis delta distance from the previous location to current location
         * @return {Number}
         */
        getDeltaX() : number;

        /**
         * Returns the Y axis delta distance from the previous location to current location
         * @return {Number}
         */
        getDeltaY() : number;

        /**
         * Sets mouse button
         * @param {number} button
         */
        setButton(button: number);

        /**
         * Returns mouse button
         * @returns {number}
         */
        getButton(): number;

        /**
         * Returns location X axis data
         * @returns {number}
         */
        getLocationX(): number;

        /**
         * Returns location Y axis data
         * @returns {number}
         */
        getLocationY(): number;

    }

    class EventAcceleration extends Event {
        constructor(acc);
    }

    class EventKeyboard extends Event {
        constructor(keyCode: number, isPressed: boolean);
    }

    class EventDispatcher {
        setEnabled(b: boolean);
        removeAllListeners();
        addEventListenerWithSceneGraphPriority();
        addCustomListener();
        addEventListenerWithFixedPriority();
        removeListeners(node: Node);
        resumeTarget();
        setPriority();
        dispatchEvent();
        pauseTarget();
        removeCustomListeners();
        addListener(l: EventListener, nodeOrPriority: any);
        removeListener(l: EventListener);
        isEnabled() : boolean;
    }
    class EventListener extends Class {
        static UNKNOWN:number;
        static TOUCH_ONE_BY_ONE:number;
        static TOUCH_ALL_AT_ONCE:number;
        static KEYBOARD:number;
        static MOUSE:number;
        static ACCELERATION:number;
        static CUSTOM:number;
        static create(obj: Object):EventListener;
    }

    class ClippingNode extends Node {
        isInverted() : boolean;
        setInverted(b: boolean);
        setStencil(n: Node);
        getAlphaThreshold() : number;
        init(n: Node);
        getStencil() : Node;
        setAlphaThreshold(a: number);

        static create(n?: Node) : ClippingNode;

    }

    class MotionStreak extends Node {
        reset();
        setTexture(t: Texture2D);
        getTexture(): Texture2D;
        tintWithColor(c: Color);
        setBlendFunc(func: {src:number; dst:number});
        setStartingPositionInitialized(b:boolean);
        getBlendFunc(): {src:number; dst:number};
        isStartingPositionInitialized() : boolean;
        isFastMode(): boolean;
        initWithFade(fade: number, minSeg: number, stroke: number, color: Color, sp:string);
        initWithFade(fade: number, minSeg: number, stroke: number, color: Color, sp:Texture2D);
        setFastMode(b: boolean);

        static create(fade: number, minSeg: number, stroke: number, color: Color, sp:string);
        static create(fade: number, minSeg: number, stroke: number, color: Color, sp:Texture2D);
    }

    class DrawNode extends Node {
        drawTriangle(p1: Point,p2: Point,p3: Point,p4: Point);
        getBlendFunc();
        onDraw();
        clear();
        setBlendFunc();
        init();
        drawDot(point: Point, radius: number, color?:Color);
        drawQuadBezier();
        drawCubicBezier();
        drawSegment(from: Point, to: Point, radius: number, color?: Color);
        drawPoly(points: Array<Point>, fillColor: Color, borderWidth: number , borderColor?: Color);
        drawCircle(center: Point, radius: number, angle: number, segments, drawLineToCenter: boolean, lineWidth?: number , color?:Color);

        static create() : DrawNode;
    }

    enum ResolutionPolicy {
        // The entire application is visible in the specified area without trying to preserve the original aspect ratio.
        // Distortion can occur, and the application may appear stretched or compressed.
        EXACT_FIT,
        // The entire application fills the specified area, without distortion but possibly with some cropping,
        // while maintaining the original aspect ratio of the application.
        NO_BORDER,
        // The entire application is visible in the specified area without distortion while maintaining the original
        // aspect ratio of the application. Borders can appear on two sides of the application.
        SHOW_ALL,
        // The application takes the height of the design resolution size and modifies the width of the internal
        // canvas so that it fits the aspect ratio of the device
        // no distortion will occur however you must make sure your application works on different
        // aspect ratios
        FIXED_HEIGHT,
        // The application takes the width of the design resolution size and modifies the height of the internal
        // canvas so that it fits the aspect ratio of the device
        // no distortion will occur however you must make sure your application works on different
        // aspect ratios
        FIXED_WIDTH,

        UNKNOWN
    }


    class GLView {
        setDesignResolutionSize(width:number, height:number, resolutionPolicy:ResolutionPolicy);
    }

    class ScrollView extends Layer {
        isClippingToBounds();
        setContainer(node: cc.Node);
        setContentOffsetInDuration();
        setZoomScaleInDuration();
        setBounceable();
        getDirection();
        getContainer();
        updateTweenAction();
        getZoomScale();
        updateInset();
        initWithViewSize(size: Size);
        pause();
        setDirection(d: number);
        init();
        setContentOffset(offset: cc.Point, animate?: boolean);
        isDragging();
        isTouchEnabled();
        isBounceable();
        setTouchEnabled(bool: boolean);
        getContentOffset() : cc.Point;
        resume();
        setClippingToBounds();
        setViewSize(size: cc.Size);
        getViewSize(): cc.Size;
        maxContainerOffset();
        isTouchMoved();
        isNodeVisible();
        minContainerOffset();
        setZoomScale();
        static create(size?: Size, container?: Node);
    }
    class TableView extends ScrollView {
        updateCellAtIndex(idx: number);
        setVerticalFillOrder(order: number);
        scrollViewDidZoom();
        _updateContentSize();
        getVerticalFillOrder();
        removeCellAtIndex();
        scrollViewDidScroll();
        reloadData();
        insertCellAtIndex();
        cellAtIndex(idx: number) : TableViewCell;
        dequeueCell();
        setDelegate(delegate: any);
        setDataSource(dataSource: Object);
        static create(dataSource?: Object, size?: Size, container?: Node);
    }
    class TableViewCell extends Node {
        reset();
        getIdx() : number;
        setIdx(idx: number);
    }
    class BuilderReader {
        static load(fileName:string, owner?:Object, parentSize?:Size);
    }


    class BuilderAnimationManager {
        getRunningSequenceName():string;

        runAnimationsForSequenceNamed(seq:string, reset?:boolean);

        setCompletedAnimationCallback(obj:Object, func:Function);

        getLastCompletedSequenceName():string;
        moveAnimationsFromNode(fromNode: cc.Node, toNode: cc.Node);
        setAutoPlaySequenceId(id: number);
        getDocumentCallbackNames();
        actionForSoundChannel();
        setBaseValue();
        getDocumentOutletNodes();
        setRootNode();
        runAnimationsForSequenceNamedTweenDuration();
        addDocumentOutletName();
        getRootContainerSize();
        setDocumentControllerName();
        setObject();
        getContainerSize();
        actionForCallbackChannel();
        getDocumentOutletNames();
        addDocumentCallbackControlEvents();
        init();
        getKeyframeCallbacks();
        getDocumentCallbackControlEvents();
        setRootContainerSize();
        runAnimationsForSequenceIdTweenDuration();
        getAutoPlaySequenceId();
        addDocumentCallbackName();
        getRootNode();
        addDocumentOutletNode();
        setDelegate();
        getSequenceDuration(seq: string): number;
        addDocumentCallbackNode();
        runAnimationsForSequenceNamed();
        getSequenceId(seq: string) : number;
        setCallFunc();
        getDocumentCallbackNodes();
        setSequences();
        debug();
        getDocumentControllerName();
    }

    export class SpriteFrame {
        clone();
        setRotated();
        setTexture();
        getOffset();
        setRectInPixels();
        getTexture() : Texture2D;
        getRect() : Rect;
        setOffsetInPixels();
        getRectInPixels();
        setOriginalSize();
        getOriginalSizeInPixels();
        setOriginalSizeInPixels();
        setOffset();
        initWithTexture();
        isRotated();
        initWithTextureFilename();
        setRect();
        getOffsetInPixels();
        getOriginalSize();
        static create(fileName: string, rect: Rect, rotated?: boolean, offset?: Point, originalSize?: Size) : SpriteFrame;
        static createWithTexture(texture: Texture2D, rect: Rect, rotated?:boolean, offset?: Point, originalSize?:Size) : SpriteFrame;
    }

    class Scale9Sprite extends Node {
        resizableSpriteWithCapInsets();
        setInsetBottom();
        initWithSpriteFrameName();
        setInsetTop();
        init();
        setPreferredSize();
        setSpriteFrame();
        initWithBatchNode();
        getInsetBottom();
        getCapInsets();
        updateWithBatchNode();
        getInsetRight();
        getOriginalSize();
        initWithFile();
        getInsetTop();
        setInsetLeft();
        initWithSpriteFrame();
        getPreferredSize();
        setCapInsets();
        getInsetLeft();
        setInsetRight();

        static create(): Scale9Sprite;
        static createWithSpriteFrameName(name: string) : Scale9Sprite;
        static createWithSpriteFrame(spFrame: SpriteFrame) : Scale9Sprite;
    }

    class Texture2D {
        getMaxT();
        getStringForFormat();
        initWithImage();
        getMaxS();
        releaseGLTexture();
        hasPremultipliedAlpha();
        initWithMipmaps();
        getPixelsHigh();
        getBitsPerPixelForFormat();
        getName();
        initWithString();
        setMaxT();
        drawInRect();
        getContentSize() : Size;
        setAliasTexParameters();
        setAntiAliasTexParameters();
        generateMipmap();
        getDescription();
        getPixelFormat();
        setGLProgram();
        getContentSizeInPixels();
        getPixelsWide();
        drawAtPoint();
        getGLProgram();
        hasMipmaps();
        setMaxS();

        static setDefaultAlphaPixelFormat();
        static getDefaultAlphaPixelFormat();
        static PVRImagesHavePremultipliedAlpha();
    }

    class TextureCache {
        reloadTexture();
        unbindAllImageAsync();
        removeTextureForKey();
        removeAllTextures();
        addImageAsync();
        getDescription();
        getCachedTextureInfo();
        addImage(fileName: string) : Texture2D;
        unbindImageAsync();
        getTextureForKey();
        removeUnusedTextures();
        removeTexture();
        waitForQuit();
    }
    class CallFunc {
        static create(func:Function, _this?:Object);
    }
    class EaseExponentialOut {
        static create(action:Action);
    }
    class EaseBackOut {
        static create(action:Action);
    }
    class EaseBackIn {
        static create(action:Action);
    }

    function pSub(p1:Point, p2:Point):Point;

    function pAdd(p1:Point, p2:Point):Point;

    function pLerp(p1:Point, p2:Point, alpha:number):Point;

    function pDistanceSQ(p1:Point, p2:Point) : number;
    function pDistance(p1:Point, p2:Point): number;
    function pNeg();
    function pMult(v: Point, r: Number): Point;
    function pMidpoint(): Point;
    function pDot();
    function pCross();
    function pPerp();
    function pRPerp();
    function pProject();
    function pRotate();
    function pNormalize(p: Point): Point;
    function pClamp();
    function pLengthSQ();
    function pLength(v: Point): number;

    var COCOS2D_DEBUG:number;

    class ParticleSystem extends Node {
        getStartSizeVar();
        getTexture();
        isFull();
        getBatchNode();
        getStartColor();
        getPositionType();
        setPosVar();
        getEndSpin();
        setRotatePerSecondVar();
        getStartSpinVar();
        getRadialAccelVar();
        init();
        getEndSizeVar();
        setRotation();
        setTangentialAccel();
        setScaleY();
        setScaleX();
        getRadialAccel();
        setStartRadius();
        setRotatePerSecond();
        setEndSize();
        getGravity();
        getTangentialAccel();
        setEndRadius();
        getSpeed();
        getAngle();
        setEndColor();
        setStartSpin();
        setDuration();
        initWithTotalParticles();
        setTexture();
        getPosVar();
        updateWithNoTime();
        isBlendAdditive();
        getSpeedVar();
        setPositionType();
        stopSystem();
        getSourcePosition();
        setLifeVar();
        setTotalParticles();
        setEndColorVar();
        updateQuadWithParticle();
        getAtlasIndex();
        getStartSize();
        setStartSpinVar();
        resetSystem();
        setAtlasIndex();
        setTangentialAccelVar();
        setEndRadiusVar();
        getEndRadius();
        isOpacityModifyRGB();
        isActive();
        setRadialAccelVar();
        setStartSize();
        setSpeed();
        getStartSpin();
        getRotatePerSecond();
        initParticle();
        setEmitterMode();
        getDuration() : number;
        setSourcePosition();
        getEndSpinVar();
        setBlendAdditive();
        setLife();
        setAngleVar();
        setRotationIsDir();
        setEndSizeVar();
        setAngle();
        setBatchNode();
        getTangentialAccelVar();
        getEmitterMode();
        setEndSpinVar();
        initWithFile();
        getAngleVar();
        setStartColor();
        getRotatePerSecondVar();
        getEndSize();
        getLife();
        setSpeedVar();
        setAutoRemoveOnFinish(b:boolean);
        setGravity();
        postStep();
        setEmissionRate();
        getEndColorVar();
        getRotationIsDir();
        setScale();
        getEmissionRate();
        getEndColor();
        getLifeVar();
        setStartSizeVar();
        setOpacityModifyRGB();
        addParticle();
        getStartRadius();
        getParticleCount();
        getStartRadiusVar();
        getBlendFunc();
        setStartColorVar();
        setEndSpin();
        setRadialAccel();
        initWithDictionary();
        isAutoRemoveOnFinish();
        getTotalParticles();
        setStartRadiusVar();
        setBlendFunc();
        getEndRadiusVar();
        getStartColorVar();
    }

    class ParticleSystemQuad extends ParticleSystem {
        setDisplayFrame(sp: SpriteFrame);
        setTextureWithRect(t: Texture2D, r: Rect);

        static create(dict?:any);
        static createWithTotalParticles(n: number);
    }

    //#region cocos2d/CCCommon.js
    /**
     * copy an new object
     * @function
     * @param {object|Array} obj source object
     * @return {Array|object}
     */
    function clone(obj:any);


    /**
     * Function added for JS bindings compatibility. Not needed in cocos2d-html5.
     * @function
     * @param {object} jsobj subclass
     * @param {object} klass superclass
     */
    function associateWithNative(jsobj:any, superclass:any);

    /**
     * Is show bebug info on web page
     * @constant
     * @type {Boolean}
     */
    var IS_SHOW_DEBUG_ON_PAGE:boolean;

    function log(...any);
    function error(...any);
    function assert(condition: boolean, ...any);
    function warn(...any);


    /**
     * Pop out a message box
     * @param {String} message
     * @function
     */
    function MessageBox(message:string);

    /**
     * Output Assert message.
     * @function
     * @param {Boolean} cond If cond is false, assert.
     * @param {String} message
     */
    function Assert(cond:boolean, message:string);

    /**
     * Update Debug setting.
     * @function
     */
    function initDebugSetting();

    // Enum the language type supportted now
    /**
     * English language code
     * @constant
     * @type Number
     */
    var LANGUAGE_ENGLISH:number;

    /**
     * Chinese language code
     * @constant
     * @type Number
     */
    var LANGUAGE_CHINESE:number;

    /**
     * French language code
     * @constant
     * @type Number
     */
    var LANGUAGE_FRENCH:number;

    /**
     * Italian language code
     * @constant
     * @type Number
     */
    var LANGUAGE_ITALIAN:number;

    /**
     * German language code
     * @constant
     * @type Number
     */
    var LANGUAGE_GERMAN:number;

    /**
     * Spanish language code
     * @constant
     * @type Number
     */
    var LANGUAGE_SPANISH:number;

    /**
     * Russian language code
     * @constant
     * @type Number
     */
    var LANGUAGE_RUSSIAN:number;
    //#endregion cocos2d/CCCommon.js

    //#region cocos2d/CCDirector.js
    /**
     * <p>
     *    Class that creates and handle the main Window and manages how<br/>
     *    and when to execute the Scenes.<br/>
     *    <br/>
     *    The cc.Director is also responsible for:<br/>
     *      - initializing the OpenGL context<br/>
     *      - setting the OpenGL pixel format (default on is RGB565)<br/>
     *      - setting the OpenGL pixel format (default on is RGB565)<br/>
     *      - setting the OpenGL buffer depth (default one is 0-bit)<br/>
     *      - setting the projection (default one is 3D)<br/>
     *      - setting the orientation (default one is Protrait)<br/>
     *      <br/>
     *    Since the cc.Director is a singleton, the standard way to use it is by calling:<br/>
     *      - cc.Director.getInstance().methodName(); <br/>
     *    <br/>
     *    The CCDirector also sets the default OpenGL context:<br/>
     *      - GL_TEXTURE_2D is enabled<br/>
     *      - GL_VERTEX_ARRAY is enabled<br/>
     *      - GL_COLOR_ARRAY is enabled<br/>
     *      - GL_TEXTURE_COORD_ARRAY is enabled<br/>
     * </p>
     * @class
     * @extends cc.Class
     */
    export class Director extends Class {
        getScheduler():Scheduler;

        /**
         * returns a shared instance of the director
         * @function
         * @return {cc.Director}
         */
        static getInstance():Director;

        /**
         * initializes cc.Director
         * @return {Boolean}
         */
        init():boolean;

        /**
         *  Draw the scene. This method is called every frame. Don't call it manually.
         */
        drawScene();

        /**
         * end director
         */
        end();

        /**
         * <p>
         *     returns the size of the OpenGL view in points.<br/>
         *     It takes into account any possible rotation (device orientation) of the window
         * </p>
         * @return {cc.Size}
         */
        getWinSize():Size;

        /**
         * Replaces the running scene with a new one. The running scene is terminated. ONLY call it if there is a running scene.
         * @param {cc.Scene} scene
         */
        replaceScene(scene:Scene);

        /**
         * <p>
         *    Enters the Director's main loop with the given Scene.<br/>
         *    Call it to run only your FIRST scene.<br/>
         *    Don't call it if there is already a running scene.
         * </p>
         * @param {cc.Scene} scene
         */
        runWithScene(scene:Scene);

        /**
         * Get the FPS value
         * @return {Number}
         */
        getAnimationInterval():number;

        /**
         * Whether or not to display the FPS on the bottom-left corner
         * @return {Boolean}
         */
        isDisplayStats():boolean;

        /**
         * Display the FPS on the bottom-left corner
         * @param displayFPS
         */
        setDisplayStats(displayStats:boolean);

        /**
         * set Animation Interval
         * @param {Number} value
         */
        setAnimationInterval(value:number);

        getTextureCache(): TextureCache;
    }
    //#endregion cocos2d/CCDirector.js

    //#region cocos2d/CCDrawingPrimitives.js
    /**
     * <p>
     *   Drawing primitives Utility Class. this class is base class, it contain some render type version: Canvas, WebGL, DOM.<br/>
     *   this class contain some primitive Drawing Method: <br/>
     *     - drawPoint<br/>
     *     - drawLine<br/>
     *     - drawPoly<br/>
     *     - drawCircle<br/>
     *     - drawQuadBezier<br/>
     *     - drawCubicBezier<br/>
     *     You can change the color, width and other property by calling these WebGL API:<br/>
     *     glColor4ub(), glLineWidth(), glPointSize().<br/>
     * </p>
     * @class
     * @extends cc.Class
     * @warning These functions draws the Line, Point, Polygon, immediately. They aren't batched. <br/>
     *   If you are going to make a game that depends on these primitives, I suggest creating a batch.
     */
    export class DrawingPrimitive extends Class {
        /**
         * set render context of drawing primitive
         * @param context
         */
        setRenderContext(context:CanvasRenderingContext2D);

        /**
         * returns render context of drawing primitive
         * @return {CanvasContext}
         */
        getRenderContext():CanvasRenderingContext2D;

        /**
         * Constructor
         * @param {CanvasContext} renderContext
         */
        constructor(renderContext:CanvasRenderingContext2D);

        /**
         * draws a point given x and y coordinate measured in points
         * @param {cc.Point} point
         */
        drawPoint(point:Point);

        /**
         * draws an array of points.
         * @param {Array} points point of array
         * @param {Number} numberOfPoints
         */
        drawPoints(points:Point[], numberOfPoints:number);

        /**
         * draws a line given the origin and destination point measured in points
         * @param {cc.Point} origin
         * @param {cc.Point} destination
         */
        drawLine(origin:Point, destination:Point);

        /**
         * draws a rectangle given the origin and destination point measured in points.
         * @param {cc.Point} origin
         * @param {cc.Point} destination
         */
        drawRect(origin:Point, destination:Point);

        /**
         * draws a solid rectangle given the origin and destination point measured in points.
         * @param {cc.Point} origin
         * @param {cc.Point} destination
         * @param {cc.Color} color
         */
        drawSolidRect(origin:Point, destination:Point, color:Color);

        /**
         * draws a poligon given a pointer to cc.Point coordiantes and the number of vertices measured in points.
         * @param {Array} vertices a pointer to cc.Point coordiantes
         * @param {Number} numOfVertices the number of vertices measured in points
         * @param {Boolean} closePolygon The polygon can be closed or open
         * @param {Boolean} fill The polygon can be closed or open and optionally filled with current color
         */
        drawPoly(vertices:Point[], numOfVertices:number, closePolygon:boolean, fill:boolean);

        /**
         * draws a solid polygon given a pointer to CGPoint coordiantes, the number of vertices measured in points, and a color.
         * @param {Array} poli
         * @param {Number} numberOfPoints
         * @param {cc.Color} color
         */
        drawSolidPoly(poli:Point[], numberOfPoints:number, color:Color);

        /**
         * draws a circle given the center, radius and number of segments.
         * @param {cc.Point} center center of circle
         * @param {Number} radius
         * @param {Number} angle angle in radians
         * @param {Number} segments
         * @param {Boolean} drawLineToCenter
         */
        drawCircle(center:Point, radius:number, angle:number, segments:number, drawLineToCenter:boolean);

        /**
         * draws a quad bezier path
         * @param {cc.Point} origin
         * @param {cc.Point} control
         * @param {cc.Point} destination
         * @param {Number} segments
         */
        drawQuadBezier(origin:Point, control:Point, destination:Point, segments:number);

        /**
         * draws a cubic bezier path
         * @param {cc.Point} origin
         * @param {cc.Point} control1
         * @param {cc.Point} control2
         * @param {cc.Point} destination
         * @param {Number} segments
         */
        drawCubicBezier(origin:Point, control1:Point, control2:Point, destination:Point, segments:number);

        /**
         * draw a catmull rom line
         * @param {cc.PointArray} points
         * @param {Number} segments
         */
        drawCatmullRom(points:Point[], segments:number);

        /**
         * draw a cardinal spline path
         * @param {cc.PointArray} config
         * @param {Number} tension
         * @param {Number} segments
         */
        drawCardinalSpline(config:Point[], tension:number, segments:number);

        // FIXME: Typescript doesn't support abstract classes so we have to put the common
        // methods from DrawingPrimitiveCanvas and DrawingPrimitiveWebGL here for convenience

        /**
         * set the drawing color with 4 unsigned bytes
         * @param {Number} r red value (0 to 255)
         * @param {Number} r green value (0 to 255)
         * @param {Number} r blue value (0 to 255)
         * @param {Number} a Alpha value (0 to 255)
         */
        setDrawColor(r:number, g:number, b:number, a:number);

        // ENDFIXME
    }

    /**
     * Canvas of DrawingPrimitive implement version
     * @class
     * @extends cc.DrawingPrimitive
     */
    export class DrawingPrimitiveCanvas extends DrawingPrimitive {
    }

    /**
     * Canvas of DrawingPrimitive implement version
     * @class
     * @extends cc.DrawingPrimitive
     */
    export class DrawingPrimitiveWebGL extends DrawingPrimitive {
    }
    //#endregion cocos2d/CCDrawingPrimitives.js

    //#region cocos2d/CCLoader.js
    /**
     * A class to pre-load resources before engine start game main loop.
     * @class
     * @extends cc.Scene
     */
    export class Loader extends Class {
        static preload(resources:any[], selector:() => void, target:Node):Loader;
    }

    /**
     * Used to display the loading screen
     * @class
     * @extends cc.Scene
     */
    export class LoaderScene extends Scene {
        static preload(resources:any[], selector:() => void, target:Node):LoaderScene;
    }
    //#endregion cocos2d/CCLoader.js

    //#region cocos2d/CCScheduler.js
    /**
     * <p>
     *    Scheduler is responsible of triggering the scheduled callbacks.<br/>
     *    You should not use NSTimer. Instead use this class.<br/>
     *    <br/>
     *    There are 2 different types of callbacks (selectors):<br/>
     *       - update selector: the 'update' selector will be called every frame. You can customize the priority.<br/>
     *       - custom selector: A custom selector will be called every frame, or with a custom interval of time<br/>
     *       <br/>
     *    The 'custom selectors' should be avoided when possible. It is faster, and consumes less memory to use the 'update selector'. *
     * </p>
     * @class
     * @extends cc.Class
     *
     * @example
     * //register a schedule to scheduler
     * cc.Director.getInstance().getScheduler().scheduleSelector(selector, this, interval, !this._isRunning);
     */
    export class Scheduler extends Class {
        setTimeScale(scale: number);
        performFunctionInCocosThread(func: Function);
        getTimeScale(): number;
    }
    //#endregion cocos2d/CCScheduler.js

    //#region cocos2d/actions/CCAction.js
    /**
     * Base class for cc.Action objects.
     * @class
     * @extends cc.Class
     */
    export class Action extends Class {
        clone():Action;
        startWithTarget(target: cc.Node);
        setOriginalTarget(target: cc.Node);
        getOriginalTarget(): cc.Node;
        stop();
        update(dt: number);
        getTarget(): cc.Node;
        step(dt: number);
        setTag(tag: number);
        getTag(): number;
        setTarget(target: cc.Node);
        isDone(): boolean;
        reverse();
    }

    /**
     * <p>Base class actions that do have a finite time duration.<br/>
     * Possible actions: <br/>
     * - An action with a duration of 0 seconds<br/>
     * - An action with a duration of 35.5 seconds  </p>

     * Infinite time actions are valid
     * @class
     * @extends cc.Action
     */
    export class FiniteTimeAction extends Action {
    }
    //#endregion cocos2d/actions/CCAction.js

    //#region cocos2d/actions/CCActionInterval.js
    /**
     * <p> An interval action is an action that takes place within a certain period of time. <br/>
     * It has an start time, and a finish time. The finish time is the parameter<br/>
     * duration plus the start time.</p>
     *
     * <p>These CCActionInterval actions have some interesting properties, like:<br/>
     * - They can run normally (default)  <br/>
     * - They can run reversed with the reverse method   <br/>
     * - They can run with the time altered with the Accelerate, AccelDeccel and Speed actions. </p>
     *
     * <p>For example, you can simulate a Ping Pong effect running the action normally and<br/>
     * then running it again in Reverse mode. </p>
     *
     * @class
     * @extends cc.FiniteTimeAction
     * @Example
     * // example
     * var pingPongAction = cc.Sequence.create(action, action.reverse());
     */
    export class ActionInterval extends FiniteTimeAction {
    }

    /** Runs actions sequentially, one after another
     * @class
     * @extends cc.ActionInterval
     */
    export class Sequence extends ActionInterval {
        /** helper constructor to create an array of sequenceable actions
         * @param {Array|cc.FiniteTimeAction} tempArray
         * @return {cc.FiniteTimeAction}
         * @example
         * // example
         * // create sequence with actions
         * var seq = cc.Sequence.create(act1, act2);
         *
         * // create sequence with array
         * var seq = cc.Sequence.create(actArray);
         */
        static create(...rest:FiniteTimeAction[]):Sequence;
    }

    /** Repeats an action a number of times.
     * To repeat an action forever use the CCRepeatForever action.
     * @class
     * @extends cc.ActionInterval
     */
    export class Repeat extends ActionInterval {
        /** creates a CCRepeat action. Times is an unsigned integer between 1 and pow(2,30)
         * @param {cc.FiniteTimeAction} action
         * @param {Number} times
         * @return {cc.Repeat}
         * @example
         * // example
         * var rep = cc.Repeat.create(cc.Sequence.create(jump2, jump1), 5);
         */
        static create(action:FiniteTimeAction, times:number):Repeat;
    }

    /**  Repeats an action for ever.  <br/>
     * To repeat the an action for a limited number of times use the Repeat action. <br/>
     * @warning This action can't be Sequenceable because it is not an IntervalAction
     * @class
     * @extends cc.ActionInterval
     */
    export class RepeatForever extends ActionInterval {
        /**
         * Repeat the acton forever
         * @param action
         * @return {cc.RepeatForever}
         * @example
         * // example
         * var repeat = cc.RepeatForever.create(cc.RotateBy.create(1.0, 360));
         */
        static create(action:FiniteTimeAction):RepeatForever;
    }

    /** Spawn a new action immediately
     * @class
     * @extends cc.ActionInterval
     */
    export class Spawn extends ActionInterval {
        /**
         * @param {Array|cc.FiniteTimeAction}tempArray
         * @return {cc.FiniteTimeAction}
         * @example
         * // example
         * var action = cc.Spawn.create(cc.JumpBy.create(2, cc.p(300, 0), 50, 4), cc.RotateBy.create(2, 720));
         */
        static create(...rest:FiniteTimeAction[]):Spawn;
    }

    /** Rotates a cc.Node object to a certain angle by modifying it's
     * rotation attribute. <br/>
     * The direction will be decided by the shortest angle.
     * @class
     * @extends cc.ActionInterval
     */
    export class RotateTo extends ActionInterval {
        /**
         * creates the action with separate rotation angles
         * @param {Number} duration duration in seconds
         * @param {Number} deltaAngleX deltaAngleX in degrees.
         * @param {Number} deltaAngleY deltaAngleY in degrees.
         * @return {cc.RotateTo}
         * @example
         * // example
         * var rotateTo = cc.RotateTo.create(2, 61.0);
         */
        static create(duration:number, deltaAngleX:number, deltaAngleY?:number):RotateTo;
    }

    /** Rotates a cc.Node object clockwise a number of degrees by modifying it's rotation attribute.
     * @class
     * @extends  cc.ActionInterval
     */
    export class RotateBy extends ActionInterval {
        /**
         * @param {Number} duration druation in seconds
         * @param {Number} deltaAngleX deltaAngleX in degrees
         * @param {Number} deltaAngleY deltaAngleY in degrees
         * @return {cc.RotateBy}
         * @example
         * // example
         * var actionBy = cc.RotateBy.create(2, 360);
         */
        static create(duration:number, deltaAngleX:number, deltaAngleY:number):RotateBy;

        static create(duration:number, angle:number):RotateBy;
    }

    /** Moves a cc.Node object to the position x,y. x and y are absolute coordinates by modifying it's position attribute.
     * @class
     * @extends cc.ActionInterval
     */
    export class MoveTo extends ActionInterval {
        /**
         * @param {Number} duration duration in seconds
         * @param {cc.Point} position
         * @return {cc.MoveTo}
         * @example
         * // example
         * var actionTo = cc.MoveTo.create(2, cc.p(windowSize.width - 40, windowSize.height - 40));
         */
        static create(duration:number, position:Point):MoveTo;
    }

    /** Moves a cc.Node object x,y pixels by modifying it's position attribute. <br/>
     * x and y are relative to the position of the object. <br/>
     * @class
     * @extends cc.MoveTo
     */
    export class MoveBy extends MoveTo {
        /**
         * @param {Number} duration duration in seconds
         * @param {cc.Point} position
         * @return {cc.MoveBy}
         * @example
         * // example
         * var actionBy = cc.MoveBy.create(2, cc.p(80, 80));
         */
        static create(duration:number, position:Point):MoveBy;
    }

    /** Skews a cc.Node object to given angles by modifying it's skewX and skewY attributes
     * @class
     * @extends cc.ActionInterval
     */
    export class SkewTo extends ActionInterval {
        /**
         * @param {Number} t time in seconds
         * @param {Number} sx
         * @param {Number} sy
         * @return {cc.SkewTo}
         * @example
         * // example
         * var actionTo = cc.SkewTo.create(2, 37.2, -37.2);
         */
        static create(t:number, sx:number, sy:number):SkewTo;
    }

    /** Skews a cc.Node object by skewX and skewY degrees
     * @class
     * @extends cc.SkewTo
     */
    export class SkewBy extends SkewTo {
        /**
         * @param {Number} t time in seconds
         * @param {Number} sx sx skew in degrees for X axis
         * @param {Number} sy sy skew in degrees for Y axis
         * @return {cc.SkewBy}
         * @example
         * // example
         * var actionBy = cc.SkewBy.create(2, 0, -90);
         */
        static create(t:number, sx:number, sy:number):SkewBy;
    }

    /**  Moves a cc.Node object simulating a parabolic jump movement by modifying it's position attribute.
     * @class
     * @extends cc.ActionInterval
     */
    export class JumpBy extends ActionInterval {
        /**
         * @param {Number} duration
         * @param {cc.Point} position
         * @param {Number} height
         * @param {Number} jumps
         * @return {cc.JumpBy}
         * @example
         * // example
         * var actionBy = cc.JumpBy.create(2, cc.p(300, 0), 50, 4);
         */
        static create(duration:number, position:Point, height:number, jumps:number):JumpBy;
    }

    /**  Moves a cc.Node object to a parabolic position simulating a jump movement by modifying it's position attribute.
     * @class
     * @extends cc.JumpBy
     */
    export class JumpTo extends JumpBy {
        /**
         * @param {Number} duration
         * @param {cc.Point} position
         * @param {Number} height
         * @param {Number} jumps
         * @return {cc.JumpTo}
         * @example
         * // example
         * var actionTo = cc.JumpTo.create(2, cc.p(300, 300), 50, 4);
         */
        static create(duration:number, position:Point, height:number, jumps:number):JumpTo;
    }

    /** An action that moves the target with a cubic Bezier curve by a certain distance.
     * @class
     * @extends cc.ActionInterval
     */
    export class BezierBy extends ActionInterval {
        /**
         * @param {Number} t time in seconds
         * @param {Array} c Array of points
         * @return {cc.BezierBy}
         * @example
         * // example
         * var bezier = [cc.p(0, windowSize.height / 2), cc.p(300, -windowSize.height / 2), cc.p(300, 100)];
         * var bezierForward = cc.BezierBy.create(3, bezier);
         *
         */
        static create(t:number, c:Point[]):BezierBy;
    }

    /** An action that moves the target with a cubic Bezier curve to a destination point.
     * @class
     * @extends cc.BezierBy
     */
    export class BezierTo extends BezierBy {
        /**
         * @param {Number} t
         * @param {Array} c array of points
         * @return {cc.BezierTo}
         * @example
         * // example
         * var bezier = [cc.p(0, windowSize.height / 2), cc.p(300, -windowSize.height / 2), cc.p(300, 100)];
         * var bezierTo = cc.BezierTo.create(2, bezier);
         */
        static create(t:number, c:Point[]):BezierTo;

    }

    /** Scales a cc.Node object to a zoom factor by modifying it's scale attribute.
     * @warning This action doesn't support "reverse"
     * @class
     * @extends cc.ActionInterval
     */
    export class ScaleTo extends ActionInterval {
        /**
         * @param {Number} duration
         * @param {Number} sx  scale parameter in X
         * @param {Number|Null} sy scale parameter in Y, if Null equal to sx
         * @return {cc.ScaleTo}
         * @example
         * // example
         * // It scales to 0.5 in both X and Y.
         * var actionTo = cc.ScaleTo.create(2, 0.5);
         *
         * // It scales to 0.5 in x and 2 in Y
         * var actionTo = cc.ScaleTo.create(2, 0.5, 2);
         */
        static create(duration:number, sx:number, sy?:number):ScaleTo;
    }

    /** Scales a cc.Node object a zoom factor by modifying it's scale attribute.
     * @class
     * @extends cc.ScaleTo
     */
    export class ScaleBy extends ScaleTo {
        /**
         * @param {Number} duration duration in seconds
         * @param {Number} sx sx  scale parameter in X
         * @param {Number|Null} sy sy scale parameter in Y, if Null equal to sx
         * @return {cc.ScaleBy}
         * @example
         * // example without sy, it scales by 2 both in X and Y
         * var actionBy = cc.ScaleBy.create(2, 2);
         *
         * //example with sy, it scales by 0.25 in X and 4.5 in Y
         * var actionBy2 = cc.ScaleBy.create(2, 0.25, 4.5);
         */
        static create(duration:number, sx:number, sy?:number):ScaleBy;
    }

    /** Blinks a cc.Node object by modifying it's visible attribute
     * @class
     * @extends cc.ActionInterval
     */
    export class Blink extends ActionInterval {
        /**
         * @param {Number} duration  duration in seconds
         * @param blinks blinks in times
         * @return {cc.Blink}
         * @example
         * // example
         * var action = cc.Blink.create(2, 10);
         */
        static create(duration:number, blinks:number):Blink;
    }

    /** Fades In an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 0 to 255.<br/>
     * The "reverse" of this action is FadeOut
     * @class
     * @extends cc.ActionInterval
     */
    export class FadeIn extends ActionInterval {
        /**
         * @param {Number} duration duration in seconds
         * @return {cc.FadeIn}
         * @example
         * //example
         * var action = cc.FadeIn.create(1.0);
         */
        static create(duration:number):FadeIn;
    }

    /** Fades Out an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from 255 to 0.
     * The "reverse" of this action is FadeIn
     * @class
     * @extends cc.ActionInterval
     */
    export class FadeOut extends ActionInterval {
        /**
         * @param {Number} d  duration in seconds
         * @return {cc.FadeOut}
         * @example
         * // example
         * var action = cc.FadeOut.create(1.0);
         */
        static create(d:number):FadeOut;
    }

    /** Fades an object that implements the cc.RGBAProtocol protocol. It modifies the opacity from the current value to a custom one.
     * @warning This action doesn't support "reverse"
     * @class
     * @extends cc.ActionInterval
     */
    export class FadeTo extends ActionInterval {
        /**
         * @param {Number} duration
         * @param {Number} opacity 0-255, 0 is transparent
         * @return {cc.FadeTo}
         * @example
         * // example
         * var action = cc.FadeTo.create(1.0, 0);
         */
        static create(duration:number, opacity:number):FadeTo;
    }

    /** Tints a cc.Node that implements the cc.NodeRGB protocol from current tint to a custom one.
     * @warning This action doesn't support "reverse"
     * @class
     * @extends cc.ActionInterval
     */
    export class TintTo extends ActionInterval {
        /**
         * @param {Number} duration
         * @param {Number} red 0-255
         * @param {Number} green  0-255
         * @param {Number} blue 0-255
         * @return {cc.TintTo}
         * @example
         * // example
         * var action = cc.TintTo.create(2, 255, 0, 255);
         */
        static create(duration:number, red:number, green:number, blue:number):TintTo;
    }

    /**  Tints a cc.Node that implements the cc.NodeRGB protocol from current tint to a custom one.
     * @class
     * @extends cc.ActionInterval
     */
    export class TintBy extends ActionInterval {
        /**
         * @param {Number} duration  duration in seconds
         * @param {Number} deltaRed
         * @param {Number} deltaGreen
         * @param {Number} deltaBlue
         * @return {cc.TintBy}
         * @example
         * // example
         * var action = cc.TintBy.create(2, -127, -255, -127);
         */
        static create(duration:number, deltaRed:number, deltaGreen:number, deltaBlue:number):TintBy;
    }

    /** Delays the action a certain amount of seconds
     * @class
     * @extends cc.ActionInterval
     */
    export class DelayTime extends ActionInterval {
        /**
         * @param {Number} d duration in seconds
         * @return {cc.DelayTime}
         * @example
         * // example
         * var delay = cc.DelayTime.create(1);
         */
        static create(d:number):DelayTime;
    }

    /**
     * Executes an action in reverse order, from time=duration to time=0
     * @warning Use this action carefully. This action is not
     * sequenceable. Use it as the default "reversed" method
     * of your own actions, but using it outside the "reversed"
     * scope is not recommended.
     * @class
     * @extends cc.ActionInterval
     */
    export class ReverseTime extends ActionInterval {
        /**
         * @param {cc.FiniteTimeAction} action
         * @return {cc.ReverseTime}
         * @example
         * // example
         *  var reverse = cc.ReverseTime.create(this);
         */
        static create(action:FiniteTimeAction):ReverseTime;
    }

    /**  Animates a sprite given the name of an Animation
     * @class
     * @extends cc.ActionInterval
     */
    export class Animate extends ActionInterval {
        /**
         * create the animate with animation
         * @param {cc.Animation} animation
         * @return {cc.Animate}
         * @example
         * // example
         * // create the animation with animation
         * var anim = cc.Animate.create(dance_grey);
         */
        static create(animation:Animation):Animate;
    }
    //#endregion cocos2d/actions/CCActionInterval.js

    //#region cocos2d/actions/CCActionManager.js
    export class ActionManager extends Class {
        getActionByTag();
        removeActionByTag();
        removeAllActions();
        addAction();
        resumeTarget();
        update(dt:number);
        getNumberOfRunningActionsInTarget(target : cc.Node);
        removeAllActionsFromTarget();
        resumeTargets();
        removeAction();
        pauseTarget();
        pauseAllRunningActions();
    }

    /**
     * <p>
     *     Overrides the target of an action so that it always runs on the target<br/>
     *     specified at action creation rather than the one specified by runAction.
     * </p>
     * @class
     * @extends cc.ActionInterval
     */
    export class TargetedAction extends ActionInterval {
    }
    //#endregion cocos2d/actions/CCActionManager.js

    //#region cocos2d/base_nodes/CCNode.js
    /** <p>cc.Node is the main element. Anything thats gets drawn or contains things that get drawn is a cc.Node.<br/>
     The most popular cc.Nodes are: cc.Scene, cc.Layer, cc.Sprite, cc.Menu. (WebGL implement)<br/></p>

     <p>The main features of a cc.Node are: <br/>
     - They can contain other cc.Node nodes (addChild, getChildByTag, removeChild, etc) <br/>
     - They can schedule periodic callback (schedule, unschedule, etc) <br/>
     - They can execute actions (runAction, stopAction, etc) <br/></p>

     <p>Some cc.Node nodes provide extra functionality for them or their children.</p>

     <p>Subclassing a cc.Node usually means (one/all) of: <br/>
     - overriding init to initialize resources and schedule callbacks  <br/>
     - create callbacks to handle the advancement of time <br/>
     - overriding draw to render the node   <br/></p>

     <p>Features of cc.Node: <br/>
     - position  <br/>
     - scale (x, y) <br/>
     - rotation (in degrees, clockwise) <br/>
     - cc.Camera (an interface to gluLookAt ) <br/>
     - cc.GridBase (to do mesh transformations)  <br/>
     - anchor point<br/>
     - size <br/>
     - visible<br/>
     - z-order <br/>
     - openGL z position <br/></P>

     <p> Default values: <br/>
     - rotation: 0 <br/>
     - position: (x=0,y=0) <br/>
     - scale: (x=1,y=1) <br/>
     - contentSize: (x=0,y=0)<br/>
     - anchorPoint: (x=0,y=0)<br/></p>

     <p> Limitations:<br/>
     - A cc.Node is a "void" object. It doesn't have a texture <br/></P>

     <p>Order in transformations with grid disabled <br/>
     -# The node will be translated (position)  <br/>
     -# The node will be rotated (rotation)<br/>
     -# The node will be scaled (scale)  <br/>
     -# The node will be moved according to the camera values (camera) <br/></p>

     <p>Order in transformations with grid enabled<br/>
     -# The node will be translated (position)<br/>
     -# The node will be rotated (rotation) <br/>
     -# The node will be scaled (scale) <br/>
     -# The grid will capture the screen <br/>
     -# The node will be moved according to the camera values (camera) <br/>
     -# The grid will render the captured screen <br/></P>

     <p>Camera:  <br/>
     - Each node has a camera. By default it points to the center of the cc.Node.</P>
     * @class
     * @extends cc.Class
     * @example
     * // example
     * cc.Sprite = cc.Node.extend({});
     * cc.Sprite.initWithImage = function(){
     * };
     */
    export class Node extends Class {
        x:number;
        y:number;
        width:number;
        height:number;
        anchorX:number;
        anchorY:number;
        skewX:number;
        skewY:number;
        zIndex:number;
        vertexZ:number;
        rotation:number;
        rotationX:number;
        rotationY:number;
        scale:number;
        scaleX:number;
        scaleY:number;
        children:Array<Node>;
        childrenCount:number;
        parent:Node;
        visible:boolean;
        running:boolean;
        ignoreAnchor:boolean;
        actionManager:ActionManager;
        scheduler:Scheduler;
        shaderProgram:any;
        glServerState:any;
        tag:number;
        userData:any;
        userObject:any;
        arrivalOrder:number;
        animationManager:BuilderAnimationManager;
        controller:any;

        attr(props:Object);
        getColor(): Color;
        setColor(color: Color);

        /**
         * @deprecated
         * @param order
         */
        setZOrder(order:number);

        setLocalZOrder(order:number);
        setGlobalZOrder(order:number);

        /**
         * set the dirty node
         */
        setNodeDirty();

        /**
         *  <p>get the skew degrees in X </br>
         *  The X skew angle of the node in degrees.  <br/>
         *  This angle describes the shear distortion in the X direction.<br/>
         *  Thus, it is the angle between the Y axis and the left edge of the shape </br>
         *  The default skewX angle is 0. Positive values distort the node in a CW direction.</br>
         *  </p>
         * @return {Number}
         */
        getSkewX():number;

        /**
         * set the skew degrees in X
         * @param {Number} newSkewX
         */
        setSkewX(newSkewX:number);

        /**
         * <p>get the skew degrees in Y               <br/>
         * The Y skew angle of the node in degrees.                            <br/>
         * This angle describes the shear distortion in the Y direction.       <br/>
         * Thus, it is the angle between the X axis and the bottom edge of the shape       <br/>
         * The default skewY angle is 0. Positive values distort the node in a CCW direction.    <br/>
         * </p>
         * @return {Number}
         */
        getSkewY():number;

        /**
         * set the skew degrees in Y
         * @param {Number} newSkewY
         */
        setSkewY(newSkewY:number);

        /**
         * zOrder getter
         * @return {Number}
         */
        getZOrder():number;

        /**
         * ertexZ getter
         * @return {Number}
         */
        getVertexZ():number;

        /**
         * vertexZ setter
         * @param {Number} Var
         */
        setVertexZ(Var:number);

        /**
         * The rotation (angle) of the node in degrees. 0 is the default rotation angle. Positive values rotate node CW.
         * @return {Number}
         */
        getRotation():number;

        /**
         * rotation setter
         * @param {Number} newRotation
         */
        setRotation(newRotation:number);

        /**
         * The rotation (angle) of the node in degrees. 0 is the default rotation angle. <br/>
         * Positive values rotate node CW. It only modifies the X rotation performing a horizontal rotational skew .
         * (support only in WebGl rendering mode)
         * @return {Number}
         */
        getRotationX():number;

        /**
         * rotationX setter
         * @param {Number} rotationX
         */
        setRotationX(rotationX:number);

        /**
         * The rotation (angle) of the node in degrees. 0 is the default rotation angle.  <br/>
         * Positive values rotate node CW. It only modifies the Y rotation performing a vertical rotational skew .
         * @return {Number}
         */
        getRotationY():number;

        /**
         * rotationY setter
         * @param {Number} rotationY
         */
        setRotationY(rotationY:number);

        /** Get the scale factor of the node.
         * @warning: Assert when _scaleX != _scaleY.
         * @return {Number}
         */
        getScale():number;

        /**
         * The scale factor of the node. 1.0 is the default scale factor. It modifies the X and Y scale at the same time.
         * @param {Number} scale or scaleX value
         * @param {Number} scaleY
         */
        setScale(scale:number);

        setScale(scaleX:number, scaleY:number);

        /**
         * scaleX getter
         * @return {Number}
         */
        getScaleX():number;

        /**
         * scaleX setter
         * @param {Number} newScaleX
         */
        setScaleX(newScaleX:number);

        /**
         * scaleY getter
         * @return {Number}
         */
        getScaleY():number;

        /**
         * scaleY setter
         * @param {Number} newScaleY
         */
        setScaleY(newScaleY:number);

        /**
         * position setter
         * @param {cc.Point|Number} newPosOrxValue
         * @param {Number}  yValue
         */
        setPosition(newPosOrxValue:any, yValue?:number);

        /**
         * <p>Position (x,y) of the node in OpenGL coordinates. (0,0) is the left-bottom corner. </p>
         * @return {cc.Point}
         */
        getPosition():Point;

        /**
         * @return {Number}
         */
        getPositionX():number;

        /**
         * @param {Number} x
         */
        setPositionX(x:number);

        /**
         * @return {Number}
         */
        getPositionY():number;

        /**
         * @param {Number} y
         */
        setPositionY(y:number);

        /**
         * Get children count
         * @return {Number}
         */
        getChildrenCount():number;

        /**
         * children getter
         * @return {object}
         */
        getChildren():Array<Node>;

        /**
         * isVisible getter
         * @return {Boolean}
         */
        isVisible():boolean;

        /**
         * isVisible setter
         * @param {Boolean} Var
         */
        setVisible(Var:boolean);

        /**
         *  <p>anchorPoint is the point around which all transformations and positioning manipulations take place.<br/>
         *  It's like a pin in the node where it is "attached" to its parent. <br/>
         *  The anchorPoint is normalized, like a percentage. (0,0) means the bottom-left corner and (1,1) means the top-right corner. <br/>
         *  But you can use values higher than (1,1) and lower than (0,0) too.  <br/>
         *  The default anchorPoint is (0.5,0.5), so it starts in the center of the node. <br/></p>
         * @return {cc.Point}
         */
        getAnchorPoint():Point;

        /**
         * @param {cc.Point} point
         */
        setAnchorPoint(point:Point);

        setAnchorPoint(x:number, y:number);

        /**
         *  The anchorPoint in absolute pixels.  <br/>
         *  you can only read it. If you wish to modify it, use anchorPoint instead
         * @return {cc.Point}
         */
        getAnchorPointInPoints():Point;

        /** <p>The untransformed size of the node. <br/>
         The contentSize remains the same no matter the node is scaled or rotated.<br/>
         All nodes has a size. Layer and Scene has the same size of the screen. <br/></p>
         * @return {cc.Size}
         */
        getContentSize():Size;

        /**
         * @param {cc.Size} size
         */
        setContentSize(size:Size);

        setContentSize(width:number, height:number);

        /**
         * whether or not the node is running
         * @return {Boolean}
         */
        isRunning():boolean;

        /** A weak reference to the parent
         * @return {cc.Node}
         */
        getParent():Node;

        /** parent setter
         * @param {cc.Node} Var
         */
        setParent(Var:Node);

        /**
         * If true, the Anchor Point will be (0,0) when you position the CCNode.<br/>
         * Used by CCLayer and CCScene
         * @return {Boolean}
         */
        isIgnoreAnchorPointForPosition():boolean;

        /**
         * ignoreAnchorPointForPosition setter
         * @param {Boolean} newValue
         */
        ignoreAnchorPointForPosition(newValue:boolean);

        /**
         * A tag used to identify the node easily
         * @return {Number}
         */
        getTag():number;

        /** tag setter
         * @param {Number} Var
         */
        setTag(Var:number);

        /**
         * A custom user data pointer
         * @return {object}
         */
        getUserData():any;

        /**
         * @param {object} Var
         */
        setUserData(Var:any);

        /**
         * Similar to userData, but instead of holding a void* it holds an id
         * @return {object}
         */
        getUserObject():any;

        /**
         * Similar to userData, but instead of holding a void* it holds an id
         * @param {object} newValue
         */
        setUserObject(newValue:any);

        /**
         * used internally for zOrder sorting, don't change this manually
         * @return {Number}
         */
        getOrderOfArrival():number;

        /**
         * used internally for zOrder sorting, don't change this manually
         * @param {Number} Var
         */
        setOrderOfArrival(Var:number);

        /**
         * <p>cc.ActionManager used by all the actions. <br/>
         * (IMPORTANT: If you set a new cc.ActionManager, then previously created actions are going to be removed.)</p>
         * @return {cc.ActionManager}
         */
        getActionManager():ActionManager;

        /**
         * <p>cc.ActionManager used by all the actions. <br/>
         * (IMPORTANT: If you set a new cc.ActionManager, then previously created actions are going to be removed.)</p>
         * @param {cc.ActionManager} actionManager
         */
        setActionManager(actionManager:ActionManager);

        /**
         * <p>
         *   cc.Scheduler used to schedule all "updates" and timers.<br/>
         *   IMPORTANT: If you set a new cc.Scheduler, then previously created timers/update are going to be removed.
         * </p>
         * @return {cc.Scheduler}
         */
        getScheduler():Scheduler;

        /**
         * <p>
         *   cc.Scheduler used to schedule all "updates" and timers.<br/>
         *   IMPORTANT: If you set a new cc.Scheduler, then previously created timers/update are going to be removed.
         * </p>
         */
        setScheduler(scheduler:Scheduler);

        /** returns a "local" axis aligned bounding box of the node. <br/>
         * The returned box is relative only to its parent.
         * @return {cc.Rect}
         */
        getBoundingBox():Rect;

        /**
         * Stops all running actions and schedulers
         */
        cleanup();

        /** Node description
         * @return {String}
         */
        description():string;

        // composition: GET
        /**
         * Gets a child from the container given its tag
         * @param {Number} aTag
         * @return {cc.Node}
         */
        getChildByTag(aTag:number):Node;

        // composition: ADD
        /** <p>"add" logic MUST only be on this method <br/> </p>
         *
         * <p>If a class want's to extend the 'addChild' behaviour it only needs  <br/>
         * to override this method </p>
         *
         * @param {cc.Node} child
         * @param {Number} zOrder
         * @param {Number} tag
         */
        addChild(child:Node, zOrder?:number, tag?:number);

        // composition: REMOVE
        /**
         * Remove itself from its parent node. If cleanup is true, then also remove all actions and callbacks. <br/>
         * If the cleanup parameter is not passed, it will force a cleanup. <br/>
         * If the node orphan, then nothing happens.
         * @param {Boolean} cleanup
         */
        removeFromParent(cleanup?:boolean);

        /**
         * Remove itself from its parent node.
         * @deprecated
         * @param {Boolean} cleanup
         */
        removeFromParentAndCleanup(cleanup:boolean);

        /** <p>Removes a child from the container. It will also cleanup all running actions depending on the cleanup parameter. </p>
         * If the cleanup parameter is not passed, it will force a cleanup. <br/>
         *<p> "remove" logic MUST only be on this method  <br/>
         * If a class wants to extend the 'removeChild' behavior it only needs <br/>
         * to override this method </p>
         *
         * @param {cc.Node} child
         * @param {Boolean} cleanup
         */
        removeChild(child:Node, cleanup:boolean);

        /**
         * Removes a child from the container by tag value. It will also cleanup all running actions depending on the cleanup parameter.
         * If the cleanup parameter is not passed, it will force a cleanup. <br/>
         * @param {Number} tag
         * @param {Boolean} cleanup
         */
        removeChildByTag(tag:number, cleanup:boolean);

        /**
         * Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter.
         * @deprecated
         * @param {Boolean | null} cleanup
         */
        removeAllChildrenWithCleanup(cleanup);

        /**
         * Removes all children from the container and do a cleanup all running actions depending on the cleanup parameter. <br/>
         * If the cleanup parameter is not passed, it will force a cleanup. <br/>
         * @param {Boolean | null } cleanup
         */
        removeAllChildren(cleanup:boolean);

        /** Reorders a child according to a new z value. <br/>
         * The child MUST be already added.
         * @param {cc.Node} child
         * @param {Number} zOrder
         */
        reorderChild(child:Node, zOrder:number);

        /**
         * <p>performance improvement, Sort the children array once before drawing, instead of every time when a child is added or reordered <br/>
         * don't call this manually unless a child added needs to be removed in the same frame </p>
         */
        sortAllChildren();

        // draw
        /** <p>Override this method to draw your own node. <br/>
         * The following GL states will be enabled by default: <br/>
         - glEnableClientState(GL_VERTEX_ARRAY);  <br/>
         - glEnableClientState(GL_COLOR_ARRAY); <br/>
         - glEnableClientState(GL_TEXTURE_COORD_ARRAY); <br/>
         - glEnable(GL_TEXTURE_2D); </p>

         <p>AND YOU SHOULD NOT DISABLE THEM AFTER DRAWING YOUR NODE</p>

         <p>But if you enable any other GL state, you should disable it after drawing your node. </p>
         * @param {CanvasContext} ctx
         */
        draw(ctx:CanvasRenderingContext2D);

        /** performs OpenGL view-matrix transformation of it's ancestors.<br/>
         * Generally the ancestors are already transformed, but in certain cases (eg: attaching a FBO) <br/>
         * it's necessary to transform the ancestors again.
         */
        transformAncestors();

        //scene managment
        /**
         * callback that is called every time the cc.Node enters the 'stage'.<br/>
         * If the cc.Node enters the 'stage' with a transition, this callback is called when the transition starts.
         * During onEnter you can't a "sister/brother" node.
         */
        onEnter();

        /**
         * <p>callback that is called when the cc.Node enters in the 'stage'.  <br/>
         * If the cc.Node enters the 'stage' with a transition, this callback is called when the transition finishes.</p>
         */
        onEnterTransitionDidFinish();

        /**
         * <p>callback that is called every time the cc.Node leaves the 'stage'.  <br/>
         * If the cc.Node leaves the 'stage' with a transition, this callback is called when the transition starts. </p>
         */
        onExitTransitionDidStart();

        /**
         * callback that is called every time the cc.Node leaves the 'stage'.<br/>
         * If the cc.Node leaves the 'stage' with a transition, this callback is called when the transition finishes. <br/>
         * During onExit you can't access a sibling node.
         */
        onExit();

        // actions
        /**
         * Executes an action, and returns the action that is executed.<br/>
         * The node becomes the action's target.
         * @warning Starting from v0.8 actions don't retain their target anymore.
         * @param {cc.Action} action
         * @return {cc.Action}
         */
        runAction(action:Action);

        /**
         * Removes all actions from the running action list
         */
        stopAllActions();

        /**
         * Removes an action from the running action list
         * @param {cc.Action} action
         */
        stopAction(action:Action);

        /**
         * Removes an action from the running action list given its tag
         * @param {Number} tag
         */
        stopActionByTag(tag:number);

        /**
         * Gets an action from the running action list given its tag
         * @param {Number} tag
         * @return {cc.Action}
         */
        getActionByTag(tag:number):Action;

        /** Returns the numbers of actions that are running plus the ones that are schedule to run (actions in actionsToAdd and actions arrays).<br/>
         *    Composable actions are counted as 1 action. Example:<br/>
         *    If you are running 1 Sequence of 7 actions, it will return 1. <br/>
         *    If you are running 7 Sequences of 2 actions, it will return 7.
         * @return {Number}
         */
        numberOfRunningActions():number;

        // cc.Node - Callbacks
        // timers
        /**
         * schedules the "update" method. It will use the order number 0. This method will be called every frame.<br/>
         * Scheduled methods with a lower order value will be called before the ones that have a higher order value.<br/>
         * Only one "update" method could be scheduled per node.
         */
        scheduleUpdate();

        /**
         * schedules the "update" callback function with a custom priority. This callback function will be called every frame.<br/>
         * Scheduled callback functions with a lower priority will be called before the ones that have a higher value.<br/>
         * Only one "update" callback function could be scheduled per node (You can't have 2 'update' callback functions).<br/>
         * @param {Number} priority
         */
        scheduleUpdateWithPriority(priority:number);

        /**
         * unschedules the "update" method.
         */
        unscheduleUpdate();

        /**
         * schedules a callback function with interval, repeat and delay.
         * @param {function} callback_fn
         * @param {Number} interval
         */
        schedule(callback_fn:(dt:number) => void, interval?:number, repeat?:boolean, delay?:number);

        /**
         * NOTE: this is no implemented in cocos2d-js public repository.
         * Schedule the action manager with scheduler.
         * It is always done in director.
         */
        scheduleActionManagerUpdate();

        /**
         * Schedules a callback function that runs only once, with a delay of 0 or larger
         * @param {cc.Class} callback_fn
         * @param {Number} delay
         */
        scheduleOnce(callback_fn:(dt?:number) => void, delay:number);

        /**
         * unschedules a custom callback function.
         * @param {function} callback_fn
         */
        unschedule(callback_fn:(dt?:number) => void);

        /**
         * unschedule all scheduled callback functions: custom callback functions, and the 'update' callback function.<br/>
         * Actions are not affected by this method.
         */
        unscheduleAllCallbacks();

        /**
         * resumes all scheduled callback functions and actions.<br/>
         * Called internally by onEnter
         */
        resume();

        /**
         * pauses all scheduled selectors and actions.<br/>
         * Called internally by onExit
         */
        pause();

        /**
         *<p>  Sets the additional transform.<br/>
         *  The additional transform will be concatenated at the end of nodeToParentTransform.<br/>
         *  It could be used to simulate `parent-child` relationship between two nodes (e.g. one is in BatchNode, another isn't).<br/>
         * // create a batchNode<br/>
         * var batch= cc.SpriteBatchNode.create("Icon-114.png");<br/>
         * this.addChild(batch);<br/>
         *<br/>
         * // create two sprites, spriteA will be added to batchNode, they are using different textures.<br/>
         * var spriteA = cc.Sprite.createWithTexture(batch->getTexture());<br/>
         * var spriteB = cc.Sprite.create("Icon-72.png");<br/>
         *<br/>
         * batch.addChild(spriteA);<br/>
         *<br/>
         * // We can't make spriteB as spriteA's child since they use different textures. So just add it to layer.<br/>
         * // But we want to simulate `parent-child` relationship for these two node.<br/>
         * this.addChild(spriteB);<br/>
         *<br/>
         * //position<br/>
         * spriteA.setPosition(ccp(200, 200));<br/>
         *<br/>
         * // Gets the spriteA's transform.<br/>
         * var t = spriteA.nodeToParentTransform();<br/>
         *<br/>
         * // Sets the additional transform to spriteB, spriteB's postion will based on its pseudo parent i.e. spriteA. <br/>
         * spriteB.setAdditionalTransform(t);<br/>
         *<br/>
         * //scale<br/>
         * spriteA.setScale(2);<br/>
         *<br/>
         // Gets the spriteA's transform.<br/>
         * * t = spriteA.nodeToParentTransform();<br/>
         *<br/>
         * // Sets the additional transform to spriteB, spriteB's scale will based on its pseudo parent i.e. spriteA. <br/>
         * spriteB.setAdditionalTransform(t);<br/>
         *<br/>
         * //rotation<br/>
         * spriteA.setRotation(20);<br/>
         *<br/>
         * // Gets the spriteA's transform.<br/>
         * t = spriteA.nodeToParentTransform();<br/>
         *<br/>
         * // Sets the additional transform to spriteB, spriteB's rotation will based on its pseudo parent i.e. spriteA. <br/>
         * spriteB.setAdditionalTransform(t);<br/>
         </p>
         */
        setAdditionalTransform(additionalTransform:AffineTransform);

        /**
         * Returns the matrix that transform parent's space coordinates to the node's (local) space coordinates.<br/>
         * The matrix is in Pixels.
         * @return {Number}
         */
        parentToNodeTransform():AffineTransform;

        /**
         *  Retrusn the world affine transform matrix. The matrix is in Pixels.
         * @return {cc.AffineTransform}
         */
        nodeToWorldTransform():AffineTransform;

        /**
         * Returns the inverse world affine transform matrix. The matrix is in Pixels.
         * @return {cc.AffineTransform}
         */
        worldToNodeTransform():AffineTransform;

        /**
         * Converts a Point to node (local) space coordinates. The result is in Points.
         * @param {cc.Point} worldPoint
         * @return {cc.Point}
         */
        convertToNodeSpace(worldPoint:Point):Point;

        /**
         * Converts a Point to world space coordinates. The result is in Points.
         * @param {cc.Point} nodePoint
         * @return {cc.Point}
         */
        convertToWorldSpace(nodePoint:Point):Point;

        /**
         * Converts a Point to node (local) space coordinates. The result is in Points.<br/>
         * treating the returned/received node point as anchor relative.
         * @param {cc.Point} worldPoint
         * @return {cc.Point}
         */
        convertToNodeSpaceAR(worldPoint:Point):Point;

        /**
         * Converts a local Point to world space coordinates.The result is in Points.<br/>
         * treating the returned/received node point as anchor relative.
         * @param {cc.Point} nodePoint
         * @return {cc.Point}
         */
        convertToWorldSpaceAR(nodePoint:Point):Point;

        /** convenience methods which take a cc.Touch instead of cc.Point
         * @param {cc.Touch} touch
         * @return {cc.Point}
         */
        convertTouchToNodeSpace(touch:Touch):Point;

        /**
         * converts a cc.Touch (world coordinates) into a local coordiante. This method is AR (Anchor Relative).
         * @param {cc.Touch}touch
         * @return {cc.Point}
         */
        convertTouchToNodeSpaceAR(touch:Touch):Point;

        /**
         * Update will be called automatically every frame if "scheduleUpdate" is called, and the node is "live" <br/>
         * (override me)
         * @param {Number} dt
         */
        update(dt:number);

        /**
         * updates the quad according the the rotation, position, scale values.
         */
        updateTransform();

        /**
         * Currently JavaScript Bindigns (JSB), in some cases, needs to use retain and release. This is a bug in JSB,
         * and the ugly workaround is to use retain/release. So, these 2 methods were added to be compatible with JSB.
         * This is a hack, and should be removed once JSB fixes the retain/release bug
         */
        retain();

        release();

        /// ---- common properties end  ----

        /**
         * recursive method that visit its children and draw them
         */
        visit();

        transform();

        /** Returns the matrix that transform the node's (local) space coordinates into the parent's space coordinates.<br/>
         * The matrix is in Pixels.
         * @return {cc.AffineTransform}
         */
        nodeToParentTransform():AffineTransform;


    }
    //#endregion cocos2d/base_nodes/CCNode.js

    //#region cocos2d/cocoa/CCAffineTranform.js
    /**
     * @function
     * @param {Number} a
     * @param {Number} b
     * @param {Number} c
     * @param {Number} d
     * @param {Number} tx
     * @param {Number} ty
     */
    export class AffineTransform {
        a:number;
        b:number;
        c:number;
        d:number;
        tx:number;
        ty:number;

        constructor(a:number, b:number, c:number, d:number, tx:number, ty:number);
    }
    //#endregion cocos2d/cocoa/CCAffineTranform.js

    //#region cocos2d/cocoa/CCGeometry.js
    /**
     * @class
     * @param {Number} _x
     * @param {Number} _y
     * Constructor
     */
    export class Point {
        x:number;
        y:number;

        constructor(_x:number, _y:number);
    }

    /**
     * Helper macro that creates a cc.Point.
     * @param {Number} x
     * @param {Number} y
     */
    function p(x:number, y:number):Point;


    function _p(x:number, y:number):Point;

    /**
     * The "left bottom" point -- equivalent to cc.p(0, 0).
     * @function
     * @return {cc.Point}
     */
    function PointZero():Point;

    /**
     * @class
     * @param {Number} _width
     * @param {Number} _height
     * Constructor
     */
    export class Size {
        width:number;
        height:number;

        constructor(_width:number, _height:number);
    }

    /**
     * @function
     * @param {Number} w width
     * @param {Number} h height
     * @return {cc.Size}
     */
    function size(w:number, h:number):cc.Size;

    /**
     * @class
     * @param {Number} x1
     * @param {Number} y1
     * @param {Number} width1
     * @param {Number} height1
     * Constructor
     */
    export class Rect {
        origin:Point;
        size:Size;

        x:number;
        y:number;
        width:number;
        height:number;
    }

    /**
     * @function
     * @param {Number} x
     * @param {Number} y
     * @param {Number} width
     * @param {Number} height
     * @return {cc.Rect}
     */
    function RectMake(x:number, y:number, width:number, height:number):Rect;

    // backward compatible
    function rect(x:number, y:number, w:number, h:number):Rect;

    /**
     * The "zero" rectangle -- equivalent to cc.rect(0, 0, 0, 0).
     * @function
     * @return {cc.Rect}
     */
    function RectZero():Rect;

    /**
     * @function
     * @param {cc.Rect} rect1
     * @param {cc.Rect} rect2
     * @return {Boolean}
     */
    function rectEqualToRect(rect1:Rect, rect2:Rect):boolean;

    /**
     * @function
     * @param {cc.Rect} rect1
     * @param {cc.Rect} rect2
     * @return {Boolean}
     */
    function rectContainsRect(rect1:Rect, rect2:Rect):boolean;

    /**
     * return the rightmost x-value of 'rect'
     * @function
     * @param {cc.Rect} rect
     * @return {Number}
     */
    function rectGetMaxX(rect:Rect):number;

    /**
     * return the midpoint x-value of 'rect'
     * @function
     * @param {cc.Rect} rect
     * @return {Number}
     */
    function rectGetMidX(rect:Rect);

    /**
     * return the leftmost x-value of 'rect'
     * @function
     * @param {cc.Rect} rect
     * @return {Number}
     */
    function rectGetMinX(rect:Rect);

    /**
     * Return the topmost y-value of `rect'
     * @function
     * @param {cc.Rect} rect
     * @return {Number}
     */
    function rectGetMaxY(rect:Rect):number;

    /**
     * Return the midpoint y-value of `rect'
     * @function
     * @param {cc.Rect} rect
     * @return {Number}
     */
    function rectGetMidY(rect:Rect):number;

    /**
     * Return the bottommost y-value of `rect'
     * @function
     * @param {cc.Rect} rect
     * @return {Number}
     */
    function rectGetMinY(rect):number;

    /**
     * @function
     * @param {cc.Rect} rect
     * @param {cc.Point} point
     * @return {Boolean}
     */
    function rectContainsPoint(rect:Rect, point:Point) : boolean;

    /**
     * @function
     * @param {cc.Rect} rectA
     * @param {cc.Rect} rectB
     * @return {Boolean}
     */
    function rectIntersectsRect(rectA:Rect, rectB:Rect):boolean;

    /**
     * @function
     * @param {cc.Rect} rectA
     * @param {cc.Rect} rectB
     * @return {Boolean}
     */
    function rectOverlapsRect(rectA:Rect, rectB:Rect):boolean;

    /**
     * Returns the smallest rectangle that contains the two source rectangles.
     * @function
     * @param {cc.Rect} rectA
     * @param {cc.Rect} rectB
     * @return {cc.Rect}
     */
    function rectUnion(rectA:Rect, rectB:Rect):Rect;

    /**
     * Returns the overlapping portion of 2 rectangles
     * @function
     * @param {cc.Rect} rectA
     * @param {cc.Rect} rectB
     * @return {cc.Rect}
     */
    function rectIntersection(rectA:Rect, rectB:Rect):Rect;

    //#endregion cocos2d/cocoa/CCGeometry.js

    //#region cocos2d/label_nodes/CCLabelTTF.js
    /**
     * cc.LabelTTF is a subclass of cc.TextureNode that knows how to render text labels (Canvas implement)<br/>
     * All features from cc.TextureNode are valid in cc.LabelTTF<br/>
     * cc.LabelTTF objects are slow for js-binding on mobile devices.<br/>
     * Consider using cc.LabelAtlas or cc.LabelBMFont instead.<br/>
     * @class
     * @extends cc.Sprite
     */
    export class LabelTTF extends Sprite {
        /**
         * creates a cc.LabelTTF from a fontname, alignment, dimension and font size
         * @param {String} label
         * @param {String} fontName
         * @param {Number} fontSize
         * @param {cc.Size} dimensions
         * @param {cc.TEXT_ALIGNMENT_LEFT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_RIGHT} alignment
         * @return {cc.LabelTTF|Null}
         * @example
         * // Example
         * var myLabel = cc.LabelTTF.create('label text',  'Times New Roman', 32, cc.size(32,16), cc.TEXT_ALIGNMENT_LEFT);
         */
        static create(label:string, fontName?:string, fontSize?:number, dimensions?:Size, alignment?:number):LabelTTF;

        static create(label:string);

        setString(str:string);
    }
    export class LabelBMFont extends Sprite {
        setLineBreakWithoutSpace();
        getBlendFunc();
        isOpacityModifyRGB() : boolean;
        getLetter();
        getString() : string;
        setBlendFunc();
        setString(str:string);
        initWithString();
        setOpacityModifyRGB(bool : boolean);
        getFntFile();
        setFntFile();
        setAlignment();
        setWidth(width: number);
    }
    //#endregion cocos2d/label_nodes/CCLabelTTF.js

    //#region cocos2d/layers_scenes_transitions_nodes/CCScene.js
    /**
     * <p>cc.Scene is a subclass of cc.Node that is used only as an abstract concept.</p>
     *  <p>cc.Scene an cc.Node are almost identical with the difference that cc.Scene has it's
     * anchor point (by default) at the center of the screen.</p>
     *
     * <p>For the moment cc.Scene has no other logic than that, but in future releases it might have
     * additional logic.</p>
     *
     * <p>It is a good practice to use and cc.Scene as the parent of all your nodes.</p>
     * @class
     * @extends cc.Node
     */
    export class Scene extends Node {
        /**
         * Constructor
         */
        constructor();

        /**
         * creates a scene
         * @return {cc.Scene}
         * @example
         * // Example
         * var aScene = cc.Scene.create();
         * //OR
         * var aScene = new cc.Scene();
         */
        static create(t?:number, scene?:Scene):Scene;

        static createWithPhysics():Scene;

        static createWithSize(size:Size):Scene;


    }
    //#endregion cocos2d/layers_scenes_transitions_nodes/CCScene.js

    //#region cocos2d/layers_scenes_transitions_nodes/CCLayer.js
    /** cc.Layer is a subclass of cc.Node that implements the TouchEventsDelegate protocol.<br/>
     * All features from cc.Node are valid, plus the following new features:<br/>
     * It can receive iPhone Touches<br/>
     * It can receive Accelerometer input
     * @class
     * @extends cc.Node
     */
    export class Layer extends Node {
        /**
         *
         * @return {Boolean}
         */
        init(...args:any[]):boolean;

        isMouseEnabled():boolean;

        setMouseEnabled(enabled:boolean);

        setMousePriority(priority:number);

        getMousePriority():number;

        /**
         * whether or not it will receive Touch events.<br/>
         * You can enable / disable touch events with this property.<br/>
         * Only the touches of this node will be affected. This "method" is not propagated to it's children.<br/>
         * @return {Boolean}
         */
        isTouchEnabled():boolean;

        /**
         * Enable touch events
         * @param {Boolean} enabled
         */
        setTouchEnabled(enabled:boolean);

        /** returns the touch mode.
         * @return {Number}
         */
        getTouchMode():number;

        /** Sets the touch mode.
         * @param {Number} mode
         */
        setTouchMode(mode:number);

        /**
         * whether or not it will receive Accelerometer events<br/>
         * You can enable / disable accelerometer events with this property.
         * @return {Boolean}
         */
        isAccelerometerEnabled():boolean;

        /**
         * isAccelerometerEnabled setter
         * @param {Boolean} enabled
         */
        setAccelerometerEnabled(enabled:boolean);

        /**
         * accelerometerInterval setter
         * @param {Number} interval
         */
        setAccelerometerInterval(interval:number);

        onAccelerometer(accelerationValue:number);

        /**
         * whether or not it will receive keyboard events<br/>
         * You can enable / disable accelerometer events with this property.<br/>
         * it's new in cocos2d-x
         * @return {Boolean}
         */
        isKeyboardEnabled():boolean;

        /**
         * Enable Keyboard interaction
         * @param {Boolean} enabled
         */
        setKeyboardEnabled(enabled:boolean);

        /**
         * This is run when ever a layer just become visible
         */
        onEnter();

        /**
         * @function
         */
        onExit();

        /**
         * this is called when ever a layer is a child of a scene that just finished a transition
         */
        onEnterTransitionDidFinish();

        // ---------------------CCTouchDelegate interface------------------------------

        /**
         * default implements are used to call script callback if exist<br/>
         * you must override these touch functions if you wish to utilize them
         * @param {cc.Touch} touch
         * @param {event} event
         * @return {Boolean}
         */
        onTouchBegan(touch:Touch, event):boolean;

        /**
         * callback when a touch event moved
         * @param {cc.Touch} touch
         * @param {event} event
         */
        onTouchMoved(touch:Touch, event);

        /**
         * callback when a touch event finished
         * @param {cc.Touch} touch
         * @param {event} event
         */
        onTouchEnded(touch:Touch, event);

        /**
         * @param {cc.Touch} touch
         * @param {event} event
         */
        onTouchCancelled(touch:Touch, event);

        /**
         * Touches is the same as Touch, except this one can handle multi-touch
         * @param {cc.Touch} touch
         * @param {event} event
         */
        onTouchesBegan(touch:Touch, event);

        /**
         * when a touch moved
         * @param {cc.Touch} touch
         * @param {event} event
         */
        onTouchesMoved(touch:Touch, event);

        /**
         * when a touch finished
         * @param {cc.Touch} touch
         * @param {event} event
         */
        onTouchesEnded(touch:Touch, event);

        /**
         * @param touch
         * @param event
         */
        onTouchesCancelled(touch:Touch, event);

        // ---------------------CCMouseEventDelegate interface------------------------------

        /**
         * <p>called when the "mouseDown" event is received. <br/>
         * Return YES to avoid propagating the event to other delegates.  </p>
         * @param event
         * @return {Boolean}
         */
        onMouseDown(event):boolean;

        /**
         * <p>called when the "mouseDragged" event is received.         <br/>
         * Return YES to avoid propagating the event to other delegates.</p>
         * @param event
         * @return {Boolean}
         */
        onMouseDragged(event):boolean;

        /**
         * <p> called when the "mouseMoved" event is received.            <br/>
         * Return YES to avoid propagating the event to other delegates.  </p>
         * @param event
         * @return {Boolean}
         */
        onMouseMoved(event):boolean;

        /**
         * <p> called when the "mouseUp" event is received.               <br/>
         * Return YES to avoid propagating the event to other delegates.  </p>
         * @param event
         * @return {Boolean}
         */
        onMouseUp(event):boolean;

        //right
        /**
         * <p> called when the "rightMouseDown" event is received.        <br/>
         * Return YES to avoid propagating the event to other delegates.  </p>
         * @param event
         * @return {Boolean}
         */
        onRightMouseDown(event):boolean;

        /**
         * <p> called when the "rightMouseDragged" event is received.    <br/>
         * Return YES to avoid propagating the event to other delegates. </p>
         * @param event
         * @return {Boolean}
         */
        onRightMouseDragged(event):boolean;

        /**
         * <p> called when the "rightMouseUp" event is received.          <br/>
         * Return YES to avoid propagating the event to other delegates.  </p>
         * @param event
         * @return {Boolean}
         */
        onRightMouseUp(event):boolean;

        //other
        /**
         * <p>called when the "otherMouseDown" event is received.         <br/>
         * Return YES to avoid propagating the event to other delegates.  </p>
         * @param event
         * @return {Boolean}
         */
        onOtherMouseDown(event):boolean;

        /**
         * <p> called when the "otherMouseDragged" event is received.     <br/>
         * Return YES to avoid propagating the event to other delegates.  </p>
         * @param event
         * @return {Boolean}
         */
        onOtherMouseDragged(event):boolean;

        /**
         * <p> called when the "otherMouseUp" event is received.          <br/>
         * Return YES to avoid propagating the event to other delegates.  </p>
         * @param event
         * @return {Boolean}
         */
        onOtherMouseUp(event):boolean;

        //scroll wheel
        /**
         * <p> called when the "scrollWheel" event is received.           <br/>
         * Return YES to avoid propagating the event to other delegates.  </p>
         * @param event
         * @return {Boolean}
         */
        onScrollWheel(event):boolean;

        // enter / exit
        /**
         *  <p> called when the "mouseEntered" event is received.         <br/>
         *  Return YES to avoid propagating the event to other delegates. </p>
         * @param theEvent
         * @return {Boolean}
         */
        onMouseEntered(theEvent):boolean;

        /**
         * <p> called when the "mouseExited" event is received.          <br/>
         * Return YES to avoid propagating the event to other delegates. </p>
         * @param theEvent
         * @return {Boolean}
         */
        onMouseExited(theEvent):boolean;

        // ---------------------CCKeyboardDelegate interface------------------------------

        /**
         * Call back when a key is pressed down
         * @param {Integer} keyCode
         * @example
         * // example
         * if(keyCode == cc.KEY.w){}
         */
        onKeyDown(keyCode:number);

        /**
         * Call back when a key is released
         * @param {Integer} keyCode
         * @example
         * // example
         * if(keyCode == cc.KEY.w){}
         */
        onKeyUp(keyCode:number);

        /**
         * creates a layer
         * @example
         * // Example
         * var myLayer = cc.Layer.create();
         * //Yes! it's that simple
         * @return {cc.Layer|Null}
         */
        static create():Layer;
    }

    /**
     * creates a cc.LayerColorCanvas with color, width and height in Points
     * @param {cc.Color} color
     * @param {Number|Null} width
     * @param {Number|Null} height
     * @return {cc.LayerColor}
     * @example
     * // Example
     * //Create a yellow color layer as background
     * var yellowBackground = cc.LayerColor.create(cc.c4b(255,255,0,255));
     * //If you didnt pass in width and height, it defaults to the same size as the canvas
     *
     * //create a yellow box, 200 by 200 in size
     * var yellowBox = cc.LayerColorCanvas.create(cc.c3b(255,255,0,255), 200, 200);
     */
    export class LayerColor extends Layer {
        /**
         * @param {cc.Color} color
         * @param {Number} width
         * @param {Number} height
         * @return {Boolean}
         */
        init(...args:any[]/*color: Color, width: number, height: number*/):boolean;

        static create(color?:Color, width?:number, height?:number):LayerColor;
    }

    /**
     * <p>
     * CCLayerGradient is a subclass of cc.LayerColor that draws gradients across the background.<br/>
     *<br/>
     * All features from cc.LayerColor are valid, plus the following new features:<br/>
     * <ul><li>direction</li>
     * <li>final color</li>
     * <li>interpolation mode</li></ul>
     * <br/>
     * Color is interpolated between the startColor and endColor along the given<br/>
     * vector (starting at the origin, ending at the terminus).  If no vector is<br/>
     * supplied, it defaults to (0, -1) -- a fade from top to bottom.<br/>
     * <br/>
     * If 'compressedInterpolation' is disabled, you will not see either the start or end color for<br/>
     * non-cardinal vectors; a smooth gradient implying both end points will be still<br/>
     * be drawn, however.<br/>
     *<br/>
     * If 'compressedInterpolation' is enabled (default mode) you will see both the start and end colors of the gradient.
     * </p>
     * @class
     * @extends cc.LayerColor
     */
    export class LayerGradient extends LayerColor {
        /**
         * get the starting color
         * @return {cc.Color}
         */
        getStartColor():Color;

        /**
         * set the starting color
         * @param {cc.Color} color
         * @example
         * // Example
         * myGradientLayer.setStartColor(cc.c3b(255,0,0));
         * //set the starting gradient to red
         */
        setStartColor(color:Color);

        /**
         * set the end gradient color
         * @param {cc.Color} color
         * @example
         * // Example
         * myGradientLayer.setEndColor(cc.c3b(255,0,0));
         * //set the ending gradient to red
         */
        setEndColor(color:Color);

        /**
         * get the end color
         * @return {cc.Color}
         */
        getEndColor():Color;

        /**
         * set starting gradient opacity
         * @param {Number} o from 0 to 255, 0 is transparent
         */
        setStartOpacity(o:number);

        /**
         * get the starting gradient opacity
         * @return {Number}
         */
        getStartOpacity():number;

        /**
         * set the end gradient opacity
         * @param {Number} o
         */
        setEndOpacity(o:number);

        /**
         * get the end gradient opacity
         * @return {Number}
         */
        getEndOpacity():number;

        /**
         * set vector
         * @param {cc.Point} Var
         */
        setVector(Var:Point);

        /**
         * @return {cc.Point}
         */
        getVector():Point;

        /** is Compressed Interpolation
         * @return {Boolean}
         */
        isCompressedInterpolation():boolean;

        /**
         * @param {Boolean} compress
         */
        setCompressedInterpolation(compress:boolean);

        /**
         * @param {cc.Color} start starting color
         * @param {cc.Color} end
         * @param {cc.Point|Null} v
         * @return {Boolean}
         */
        init(start:Color, end:Color, v?:Point):boolean;
    }
    //#endregion cocos2d/layers_scenes_transitions_nodes/CCLayer.js

    //#region cocos2d/layers_scenes_transitions_nodes/Transition.js
    /**
     * A tag constant for identifying fade scenes
     * @constant
     * @type Number
     */
    var SCENE_FADE:number;

    /**
     * cc.TransitionEaseScene can ease the actions of the scene protocol.
     * @class
     * @extends cc.Class
     */
    export class TransitionEaseScene extends Class {
        /**
         * returns the Ease action that will be performed on a linear action.
         */
        easeActionWithAction();
    }

    /**
     * horizontal orientation Type where the Left is nearer
     * @constant
     * @type Number
     */
    var TRANSITION_ORIENTATION_LEFT_OVER:number;
    /**
     * horizontal orientation type where the Right is nearer
     * @constant
     * @type Number
     */
    var TRANSITION_ORIENTATION_RIGHT_OVER:number;
    /**
     * vertical orientation type where the Up is nearer
     * @constant
     * @type Number
     */
    var TRANSITION_ORIENTATION_UP_OVER:number;
    /**
     * vertical orientation type where the Bottom is nearer
     * @constant
     * @type Number
     */
    var TRANSITION_ORIENTATION_DOWN_OVER:number;

    /**
     * @class
     * @extends cc.Scene
     */
    export class TransitionScene extends Scene {
        /**
         * custom onEnter
         */
        onEnter();

        /**
         * custom onExit
         */
        onExit();

        /**
         * custom cleanup
         */
        cleanup();

        /**
         * initializes a transition with duration and incoming scene
         * @param {Number} t time in seconds
         * @param {cc.Scene} scene a scene to transit to
         * @return {Boolean} return false if error
         */
        initWithDuration(t:number, scene:Scene):boolean;

        /**
         * called after the transition finishes
         */
        finish();

        /**
         * set hide the out scene and show in scene
         */
        hideOutShowIn();
    }
    //#region cocos2d/layers_scenes_transitions_nodes/Transition.js

    //#region cocos2d/layers_scenes_transitions_nodes/TransitionProgress.js
    /**
     * tag for scene redial
     * @constant
     * @type Number
     */
    var SCENE_RADIAL:number;

    /**
     * cc.TransitionProgress transition.
     * @class
     * @extends cc.TransitionScene
     */
    export class TransitionProgress extends TransitionScene {
        /**
         * @override
         */
        onEnter();

        /**
         * @override
         */
        onExit();

        /**
         * create a cc.TransitionProgress object
         * @function
         * @param {Number} t time
         * @param {cc.Scene} scene
         * @return {cc.TransitionProgress}
         */
        static create(t?:number, scene?:Scene):TransitionProgress;
    }

    /**
     *  cc.TransitionRadialCCW transition.<br/>
     *  A counter colock-wise radial transition to the next scene
     * @class
     * @extends cc.TransitionProgress
     */
    export class TransitionProgressRadialCCW extends TransitionProgress {
        /**
         * create a cc.TransitionProgressRadialCCW object
         * @function
         * @param {Number} t time
         * @param {cc.Scene} scene
         * @return {cc.TransitionProgressRadialCCW}
         */
        static create(t?:number, scene?:Scene):TransitionProgressRadialCCW;
    }

    /**
     * cc.TransitionRadialCW transition.<br/>
     * A counter colock-wise radial transition to the next scene
     * @class
     * @extends cc.TransitionProgress
     */
    export class TransitionProgressRadialCW extends TransitionProgress {
        /**
         * create a cc.TransitionProgressRadialCW object
         * @function
         * @param {Number} t time
         * @param {cc.Scene} scene
         * @return {cc.TransitionProgressRadialCW}
         */
        static create(t?:number, scene?:Scene):TransitionProgressRadialCW;
    }

    /**
     * cc.TransitionProgressHorizontal transition.<br/>
     * A  colock-wise radial transition to the next scene
     * @class
     * @extends cc.TransitionProgress
     */
    export class TransitionProgressHorizontal extends TransitionProgress {
        /**
         * create a cc.TransitionProgressHorizontal object
         * @function
         * @param {Number} t time
         * @param {cc.Scene} scene
         * @return {cc.TransitionProgressHorizontal}
         */
        create(t:number, scene:Scene):TransitionProgressHorizontal;
    }

    /**
     * cc.TransitionProgressVertical transition.
     * @class
     * @extends cc.TransitionProgress
     */
    export class TransitionProgressVertical extends TransitionProgress {
        /**
         * create a cc.TransitionProgressVertical object
         * @function
         * @param {Number} t time
         * @param {cc.Scene} scene
         * @return {cc.TransitionProgressVertical}
         */
        create(t:number, scene:Scene):TransitionProgressVertical;
    }

    /**
     * cc.TransitionProgressInOut transition.
     * @class
     * @extends cc.TransitionProgress
     */
    export class TransitionProgressInOut extends TransitionProgress {
        /**
         * create a cc.TransitionProgressInOut object
         * @function
         * @param {Number} t time
         * @param {cc.Scene} scene
         * @return {cc.TransitionProgressInOut}
         */
        create(t:number, scene:Scene):TransitionProgressInOut;
    }

    /**
     * cc.TransitionProgressOutIn transition.
     * @class
     * @extends cc.TransitionProgress
     */
    export class TransitionProgressOutIn extends TransitionProgress {
        /**
         * create a cc.TransitionProgressOutIn object
         * @function
         * @param {Number} t time
         * @param {cc.Scene} scene
         * @return {cc.TransitionProgressOutIn}
         */
        create(t:number, scene:Scene):TransitionProgressOutIn;
    }
    //#endregion cocos2d/layers_scenes_transitions_nodes/TransitionProgress.js

    //#region cocos2d/menu_nodes/CCMenu.js
    /**
     * <p> Features and Limitation:<br/>
     *  - You can add MenuItem objects in runtime using addChild:<br/>
     *  - But the only accecpted children are MenuItem objects</p>
     * @class
     * @extends cc.Layer
     */
    export class Menu extends Layer {
        /**
         * create a new menu
         * @return {cc.Menu}
         * @example
         * // Example
         * //there is no limit on how many menu item you can pass in
         * var myMenu = cc.Menu.create(menuitem1, menuitem2, menuitem3);
         */
        static create(...nodes:Node[]):Menu;
    }
    //#endregion cocos2d/menu_nodes/CCMenu.js

    //#region cocos2d/menu_nodes/CCMenuItem.js
    /**
     * Subclass cc.MenuItem (or any subclass) to create your custom cc.MenuItem objects.
     * @class
     * @extends cc.Node
     */
    export class MenuItem extends Node {
        /**
         * MenuItem is selected
         * @return {Boolean}
         */
        isSelected():boolean;

        /**
         * set the target/selector of the menu item
         * @param {function|String} selector
         * @param {cc.Node} rec
         */
        setTarget(selector, rec:Node);

        /**
         * MenuItem is Enabled
         * @return {Boolean}
         */
        isEnabled():boolean;

        /**
         * set enable value of MenuItem
         * @param {Boolean} enable
         */
        setEnabled(enable:boolean);

        /**
         * @param {function|String} selector
         * @param {cc.Node} rec
         * @return {Boolean}
         */
        initWithCallback(selector, rec:Node):boolean;

        /**
         * return rect value of cc.MenuItem
         * @return {cc.Rect}
         */
        rect():Rect;

        /**
         * same as setIsSelected(true)
         */
        selected();

        /**
         * same as setIsSelected(false)
         */
        unselected();

        /**
         * @param {function|String} selector
         * @param {cc.Node} rec
         */
        setCallback(selector, rec:Node);

        /**
         * call the selector with target
         */
        activate();
    }

    /**
     *  Any cc.Node that supports the cc.LabelProtocol protocol can be added.<br/>
     * Supported nodes:<br/>
     * - cc.BitmapFontAtlas<br/>
     * - cc.LabelAtlas<br/>
     * - cc.LabelTTF<br/>
     * @class
     * @extends cc.MenuItem
     */
    export class MenuItemLabel extends MenuItem {
        /**
         * @param {cc.Node} label
         * @param {function|String|Null} selector
         * @param {cc.Node|Null} target
         * @return {cc.MenuItemLabel}
         */
        static create(...args:any[]/*label, selector, target*/):MenuItemLabel;
    }

    /**
     * Helper class that creates a MenuItemLabel class with a LabelAtlas
     * @class
     * @extends cc.MenuItemLabel
     */
    export class MenuItemAtlasFont extends cc.MenuItemLabel {
        /**
         * create menu item from string with font
         * @param {String} value the text to display
         * @param {String} charMapFile the character map file
         * @param {Number} itemWidth
         * @param {Number} itemHeight
         * @param {String} startCharMap a single character
         * @param {cc.Node|Null} target
         * @param {function|String|Null} selector
         * @return {cc.MenuItemAtlasFont}
         * @example
         * // Example
         * var item = cc.MenuItemAtlasFont.create('text to display', 'font.fnt', 12, 32, ' ')
         *
         * //OR
         * var item = cc.MenuItemAtlasFont.create('text to display', 'font.fnt', 12, 32, ' ', game, game.run)
         */
        static create(...args:any[]/*value, charMapFile, itemWidth, itemHeight, startCharMap, target, selector*/):MenuItemAtlasFont;
    }

    /**
     * Helper class that creates a CCMenuItemLabel class with a Label
     * @class
     * @extends cc.MenuItemLabel
     */
    export class MenuItemFont extends MenuItemLabel {
        /**
         * @param {Number} s
         */
        setFontSize(s:number);

        /**
         *
         * @return {Number}
         */
        fontSize():number;

        /**
         * @param {String} name
         */
        setFontName(name:string);

        /**
         * @return {String}
         */
        fontName():string;

        /**
         * create a menu item from string
         * @param {String} value the text to display
         * @param {String|function|Null} selector the callback to run, either in function name or pass in the actual function
         * @param {cc.Node|Null} target the target to run callback
         * @return {cc.MenuItemFont}
         * @example
         * // Example
         * var item = cc.MenuItemFont.create("Game start", 'start', Game)
         * //creates a menu item from string "Game start", and when clicked, it will run Game.start()
         *
         * var item = cc.MenuItemFont.create("Game start", game.start, Game)//same as above
         *
         * var item = cc.MenuItemFont.create("i do nothing")//create a text menu item that does nothing
         *
         * //you can set font size and name before or after
         * cc.MenuItemFont.setFontName('my Fancy Font');
         * cc.MenuItemFont.setFontSize(62);
         */
        static create(...args:any[]/*value, selector, target*/):MenuItemFont;
    }

    /**
     * CCMenuItemSprite accepts CCNode<CCRGBAProtocol> objects as items.<br/>
     The images has 3 different states:<br/>
     - unselected image<br/>
     - selected image<br/>
     - disabled image<br/>
     * @class
     * @extends cc.MenuItem
     */
    export class MenuItemSprite extends MenuItem {
        /**
         * create a menu item from sprite
         * @param {Image} normal normal state image
         * @param {Image|Null} selected selected state image
         * @param {Image|cc.Node|Null} three disabled state image OR target node
         * @param {String|function|cc.Node|Null} four callback function name in string or actual function, OR target Node
         * @param {String|function|Null} five callback function name in string or actual function
         * @return {cc.MenuItemSprite}
         * @example
         * // Example
         * var item = cc.MenuItemSprite.create(normalImage)//create a menu item from a sprite with no functionality
         *
         * var item = cc.MenuItemSprite.create(normalImage, selectedImage)//create a menu Item, nothing will happen when clicked
         *
         * var item = cc.MenuItemSprite.create(normalImage, SelectedImage, disabledImage)//same above, but with disabled state image
         *
         * var item = cc.MenuItemSprite.create(normalImage, SelectedImage, 'callback', targetNode)//create a menu item, when clicked runs targetNode.callback()
         *
         * var item = cc.MenuItemSprite.create(normalImage, SelectedImage, disabledImage, targetNode.callback, targetNode)
         * //same as above, but with disabled image, and passing in callback function
         */
        static create(...args:any[]/*normalSprite, selectedSprite, three, four, five*/):MenuItemSprite;
    }

    /**
     * cc.MenuItemImage accepts images as items.<br/>
     * The images has 3 different states:<br/>
     * - unselected image<br/>
     * - selected image<br/>
     * - disabled image<br/>
     * <br/>
     * For best results try that all images are of the same size<br/>
     * @class
     * @extends cc.MenuItemSprite
     */
    export class MenuItemImage extends MenuItemSprite {
        /**
         * creates a new menu item image
         * @param {String} normalImage file name for normal state
         * @param {String} selectedImage image for selected state
         * @param {String|cc.Node} three Disabled image OR allback function
         * @param {String|function|Null} four callback function, either name in string or pass the whole function OR the target
         * @param {cc.Node|String|function|Null} five cc.Node target to run callback when clicked
         * @return {cc.MenuItemImage}
         * @example
         * // Example
         * //create a dom menu item with normal and selected state, when clicked it will run the run function from gameScene object
         * var item = cc.MenuItemImage.create('normal.png', 'selected.png', 'run', gameScene)
         *
         * //same as above, but pass in the actual function and disabled image
         * var item = cc.MenuItemImage.create('normal.png', 'selected.png', 'disabled.png', gameScene.run, gameScene)
         */
        static create():MenuItemImage;

        static create(normalImage:string, selectedImage:string, three:(sender:any) => void):MenuItemImage;

        static create(normalImage:string, selectedImage:string, three:(sender:any) => void, four:Node):MenuItemImage;

        static create(normalImage:string, selectedImage:string, three:string, four:(sender:any) => void, five:Node):MenuItemImage;
    }

    /**
     * A simple container class that "toggles" it's inner items<br/>
     * The inner items can be any MenuItem
     * @class
     * @extends cc.MenuItem
     */
    export class MenuItemToggle extends MenuItem {
        /**
         * @return {Number}
         */
        getOpacity():number;

        /**
         * @param {Number} Opacity
         */
        setOpacity(Opacity:number);

        /**
         * @return {cc.Color}
         */
        getColor():Color;

        /**
         * @param {cc.Color} Color
         */
        setColor(Color:Color);

        /**
         * @return {Number}
         */
        getSelectedIndex():number;

        /**
         * @param {Number} SelectedIndex
         */
        setSelectedIndex(SelectedIndex:number);

        /**
         * similar to get children
         * @return {cc.MenuItem}
         */
        getSubItems():MenuItem[];

        /**
         * @param {cc.MenuItem} SubItems
         */
        setSubItems(SubItems:MenuItem[]);

        /**
         * @param {cc.MenuItem} args[0...last-2] the rest in the array are cc.MenuItems
         * @param {function|String} args[last-1] the second item in the args array is the callback
         * @param {cc.Node} args[last] the first item in the args array is a target
         * @return {Boolean}
         */
        initWithItems(...args:any[]):boolean;

        /**
         * @param {cc.MenuItem} item
         */
        addSubItem(item:MenuItem);

        /**
         * activate the menu item
         */
        activate();

        /**
         * menu item is selected (runs callback)
         */
        selected();

        /**
         * menu item goes back to unselected state
         */
        unselected();

        /**
         * @param {Boolean} enabled
         */
        setEnabled(enabled:boolean);

        /**
         * returns the selected item
         * @return {cc.MenuItem}
         */
        selectedItem():MenuItem;

        setOpacityModifyRGB(value:boolean);

        isOpacityModifyRGB():boolean;

        onEnter();

        /**
         * create a simple container class that "toggles" it's inner items<br/>
         * The inner items can be any MenuItem
         * @return {cc.MenuItemToggle}
         * @example
         * // Example
         *
         * //create a toggle item with 2 menu items (which you can then toggle between them later)
         * var toggler = cc.MenuItemToggle.create(this, this.callback, cc.MenuItemFont.create("On"), cc.MenuItemFont.create("Off"))
         * //Note: the first param is the target, the second is the callback function, afterwards, you can pass in any number of menuitems
         *
         * //if you pass only 1 variable, then it must be a cc.MenuItem
         * var notYetToggler = cc.MenuItemToggle.create(cc.MenuItemFont.create("On"));//it is useless right now, until you add more stuff to it
         * notYetToggler.addSubItem(cc.MenuItemFont.create("Off"));
         * //this is useful for constructing a toggler without a callback function (you wish to control the behavior from somewhere else)
         */
        static create(...args:any[]):MenuItemToggle;
    }
    //#endregion cocos2d/menu_nodes/CCMenuItem.js

    //#region cocos2d/platform/AppControl.js
    /**
     * Controller of Game Application
     * @class
     * @extends cc.Class
     */
    export class AppController extends Class {
        /**
         * did something when Finish Launching
         * @return {Boolean}
         */
        didFinishLaunchingWithOptions():boolean;

        /**
         * Return Controller of Game Application
         * @return {cc.AppController}
         */
        static shareAppController():AppController;
    }
    //#endregion cocos2d/platform/AppControl.js

    //#region cocos2d/platform/CCApplication.js
    /**
     * Device type
     * @constant
     * @type {Object}
     */
    enum TARGET_PLATFORM {
        WINDOWS,//: 0,
        LINUX,//: 1,
        MACOS,//: 2,
        ANDROID,//: 3,
        IPHONE,//: 4,
        IPAD,//: 5,
        BLACKBERRY,//: 6,
        NACL,//: 7,
        EMSCRIPTEN,//: 8,
        MOBILE_BROWSER,//: 100,
        PC_BROWSER,//: 101
    }

    /**
     * Device oriented vertically, home button on the bottom
     * @constant
     * @type Number
     */
    var ORIENTATION_PORTRAIT:number;

    /**
     * Device oriented vertically, home button on the top
     * @constant
     * @type Number
     */
    var ORIENTATION_PORTRAIT_UPSIDE_DOWN:number;

    /**
     * Device oriented horizontally, home button on the right
     * @constant
     * @type Number
     */
    var ORIENTATION_LANDSCAPE_LEFT:number;

    /**
     * Device oriented horizontally, home button on the left
     * @constant
     * @type Number
     */
    var ORIENTATION_LANDSCAPE_RIGHT:number;

    //engine render type

    /**
     * Canvas of render type
     * @constant
     * @type Number
     */
    var CANVAS:number;

    /**
     * WebGL of render type
     * @constant
     * @type Number
     */
    var WEBGL:number;

    /**
     * drawing primitive of game engine
     * @type cc.DrawingPrimitive
     */
    var drawingUtil:DrawingPrimitive;

    /**
     * main Canvas 2D Context of game engine
     * @type CanvasContext
     */
    var renderContext:CanvasRenderingContext2D;

    /**
     * main Canvas of game engine
     * @type HTMLCanvasElement
     */
    var canvas:HTMLCanvasElement;

    /**
     * This Div element contain all game canvas
     * @type HTMLDivElement
     */
    var gameDiv:HTMLDivElement;

    /**
     * current render type of game engine
     * @type Number
     */
    var renderContextType:number;

    /**
     * save original size of canvas, use for resize canvas
     * @type cc.Size
     */
    var originalCanvasSize:Size;

    /**
     * <p>
     *   setup game main canvas,renderContext,gameDiv and drawingUtil with argument  <br/>
     *   <br/>
     *   can receive follow type of arguemnt: <br/>
     *      - empty: create a canvas append to document's body, and setup other option    <br/>
     *      - string: search the element by document.getElementById(),    <br/>
     *          if this element is HTMLCanvasElement, set this element as main canvas of engine, and set it's ParentNode as cc.gameDiv.<br/>
     *          if this element is HTMLDivElement, set it's ParentNode to cc.gameDiv， and create a canvas as main canvas of engine.   <br/>
     * </p>
     * @function
     * @example
     * //setup with null
     * cc.setup();
     *
     * // setup with HTMLCanvasElement, gameCanvas is Canvas element
     * // declare like this: <canvas id="gameCanvas" width="800" height="450"></canvas>
     * cc.setup("gameCanvas");
     *
     * //setup with HTMLDivElement, gameDiv is Div element
     * // declare like this: <div id="Cocos2dGameContainer" width="800" height="450"></div>
     * cc.setup("Cocos2dGameContainer");
     */
    function setup(el?:string, width?:number, height?:number);

    /**
     * Run main loop of game engine
     * @class
     * @extends cc.Class
     */
    export class Application extends Class {
    }
    //#endregion cocos2d/platform/CCApplication.js

    //#region cocos2d/platform/CCClass.js
    export class Class {
        rootNode:cc.Node;
    }
    //#endregion cocos2d/platform/CCClass.js

    //#region cocos2d/platform/CCMacro.js
    /**
     * @constant
     * @type Number
     */
    var INVALID_INDEX:number;

    /**
     * PI is the ratio of a circle's circumference to its diameter.
     * @constant
     * @type Number
     */
    var PI:number;

    /**
     * @constant
     * @type Number
     */
    var FLT_MAX:number;

    /**
     * @constant
     * @type Number
     */
    var RAD:number;

    /**
     * @constant
     * @type Number
     */
    var DEG:number;

    /**
     * maximum unsigned int value
     * @constant
     * @type Number
     */
    var UINT_MAX:number;

    /**
     * <p>
     *     Linear interpolation between 2 numbers, the ratio sets how much it is biased to each end
     * </p>
     * @param {Number} a number A
     * @param {Number} b number B
     * @param {Number} r ratio between 0 and 1
     * @function
     * @example
     * cc.lerp(2,10,0.5)//returns 6<br/>
     * cc.lerp(2,10,0.2)//returns 3.6
     */
    function lerp(a:number, b:number, r:number):number;

    /**
     * returns a random float between -1 and 1
     * @return {Number}
     * @function
     */
    function randomMinus1To1(): number;

    /**
     * returns a random float between 0 and 1
     * @return {Number}
     * @function
     */
    function random0To1(): number;

    /**
     * converts degrees to radians
     * @param {Number} angle
     * @return {Number}
     * @function
     */
    function degreesToRadians(angle: number): number;

    /**
     * converts radians to degrees
     * @param {Number} angle
     * @return {Number}
     * @function
     */
    function radiansToDegrees(angle: number): number;

    /**
     * Converts radians to a normalized vector.
     * @param {Number} a
     * @return {cc.Point}
     */
    function pForAngle(a: number): Point;

    /**
     * Converts a vector to radians.
     * @param {cc.Point} v
     * @return {Number}
     */
    function pToAngle(v: Point): number;

    /**
     * @constant
     * @type Number
     */
    var REPEAT_FOREVER:number;

    /**
     * default gl blend src function. Compatible with premultiplied alpha images.
     * @constant
     * @type Number
     */
    var BLEND_SRC:number;

    /**
     * default gl blend dst function. Compatible with premultiplied alpha images.
     * @constant
     * @type Number
     */
    var BLEND_DST:number;

    /**
     * Helpful macro that setups the GL server state, the correct GL program and sets the Model View Projection matrix
     * @param {cc.Node} node setup node
     * @function
     */
    function NODE_DRAW_SETUP(node:Node);

    /**
     * <p>
     *     GL states that are enabled:<br/>
     *       - GL_TEXTURE_2D<br/>
     *       - GL_VERTEX_ARRAY<br/>
     *       - GL_TEXTURE_COORD_ARRAY<br/>
     *       - GL_COLOR_ARRAY<br/>
     * </p>
     * @function
     */
    function ENABLE_DEFAULT_GL_STATES();

    /**
     * <p>
     *   Disable default GL states:<br/>
     *     - GL_TEXTURE_2D<br/>
     *     - GL_TEXTURE_COORD_ARRAY<br/>
     *     - GL_COLOR_ARRAY<br/>
     * </p>
     * @function
     */
    function DISABLE_DEFAULT_GL_STATES();

    /**
     * <p>
     *  Increments the GL Draws counts by one.<br/>
     *  The number of calls per frame are displayed on the screen when the CCDirector's stats are enabled.<br/>
     * </p>
     * @param {Number} addNumber
     * @function
     */
    function INCREMENT_GL_DRAWS(addNumber:number);

    /**
     * @constant
     * @type Number
     */
    var FLT_EPSILON:number;

    /**
     * <p>
     *     On Mac it returns 1;<br/>
     *     On iPhone it returns 2 if RetinaDisplay is On. Otherwise it returns 1
     * </p>
     * @function
     */
    function CONTENT_SCALE_FACTOR():number;

    /**
     * Converts a rect in points to pixels
     * @param {cc.Point} points
     * @return {cc.Point}
     * @function
     */
    function POINT_POINTS_TO_PIXELS(points:Point):Point;

    /**
     * Converts a rect in points to pixels
     * @param {cc.Size} sizeInPoints
     * @return {cc.Size}
     * @function
     */
    function SIZE_POINTS_TO_PIXELS(sizeInPoints:Size):Size;

    /**
     * Converts a rect in pixels to points
     * @param {cc.Size} sizeInPixels
     * @return {cc.Size}
     * @function
     */
    function SIZE_PIXELS_TO_POINTS(sizeInPixels:Size):Size;

    /**
     * Converts a rect in pixels to points
     * @param pixels
     * @function
     */
    function POINT_PIXELS_TO_POINTS(pixels:Point):Point;

    /**
     * Converts a rect in pixels to points
     * @param {cc.Rect} pixel
     * @function
     */
    function RECT_PIXELS_TO_POINTS(pixel:Rect);

    /**
     * Converts a rect in points to pixels
     * @param {cc.Rect} point
     * @function
     */
    function RECT_POINTS_TO_PIXELS(point:Point);

    //#endregion cocos2d/platform/CCMacro.js

    //#region cocos2d/platform/CCTypes.js
    export class Color {
        constructor(r?:number, g?:number, b?:number, a?:number);
    }
    export module color {
        var WHITE: Color;
        var YELLOW: Color;
        var BLUE: Color;
        var GREEN: Color;
        var RED: Color;
        var MAGENTA: Color;
        var BLACK: Color;
        var ORANGE: Color;
        var GRAY: Color;
    }
    function color(r:any, g?:number, b?:number, a?:number): Color;
    function colorEqual(c1: Color, c2: Color): boolean;
    function hexToColor(hex: string) : Color;
    function colorToHex(color: Color): string;

    /**
     * A vertex composed of 2 floats: x, y
     * @Class
     * @Construct
     * @param {Number} x1
     * @param {Number} y1
     */
    export class Vertex2F {
        x:number;
        y:number;

        constructor(x1?:number, y1?:number);
    }

    /**
     * helper macro that creates an Vertex2F type
     * @function
     * @param {Number} x
     * @param {Number} y
     * @return {cc.Vertex2F}
     */
    function Vertex2(x:number, y:number):Vertex2F;

    /**
     * A vertex composed of 3 floats: x, y, z
     * @Class
     * @Construct
     * @param {Number} x1
     * @param {Number} y1
     * @param {Number} z1
     */
    export class Vertex3F {
        x:number;
        y:number;
        z:number;

        constructor(x1?:number, y1?:number, z1?:number);
    }

    /**
     * helper macro that creates an Vertex3F type
     * @function
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @return {cc.Vertex3F}
     */
    function vertex3(x:number, y:number, z:number);

    /**
     * A texcoord composed of 2 floats: u, y
     * @Class
     * @Construct
     * @param {Number} u1
     * @param {Number} v1
     */
    export class Tex2F {
        u:number;
        v:number;

        constructor(u1?:number, v1?:number);
    }

    /**
     * helper macro that creates an Tex2F type
     * @function
     * @param {Number} u
     * @param {Number} v
     * @return {cc.Tex2F}
     */
    function tex2(u:number, v:number);

    /**
     * Point Sprite component
     * @Class
     * @Construct
     * @param {cc.Vertex2F} pos1
     * @param {cc.Color} color1
     * @param {Number} size1
     */
    export class PointSprite {
        pos:Vertex2F;
        color:Color;
        size:number;

        constructor(pos1:Vertex2F, color1:Color, size1:number);
    }

    /**
     * A 2D Quad. 4 * 2 floats
     * @Class
     * @Construct
     * @param {cc.Vertex2F} tl1
     * @param {cc.Vertex2F} tr1
     * @param {cc.Vertex2F} bl1
     * @param {cc.Vertex2F} br1
     */
    export class Quad2 {
        tl:Vertex2F;
        tr:Vertex2F;
        bl:Vertex2F;
        br:Vertex2F;

        constructor(tl1?:Vertex2F, tr1?:Vertex2F, bl1?:Vertex2F, br1?:Vertex2F);
    }

    /**
     * A 3D Quad. 4 * 3 floats
     * @Class
     * @Construct
     * @param {cc.Vertex3F} bl1
     * @param {cc.Vertex3F} br1
     * @param {cc.Vertex3F} tl1
     * @param {cc.Vertex3F} tr1
     */
    export class Quad3 {
        bl:Vertex3F;
        br:Vertex3F;
        tl:Vertex3F;
        tr:Vertex3F;

        constructor(bl1?:Vertex3F, br1?:Vertex3F, tl1?:Vertex3F, tr1?:Vertex3F);
    }

    /**
     * text alignment : left
     * @constant
     * @type Number
     */
    var TEXT_ALIGNMENT_LEFT:number;

    /**
     * text alignment : center
     * @constant
     * @type Number
     */
    var TEXT_ALIGNMENT_CENTER:number;

    /**
     * text alignment : right
     * @constant
     * @type Number
     */
    var TEXT_ALIGNMENT_RIGHT:number;

    /**
     * text alignment : top
     * @constant
     * @type Number
     */
    var VERTICAL_TEXT_ALIGNMENT_TOP:number;

    /**
     * text alignment : center
     * @constant
     * @type Number
     */
    var VERTICAL_TEXT_ALIGNMENT_CENTER:number;

    /**
     * text alignment : bottom
     * @constant
     * @type Number
     */
    var VERTICAL_TEXT_ALIGNMENT_BOTTOM:number;

    //#endregion cocos2d/platform/CCTypes.js

    //#region cocos2d/sprite_nodes/CCAnimation.js
    /**
     * <p>
     *    cc.AnimationFrame
     *    A frame of the animation. It contains information like:
     *       - sprite frame name
     *       - # of delay units.
     *       - offset
     * </p>
     * @class
     * @extends cc.Class
     */
    export class AnimationFrame extends Class {

    }

    /**
     * <p>
     *     A cc.Animation object is used to perform animations on the cc.Sprite objects.<br/>
     *     <br/>
     *      The cc.Animation object contains cc.SpriteFrame objects, and a possible delay between the frames. <br/>
     *      You can animate a cc.Animation object by using the cc.Animate action. Example:  <br/>
     * </p>
     * @class
     * @extends cc.Class
     *
     * @example
     * //create an animation object
     * var animation = cc.Animation.create();
     *
     * //add a sprite frame to this animation
     * animation.addFrameWithFile("grossini_dance_01.png");
     *
     * //create an animate with this animation
     * var action = cc.Animate.create(animation);
     *
     * //run animate
     * this._grossini.runAction(action);
     */
    export class Animation extends Class {
        /**
         * Creates an animation.
         * @param {Array} frames
         * @param {Number} delay
         * @param {Number} loops
         * @return {cc.Animation}
         * @example
         * //Creates an animation
         * var animation1 = cc.Animation.create();
         *
         * //Create an animation with sprite frames
         * var animFrames = [];
         * var frame = cache.getSpriteFrame("grossini_dance_01.png");
         * animFrames.push(frame);
         * var animation2 = cc.Animation.create(animFrames);
         *
         * //Create an animation with sprite frames and delay
         * var animation3 = cc.Animation.create(animFrames, 0.2);
         */
        static create(frames:AnimationFrame[], delay:number, loops:number):Animation;

        /**
         * Creates an animation with an array of cc.AnimationFrame, the delay per units in seconds and and how many times it should be executed.
         * @param {Array} arrayOfAnimationFrameNames
         * @param {Number} delayPerUnit
         * @param {Number} loops
         * @return {cc.Animation}
         */
        static createWithAnimationFrames(arrayOfAnimationFrameNames:AnimationFrame[], delayPerUnit:number, loops:number):Animation;
    }
    //#endregion cocos2d/sprite_nodes/CCAnimation.js

    //#region cocos2d/sprite_nodes/CCSprite.js
    /**
     * <p>cc.Sprite is a 2d image ( http://en.wikipedia.org/wiki/Sprite_(computer_graphics) ) (Canvas implement) <br/>
     *
     * cc.Sprite can be created with an image, or with a sub-rectangle of an image.  <br/>
     *
     * If the parent or any of its ancestors is a cc.SpriteBatchNode then the following features/limitations are valid   <br/>
     *    - Features when the parent is a cc.BatchNode: <br/>
     *        - MUCH faster rendering, specially if the cc.SpriteBatchNode has many children. All the children will be drawn in a single batch.  <br/>
     *
     *    - Limitations   <br/>
     *        - Camera is not supported yet (eg: CCOrbitCamera action doesn't work)  <br/>
     *        - GridBase actions are not supported (eg: CCLens, CCRipple, CCTwirl) <br/>
     *        - The Alias/Antialias property belongs to CCSpriteBatchNode, so you can't individually set the aliased property.  <br/>
     *        - The Blending function property belongs to CCSpriteBatchNode, so you can't individually set the blending function property. <br/>
     *        - Parallax scroller is not supported, but can be simulated with a "proxy" sprite.        <br/>
     *
     *  If the parent is an standard cc.Node, then cc.Sprite behaves like any other cc.Node:      <br/>
     *    - It supports blending functions    <br/>
     *    - It supports aliasing / antialiasing    <br/>
     *    - But the rendering will be slower: 1 draw per children.   <br/>
     *
     * The default anchorPoint in cc.Sprite is (0.5, 0.5). </p>
     * @class
     * @extends cc.Node
     *
     * @example
     * var aSprite = new cc.Sprite();
     * aSprite.initWithFile("HelloHTML5World.png",cc.rect(0,0,480,320));
     */
    export class Sprite extends Node {
        setOpacity(opacity : number);
        getOpacity():number;

        init();
        initWithFile(name:string);
        initWithTexture(texture: Texture2D);
        initWithSpriteFrameName(name:string);

        setSpriteFrame(sp: SpriteFrame);
        setTexture(texture: Texture2D);
        getTexture() : Texture2D;
        setFlippedY(n: number);
        setFlippedX(n: number);
        getBatchNode();
        getOffsetPosition();
        removeAllChildrenWithCleanup();
        updateTransform();
        setTextureRect();
        isFrameDisplayed();
        getAtlasIndex();
        setBatchNode();
        getBlendFunc();
        setDisplayFrameWithAnimationName();
        setTextureAtlas();
        getSpriteFrame();
        isDirty();
        setAtlasIndex();
        setDirty();
        isTextureRectRotated();
        getTextureRect();
        setBlendFunc();
        getTextureAtlas();
        initWithSpriteFrame();
        isFlippedX(): boolean;
        isFlippedY(): boolean;
        setVertexRect();

        static create(fileName?:string, rect?:Rect):Sprite;
        static createWithSpriteFrameName(spriteFrameName:string):Sprite;
        static createWithSpriteFrame(sp: SpriteFrame): Sprite;
        static createWithTexture(texture: Texture2D) : Sprite;
    }
    //#endregion cocos2d/sprite_nodes/CCSprite.js


    //#region CocosDension/SimpleAudioEngine.js
    class AudioEngine extends Class {
    }

    /**
     * The Audio Engine implementation via <audio> tag in HTML5.
     * @class
     * @extends   cc.AudioEngine
     */
    class SimpleAudioEngine extends AudioEngine {
        /**
         * Preload music resource.<br />
         * This method is called when cc.Loader preload  resources.
         * @param {String} path The path of the music file with filename extension.
         */
        preloadSound(path:string);

        /**
         * Play music.
         * @param {String} path The path of the music file without filename extension.
         * @param {Boolean} loop Whether the music loop or not.
         * @example
         * //example
         * cc.AudioEngine.getInstance().playMusic(path, false);
         */
        playMusic(path:string, loop:boolean);

        /**
         * Stop playing music.
         * @param {Boolean} releaseData If release the music data or not.As default value is false.
         * @example
         * //example
         * cc.AudioEngine.getInstance().stopMusic();
         */
        stopMusic(releaseData:boolean);

        /**
         * Pause playing music.
         * @example
         * //example
         * cc.AudioEngine.getInstance().pauseMusic();
         */
        pauseMusic();

        /**
         * Resume playing music.
         * @example
         * //example
         * cc.AudioEngine.getInstance().resumeMusic();
         */
        resumeMusic();

        /**
         * Rewind playing music.
         * @example
         * //example
         * cc.AudioEngine.getInstance().rewindMusic();
         */
        rewindMusic();

        /**
         * The volume of the music max value is 1.0,the min value is 0.0 .
         * @return {Number}
         * @example
         * //example
         * var volume = cc.AudioEngine.getInstance().getMusicVolume();
         */
        getMusicVolume():number;

        /**
         * Set the volume of music.
         * @param {Number} volume Volume must be in 0.0~1.0 .
         * @example
         * //example
         * cc.AudioEngine.getInstance().setMusicVolume(0.5);
         */
        setMusicVolume(volume:number);

        /**
         * Whether the music is playing.
         * @return {Boolean} If is playing return true,or return false.
         * @example
         * //example
         *  if (cc.AudioEngine.getInstance().isMusicPlaying()) {
         *      cc.log("music is playing");
         *  }
         *  else {
         *      cc.log("music is not playing");
         *  }
         */
        isMusicPlaying():boolean;

        /**
         * Play sound effect.
         * @param {String} path The path of the sound effect with filename extension.
         * @param {Boolean} loop Whether to loop the effect playing, default value is false
         * @example
         * //example
         * var soundId = cc.AudioEngine.getInstance().playEffect(path);
         */
        playEffect(path:string, loop:boolean):number;

        /**
         *The volume of the effects max value is 1.0,the min value is 0.0 .
         * @return {Number}
         * @example
         * //example
         * var effectVolume = cc.AudioEngine.getInstance().getEffectsVolume();
         */
        getEffectsVolume():number;

        /**
         * Set the volume of sound effecs.
         * @param {Number} volume Volume must be in 0.0~1.0 .
         * @example
         * //example
         * cc.AudioEngine.getInstance().setEffectsVolume(0.5);
         */
        setEffectsVolume(volume:number);

        /**
         * Pause playing sound effect.
         * @param {Number} audioID The return value of function playEffect.
         * @example
         * //example
         * cc.AudioEngine.getInstance().pauseEffect(audioID);
         */
        pauseEffect(audioID:number);

        /**
         * Pause all playing sound effect.
         * @example
         * //example
         * cc.AudioEngine.getInstance().pauseAllEffects();
         */
        pauseAllEffects();

        /**
         * Resume playing sound effect.
         * @param {Number} audioID The return value of function playEffect.
         * @audioID
         * //example
         * cc.AudioEngine.getInstance().resumeEffect(audioID);
         */
        resumeEffect(audioID:number);

        /**
         * Resume all playing sound effect
         * @example
         * //example
         * cc.AudioEngine.getInstance().resumeAllEffects();
         */
        resumeAllEffects();

        /**
         * Stop playing sound effect.
         * @param {Number} audioID The return value of function playEffect.
         * @example
         * //example
         * cc.AudioEngine.getInstance().stopEffect(audioID);
         */
        stopEffect(audioID:number);

        /**
         * Stop all playing sound effects.
         * @example
         * //example
         * cc.AudioEngine.getInstance().stopAllEffects();
         */
        stopAllEffects();

        /**
         * Unload the preloaded effect from internal buffer
         * @param {String} path
         * @example
         * //example
         * cc.AudioEngine.getInstance().unloadEffect(EFFECT_FILE);
         */
        unloadEffect(path:string);

        /**
         * search in this._supportedFormat if @param ext is there
         * @param {String} ext
         * @returns {Boolean}
         */
        isFormatSupported(ext:string):boolean;
    }
    //#endregion CocosDension/SimpleAudioEngine.js
}

/** N/A in cocos2d-html5 */
declare module cc {
    export module sys {
        var LANGUAGE_ENGLISH:string;
        var LANGUAGE_CHINESE:string;
        var LANGUAGE_FRENCH:string;
        var LANGUAGE_ITALIAN:string;
        var LANGUAGE_GERMAN:string;
        var LANGUAGE_SPANISH:string;
        var LANGUAGE_RUSSIAN:string;
        var LANGUAGE_KOREAN:string;
        var LANGUAGE_JAPANESE:string;
        var LANGUAGE_HUNGARIAN:string;
        var LANGUAGE_PORTUGUESE:string;
        var LANGUAGE_ARABIC:string;
        var LANGUAGE_NORWEGIAN:string;
        var LANGUAGE_POLISH:string;
        var OS_WINDOWS:string;
        var OS_IOS:string;
        var OS_OSX:string;
        var OS_UNIX:string;
        var OS_LINUX:string;
        var OS_ANDROID:string;
        var OS_UNKNOWN:string;

        var BROWSER_TYPE_WECHAT:string;
        var BROWSER_TYPE_ANDROID:string;
        var BROWSER_TYPE_IE:string;
        var BROWSER_TYPE_QQ:string;
        var BROWSER_TYPE_MOBILE_QQ:string;
        var BROWSER_TYPE_UC:string;
        var BROWSER_TYPE_360:string;
        var BROWSER_TYPE_BAIDU_APP:string;
        var BROWSER_TYPE_BAIDU:string;
        var BROWSER_TYPE_MAXTHON:string;
        var BROWSER_TYPE_OPERA:string;
        var BROWSER_TYPE_MIUI:string;
        var BROWSER_TYPE_FIREFOX:string;
        var BROWSER_TYPE_SAFARI:string;
        var BROWSER_TYPE_CHROME:string;
        var BROWSER_TYPE_UNKNOWN:string;

        var isNative:boolean;

        var os:string;

        var isMobile:boolean;

        var language:string;

        var browserType:string;//null in jsb

        function garbageCollect();

        // Dumps rooted objects
        function dumpRoot();

        // restarts the JS VM
        function restartVM();

        var capabilities: {
            "opengl": boolean;
            "accelerometer" : boolean;
            "touches" : boolean;
            "keyboard": boolean;
            "mouse": boolean;
        }
    }


}

declare module cc {
    class Control extends Layer {
        /**
         * @method setEnabled
         * @param {bool} bool
         */
        setEnabled(bool:boolean) ;

        /**
         * @method getState
         * @return {cc.Control::State}
         */
        getState():number;

        /**
         * @method sendActionsForControlEvents
         * @param {cc.Control::EventType} arg0
         */
        sendActionsForControlEvents(eventtype) ;

        /**
         * @method setSelected
         * @param {bool} arg0
         */
        setSelected(bool:boolean) ;

        /**
         * @method isEnabled
         * @return {bool}
         */
        isEnabled():boolean ;

        /**
         * @method needsLayout
         */
        needsLayout() ;

        /**
         * @method hasVisibleParents
         * @return {bool}
         */
        hasVisibleParents():boolean;

        /**
         * @method isSelected
         * @return {bool}
         */
        isSelected():boolean;

        /**
         * @method isTouchInside
         * @param {cc.Touch} touch
         * @return {bool}
         */
        isTouchInside(touch:Touch):boolean ;

        /**
         * @method setHighlighted
         * @param {bool} bool
         */
        setHighlighted(bool:boolean) ;

        /**
         * @method getTouchLocation
         * @param {cc.Touch} touch
         * @return {cc.Point}
         */
        getTouchLocation(touch:Touch):Point ;

        /**
         * @method isHighlighted
         * @return {bool}
         */
        isHighlighted():boolean;

        /**
         * @method create
         * @return {cc.Control}
         */
        static create():Control;
    }

    class ControlButton extends Control {
        isPushed();
        setTitleLabelForState();
        setAdjustBackgroundImage();
        setZoomOnTouchDown();
        setTitleForState();
        setLabelAnchorPoint();
        getLabelAnchorPoint();
        initWithBackgroundSprite();
        getTitleTTFSizeForState();
        setTitleTTFForState();
        setTitleTTFSizeForState();
        setTitleLabel();
        setPreferredSize();
        getCurrentTitleColor();
        setBackgroundSprite(sp: Scale9Sprite);
        getBackgroundSpriteForState();
        getHorizontalOrigin();
        initWithTitleAndFontNameAndFontSize();
        getCurrentTitle();
        getScaleRatio();
        getTitleTTFForState();
        getBackgroundSprite();
        getTitleColorForState();
        setTitleColorForState();
        doesAdjustBackgroundImage();
        setBackgroundSpriteFrameForState(sp: SpriteFrame, state: number);
        setBackgroundSpriteForState(sp: Scale9Sprite, state: number);
        setScaleRatio();
        initWithLabelAndBackgroundSprite();
        getTitleLabel();
        getPreferredSize();
        getVerticalMargin();
        getTitleLabelForState();
        setMargins();
        setTitleBMFontForState();
        getTitleBMFontForState();
        getZoomOnTouchDown();
        getTitleForState();

        static create(): ControlButton;
    }
}

declare module cc {
    class PhysicsDebugNode extends cc.Node {
        static create(space: cp.Space): PhysicsDebugNode;
        setSpace(space: cp.Space);
        getSpace(): cp.Space;
    }
    class PhysicsSprite extends cc.Sprite {
        static create(fileName?:string, rect?:Rect):PhysicsSprite;
        setBody(body: cp.Body);
        getBody(): cp.Body;
        getIgnoreBodyRotation(): boolean;
        setIgnoreBodyRotation(bool :boolean);
    }
}

declare module cc {
    


    /**
     * Hexagonal orientation
     * Defined in: CCTMXTiledMap.js.
     */
    const TMX_ORIENTATION_HEX: number

    /**
     * Isometric orientation
     * Defined in: CCTMXTiledMap.js.
     */
    const TMX_ORIENTATION_ISO: number

    /**
     * Orthogonal orientation
     * Defined in: CCTMXTiledMap.js.
     */
    const TMX_ORIENTATION_ORTHO: number

    /**
     * Defined in: CCTMXXMLParser.js.
     */
    const TMX_PROPERTY_LAYER: number

    /**
     * Defined in: CCTMXXMLParser.js.
     */
    const TMX_PROPERTY_MAP: number

    /**
     * Defined in: CCTMXXMLParser.js.
     */
    const TMX_PROPERTY_NONE: number

    /**
     * Defined in: CCTMXXMLParser.js.
     */
    const TMX_PROPERTY_OBJECT: number

    /**
     * Defined in: CCTMXXMLParser.js.
     */
    const TMX_PROPERTY_OBJECTGROUP: number

    /**
     * Defined in: CCTMXXMLParser.js.
     */
    const TMX_PROPERTY_TILE: number

    /**
     * Defined in: CCTMXXMLParser.js.
     */
    const TMX_TILE_DIAGONAL_FLAG: number

    /**
     * Defined in: CCTMXXMLParser.js.
     */
    const TMX_TILE_FLIPPED_ALL: number

    /**
     * Defined in: CCTMXXMLParser.js.
     */
    const TMX_TILE_FLIPPED_MASK: number

    /**
     * Defined in: CCTMXXMLParser.js.
     */
    const TMX_TILE_HORIZONTAL_FLAG: number

    /**
     * Defined in: CCTMXXMLParser.js.
     */
    const TMX_TILE_VERTICAL_FLAG: number

    interface ITMXTiledMap extends cc.INode {

        mapHeight: number
    
        mapOrientation: number
    
        mapWidth: number
    
        objectGroups: any[]
    
        properties: any[]
    
        tileHeight: number
    
        tileWidth: number
    
        allLayers(): any[]
    
        getLayer(layerName: string): cc.TMXLayer
    
        getMapOrientation(): number
    
        getMapSize(): cc.Size
    
        getObjectGroup(groupName: string): cc.TMXObjectGroup
    
        getObjectGroups(): any[]
    
        getProperties(): object
    
        getPropertiesForGID(GID: number): object
    
        getProperty(propertyName: string): string
    
        getTileSize(): cc.Size
    
        initWithTMXFile(tmxFile: string): boolean
    
        initWithXML(tmxString: string, resourcePath: string): boolean
    
        propertiesForGID(GID: number): object
    
        setMapOrientation(Var: number): any
    
        setMapSize(Var: cc.Size): any
    
        setObjectGroups(Var: any[]): any
    
        setProperties(Var: object): any
    
        setTileSize(Var: cc.Size): any
    }
    
    interface ITMXTiledMapOverrides {
    
    }
    class TMXTiledMap implements ITMXTiledMap, ITMXTiledMapOverrides extends cc.Node {
    
        /**
         * Creates a TMX Tiled Map with a TMX file or content string.
         * Constructor of cc.TMXTiledMap
         *
         * @param {String} tmxFile tmxFile fileName or content string
         * @param {String} resourcePath If tmxFile is a file name ,it is not required.If tmxFile is content string ,it is must required.
         */
        constructor(tmxFile: string, resourcePath?: string)
    
    
    
    
        /**
         * Creates a TMX Tiled Map with a TMX file or content string.
         * Implementation cc.TMXTiledMap
         *
         * @param {String} tmxFile tmxFile fileName or content string
         * @param {String} resourcePath If tmxFile is a file name ,it is not required.If tmxFile is content string ,it is must required.
         *
         * @returns {cc.TMXTiledMap|undefined}
         */
        static create(tmxFile: string, resourcePath?: string): cc.TMXTiledMap | undefined
    
    
    
    
        /**
         * - Height of the map
         */
        mapHeight: number
    
        /**
         * - Map orientation
         */
        mapOrientation: number
    
        /**
         * - Width of the map
         */
        mapWidth: number
    
        /**
         * - Object groups of the map
         */
        objectGroups: any[]
    
        /**
         * - Properties from the map. They can be added using tilemap editors
         */
        properties: any[]
    
        /**
         * - Height of a tile
         */
        tileHeight: number
    
        /**
         * - Width of a tile
         */
        tileWidth: number
    
        /**
         * Return All layers array.
         *
         * @returns {Array}
         */
        allLayers(): any[]
    
        /**
         * return the TMXLayer for the specific layer
         *
         * @param {String} layerName
         *
         * @returns {cc.TMXLayer}
         */
        getLayer(layerName: string): cc.TMXLayer
    
        /**
         * map orientation
         *
         * @returns {Number}
         */
        getMapOrientation(): number
    
        /**
         * Gets the map size.
         *
         * @returns {cc.Size}
         */
        getMapSize(): cc.Size
    
        /**
         * Return the TMXObjectGroup for the specific group
         *
         * @param {String} groupName
         *
         * @returns {cc.TMXObjectGroup}
         */
        getObjectGroup(groupName: string): cc.TMXObjectGroup
    
        /**
         * object groups
         *
         * @returns {Array}
         */
        getObjectGroups(): any[]
    
        /**
         * Gets the properties
         *
         * @returns {object}
         */
        getProperties(): object
    
        /**
         * Return properties dictionary for tile GID
         *
         * @param {Number} GID
         *
         * @returns {object}
         */
        getPropertiesForGID(GID: number): object
    
        /**
         * Return the value for the specific property name
         *
         * @param {String} propertyName
         *
         * @returns {String}
         */
        getProperty(propertyName: string): string
    
        /**
         * Gets the tile size.
         *
         * @returns {cc.Size}
         */
        getTileSize(): cc.Size
    
        /**
         * Initializes the instance of cc.TMXTiledMap with tmxFile
         *
         * @param {String} tmxFile
         *
         * @returns {Boolean} Whether the initialization was successful.
         */
        initWithTMXFile(tmxFile: string): boolean
    
        /**
         * Initializes the instance of cc.TMXTiledMap with tmxString
         *
         * @param {String} tmxString
         * @param {String} resourcePath
         *
         * @returns {Boolean} Whether the initialization was successful.
         */
        initWithXML(tmxString: string, resourcePath: string): boolean
    
        /**
         * Return properties dictionary for tile GID
         *
         * @param {Number} GID
         *
         * @returns {object}
         */
        propertiesForGID(GID: number): object
    
        /**
         * map orientation
         *
         * @param {Number} Var
         */
        setMapOrientation(Var: number): any
    
        /**
         * Set the map size.
         *
         * @param {cc.Size} Var
         */
        setMapSize(Var: cc.Size): any
    
        /**
         * object groups
         *
         * @param {Array} Var
         */
        setObjectGroups(Var: any[]): any
    
        /**
         * Set the properties
         *
         * @param {object} Var
         */
        setProperties(Var: object): any
    
        /**
         * Set the tile size
         *
         * @param {cc.Size} Var
         */
        setTileSize(Var: cc.Size): any
    }

    interface ITMXLayer extends cc.ISpriteBatchNode {

        layerHeight: number
    
        layerName: string
    
        layerOrientation: number
    
        layerWidth: number
    
        properties: any[]
    
        tileHeight: number
    
        tiles: any[]
    
        tileset: cc.TMXTilesetInfo
    
        tileWidth: number
    
        getLayerName(): string
    
        getLayerOrientation(): number
    
        getLayerSize(): cc.Size
    
        getMapTileSize(): cc.Size
    
        getPositionAt(pos: cc.Point | number, y: number): cc.Point
    
        getProperties(): any[]
    
        getProperty(propertyName: string): any
    
        getTileAt(pos: cc.Point | number, y: number): cc.Sprite
    
        getTileFlagsAt(pos: cc.Point | number, y: number): number
    
        getTileGIDAt(pos: cc.Point | number, y: number): number
    
        getTiles(): any[]
    
        getTileset(): cc.TMXTilesetInfo
    
        initWithTilesetInfo(tilesetInfo: cc.TMXTilesetInfo, layerInfo: cc.TMXLayerInfo, mapInfo: cc.TMXMapInfo): boolean
    
        releaseMap(): any
    
        removeTileAt(pos: cc.Point | number, y: number): any
    
        setLayerName(layerName: string): any
    
        setLayerOrientation(Var: number): any
    
        setLayerSize(Var: cc.Size): any
    
        setMapTileSize(Var: cc.Size): any
    
        setProperties(Var: any[]): any
    
        setTileGID(gid: number, posOrX: cc.Point | number, flagsOrY: number, flags: number): any
    
        setTiles(Var: any[]): any
    
        setTileset(Var: cc.TMXTilesetInfo): any
    }
    
    interface ITMXLayerOverrides {
    
    }
    
    class TMXLayer implements ITMXLayer, ITMXLayerOverrides {
    
        /**
         * Creates a cc.TMXLayer with an tile set info, a layer info and a map info
         * Constructor of cc.TMXLayer
         *
         * @param {cc.TMXTilesetInfo} tilesetInfo
         * @param {cc.TMXLayerInfo} layerInfo
         * @param {cc.TMXMapInfo} mapInfo
         */
        constructor(tilesetInfo: cc.TMXTilesetInfo, layerInfo: cc.TMXLayerInfo, mapInfo: cc.TMXMapInfo)
    
    
    
    
        /**
         * Creates a cc.TMXLayer with an tile set info, a layer info and a map info
         *
         * @param {cc.TMXTilesetInfo} tilesetInfo
         * @param {cc.TMXLayerInfo} layerInfo
         * @param {cc.TMXMapInfo} mapInfo
         *
         * @returns {cc.TMXLayer|Null}
         */
        static create(tilesetInfo: cc.TMXTilesetInfo, layerInfo: cc.TMXLayerInfo, mapInfo: cc.TMXMapInfo): cc.TMXLayer | null
    
    
    
    
        /**
         * - Height of the layer
         */
        layerHeight: number
    
        /**
         * - Name of the layer
         */
        layerName: string
    
        /**
         * - Layer orientation
         */
        layerOrientation: number
    
        /**
         * - Width of the layer
         */
        layerWidth: number
    
        /**
         * - Properties from the layer. They can be added using tilemap editors
         */
        properties: any[]
    
        /**
         * - Height of a tile
         */
        tileHeight: number
    
        /**
         * - Tiles for layer
         */
        tiles: any[]
    
        /**
         * - Tileset for layer
         */
        tileset: cc.TMXTilesetInfo
    
        /**
         * - Width of a tile
         */
        tileWidth: number
    
        /**
         * Gets the layer name
         *
         * @returns {String}
         */
        getLayerName(): string
    
        /**
         * Layer orientation, which is the same as the map orientation
         *
         * @returns {Number}
         */
        getLayerOrientation(): number
    
        /**
         * Gets layer size.
         *
         * @returns {cc.Size}
         */
        getLayerSize(): cc.Size
    
        /**
         * Size of the map's tile (could be different from the tile's size)
         *
         * @returns {cc.Size}
         */
        getMapTileSize(): cc.Size
    
        /**
         * Returns the position in pixels of a given tile coordinate
         *
         * @param {cc.Point|Number} pos position or x
         * @param {Number} y
         *
         * @returns {cc.Point}
         */
        getPositionAt(pos: cc.Point | number, y: number): cc.Point
    
        /**
         * properties from the layer. They can be added using Tiled
         *
         * @returns {Array}
         */
        getProperties(): any[]
    
        /**
         * Return the value for the specific property name
         *
         * @param {String} propertyName
         *
         * @returns {*}
         */
        getProperty(propertyName: string): any
    
        /**
         * Returns the tile (cc.Sprite) at a given a tile coordinate.
         * The returned cc.Sprite will be already added to the cc.TMXLayer. Don't add it again.
         * The cc.Sprite can be treated like any other cc.Sprite: rotated, scaled, translated, opacity, color, etc.
         * You can remove either by calling:
         * - layer.removeChild(sprite, cleanup);
         * - or layer.removeTileAt(ccp(x,y));
         *
         * @param {cc.Point|Number} pos or x
         * @param {Number} y
         *
         * @returns {cc.Sprite}
         */
        getTileAt(pos: cc.Point | number, y: number): cc.Sprite
    
        /**
         * lipped tiles can be changed dynamically
         *
         * @param {cc.Point|Number} pos or x
         * @param {Number} y
         *
         * @returns {Number}
         */
        getTileFlagsAt(pos: cc.Point | number, y: number): number
    
        /**
         * Returns the tile gid at a given tile coordinate.
         * if it returns 0, it means that the tile is empty.
         * This method requires the the tile map has not been previously released (eg. don't call layer.releaseMap())
         *
         * @param {cc.Point|Number} pos or x
         * @param {Number} y
         *
         * @returns {Number}
         */
        getTileGIDAt(pos: cc.Point | number, y: number): number
    
        /**
         * Pointer to the map of tiles
         *
         * @returns {Array}
         */
        getTiles(): any[]
    
        /**
         * Tile set information for the layer
         *
         * @returns {cc.TMXTilesetInfo}
         */
        getTileset(): cc.TMXTilesetInfo
    
        /**
         * Initializes a cc.TMXLayer with a tileset info, a layer info and a map info
         *
         * @param {cc.TMXTilesetInfo} tilesetInfo
         * @param {cc.TMXLayerInfo} layerInfo
         * @param {cc.TMXMapInfo} mapInfo
         *
         * @returns {Boolean}
         */
        initWithTilesetInfo(tilesetInfo: cc.TMXTilesetInfo, layerInfo: cc.TMXLayerInfo, mapInfo: cc.TMXMapInfo): boolean
    
        /**
         * Dealloc the map that contains the tile position from memory.
         * Unless you want to know at runtime the tiles positions, you can safely call this method.
         * If you are going to call layer.getTileGIDAt() then, don't release the map
         */
        releaseMap(): any
    
        /**
         * Removes a tile at given tile coordinate
         *
         * @param {cc.Point|Number} pos position or x
         * @param {Number} y
         */
        removeTileAt(pos: cc.Point | number, y: number): any
    
        /**
         * Set the layer name
         *
         * @param {String} layerName
         */
        setLayerName(layerName: string): any
    
        /**
         * Layer orientation, which is the same as the map orientation
         *
         * @param {Number} Var
         */
        setLayerOrientation(Var: number): any
    
        /**
         * Set layer size
         *
         * @param {cc.Size} Var
         */
        setLayerSize(Var: cc.Size): any
    
        /**
         * Set the map tile size.
         *
         * @param {cc.Size} Var
         */
        setMapTileSize(Var: cc.Size): any
    
        /**
         * properties from the layer. They can be added using Tiled
         *
         * @param {Array} Var
         */
        setProperties(Var: any[]): any
    
        /**
         * Sets the tile gid (gid = tile global id) at a given tile coordinate.
         * The Tile GID can be obtained by using the method "tileGIDAt" or by using the TMX editor . Tileset Mgr +1.
         * If a tile is already placed at that position, then it will be removed.
         *
         * @param {Number} gid
         * @param {cc.Point|Number} posOrX position or x
         * @param {Number} flagsOrY flags or y
         * @param {Number} flags
         */
        setTileGID(gid: number, posOrX: cc.Point | number, flagsOrY: number, flags: number): any
    
        /**
         * Pointer to the map of tiles
         *
         * @param {Array} Var
         */
        setTiles(Var: any[]): any
    
        /**
         * Tile set information for the layer
         *
         * @param {cc.TMXTilesetInfo} Var
         */
        setTileset(Var: cc.TMXTilesetInfo): any
    
    
        /**
         * - <@readonly> Descendants of sprite batch node
         */
        descendants: any[]
    
        /**
         * - The texture atlas
         */
        textureAtlas: cc.TextureAtlas
    
        /**
         * Same as addChild
         *
         * @param {cc.Sprite} child
         * @param {Number} z zOrder
         * @param {Number} aTag
         *
         * @returns {cc.SpriteBatchNode}
         */
        addSpriteWithoutQuad(child: cc.Sprite, z: number, aTag: number): cc.SpriteBatchNode
    
        /**
         * Add child at the end
         *
         * @param {cc.Sprite} sprite
         */
        appendChild(sprite: cc.Sprite): any
    
        /**
         * Returns index for child
         *
         * @param {cc.Sprite} sprite
         *
         * @returns {Number}
         */
        atlasIndexForChild(sprite: cc.Sprite): number
    
        /**
         * Returns the blending function used for the texture
         *
         * @returns {cc.BlendFunc}
         */
        getBlendFunc(): Function
    
        /**
         * Return Descendants of cc.SpriteBatchNode
         *
         * @returns {Array}
         */
        getDescendants(): any[]
    
        /**
         * Returns texture of the sprite batch node
         *
         * @returns {cc.Texture2D}
         */
        getTexture(): cc.Texture2D
    
        /**
         * Return null, no texture atlas is used any more
         *
         * @returns {cc.TextureAtlas}
         */
        getTextureAtlas(): cc.TextureAtlas
    
        /**
         * Returns highest atlas index in child
         *
         * @param {cc.Sprite} sprite
         *
         * @returns {Number}
         */
        highestAtlasIndexInChild(sprite: cc.Sprite): number
    
        /**
         * Do nothing
         */
        increaseAtlasCapacity(): any
    
        /**
         * Initializes a cc.SpriteBatchNode with a file image (.png, .jpeg, .pvr, etc) and a capacity of children.
         * The capacity will be increased in 33% in runtime if it run out of space.
         * The file will be loaded using the TextureMgr.
         * Please pass parameters to constructor to initialize the sprite batch node, do not call this function yourself.
         *
         * @param {String} fileImage
         * @param {Number} capacity
         *
         * @returns {Boolean}
         */
        initWithFile(fileImage: string, capacity: number): boolean
    
        /**
         * Set the texture property
         *
         * @param {cc.Texture2D} tex
         *
         * @returns {Boolean}
         */
        initWithTexture(tex: cc.Texture2D): boolean
    
        /**
         * Same as addChild(sprite, index)
         *
         * @param {cc.Sprite} sprite The child sprite
         * @param {Number} index The insert index
         */
        insertChild(sprite: cc.Sprite, index: number): any
    
        /**
         * Same as addChild(sprite, index)
         *
         * @param {cc.Sprite} sprite
         * @param {Number} index
         */
        insertQuadFromSprite(sprite: cc.Sprite, index: number): any
    
        /**
         * Returns lowest atlas index in child
         *
         * @param {cc.Sprite} sprite
         *
         * @returns {Number}
         */
        lowestAtlasIndexInChild(sprite: cc.Sprite): number
    
        /**
         * Do nothing
         *
         * @param {cc.Sprite} pobParent
         * @param {Number} index
         *
         * @returns {Number}
         */
        rebuildIndexInOrder(pobParent: cc.Sprite, index: number): number
    
        /**
         * Removes a child given a certain index. It will also cleanup the running actions depending on the cleanup parameter.
         *
         * @param {Number} index
         * @param {Boolean} doCleanup
         */
        removeChildAtIndex(index: number, doCleanup: boolean): any
    
        /**
         * Same as removeChild
         *
         * @param {cc.Sprite} sprite
         * @param {Boolean} cleanup true if all running actions and callbacks on the child node will be cleanup, false otherwise.
         */
        removeSpriteFromAtlas(sprite: cc.Sprite, cleanup: boolean): any
    
        /**
         * Sprites use this to start sortChildren, don't call this manually
         *
         * @param {Boolean} reorder
         */
        reorderBatch(reorder: boolean): any
    
        /**
         * Sets the source and destination blending function for the texture
         *
         * @param {Number | cc.BlendFunc} src
         * @param {Number} dst
         */
        setBlendFunc(src: number | Function, dst: number): any
    
        /**
         * Sets the texture of the sprite batch node.
         *
         * @param {cc.Texture2D} texture
         */
        setTexture(texture: cc.Texture2D): any
    
        /**
         * TextureAtlas of cc.SpriteBatchNode setter
         *
         * @param {cc.TextureAtlas} textureAtlas
         */
        setTextureAtlas(textureAtlas: cc.TextureAtlas): any
    
        /**
         * Updates a quad at a certain index into the texture atlas. The CCSprite won't be added into the children array.
         * This method should be called only when you are dealing with very big AtlasSrite and when most of the cc.Sprite won't be updated.
         * For example: a tile map (cc.TMXMap) or a label with lots of characters (BitmapFontAtlas)
         *
         * @param {cc.Sprite} sprite
         * @param {Number} index
         */
        updateQuadFromSprite(sprite: cc.Sprite, index: number): any
    }

    interface ITMXMapInfo extends cc.IsaxParser {

        currentString: string
    
        layerAttrs: object
    
        mapHeight: number
    
        mapWidth: number
    
        orientation: number
    
        parentElement: object
    
        parentGID: number
    
        properties: any[]
    
        storingCharacters: boolean
    
        tileHeight: number
    
        tileWidth: number
    
        tmxFileName: string
    
        getCurrentString(): string
    
        getLayerAttribs(): object
    
        getLayers(): any[]
    
        getMapSize(): cc.Size
    
        getObjectGroups(): any[]
    
        getOrientation(): number
    
        getParentElement(): object
    
        getParentGID(): number
    
        getProperties(): any[]
    
        getStoringCharacters(): boolean
    
        getTileProperties(): object
    
        getTilesets(): any[]
    
        getTileSize(): cc.Size
    
        getTMXFileName(): string
    
        initWithTMXFile(tmxFile: string): Element
    
        initWithXML(tmxString: string, resourcePath: string): boolean
    
        parseXMLFile(tmxFile: string, isXmlString: boolean): Element
    
        parseXMLString(xmlString: string): boolean
    
        setCurrentString(currentString: string): any
    
        setLayerAttribs(value: object): any
    
        setLayers(value: cc.TMXLayerInfo): any
    
        setMapSize(value: cc.Size): any
    
        setObjectGroups(value: cc.TMXObjectGroup): any
    
        setOrientation(value: number): any
    
        setParentElement(value: object): any
    
        setParentGID(value: number): any
    
        setProperties(value: object): any
    
        setStoringCharacters(value: boolean): any
    
        setTileProperties(tileProperties: object): any
    
        setTilesets(value: cc.TMXTilesetInfo): any
    
        setTileSize(value: cc.Size): any
    
        setTMXFileName(fileName: string): any
    }
    
    interface ITMXMapInfoOverrides {
    
    }

    class TMXMapInfo implements ITMXMapInfo, ITMXMapInfoOverrides {
    
        /**
         * Creates a TMX Format with a tmx file or content string
         * Constructor of cc.TMXMapInfo
         *
         * @param {String} tmxFile fileName or content string
         * @param {String} resourcePath If tmxFile is a file name ,it is not required.If tmxFile is content string ,it is must required.
         */
        constructor(tmxFile: string, resourcePath: string)
    
    
    
    
        /**
         * Creates a TMX Format with a tmx file or content string
         *
         * @param {String} tmxFile fileName or content string
         * @param {String} resourcePath If tmxFile is a file name ,it is not required.If tmxFile is content string ,it is must required.
         *
         * @returns {cc.TMXMapInfo}
         */
        static create(tmxFile: string, resourcePath: string): cc.TMXMapInfo
    
    
    
    
        /**
         * - Current string stored from characters stream.
         */
        currentString: string
    
        /**
         * - Layer attributes.
         */
        layerAttrs: object
    
        /**
         * - Height of the map
         */
        mapHeight: number
    
        /**
         * - Width of the map
         */
        mapWidth: number
    
        /**
         * - Map orientation.
         */
        orientation: number
    
        /**
         * - Parent element.
         */
        parentElement: object
    
        /**
         * - Parent GID.
         */
        parentGID: number
    
        /**
         * - Properties of the map info.
         */
        properties: any[]
    
        /**
         * - Is reading storing characters stream.
         */
        storingCharacters: boolean
    
        /**
         * - Height of a tile
         */
        tileHeight: number
    
        /**
         * - Width of a tile
         */
        tileWidth: number
    
        /**
         * - TMX file name.
         */
        tmxFileName: string
    
        /**
         * Gets the currentString
         *
         * @returns {String}
         */
        getCurrentString(): string
    
        /**
         * Layer attribute
         *
         * @returns {Object}
         */
        getLayerAttribs(): object
    
        /**
         * Layers
         *
         * @returns {Array}
         */
        getLayers(): any[]
    
        /**
         * Map width & height
         *
         * @returns {cc.Size}
         */
        getMapSize(): cc.Size
    
        /**
         * ObjectGroups
         *
         * @returns {Array}
         */
        getObjectGroups(): any[]
    
        /**
         * Gets Map orientation.
         *
         * @returns {Number}
         */
        getOrientation(): number
    
        /**
         * parent element
         *
         * @returns {Object}
         */
        getParentElement(): object
    
        /**
         * parent GID
         *
         * @returns {Number}
         */
        getParentGID(): number
    
        /**
         * Properties
         *
         * @returns {Array}
         */
        getProperties(): any[]
    
        /**
         * Is reading storing characters stream
         *
         * @returns {Boolean}
         */
        getStoringCharacters(): boolean
    
        /**
         * Gets the tile properties.
         *
         * @returns {object}
         */
        getTileProperties(): object
    
        /**
         * tilesets
         *
         * @returns {Array}
         */
        getTilesets(): any[]
    
        /**
         * Tiles width & height
         *
         * @returns {cc.Size}
         */
        getTileSize(): cc.Size
    
        /**
         * Gets the tmxFileName
         *
         * @returns {String}
         */
        getTMXFileName(): string
    
        /**
         * Initializes a TMX format with a tmx file
         *
         * @param {String} tmxFile
         *
         * @returns {Element}
         */
        initWithTMXFile(tmxFile: string): Element
    
        /**
         * initializes a TMX format with an XML string and a TMX resource path
         *
         * @param {String} tmxString
         * @param {String} resourcePath
         *
         * @returns {Boolean}
         */
        initWithXML(tmxString: string, resourcePath: string): boolean
    
        /**
         * Initalises parsing of an XML file, either a tmx (Map) file or tsx (Tileset) file
         *
         * @param {String} tmxFile
         * @param {boolean} isXmlString
         *
         * @returns {Element}
         */
        parseXMLFile(tmxFile: string, isXmlString: boolean): Element
    
        /**
         * initializes parsing of an XML string, either a tmx (Map) string or tsx (Tileset) string
         *
         * @param {String} xmlString
         *
         * @returns {Boolean}
         */
        parseXMLString(xmlString: string): boolean
    
        /**
         * Set the currentString
         *
         * @param {String} currentString
         */
        setCurrentString(currentString: string): any
    
        /**
         * Layer attribute
         *
         * @param {Object} value
         */
        setLayerAttribs(value: object): any
    
        /**
         * Layers
         *
         * @param {cc.TMXLayerInfo} value
         */
        setLayers(value: cc.TMXLayerInfo): any
    
        /**
         * Map width & height
         *
         * @param {cc.Size} value
         */
        setMapSize(value: cc.Size): any
    
        /**
         * ObjectGroups
         *
         * @param {cc.TMXObjectGroup} value
         */
        setObjectGroups(value: cc.TMXObjectGroup): any
    
        /**
         * Set the Map orientation.
         *
         * @param {Number} value
         */
        setOrientation(value: number): any
    
        /**
         * parent element
         *
         * @param {Object} value
         */
        setParentElement(value: object): any
    
        /**
         * parent GID
         *
         * @param {Number} value
         */
        setParentGID(value: number): any
    
        /**
         * Properties
         *
         * @param {object} value
         */
        setProperties(value: object): any
    
        /**
         * Is reading storing characters stream
         *
         * @param {Boolean} value
         */
        setStoringCharacters(value: boolean): any
    
        /**
         * Set the tile properties.
         *
         * @param {object} tileProperties
         */
        setTileProperties(tileProperties: object): any
    
        /**
         * tilesets
         *
         * @param {cc.TMXTilesetInfo} value
         */
        setTilesets(value: cc.TMXTilesetInfo): any
    
        /**
         * Tiles width & height
         *
         * @param {cc.Size} value
         */
        setTileSize(value: cc.Size): any
    
        /**
         * Set the tmxFileName
         *
         * @param {String} fileName
         */
        setTMXFileName(fileName: string): any
    
    
    
        /**
         *
         *
         * @param {String} xmlTxt
         *
         * @returns {Document}
         */
        parse(xmlTxt: string): Document
    }

    interface ITMXObjectGroup extends cc.IClass {

        groupName: string
    
        properties: any[]
    
        getGroupName(): string
    
        getObject(objectName: string): object | null
    
        getObjects(): any[]
    
        getPositionOffset(): cc.Point
    
        getProperties(): any[]
    
        objectNamed(objectName: string): object | null
    
        propertyNamed(propertyName: string): object
    
        setGroupName(groupName: string): any
    
        setObjects(objects: object): any
    
        setPositionOffset(offset: cc.Point): any
    
        setProperties(Var: object): any
    }
    
    interface ITMXObjectGroupOverrides {
    
    }
    
    class TMXObjectGroup implements ITMXObjectGroup, ITMXObjectGroupOverrides {
    
        /**
         * The cc.TMXObjectGroup's constructor.
         * This function will automatically be invoked when you create a node using new construction: "var node = new cc.TMXObjectGroup()".
         * Override it to extend its behavior, remember to call "this._super()" in the extended "ctor" function.
         */
        constructor()
    
    
    
    
    
    
    
    
        /**
         * - Name of the group
         */
        groupName: string
    
        /**
         * - Properties from the group. They can be added using tilemap editors
         */
        properties: any[]
    
        /**
         * Gets the Group name.
         *
         * @returns {String}
         */
        getGroupName(): string
    
        /**
         * Return the dictionary for the specific object name.
         * It will return the 1st object found on the array for the given name.
         *
         * @param {String} objectName
         *
         * @returns {object|Null}
         */
        getObject(objectName: string): object | null
    
        /**
         * Gets the objects.
         *
         * @returns {Array}
         */
        getObjects(): any[]
    
        /**
         * Offset position of child objects
         *
         * @returns {cc.Point}
         */
        getPositionOffset(): cc.Point
    
        /**
         * List of properties stored in a dictionary
         *
         * @returns {Array}
         */
        getProperties(): any[]
    
        /**
         * Return the dictionary for the specific object name.
         * It will return the 1st object found on the array for the given name.
         *
         * @param {String} objectName
         *
         * @returns {object|Null}
         */
        objectNamed(objectName: string): object | null
    
        /**
         * Return the value for the specific property name
         *
         * @param {String} propertyName
         *
         * @returns {object}
         */
        propertyNamed(propertyName: string): object
    
        /**
         * Set the Group name
         *
         * @param {String} groupName
         */
        setGroupName(groupName: string): any
    
        /**
         * Set the objects.
         *
         * @param {object} objects
         */
        setObjects(objects: object): any
    
        /**
         * Offset position of child objects
         *
         * @param {cc.Point} offset
         */
        setPositionOffset(offset: cc.Point): any
    
        /**
         * List of properties stored in a dictionary
         *
         * @param {object} Var
         */
        setProperties(Var: object): any
    }

    interface ITMXTilesetInfo extends cc.IClass {

        firstGid: number
    
        imageSize: cc.Size | null
    
        margin: number
    
        name: string
    
        sourceImage: string
    
        spacing: number
    
        rectForGID(gid: number, result: any): cc.Rect
    }
    
    interface ITMXTilesetInfoOverrides {
    
    }

    class TMXTilesetInfo implements ITMXTilesetInfo, ITMXTilesetInfoOverrides {
    
        /**
         * cc.TMXTilesetInfo contains the information about the tilesets like:
         * - Tileset name
         * - Tileset spacing
         * - Tileset margin
         * - size of the tiles
         * - Image used for the tiles
         * - Image sizeThis information is obtained from the TMX file.
         */
        constructor()
    
    
    
    
    
    
    
    
        /**
         * - First grid
         */
        firstGid: number
    
        /**
         * - Size in pixels of the image
         */
        imageSize: cc.Size | null
    
        /**
         * - Margin
         */
        margin: number
    
        /**
         * - Tileset name
         */
        name: string
    
        /**
         * - Filename containing the tiles (should be sprite sheet / texture atlas)
         */
        sourceImage: string
    
        /**
         * - Spacing
         */
        spacing: number
    
        /**
         * Return rect
         *
         * @param {Number} gid
         * @param {any} result
         *
         * @returns {cc.Rect}
         */
        rectForGID(gid: number, result: any): cc.Rect
    }
}

declare module cp {
    // XXX: renaming functions should be supported in JSB
    function clamp01();
    /// Initialize an offset box shaped polygon shape.
    function BoxShape2(body, box) ;
    /// Initialize a box shaped polygon shape.
    function BoxShape(body: Body, width: number, height: number) : Shape;
    /// Initialize an static body
    function StaticBody(): Body;
    // "Bounding Box" compatibility with Chipmunk-JS
    function BB(l, b, r, t) ;
    // helper function to create a BB
    function bb(l, b, r, t);
    function _v(x:number, y:number):cc.Point;
    var vzero:cc.Point;

    function spaceAddCollisionHandler();

    function spaceRemoveCollisionHandler();

    function arbiterGetBodies();

    function arbiterGetShapes();

    function bodyGetUserData();

    function bodySetUserData();

    function areaForPoly();

    function momentForPoly();

    function centroidForPoly();

    function recenterPoly();

    function arbiterGetCount();

    function arbiterGetDepth();

    function arbiterGetElasticity();

    function arbiterGetFriction();

    function arbiterGetNormal();

    function arbiterGetPoint();

    function arbiterGetSurfaceVelocity();

    function arbiterIgnore();

    function arbiterIsFirstContact();

    function arbiterSetElasticity();

    function arbiterSetFriction();

    function arbiterSetSurfaceVelocity();

    function arbiterTotalImpulse();

    function arbiterTotalImpulseWithFriction();

    function arbiterTotalKE();

    function areaForCircle();

    function areaForSegment();

    function bBArea();

    function bBClampVect();

    function bBContainsBB();

    function bBContainsVect();

    function bBExpand();

    function bBIntersects();

    function bBIntersectsSegment();

    function bBMerge();

    function bBMergedArea();

    function bBNew();

    function bBNewForCircle();

    function bBSegmentQuery();

    function bBWrapVect();

    function bodyActivate();

    function bodyActivateStatic();

    function bodyApplyForce();

    function bodyApplyImpulse();

    function bodyDestroy();

    function bodyFree();

    function bodyGetAngVel();

    function bodyGetAngVelLimit();

    function bodyGetAngle();

    function bodyGetForce();

    function bodyGetMass();

    function bodyGetMoment();

    function bodyGetPos();

    function bodyGetRot();

    function bodyGetSpace();

    function bodyGetTorque();

    function bodyGetVel();

    function bodyGetVelAtLocalPoint();

    function bodyGetVelAtWorldPoint();

    function bodyGetVelLimit();

    function bodyInit();

    function bodyInitStatic();

    function bodyIsRogue();

    function bodyIsSleeping();

    function bodyIsStatic();

    function bodyKineticEnergy();

    function bodyLocal2World();

    function bodyNew(i: number, m: number);

    function bodyNewStatic();

    function bodyResetForces();

    function bodySetAngVel();

    function bodySetAngVelLimit();

    function bodySetAngle();

    function bodySetForce();

    function bodySetMass();

    function bodySetMoment();

    function bodySetPos(body: Body, pos: cc.Point);

    function bodySetTorque();

    function bodySetVel();

    function bodySetVelLimit();

    function bodySleep();

    function bodySleepWithGroup();

    function bodyUpdatePosition();

    function bodyUpdateVelocity();

    function bodyWorld2Local();

    function boxShapeNew(body: Body, widht: number, height: number);

    function boxShapeNew2();

    function circleShapeGetOffset();

    function circleShapeGetRadius();

    function circleShapeNew();

    function constraintActivateBodies();

    function constraintDestroy();

    function constraintFree();

    function constraintGetA();

    function constraintGetB();

    function constraintGetErrorBias();

    function constraintGetImpulse();

    function constraintGetMaxBias();

    function constraintGetMaxForce();

    function constraintGetSpace();

    function constraintSetErrorBias();

    function constraintSetMaxBias();

    function constraintSetMaxForce();

    function dampedRotarySpringGetDamping();

    function dampedRotarySpringGetRestAngle();

    function dampedRotarySpringGetStiffness();

    function dampedRotarySpringNew();

    function dampedRotarySpringSetDamping();

    function dampedRotarySpringSetRestAngle();

    function dampedRotarySpringSetStiffness();

    function dampedSpringGetAnchr1();

    function dampedSpringGetAnchr2();

    function dampedSpringGetDamping();

    function dampedSpringGetRestLength();

    function dampedSpringGetStiffness();

    function dampedSpringNew();

    function dampedSpringSetAnchr1();

    function dampedSpringSetAnchr2();

    function dampedSpringSetDamping();

    function dampedSpringSetRestLength();

    function dampedSpringSetStiffness();

    function gearJointGetPhase();

    function gearJointGetRatio();

    function gearJointNew();

    function gearJointSetPhase();

    function gearJointSetRatio();

    function grooveJointGetAnchr2();

    function grooveJointGetGrooveA();

    function grooveJointGetGrooveB();

    function grooveJointNew();

    function grooveJointSetAnchr2();

    function grooveJointSetGrooveA();

    function grooveJointSetGrooveB();

    function initChipmunk();

    function momentForBox(m: number, width: number, height: number);

    function momentForBox2();

    function momentForCircle();

    function momentForSegment();

    function pinJointGetAnchr1();

    function pinJointGetAnchr2();

    function pinJointGetDist();

    function pinJointNew();

    function pinJointSetAnchr1();

    function pinJointSetAnchr2();

    function pinJointSetDist();

    function pivotJointGetAnchr1();

    function pivotJointGetAnchr2();

    function pivotJointNew();

    function pivotJointNew2();

    function pivotJointSetAnchr1();

    function pivotJointSetAnchr2();

    function polyShapeGetNumVerts();

    function polyShapeGetVert();

    function ratchetJointGetAngle();

    function ratchetJointGetPhase();

    function ratchetJointGetRatchet();

    function ratchetJointNew();

    function ratchetJointSetAngle();

    function ratchetJointSetPhase();

    function ratchetJointSetRatchet();

    function resetShapeIdCounter();

    function rotaryLimitJointGetMax();

    function rotaryLimitJointGetMin();

    function rotaryLimitJointNew();

    function rotaryLimitJointSetMax();

    function rotaryLimitJointSetMin();

    function segmentShapeGetA();

    function segmentShapeGetB();

    function segmentShapeGetNormal();

    function segmentShapeGetRadius();

    function segmentShapeNew();

    function segmentShapeSetNeighbors();

    function shapeCacheBB();

    function shapeDestroy();

    function shapeFree();

    function shapeGetBB();

    function shapeGetBody();

    function shapeGetCollisionType();

    function shapeGetElasticity();

    function shapeGetFriction();

    function shapeGetGroup();

    function shapeGetLayers();

    function shapeGetSensor();

    function shapeGetSpace();

    function shapeGetSurfaceVelocity();

    function shapePointQuery();

    function shapeSetBody();

    function shapeSetCollisionType();

    function shapeSetElasticity(shape: Shape, e: number);

    function shapeSetFriction(shape: Shape, f: number);

    function shapeSetGroup();

    function shapeSetLayers();

    function shapeSetSensor();

    function shapeSetSurfaceVelocity();

    function shapeUpdate();

    function simpleMotorGetRate();

    function simpleMotorNew();

    function simpleMotorSetRate();

    function slideJointGetAnchr1();

    function slideJointGetAnchr2();

    function slideJointGetMax();

    function slideJointGetMin();

    function slideJointNew();

    function slideJointSetAnchr1();

    function slideJointSetAnchr2();

    function slideJointSetMax();

    function slideJointSetMin();

    function spaceActivateShapesTouchingShape();

    function spaceAddBody(space: Space, body: Body);

    function spaceAddConstraint();

    function spaceAddShape(space: Space, shape: Shape);

    function spaceAddStaticShape();

    function spaceContainsBody();

    function spaceContainsConstraint();

    function spaceContainsShape();

    function spaceDestroy();

    function spaceFree(space: cp.Space);

    function spaceGetCollisionBias();

    function spaceGetCollisionPersistence();

    function spaceGetCollisionSlop();

    function spaceGetCurrentTimeStep();

    function spaceGetDamping();

    function spaceGetEnableContactGraph();

    function spaceGetGravity();

    function spaceGetIdleSpeedThreshold();

    function spaceGetIterations();

    function spaceGetSleepTimeThreshold();

    function spaceGetStaticBody();

    function spaceInit();

    function spaceIsLocked();

    function spaceNew();

    function spacePointQueryFirst();

    function spaceReindexShape();

    function spaceReindexShapesForBody();

    function spaceReindexStatic();

    function spaceRemoveBody();

    function spaceRemoveConstraint();

    function spaceRemoveShape();

    function spaceRemoveStaticShape();

    function spaceSetCollisionBias();

    function spaceSetCollisionPersistence();

    function spaceSetCollisionSlop();

    function spaceSetDamping();

    function spaceSetEnableContactGraph();

    function spaceSetGravity(space: Space, point:cc.Point);

    function spaceSetIdleSpeedThreshold();

    function spaceSetIterations();

    function spaceSetSleepTimeThreshold();

    function spaceStep();

    function spaceUseSpatialHash();

    function fabs();

    function fclamp();

    function fclamp01();

    function flerp();

    function flerpconst();

    class v extends cc.Point {
        // Vector: Compatibility with Chipmunk-JS
        add();
        clamp();
        cross();
        dist();
        distsq();
        dot();
        eql();
        forangle();
        len();
        lengthsq();
        lerp();
        lerpconst();
        mult();
        near();
        neg();
        normalize();
        normalize_safe();
        perp();
        project();
        rotate();
        rperp();
        slerp();
        slerpconst();
        sub();
        toangle();
        unrotate();
    }
    class Base {
        handle:any;
    }
    class Arbiter {
        getCount();
        getDepth();
        getElasticity();
        getFriction();
        getNormal();
        getPoint();
        getSurfaceVelocity();
        ignore();
        isFirstContact();
        setElasticity();
        setFriction();
        setSurfaceVelocity();
        totalImpulse();
        totalImpulseWithFriction();
        totalKE();
        getShapes() : Array<Shape>;
        getBodies() : Array<Body>;
    }
// Properties, for Chipmunk-JS compatibility
// Space properties
    class Space {
        gravity:any;
        iterations:any;
        damping:any;
        staticBody: Body;
        idleSpeedThreshold:any;
        sleepTimeThreshold:any;
        collisionSlop: number;
        collisionBias: number;
        collisionPersistence:any;
        enableContactGraph:any;

        activateShapesTouchingShape();

        containsBody();

        containsConstraint();

        containsShape();

        destroy();

        getCollisionBias();

        getCollisionPersistence();

        getCollisionSlop();

        getCurrentTimeStep();

        getDamping();

        getEnableContactGraph();

        getGravity();

        getIdleSpeedThreshold();

        getIterations();

        getSleepTimeThreshold();

        getStaticBody();

        init();

        isLocked();

        pointQueryFirst();

        reindexShape();

        reindexShapesForBody();

        reindexStatic();

        setCollisionBias();

        setCollisionPersistence();

        setCollisionSlop();

        setDamping();

        setEnableContactGraph();

        setGravity(g: number);

        setIdleSpeedThreshold();

        setIterations();

        setSleepTimeThreshold();

        step(delta: number);
        useSpatialHash();

        addShape(shape: Shape);

        addCollisionHandler(type1: number, type2: number, collisionBegin: Function, collisionPre: Function,
            collisionPost: Function, collisionSeparate: Function);

        addStaticShape(shape: Shape);

        removeConstraint();

        removeBody(body: Body);

        removeCollisionHandler(type1: number, type2: number);

        removeStaticShape();

        addConstraint();

        addBody(body: Body);
        removeShape(shape: Shape);
    }
// Body properties
    class Body {
        a: any;
        w: number;
        p: any;
        v: cc.Point;
        i: number;
        constructor(m: number, i: number);

        // only in JSB
        //activateStatic();
        //destroy();
        //getAngVelLimit();
        //getAngle();
        getForce() : cc.Point;
        //getMass();
        //getMoment();
        //getRot();
        //getSpace();
        //getTorque();
        //getVelLimit();
        //init();
        //initStatic();
        //setAngVelLimit();
        setForce(vec: cc.Point);
        //setTorque();
        //setVelLimit();
        //sleep();
        //sleepWithGroup();
        //updatePosition();
        //updateVelocity();
        //setUserData(data: any);
        //getUserData(): any;

        getPos(): cc.Point ;
        getVel(): cc.Point ;
        getAngVel() : number;

        /// Returns true if the body is sleeping.
        isSleeping(): boolean ;

        /// Returns true if the body is static.
        isStatic(): boolean ;

        /// Returns true if the body has not been added to a space.
        isRogue(): boolean;

        // It would be nicer to use defineProperty for this, but its about 30x slower:
        // http://jsperf.com/defineproperty-vs-setter
        setMass(mass: number);

        setMoment(moment: number);

        addShape(shape: cp.Shape);

        removeShape(shape: cp.Shape);

        removeConstraint(constraint);

        setPos(pos: cc.Point);

        setVel(velocity: cc.Point);

        // Angle velocity
        setAngVel(w: number);

        setAngleInternal(angle: number);

        setAngle(angle: number);

        velocity_func(gravity: cc.Point, damping: number, dt: number) ;

        position_func(dt: number);

        resetForces() ;

        applyForce(force: cc.Point, r: cc.Point) ;

        applyImpulse(j: cc.Point, r: cc.Point);

        getVelAtPoint(r: cc.Point) ;

        /// Get the velocity on a body (in world units) at a point on the body in world coordinates.
        getVelAtWorldPoint(point): cc.Point;

        /// Get the velocity on a body (in world units) at a point on the body in local coordinates.
        getVelAtLocalPoint(point): cc.Point;

        eachShape(func: (shape: cp.Shape) => any);

        eachConstraint(func: Function);

        eachArbiter(func: Function);

        /// Convert body relative/local coordinates to absolute/world coordinates.
        local2World(v : cc.Point) : cc.Point ;

        /// Convert body absolute/world coordinates to	relative/local coordinates.
        world2Local(v: cc.Point): cc.Point;

        /// Get the kinetic energy of a body.
        kineticEnergy(): number;
    }
    class PolyShape {

    }
// Shape properties
    class Shape {
        body:any;
        group:any;
        collision_type:any;
        cacheBB();
        destroy();
        getBB();
        getBody(): Body;
        getCollisionType(): number;
        getElasticity(): number;
        getFriction(): number;
        getGroup();
        getLayers();
        getSensor(): boolean;
        getSpace():Space;
        getSurfaceVelocity();
        pointQuery();
        setBody(body: Body);
        setCollisionType(type: number);
        setElasticity(e: number);
        setFriction(f: number);
        setGroup();
        setLayers();
        setSensor(bool: boolean);
        setSurfaceVelocity();
        update();
    }
    class SegmentShape extends Shape {
        constructor(body: Body, start: cc.Point, end: cc.Point, radius: number);
    }
// Constraint properties
    class Constraint {
        maxForce:any;
    }
// PinJoint properties
    class PinJoint {
        anchr1:any;
        anchr2:any;
    }
}


declare namespace ccui {

    /**
     * Cocos UI version
     */
    let cocosGUIVersion: any
  
    /**
     * allocates and initializes a UILabel.
     * Defined in: UIText.js.
     */
    let Label: ccui.Text
  
    /**
     * *************************************************************************
     * Copyright (c) 2011-2012 cocos2d-x.org
     * Copyright (c) 2013-2014 Chukong Technologies Inc.http://www.cocos2d-x.orgPermission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included in
     * all copies or substantial portions of the Software.THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     * THE SOFTWARE.
     * **************************************************************************
     * Defined in: UILayoutComponent.js.
     */
    let LayoutComponent_ReferencePoint: any
  
  
    /**
     * Gets the layout manager by ccui.Layout's layout type.
     * Defined in: UILayoutManager.js.
     *
     * @param {Number} type
     *
     * @returns {ccui.linearVerticalLayoutManager|ccui.linearHorizontalLayoutManager|ccui.relativeLayoutManager|null}
     */
    function getLayoutManager(type: number): any
  
    /**
     * Gets a zero margin object
     * Defined in: UILayoutParameter.js.
     *
     * @returns {ccui.Margin}
     */
    function MarginZero(): ccui.Margin
}

declare namespace ccui {
    interface IClass  {
  
  
    }
  
    interface IClassOverrides {
  
    }
  
  
  
    class Class implements IClass, IClassOverrides {
  
      /**
       * The same as cc.Class
       */
      constructor()
  
  
  
  
  
  
  
  
  
  
  
    }
}

declare namespace ccui {
    interface ILayoutParameter extends ccui.IClass {
  
  
      clone(): ccui.LayoutParameter
  
      getLayoutType(): number
  
      getMargin(): ccui.Margin
  
      setMargin(margin: ccui.Margin): any
    }
  
    interface ILayoutParameterOverrides {
  
    }
  
  
  
    class LayoutParameter implements ILayoutParameter, ILayoutParameterOverrides {
  
      /**
       * The constructor of ccui.LayoutParameter.
       */
      constructor()
  
  
  
      /**
       * The linear of ccui.LayoutParameter's type.
       */
      static LINEAR: any
  
      /**
       * The none of ccui.LayoutParameter's type.
       */
      static NONE: any
  
      /**
       * The relative of ccui.LayoutParameter's type.
       */
      static RELATIVE: any
  
      /**
       * allocates and initializes a LayoutParameter.
       *
       * @returns {ccui.LayoutParameter}
       */
      static create(): ccui.LayoutParameter
  
  
  
  
  
      /**
       * Clones a ccui.LayoutParameter object from itself.
       *
       * @returns {ccui.LayoutParameter}
       */
      clone(): ccui.LayoutParameter
  
      /**
       * Gets LayoutParameterType of LayoutParameter.
       *
       * @returns {Number}
       */
      getLayoutType(): number
  
      /**
       * Gets Margin of LayoutParameter.
       *
       * @returns {ccui.Margin}
       */
      getMargin(): ccui.Margin
  
      /**
       * Sets Margin to LayoutParameter.
       *
       * @param {ccui.Margin} margin
       */
      setMargin(margin: ccui.Margin): any
  
  
  
  
  
  
    }
}

declare namespace ccui {
    interface ILinearLayoutParameter extends ccui.ILayoutParameter {
  
  
      getGravity(): number
  
      setGravity(gravity: number): any
    }
  
    interface ILinearLayoutParameterOverrides {
  
    }
  
  
  
    class LinearLayoutParameter implements ILinearLayoutParameter, ILinearLayoutParameterOverrides {
  
      /**
       * The constructor of ccui.LinearLayoutParameter.
       */
      constructor()
  
  
  
      /**
       * The bottom of ccui.LinearLayoutParameter's linear gravity.
       */
      static BOTTOM: any
  
      /**
       * The center horizontal of ccui.LinearLayoutParameter's linear gravity.
       */
      static CENTER_HORIZONTAL: any
  
      /**
       * The center vertical of ccui.LinearLayoutParameter's linear gravity.
       */
      static CENTER_VERTICAL: any
  
      /**
       * The left of ccui.LinearLayoutParameter's linear gravity.
       */
      static LEFT: any
  
      /**
       * The none of ccui.LinearLayoutParameter's linear gravity.
       */
      static NONE: any
  
      /**
       * The right of ccui.LinearLayoutParameter's linear gravity.
       */
      static RIGHT: any
  
      /**
       * The top of ccui.LinearLayoutParameter's linear gravity.
       */
      static TOP: any
  
      /**
       * allocates and initializes a LinearLayoutParameter.
       *
       * @returns {ccui.LinearLayoutParameter}
       */
      static create(): ccui.LinearLayoutParameter
  
  
  
  
  
      /**
       * Gets LinearGravity of LayoutParameter.
       *
       * @returns {Number}
       */
      getGravity(): number
  
      /**
       * Sets LinearGravity to LayoutParameter.
       *
       * @param {Number} gravity
       */
      setGravity(gravity: number): any
  
  
  
      /**
       * Clones a ccui.LayoutParameter object from itself.
       *
       * @returns {ccui.LayoutParameter}
       */
      clone(): ccui.LayoutParameter
  
      /**
       * Gets LayoutParameterType of LayoutParameter.
       *
       * @returns {Number}
       */
      getLayoutType(): number
  
      /**
       * Gets Margin of LayoutParameter.
       *
       * @returns {ccui.Margin}
       */
      getMargin(): ccui.Margin
  
      /**
       * Sets Margin to LayoutParameter.
       *
       * @param {ccui.Margin} margin
       */
      setMargin(margin: ccui.Margin): any
  
  
  
  
  
  
  
    }
}

declare namespace ccui {
    interface IRelativeLayoutParameter extends ccui.ILayoutParameter {
  
  
      getAlign(): number
  
      getRelativeName(): string
  
      getRelativeToWidgetName(): string
  
      setAlign(align: number): any
  
      setRelativeName(name: string): any
  
      setRelativeToWidgetName(name: string): any
    }
  
    interface IRelativeLayoutParameterOverrides {
  
    }
  
  
  
    class RelativeLayoutParameter implements IRelativeLayoutParameter, IRelativeLayoutParameterOverrides {
  
      /**
       * The constructor of ccui.RelativeLayoutParameter
       */
      constructor()
  
  
  
      /**
       * The center in parent of ccui.RelativeLayoutParameter's relative align.
       */
      static CENTER_IN_PARENT: any
  
      /**
       * The location above center of ccui.RelativeLayoutParameter's relative align.
       */
      static LOCATION_ABOVE_CENTER: any
  
      /**
       * The location above left align of ccui.RelativeLayoutParameter's relative align.
       */
      static LOCATION_ABOVE_LEFTALIGN: any
  
      /**
       * The location above right align of ccui.RelativeLayoutParameter's relative align.
       */
      static LOCATION_ABOVE_RIGHTALIGN: any
  
      /**
       * The location below center of ccui.RelativeLayoutParameter's relative align.
       */
      static LOCATION_BELOW_CENTER: any
  
      /**
       * The location below left align of ccui.RelativeLayoutParameter's relative align.
       */
      static LOCATION_BELOW_LEFTALIGN: any
  
      /**
       * The location below right align of ccui.RelativeLayoutParameter's relative align.
       */
      static LOCATION_BELOW_RIGHTALIGN: any
  
      /**
       * The location left of bottom align of ccui.RelativeLayoutParameter's relative align.
       */
      static LOCATION_LEFT_OF_BOTTOMALIGN: any
  
      /**
       * The location left of center of ccui.RelativeLayoutParameter's relative align.
       */
      static LOCATION_LEFT_OF_CENTER: any
  
      /**
       * The location left of top align of ccui.RelativeLayoutParameter's relative align.
       */
      static LOCATION_LEFT_OF_TOPALIGN: any
  
      /**
       * The location right of bottom align of ccui.RelativeLayoutParameter's relative align.
       */
      static LOCATION_RIGHT_OF_BOTTOMALIGN: any
  
      /**
       * The location right of center of ccui.RelativeLayoutParameter's relative align.
       */
      static LOCATION_RIGHT_OF_CENTER: any
  
      /**
       * The location right of top align of ccui.RelativeLayoutParameter's relative align.
       */
      static LOCATION_RIGHT_OF_TOPALIGN: any
  
      /**
       * The none of ccui.RelativeLayoutParameter's relative align.
       */
      static NONE: any
  
      /**
       * The parent's bottom center horizontal of ccui.RelativeLayoutParameter's relative align.
       */
      static PARENT_BOTTOM_CENTER_HORIZONTAL: any
  
      /**
       * The parent's left bottom of ccui.RelativeLayoutParameter's relative align.
       */
      static PARENT_LEFT_BOTTOM: any
  
      /**
       * The parent's left center vertical of ccui.RelativeLayoutParameter's relative align.
       */
      static PARENT_LEFT_CENTER_VERTICAL: any
  
      /**
       * The parent's right bottom of ccui.RelativeLayoutParameter's relative align.
       */
      static PARENT_RIGHT_BOTTOM: any
  
      /**
       * The parent's right center vertical of ccui.RelativeLayoutParameter's relative align.
       */
      static PARENT_RIGHT_CENTER_VERTICAL: any
  
      /**
       * The parent's top center horizontal of ccui.RelativeLayoutParameter's relative align.
       */
      static PARENT_TOP_CENTER_HORIZONTAL: any
  
      /**
       * The parent's top left of ccui.RelativeLayoutParameter's relative align.
       */
      static PARENT_TOP_LEFT: any
  
      /**
       * The parent's top right of ccui.RelativeLayoutParameter's relative align.
       */
      static PARENT_TOP_RIGHT: any
  
      /**
       * Allocates and initializes a RelativeLayoutParameter.
       *
       * @returns {ccui.RelativeLayoutParameter}
       */
      static create(): ccui.RelativeLayoutParameter
  
  
  
  
  
      /**
       * Gets RelativeAlign parameter for LayoutParameter.
       *
       * @returns {Number}
       */
      getAlign(): number
  
      /**
       * Gets a name in Relative Layout of LayoutParameter.
       *
       * @returns {string}
       */
      getRelativeName(): string
  
      /**
       * Gets the key of LayoutParameter. Witch widget named this is relative to.
       *
       * @returns {string}
       */
      getRelativeToWidgetName(): string
  
      /**
       * Sets RelativeAlign parameter for LayoutParameter.
       *
       * @param {Number} align
       */
      setAlign(align: number): any
  
      /**
       * Sets a name in Relative Layout for LayoutParameter.
       *
       * @param {String} name
       */
      setRelativeName(name: string): any
  
      /**
       * Sets a key for LayoutParameter. Witch widget named this is relative to.
       *
       * @param {String} name
       */
      setRelativeToWidgetName(name: string): any
  
  
  
      /**
       * Clones a ccui.LayoutParameter object from itself.
       *
       * @returns {ccui.LayoutParameter}
       */
      clone(): ccui.LayoutParameter
  
      /**
       * Gets LayoutParameterType of LayoutParameter.
       *
       * @returns {Number}
       */
      getLayoutType(): number
  
      /**
       * Gets Margin of LayoutParameter.
       *
       * @returns {ccui.Margin}
       */
      getMargin(): ccui.Margin
  
      /**
       * Sets Margin to LayoutParameter.
       *
       * @param {ccui.Margin} margin
       */
      setMargin(margin: ccui.Margin): any
  
  
  
  
  
  
  
    }
}

declare namespace ccui {
    interface IMargin extends ccui.IClass {
  
      bottom: number
  
      left: number
  
      right: number
  
      top: number
  
      equals(target: ccui.Margin): boolean
  
      setMargin(l: number, t: number, r: number, b: number): any
    }
  
    interface IMarginOverrides {
  
    }
  
  
  
    class Margin implements IMargin, IMarginOverrides {
  
      /**
       * Constructor of ccui.Margin.
       *
       * @param {Number|ccui.Margin} margin a margin or left
       * @param {Number} top
       * @param {Number} right
       * @param {Number} bottom
       */
      constructor(margin: number | ccui.Margin, top: number, right: number, bottom: number)
  
  
  
  
  
  
  
  
      /**
       * - bottom of margin
       */
      bottom: number
  
      /**
       * - Left of margin
       */
      left: number
  
      /**
       * - right of margin
       */
      right: number
  
      /**
       * - Top of margin
       */
      top: number
  
      /**
       * Checks target whether equals itself.
       *
       * @param {ccui.Margin} target
       *
       * @returns {boolean}
       */
      equals(target: ccui.Margin): boolean
  
      /**
       * Sets boundary of margin
       *
       * @param {Number} l left
       * @param {Number} t top
       * @param {Number} r right
       * @param {Number} b bottom
       */
      setMargin(l: number, t: number, r: number, b: number): any
  
  
  
  
  
  
    }
}

declare namespace ccui {
    interface INode extends ccui.IClass {
  
  
    }
  
    interface INodeOverrides {
  
    }
  
  
  
    class Node implements INode, INodeOverrides {
  
      /**
       * that same as cc.Node
       */
      constructor()
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    }
}

declare namespace ccui {
    interface IProtectedNode extends ccui.INode {
  
  
    }
  
    interface IProtectedNodeOverrides {
  
    }
  
  
  
    class ProtectedNode implements IProtectedNode, IProtectedNodeOverrides {
  
      /**
       * that same as cc.Node
       */
      constructor()
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    }
}

declare namespace ccui {
    interface IWidget extends ccui.IProtectedNode {
  
      actionTag: number
  
      bright: boolean
  
      enabled: boolean
  
      focused: boolean
  
      heightPercent: number
  
      name: string
  
      onFocusChanged: any
  
      onNextFocusedWidget: any
  
      sizeType: any
  
      touchEnabled: boolean
  
      updateEnabled: boolean
  
      widgetParent: ccui.Widget
  
      widgetType: any
  
      widthPercent: number
  
      xPercent: number
  
      yPercent: number
  
      addCCSEventListener(callback: Function): any
  
      addNode(node: cc.Node, zOrder: number, tag: number): any
  
      addTouchEventListener(selector: Function, target: object): any
  
      checkChildInfo(handleState: number, sender: ccui.Widget, touchPoint: cc.Point): any
  
      clippingParentAreaContainPoint(pt: cc.Point): boolean
  
      clone(): ccui.Widget
  
      didNotSelectSelf(): any
  
      dispatchFocusEvent(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      findNextFocusedWidget(direction: any, current: any): any
  
      getBottomBoundary(): number
  
      getBottomInParent(): number
  
      getCallbackName(): string | null
  
      getCallbackType(): string | null
  
      getCurrentFocusedWidget(): any
  
      getCustomSize(): cc.Size
  
      getDescription(): string
  
      getLayoutParameter(type: any): ccui.LayoutParameter
  
      getLayoutSize(): cc.Size
  
      getLeftBoundary(): number
  
      getLeftInParent(): number
  
      getNodeByTag(tag: number): cc.Node
  
      getNodes(): any[]
  
      getPositionPercent(): cc.Point
  
      getPositionType(): number
  
      getRightBoundary(): number
  
      getRightInParent(): number
  
      getSize(): cc.Size
  
      getSizePercent(): cc.Point
  
      getSizeType(): any
  
      getTopBoundary(): number
  
      getTopInParent(): number
  
      getTouchBeganPosition(): cc.Point
  
      getTouchEndPos(): cc.Point
  
      getTouchEndPosition(): cc.Point
  
      getTouchMovePos(): cc.Point
  
      getTouchMovePosition(): cc.Point
  
      getTouchStartPos(): cc.Point
  
      getVirtualRenderer(): ccui.Widget
  
      getVirtualRendererSize(): any
  
      getWidgetParent(): ccui.Widget | null
  
      getWidgetType(): any
  
      getWorldPosition(): cc.Point
  
      hitTest(pt: cc.Point): boolean
  
      ignoreContentAdaptWithSize(ignore: boolean): any
  
      init(): boolean
  
      interceptTouchEvent(eventType: number, sender: ccui.Widget, touch: cc.Touch): any
  
      isBright(): boolean
  
      isClippingParentContainsPoint(pt: cc.Point): boolean
  
      isEnabled(): boolean
  
      isFlippedX(): boolean
  
      isFlippedY(): boolean
  
      isFocused(): boolean
  
      isFocusEnabled(): boolean
  
      isHighlighted(): boolean
  
      isIgnoreContentAdaptWithSize(): boolean
  
      isLayoutComponentEnabled(): boolean
  
      isPropagateTouchEvents(): boolean
  
      isSwallowTouches(): boolean
  
      isTouchEnabled(): boolean
  
      isUnifySizeEnabled(): boolean
  
      onEnter(): any
  
      onExit(): any
  
      onFocusChange(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      onTouchBegan(touch: cc.Touch, event: cc.Event): boolean
  
      onTouchCancelled(touchPoint: cc.Point): any
  
      onTouchEnded(touch: any, event: any): any
  
      onTouchLongClicked(touchPoint: cc.Point): any
  
      onTouchMoved(touch: cc.Touch, event: cc.Event): any
  
      removeAllNodes(): any
  
      removeNode(node: cc.Node, cleanup: boolean): any
  
      removeNodeByTag(tag: number, cleanup: boolean): any
  
      requestFocus(): any
  
      setBright(bright: boolean): any
  
      setBrightStyle(style: number): any
  
      setCallbackName(callbackName: string): any
  
      setCallbackType(callbackType: string): any
  
      setContentSize(contentSize: cc.Size | number, height: number): any
  
      setEnabled(enabled: boolean): any
  
      setFlippedX(flipX: boolean): any
  
      setFlippedY(flipY: boolean): any
  
      setFocused(focus: boolean): any
  
      setFocusEnabled(enable: boolean): any
  
      setHighlighted(highlight: any): any
  
      setLayoutComponentEnabled(enable: boolean): any
  
      setLayoutParameter(parameter: ccui.LayoutParameter): any
  
      setPosition(pos: cc.Point | number, posY: number): any
  
      setPositionPercent(percent: cc.Point): any
  
      setPositionType(type: number): any
  
      setPropagateTouchEvents(isPropagate: boolean): any
  
      setSize(size: cc.Size): any
  
      setSizePercent(percent: cc.Point): any
  
      setSizeType(type: any): any
  
      setSwallowTouches(swallow: boolean): any
  
      setTouchEnabled(enable: boolean): any
  
      setUnifySizeEnabled(enable: boolean): any
  
      updateSizeAndPosition(parentSize: cc.Size): any
    }
  
    interface IWidgetOverrides {
  
    }
  
  
  
    class Widget implements IWidget, IWidgetOverrides {
  
      /**
       * Constructor function, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
       */
      constructor()
  
  
  
      /**
       * Light bright style of ccui.Widget.
       */
      static BRIGHT_STYLE_HIGH_LIGHT: any
  
      /**
       * None bright style of ccui.Widget.
       */
      static BRIGHT_STYLE_NONE: any
  
      /**
       * Normal bright style of ccui.Widget.
       */
      static BRIGHT_STYLE_NORMAL: any
  
      /**
       * The down of Focus direction for ccui.Widget
       */
      static DOWN: any
  
      /**
       * The left of Focus direction for ccui.Widget
       */
      static LEFT: any
  
      /**
       * The image file texture type of ccui.Widget loads.
       */
      static LOCAL_TEXTURE: any
  
      /**
       * The sprite frame texture type of ccui.Widget loads.
       */
      static PLIST_TEXTURE: any
  
      /**
       * The absolute of ccui.Widget's position type.
       */
      static POSITION_ABSOLUTE: any
  
      /**
       * The percent of ccui.Widget's position type.
       */
      static POSITION_PERCENT: any
  
      /**
       * The right of Focus direction for ccui.Widget
       */
      static RIGHT: any
  
      /**
       * The absolute of ccui.Widget's size type.
       */
      static SIZE_ABSOLUTE: any
  
      /**
       * The percent of ccui.Widget's size type.
       */
      static SIZE_PERCENT: any
  
      /**
       * The touch began type of ccui.Widget's touch event
       */
      static TOUCH_BEGAN: any
  
      /**
       * The touch canceled type of ccui.Widget's touch event
       */
      static TOUCH_CANCELED: any
  
      /**
       * The touch end type of ccui.Widget's touch event
       */
      static TOUCH_ENDED: any
  
      /**
       * The touch moved type of ccui.Widget's touch event
       */
      static TOUCH_MOVED: any
  
      /**
       * The type code of Container for ccui controls.
       */
      static TYPE_CONTAINER: any
  
      /**
       * The type code of Widget for ccui controls.
       */
      static TYPE_WIDGET: any
  
      /**
       * The up of Focus direction for ccui.Widget
       */
      static UP: any
  
      /**
       * allocates and initializes a UIWidget.
       *
       * @returns {ccui.Widget}
       */
      static create(): ccui.Widget
  
      /**
       * call this method with parameter true to enable the Android Dpad focus navigation feature
       *
       * @param {Boolean} enable set true to enable dpad focus navigation, otherwise disable dpad focus navigation
       */
      static enableDpadNavigation(enable: boolean): any
  
      /**
       * Gets the focused widget of current stage.
       *
       * @returns {null|ccui.Widget}
       */
      static getCurrentFocusedWidget(): null | ccui.Widget
  
  
  
  
      /**
       * - The action tag of the widget
       */
      actionTag: number
  
      /**
       * - Indicate whether the widget is bright
       */
      bright: boolean
  
      /**
       * - Indicate whether the widget is enabled
       */
      enabled: boolean
  
      /**
       * - Indicate whether the widget is focused
       */
      focused: boolean
  
      /**
       * - Height in percentage of parent height
       */
      heightPercent: number
  
      /**
       * - The name of the widget
       */
      name: string
  
      /**
       * When a widget lose/get focus, this method will be called. Be Caution when you provide your own version,
       * you must call widget.setFocused(true/false) to change the focus state of the current focused widget;
       */
      onFocusChanged: any
  
      /**
       * use this function to manually specify the next focused widget regards to each direction
       */
      onNextFocusedWidget: any
  
      /**
       * - The size type of the widget
       */
      sizeType: any
  
      /**
       * - Indicate whether touch events are enabled
       */
      touchEnabled: boolean
  
      /**
       * - Indicate whether the update function is scheduled
       */
      updateEnabled: boolean
  
      /**
       * - <@readonly> The direct parent when it's a widget also, otherwise equals null
       */
      widgetParent: ccui.Widget
  
      /**
       * - <@readonly> The type of the widget
       */
      widgetType: any
  
      /**
       * - Width in percentage of parent width
       */
      widthPercent: number
  
      /**
       * - Position x in percentage of width
       */
      xPercent: number
  
      /**
       * - Position y in percentage of height
       */
      yPercent: number
  
      /**
       * Set a event handler to the widget in order to use cocostudio editor and framework
       *
       * @param {function} callback
       */
      addCCSEventListener(callback: Function): any
  
      /**
       * Adds a node for widget (this function is deleted in -x)
       *
       * @param {cc.Node} node
       * @param {Number} zOrder
       * @param {Number} tag
       */
      addNode(node: cc.Node, zOrder: number, tag: number): any
  
      /**
       * Sets the touch event target/selector of the ccui.Widget
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addTouchEventListener(selector: Function, target: object): any
  
      /**
       * Calls the checkChildInfo of widget's parent, its subclass will override it.
       *
       * @param {number} handleState
       * @param {ccui.Widget} sender
       * @param {cc.Point} touchPoint
       */
      checkChildInfo(handleState: number, sender: ccui.Widget, touchPoint: cc.Point): any
  
      /**
       * Checks a point if in parent's area.
       *
       * @param {cc.Point} pt
       *
       * @returns {Boolean}
       */
      clippingParentAreaContainPoint(pt: cc.Point): boolean
  
      /**
       * Clones a new widget.
       *
       * @returns {ccui.Widget}
       */
      clone(): ccui.Widget
  
      /**
       * A call back function when widget lost of focus.
       */
      didNotSelectSelf(): any
  
      /**
       * Dispatch a EventFocus through a EventDispatcher
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      dispatchFocusEvent(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * When a widget is in a layout, you could call this method to get the next focused widget within a specified direction.
       * If the widget is not in a layout, it will return itself
       *
       * @param {any} direction the direction to look for the next focused widget in a layout
       * @param {any} current the current focused widget
       */
      findNextFocusedWidget(direction: any, current: any): any
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomBoundary(): number
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomInParent(): number
  
      /**
       * Gets callback name of widget
       *
       * @returns v3.3{String|Null}
       */
      getCallbackName(): string | null
  
      /**
       * Gets callback type of widget
       *
       * @returns v3.3{String|null}
       */
      getCallbackType(): string | null
  
      /**
       * no matter what widget object you call this method on , it will return you the exact one focused widget
       */
      getCurrentFocusedWidget(): any
  
      /**
       * Get custom size of ccui.Widget
       *
       * @returns {cc.Size}
       */
      getCustomSize(): cc.Size
  
      /**
       * Returns the "class name" of widget.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Gets layout parameter
       *
       * @param {ccui.LayoutParameter.NONE|ccui.LayoutParameter.LINEAR|ccui.LayoutParameter.RELATIVE} type
       *
       * @returns {ccui.LayoutParameter}
       */
      getLayoutParameter(type: any): ccui.LayoutParameter
  
      /**
       * Gets layout size of ccui.Widget.
       *
       * @returns {cc.Size}
       */
      getLayoutSize(): cc.Size
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftBoundary(): number
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftInParent(): number
  
      /**
       * Gets node by tag
       *
       * @param {Number} tag
       *
       * @returns {cc.Node}
       */
      getNodeByTag(tag: number): cc.Node
  
      /**
       * Returns all children.
       *
       * @returns {Array}
       */
      getNodes(): any[]
  
      /**
       * Gets the percent (x,y) of the widget
       *
       * @returns {cc.Point} The percent (x,y) of the widget in OpenGL coordinates
       */
      getPositionPercent(): cc.Point
  
      /**
       * Gets the position type of the widget
       *
       * @returns {Number} the position type of widget
       */
      getPositionType(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightBoundary(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightInParent(): number
  
      /**
       * Returns size of widget
       *
       * @returns {cc.Size}
       */
      getSize(): cc.Size
  
      /**
       * Returns size percent of ccui.Widget
       *
       * @returns {cc.Point}
       */
      getSizePercent(): cc.Point
  
      /**
       * Gets the size type of widget.
       *
       * @returns {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} that is widget's size type
       */
      getSizeType(): any
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopBoundary(): number
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopInParent(): number
  
      /**
       * Gets the position of touch began event.
       *
       * @returns {cc.Point}
       */
      getTouchBeganPosition(): cc.Point
  
      /**
       * Gets the touch end point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch end point.
       */
      getTouchEndPos(): cc.Point
  
      /**
       * Gets the position of touch end event
       *
       * @returns {cc.Point}
       */
      getTouchEndPosition(): cc.Point
  
      /**
       * Gets the touch move point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch move point.
       */
      getTouchMovePos(): cc.Point
  
      /**
       * Gets the position of touch moved event
       *
       * @returns {cc.Point}
       */
      getTouchMovePosition(): cc.Point
  
      /**
       * Gets the touch began point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch began point.
       */
      getTouchStartPos(): cc.Point
  
      /**
       * Gets the Virtual Renderer of widget.
       *
       * @returns {ccui.Widget}
       */
      getVirtualRenderer(): ccui.Widget
  
      /**
       * Gets the content size of widget. Content size is widget's texture size.
       */
      getVirtualRendererSize(): any
  
      /**
       * The direct parent when it's a widget also, otherwise equals null
       *
       * @returns {ccui.Widget|null}
       */
      getWidgetParent(): ccui.Widget | null
  
      /**
       * get widget type
       *
       * @returns {ccui.Widget.TYPE_WIDGET|ccui.Widget.TYPE_CONTAINER}
       */
      getWidgetType(): any
  
      /**
       * Gets world position of ccui.Widget.
       *
       * @returns {cc.Point} world position of ccui.Widget.
       */
      getWorldPosition(): cc.Point
  
      /**
       * Checks a point if is in widget's space
       *
       * @param {cc.Point} pt
       *
       * @returns {boolean} true if the point is in widget's space, false otherwise.
       */
      hitTest(pt: cc.Point): boolean
  
      /**
       * Ignore the widget size
       *
       * @param {Boolean} ignore true that widget will ignore it's size, use texture size, false otherwise. Default value is true.
       */
      ignoreContentAdaptWithSize(ignore: boolean): any
  
      /**
       * initializes state of widget. please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
       *
       * @returns {boolean}
       */
      init(): boolean
  
      /**
       * Sends the touch event to widget's parent, its subclass will override it, e.g. ccui.ScrollView, ccui.PageView
       *
       * @param {Number} eventType
       * @param {ccui.Widget} sender
       * @param {cc.Touch} touch
       */
      interceptTouchEvent(eventType: number, sender: ccui.Widget, touch: cc.Touch): any
  
      /**
       * Determines if the widget is bright
       *
       * @returns {boolean} true if the widget is bright, false if the widget is dark.
       */
      isBright(): boolean
  
      /**
       * returns whether clipping parent widget contains point.
       *
       * @param {cc.Point} pt location point
       *
       * @returns {Boolean}
       */
      isClippingParentContainsPoint(pt: cc.Point): boolean
  
      /**
       * Determines if the widget is enabled
       *
       * @returns {boolean}
       */
      isEnabled(): boolean
  
      /**
       * Returns the flag which indicates whether the widget is flipped horizontally or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleX(sprite.getScaleX() * -1);
       *
       * @returns {Boolean} true if the widget is flipped horizontally, false otherwise.
       */
      isFlippedX(): boolean
  
      /**
       * Return the flag which indicates whether the widget is flipped vertically or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleY(widget.getScaleY() * -1);
       *
       * @returns {Boolean} true if the widget is flipped vertically, false otherwise.
       */
      isFlippedY(): boolean
  
      /**
       * Determines if the widget is on focused
       *
       * @returns {boolean} whether the widget is focused or not
       */
      isFocused(): boolean
  
      /**
       * returns whether the widget could accept focus.
       *
       * @returns {boolean} true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      isFocusEnabled(): boolean
  
      /**
       * Determines if the widget is highlighted
       *
       * @returns {boolean} true if the widget is highlighted, false if the widget is not highlighted .
       */
      isHighlighted(): boolean
  
      /**
       * Gets whether ignore the content size (custom size)
       *
       * @returns {boolean} true that widget will ignore it's size, use texture size, false otherwise.
       */
      isIgnoreContentAdaptWithSize(): boolean
  
      /**
       * Returns whether enable layout component of a widget
       *
       * @returns {Boolean} true represent the widget use Layout Component, false represent the widget couldn't use Layout Component.
       */
      isLayoutComponentEnabled(): boolean
  
      /**
       * Return whether the widget is propagate touch events to its parents or not
       *
       * @returns v3.2{boolean}
       */
      isPropagateTouchEvents(): boolean
  
      /**
       * Return whether the widget is swallowing touch or not
       *
       * @returns v3.2{boolean}
       */
      isSwallowTouches(): boolean
  
      /**
       * Returns whether or not touch is enabled.
       *
       * @returns {boolean} true if the widget is touch enabled, false if the widget is touch disabled.
       */
      isTouchEnabled(): boolean
  
      /**
       *
       *
       * @returns v3.2{boolean} true represent the widget use Unify Size, false represent the widget couldn't use Unify Size
       */
      isUnifySizeEnabled(): boolean
  
      /**
       * Calls updateSizeAndPosition and its parent's onEnter
       */
      onEnter(): any
  
      /**
       * Calls unscheduleUpdate and its parent's onExit
       */
      onExit(): any
  
      /**
       * This method is called when a focus change event happens
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      onFocusChange(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * The callback of touch began event.
       * If the bounding box of ccui.Widget contains the touch point, it will do the following things:
       * 1. sets highlight state,
       * 2. sends event to parent widget by interceptTouchEvent
       * 3. calls the callback of touch began event.
       * 4. returns true,
       * otherwise returns false directly.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       *
       * @returns {boolean}
       */
      onTouchBegan(touch: cc.Touch, event: cc.Event): boolean
  
      /**
       * A call back function called when widget is selected, and on touch canceled.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchCancelled(touchPoint: cc.Point): any
  
      /**
       * The callback of touch end event
       * It sends event to parent widget by interceptTouchEvent,
       * calls the callback of touch end event (highlight= true) or touch canceled event (highlight= false).
       * sets the highlight state to false ,
       *
       * @param {any} touch
       * @param {any} event
       */
      onTouchEnded(touch: any, event: any): any
  
      /**
       * A call back function called when widget is selected, and on touch long clicked.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchLongClicked(touchPoint: cc.Point): any
  
      /**
       * The callback of touch moved event.
       * It sets the highlight state by touch, sends event to parent widget by interceptTouchEvent and calls the callback of touch moved event.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       */
      onTouchMoved(touch: cc.Touch, event: cc.Event): any
  
      /**
       * Removes all node
       */
      removeAllNodes(): any
  
      /**
       * Removes a node from ccui.Widget
       *
       * @param {cc.Node} node
       * @param {Boolean} cleanup
       */
      removeNode(node: cc.Node, cleanup: boolean): any
  
      /**
       * Removes node by tag
       *
       * @param {Number} tag
       * @param {Boolean} cleanup
       */
      removeNodeByTag(tag: number, cleanup: boolean): any
  
      /**
       * when a widget calls this method, it will get focus immediately.
       */
      requestFocus(): any
  
      /**
       * Sets whether the widget is bright. The default value is true, a widget is default to bright
       *
       * @param {Boolean} bright true if the widget is bright, false if the widget is dark.
       */
      setBright(bright: boolean): any
  
      /**
       * To set the bright style of ccui.Widget.
       *
       * @param {Number} style BRIGHT_NORMAL the widget is normal state, BRIGHT_HIGHLIGHT the widget is height light state.
       */
      setBrightStyle(style: number): any
  
      /**
       * Sets callback name to widget.
       *
       * @param {String} callbackName
       */
      setCallbackName(callbackName: string): any
  
      /**
       * Sets callback type to widget
       *
       * @param {String} callbackType
       */
      setCallbackType(callbackType: string): any
  
      /**
       * Sets _customSize of ccui.Widget, if ignoreSize is true, the content size is its renderer's contentSize, otherwise the content size is parameter.
       * and updates size percent by parent content size. At last, updates its children's size and position.
       *
       * @param {cc.Size|Number} contentSize content size or width of content size
       * @param {Number} height
       */
      setContentSize(contentSize: cc.Size | number, height: number): any
  
      /**
       * Sets whether the widget is enabled
       * true if the widget is enabled, widget may be touched , false if the widget is disabled, widget cannot be touched.
       * The default value is true, a widget is default to enabled
       *
       * @param {Boolean} enabled
       */
      setEnabled(enabled: boolean): any
  
      /**
       * Sets whether the widget should be flipped horizontally or not.
       *
       * @param {Boolean} flipX true if the widget should be flipped horizontally, false otherwise.
       */
      setFlippedX(flipX: boolean): any
  
      /**
       * Sets whether the widget should be flipped vertically or not.
       *
       * @param {Boolean} flipY true if the widget should be flipped vertically, false otherwise.
       */
      setFlippedY(flipY: boolean): any
  
      /**
       * Sets whether the widget is on focused
       * The default value is false, a widget is default to not on focused
       *
       * @param {boolean} focus pass true to let the widget get focus or pass false to let the widget lose focus
       */
      setFocused(focus: boolean): any
  
      /**
       * sets whether the widget could accept focus.
       *
       * @param {Boolean} enable true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      setFocusEnabled(enable: boolean): any
  
      /**
       * Sets whether the widget is highlighted. The default value is false, a widget is default to not highlighted
       *
       * @param {any} highlight true if the widget is highlighted, false if the widget is not highlighted.
       */
      setHighlighted(highlight: any): any
  
      /**
       * Whether enable layout component of a widget
       *
       * @param {Boolean} enable enable layout Component of a widget
       */
      setLayoutComponentEnabled(enable: boolean): any
  
      /**
       * Gets LayoutParameter of widget.
       *
       * @param {ccui.LayoutParameter} parameter
       */
      setLayoutParameter(parameter: ccui.LayoutParameter): any
  
      /**
       * Changes the position (x,y) of the widget .
       * The original point (0,0) is at the left-bottom corner of screen.
       *
       * @param {cc.Point|Number} pos
       * @param {Number} posY
       */
      setPosition(pos: cc.Point | number, posY: number): any
  
      /**
       * Changes the position (x,y) of the widget
       *
       * @param {cc.Point} percent
       */
      setPositionPercent(percent: cc.Point): any
  
      /**
       * Changes the position type of the widget
       *
       * @param {Number} type the position type of widget
       */
      setPositionType(type: number): any
  
      /**
       * Allow widget touch events to propagate to its parents. Set false will disable propagation
       *
       * @param {Boolean} isPropagate
       */
      setPropagateTouchEvents(isPropagate: boolean): any
  
      /**
       * Changes the size that is widget's size
       *
       * @param {cc.Size} size that is widget's size
       */
      setSize(size: cc.Size): any
  
      /**
       * Changes the percent that is widget's percent size
       *
       * @param {cc.Point} percent that is widget's percent size, width and height value from 0 to 1.
       */
      setSizePercent(percent: cc.Point): any
  
      /**
       * TEXTURE_RES_TYPE
       * Changes the size type of widget.
       *
       * @param {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} type that is widget's size type
       */
      setSizeType(type: any): any
  
      /**
       * Specify widget to swallow touches or not
       *
       * @param {Boolean} swallow
       */
      setSwallowTouches(swallow: boolean): any
  
      /**
       * Sets whether the widget is touch enabled. The default value is false, a widget is default to touch disabled
       *
       * @param {Boolean} enable true if the widget is touch enabled, false if the widget is touch disabled.
       */
      setTouchEnabled(enable: boolean): any
  
      /**
       *
       *
       * @param {Boolean} enable enable Unify Size of a widget
       */
      setUnifySizeEnabled(enable: boolean): any
  
      /**
       * updates its size by size type and its position by position type.
       *
       * @param {cc.Size} parentSize parent size
       */
      updateSizeAndPosition(parentSize: cc.Size): any
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    }
}
  
declare namespace ccui {
    interface IButton extends ccui.IWidget {
  
      pressedActionEnabled: boolean
  
      titleFont: string
  
      titleFontColor: cc.Color
  
      titleFontName: string
  
      titleFontSize: number
  
      titleText: string
  
      getCapInsetsDisabledRenderer(): cc.Rect
  
      getCapInsetsNormalRenderer(): cc.Rect
  
      getCapInsetsPressedRenderer(): cc.Rect
  
      getNormalTextureSize(): cc.Size
  
      getTitleColor(): cc.Color
  
      getTitleFontName(): string
  
      getTitleFontSize(): number
  
      getTitleRenderer(): cc.LabelTTF
  
      getTitleText(): string
  
      getZoomScale(): number
  
      isScale9Enabled(): boolean
  
      loadTextureDisabled(disabled: string, texType: any): any
  
      loadTextureNormal(normal: string, texType: any): any
  
      loadTexturePressed(selected: string, texType: any): any
  
      loadTextures(normal: string, selected: string, disabled: string, texType: any): any
  
      setCapInsets(capInsets: cc.Rect): any
  
      setCapInsetsDisabledRenderer(capInsets: cc.Rect): any
  
      setCapInsetsNormalRenderer(capInsets: cc.Rect): any
  
      setCapInsetsPressedRenderer(capInsets: cc.Rect): any
  
      setPressedActionEnabled(enabled: boolean): any
  
      setScale9Enabled(able: boolean): any
  
      setTitleColor(color: cc.Color): any
  
      setTitleFontName(fontName: string): any
  
      setTitleFontSize(size: cc.Size): any
  
      setTitleText(text: string): any
  
      setZoomScale(scale: any): any
    }
  
    interface IButtonOverrides {
  
      getDescription(): string
  
      getVirtualRenderer(): cc.Node
  
      getVirtualRendererSize(): cc.Size
  
      ignoreContentAdaptWithSize(ignore: boolean): any
    }
  
  
  
    class Button implements IButton, IButtonOverrides extends cc.Node {
  
      /**
       * Allocates and initializes a UIButton.
       * Constructor of ccui.Button. override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
       *
       * @param {String} normalImage
       * @param {String} selectedImage
       * @param {String} disableImage
       * @param {Number} texType
       */
      constructor(normalImage?: string, selectedImage?: string, disableImage?: string, texType?: number)
  
  
  
      /**
       * The disabled renderer's zOrder value of ccui.Button.
       */
      static DISABLED_RENDERER_ZORDER: any
  
      /**
       * The normal renderer's zOrder value of ccui.Button.
       */
      static NORMAL_RENDERER_ZORDER: any
  
      /**
       * The pressed renderer's zOrder value ccui.Button.
       */
      static PRESSED_RENDERER_ZORDER: any
  
      /**
       * The title renderer's zOrder value of ccui.Button.
       */
      static TITLE_RENDERER_ZORDER: any
  
      /**
       * the zoom action time step of ccui.Button
       */
      static ZOOM_ACTION_TIME_STEP: any
  
      /**
       * allocates and initializes a UIButton.
       *
       * @param {string} normalImage normal state texture name
       * @param {string} selectedImage selected state texture name
       * @param {string} disableImage disabled state texture name
       * @param {string} texType
       *
       * @returns {ccui.Button}
       */
      static create(normalImage?: string, selectedImage?: string, disableImage?: string, texType?: string): ccui.Button
  
  
      /**
       * Returns the "class name" of widget.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Gets the Virtual Renderer of widget.
       *
       * @returns {cc.Node}
       */
      getVirtualRenderer(): cc.Node
  
      /**
       * Returns the renderer size.
       *
       * @returns {cc.Size}
       */
      getVirtualRendererSize(): cc.Size
  
      /**
       * Sets whether ignore the widget size
       *
       * @param {Boolean} ignore true that widget will ignore it's size, use texture size, false otherwise. Default value is true.
       */
      ignoreContentAdaptWithSize(ignore: boolean): any
  
  
      /**
       * - Indicate whether button has zoom effect when clicked
       */
      pressedActionEnabled: boolean
  
      /**
       * - The content string font of the button title
       */
      titleFont: string
  
      /**
       * - The content string font color of the button title
       */
      titleFontColor: cc.Color
  
      /**
       * - The content string font name of the button title
       */
      titleFontName: string
  
      /**
       * - The content string font size of the button title
       */
      titleFontSize: number
  
      /**
       * - The content string of the button title
       */
      titleText: string
  
      /**
       * Returns disable renderer cap insets.
       *
       * @returns {cc.Rect}
       */
      getCapInsetsDisabledRenderer(): cc.Rect
  
      /**
       * Returns normal renderer cap insets.
       *
       * @returns {cc.Rect}
       */
      getCapInsetsNormalRenderer(): cc.Rect
  
      /**
       * Returns pressed renderer cap insets.
       *
       * @returns {cc.Rect}
       */
      getCapInsetsPressedRenderer(): cc.Rect
  
      /**
       * Returns the normalize of texture size
       *
       * @returns v3.3{cc.Size}
       */
      getNormalTextureSize(): cc.Size
  
      /**
       * Returns title color of ccui.Button
       *
       * @returns {cc.Color}
       */
      getTitleColor(): cc.Color
  
      /**
       * Gets title fontName of ccui.Button.
       *
       * @returns {String}
       */
      getTitleFontName(): string
  
      /**
       * Returns title fontSize of ccui.Button.
       *
       * @returns {Number}
       */
      getTitleFontSize(): number
  
      /**
       * Get the title renderer.
       * title ttf object.
       *
       * @returns {cc.LabelTTF}
       */
      getTitleRenderer(): cc.LabelTTF
  
      /**
       * Returns title text of ccui.Button
       *
       * @returns {String} text
       */
      getTitleText(): string
  
      /**
       * Returns a zoom scale
       *
       * @returns v3.2{number}
       */
      getZoomScale(): number
  
      /**
       * Returns button is using scale9 renderer or not.
       *
       * @returns {Boolean}
       */
      isScale9Enabled(): boolean
  
      /**
       * Load dark state texture for button.
       *
       * @param {String} disabled disabled state of texture's filename.
       * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
       */
      loadTextureDisabled(disabled: string, texType: any): any
  
      /**
       * Load normal state texture for button.
       *
       * @param {String} normal normal state of texture's filename.
       * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
       */
      loadTextureNormal(normal: string, texType: any): any
  
      /**
       * Load selected state texture for button.
       *
       * @param {String} selected selected state of texture's filename.
       * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
       */
      loadTexturePressed(selected: string, texType: any): any
  
      /**
       * Load textures for button.
       *
       * @param {String} normal normal state of texture's filename.
       * @param {String} selected selected state of texture's filename.
       * @param {String} disabled disabled state of texture's filename.
       * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
       */
      loadTextures(normal: string, selected: string, disabled: string, texType: any): any
  
      /**
       * Sets capinsets for button, if button is using scale9 renderer.
       *
       * @param {cc.Rect} capInsets
       */
      setCapInsets(capInsets: cc.Rect): any
  
      /**
       * Sets capinsets for button, if button is using scale9 renderer.
       *
       * @param {cc.Rect} capInsets
       */
      setCapInsetsDisabledRenderer(capInsets: cc.Rect): any
  
      /**
       * Sets capinsets for button, if button is using scale9 renderer.
       *
       * @param {cc.Rect} capInsets
       */
      setCapInsetsNormalRenderer(capInsets: cc.Rect): any
  
      /**
       * Sets capinsets for button, if button is using scale9 renderer.
       *
       * @param {cc.Rect} capInsets
       */
      setCapInsetsPressedRenderer(capInsets: cc.Rect): any
  
      /**
       * Changes if button can be clicked zoom effect.
       *
       * @param {Boolean} enabled
       */
      setPressedActionEnabled(enabled: boolean): any
  
      /**
       * Sets if button is using scale9 renderer.
       *
       * @param {Boolean} able true that using scale9 renderer, false otherwise.
       */
      setScale9Enabled(able: boolean): any
  
      /**
       * Sets title color to ccui.Button.
       *
       * @param {cc.Color} color
       */
      setTitleColor(color: cc.Color): any
  
      /**
       * Sets title fontName to ccui.Button.
       *
       * @param {String} fontName
       */
      setTitleFontName(fontName: string): any
  
      /**
       * Sets title fontSize to ccui.Button
       *
       * @param {cc.Size} size
       */
      setTitleFontSize(size: cc.Size): any
  
      /**
       * Sets title text to ccui.Button
       *
       * @param {String} text
       */
      setTitleText(text: string): any
  
      /**
       * When user pressed the button, the button will zoom to a scale.
       * The final scale of the button equals (button original scale + _zoomScale)
       *
       * @param {any} scale
       */
      setZoomScale(scale: any): any
  
  
      /**
       * - The action tag of the widget
       */
      actionTag: number
  
      /**
       * - Indicate whether the widget is bright
       */
      bright: boolean
  
      /**
       * - Indicate whether the widget is enabled
       */
      enabled: boolean
  
      /**
       * - Indicate whether the widget is focused
       */
      focused: boolean
  
      /**
       * - Height in percentage of parent height
       */
      heightPercent: number
  
      /**
       * - The name of the widget
       */
      name: string
  
      /**
       * When a widget lose/get focus, this method will be called. Be Caution when you provide your own version,
       * you must call widget.setFocused(true/false) to change the focus state of the current focused widget;
       */
      onFocusChanged: any
  
      /**
       * use this function to manually specify the next focused widget regards to each direction
       */
      onNextFocusedWidget: any
  
      /**
       * - The size type of the widget
       */
      sizeType: any
  
      /**
       * - Indicate whether touch events are enabled
       */
      touchEnabled: boolean
  
      /**
       * - Indicate whether the update function is scheduled
       */
      updateEnabled: boolean
  
      /**
       * - <@readonly> The direct parent when it's a widget also, otherwise equals null
       */
      widgetParent: ccui.Widget
  
      /**
       * - <@readonly> The type of the widget
       */
      widgetType: any
  
      /**
       * - Width in percentage of parent width
       */
      widthPercent: number
  
      /**
       * - Position x in percentage of width
       */
      xPercent: number
  
      /**
       * - Position y in percentage of height
       */
      yPercent: number
  
      /**
       * Set a event handler to the widget in order to use cocostudio editor and framework
       *
       * @param {function} callback
       */
      addCCSEventListener(callback: Function): any
  
      /**
       * Adds a node for widget (this function is deleted in -x)
       *
       * @param {cc.Node} node
       * @param {Number} zOrder
       * @param {Number} tag
       */
      addNode(node: cc.Node, zOrder: number, tag: number): any
  
      /**
       * Sets the touch event target/selector of the ccui.Widget
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addTouchEventListener(selector: Function, target: object): any
  
      /**
       * Calls the checkChildInfo of widget's parent, its subclass will override it.
       *
       * @param {number} handleState
       * @param {ccui.Widget} sender
       * @param {cc.Point} touchPoint
       */
      checkChildInfo(handleState: number, sender: ccui.Widget, touchPoint: cc.Point): any
  
      /**
       * Checks a point if in parent's area.
       *
       * @param {cc.Point} pt
       *
       * @returns {Boolean}
       */
      clippingParentAreaContainPoint(pt: cc.Point): boolean
  
      /**
       * Clones a new widget.
       *
       * @returns {ccui.Widget}
       */
      clone(): ccui.Widget
  
      /**
       * A call back function when widget lost of focus.
       */
      didNotSelectSelf(): any
  
      /**
       * Dispatch a EventFocus through a EventDispatcher
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      dispatchFocusEvent(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * When a widget is in a layout, you could call this method to get the next focused widget within a specified direction.
       * If the widget is not in a layout, it will return itself
       *
       * @param {any} direction the direction to look for the next focused widget in a layout
       * @param {any} current the current focused widget
       */
      findNextFocusedWidget(direction: any, current: any): any
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomBoundary(): number
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomInParent(): number
  
      /**
       * Gets callback name of widget
       *
       * @returns v3.3{String|Null}
       */
      getCallbackName(): string | null
  
      /**
       * Gets callback type of widget
       *
       * @returns v3.3{String|null}
       */
      getCallbackType(): string | null
  
      /**
       * no matter what widget object you call this method on , it will return you the exact one focused widget
       */
      getCurrentFocusedWidget(): any
  
      /**
       * Get custom size of ccui.Widget
       *
       * @returns {cc.Size}
       */
      getCustomSize(): cc.Size
  
      /**
       * Returns the "class name" of widget.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Gets layout parameter
       *
       * @param {ccui.LayoutParameter.NONE|ccui.LayoutParameter.LINEAR|ccui.LayoutParameter.RELATIVE} type
       *
       * @returns {ccui.LayoutParameter}
       */
      getLayoutParameter(type: any): ccui.LayoutParameter
  
      /**
       * Gets layout size of ccui.Widget.
       *
       * @returns {cc.Size}
       */
      getLayoutSize(): cc.Size
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftBoundary(): number
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftInParent(): number
  
      /**
       * Gets node by tag
       *
       * @param {Number} tag
       *
       * @returns {cc.Node}
       */
      getNodeByTag(tag: number): cc.Node
  
      /**
       * Returns all children.
       *
       * @returns {Array}
       */
      getNodes(): any[]
  
      /**
       * Gets the percent (x,y) of the widget
       *
       * @returns {cc.Point} The percent (x,y) of the widget in OpenGL coordinates
       */
      getPositionPercent(): cc.Point
  
      /**
       * Gets the position type of the widget
       *
       * @returns {Number} the position type of widget
       */
      getPositionType(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightBoundary(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightInParent(): number
  
      /**
       * Returns size of widget
       *
       * @returns {cc.Size}
       */
      getSize(): cc.Size
  
      /**
       * Returns size percent of ccui.Widget
       *
       * @returns {cc.Point}
       */
      getSizePercent(): cc.Point
  
      /**
       * Gets the size type of widget.
       *
       * @returns {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} that is widget's size type
       */
      getSizeType(): any
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopBoundary(): number
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopInParent(): number
  
      /**
       * Gets the position of touch began event.
       *
       * @returns {cc.Point}
       */
      getTouchBeganPosition(): cc.Point
  
      /**
       * Gets the touch end point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch end point.
       */
      getTouchEndPos(): cc.Point
  
      /**
       * Gets the position of touch end event
       *
       * @returns {cc.Point}
       */
      getTouchEndPosition(): cc.Point
  
      /**
       * Gets the touch move point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch move point.
       */
      getTouchMovePos(): cc.Point
  
      /**
       * Gets the position of touch moved event
       *
       * @returns {cc.Point}
       */
      getTouchMovePosition(): cc.Point
  
      /**
       * Gets the touch began point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch began point.
       */
      getTouchStartPos(): cc.Point
  
      /**
       * Gets the Virtual Renderer of widget.
       *
       * @returns {ccui.Widget}
       */
      getVirtualRenderer(): ccui.Widget
  
      /**
       * Gets the content size of widget. Content size is widget's texture size.
       */
      getVirtualRendererSize(): any
  
      /**
       * The direct parent when it's a widget also, otherwise equals null
       *
       * @returns {ccui.Widget|null}
       */
      getWidgetParent(): ccui.Widget | null
  
      /**
       * get widget type
       *
       * @returns {ccui.Widget.TYPE_WIDGET|ccui.Widget.TYPE_CONTAINER}
       */
      getWidgetType(): any
  
      /**
       * Gets world position of ccui.Widget.
       *
       * @returns {cc.Point} world position of ccui.Widget.
       */
      getWorldPosition(): cc.Point
  
      /**
       * Checks a point if is in widget's space
       *
       * @param {cc.Point} pt
       *
       * @returns {boolean} true if the point is in widget's space, false otherwise.
       */
      hitTest(pt: cc.Point): boolean
  
      /**
       * Ignore the widget size
       *
       * @param {Boolean} ignore true that widget will ignore it's size, use texture size, false otherwise. Default value is true.
       */
      ignoreContentAdaptWithSize(ignore: boolean): any
  
      /**
       * initializes state of widget. please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
       *
       * @returns {boolean}
       */
      init(): boolean
  
      /**
       * Sends the touch event to widget's parent, its subclass will override it, e.g. ccui.ScrollView, ccui.PageView
       *
       * @param {Number} eventType
       * @param {ccui.Widget} sender
       * @param {cc.Touch} touch
       */
      interceptTouchEvent(eventType: number, sender: ccui.Widget, touch: cc.Touch): any
  
      /**
       * Determines if the widget is bright
       *
       * @returns {boolean} true if the widget is bright, false if the widget is dark.
       */
      isBright(): boolean
  
      /**
       * returns whether clipping parent widget contains point.
       *
       * @param {cc.Point} pt location point
       *
       * @returns {Boolean}
       */
      isClippingParentContainsPoint(pt: cc.Point): boolean
  
      /**
       * Determines if the widget is enabled
       *
       * @returns {boolean}
       */
      isEnabled(): boolean
  
      /**
       * Returns the flag which indicates whether the widget is flipped horizontally or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleX(sprite.getScaleX() * -1);
       *
       * @returns {Boolean} true if the widget is flipped horizontally, false otherwise.
       */
      isFlippedX(): boolean
  
      /**
       * Return the flag which indicates whether the widget is flipped vertically or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleY(widget.getScaleY() * -1);
       *
       * @returns {Boolean} true if the widget is flipped vertically, false otherwise.
       */
      isFlippedY(): boolean
  
      /**
       * Determines if the widget is on focused
       *
       * @returns {boolean} whether the widget is focused or not
       */
      isFocused(): boolean
  
      /**
       * returns whether the widget could accept focus.
       *
       * @returns {boolean} true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      isFocusEnabled(): boolean
  
      /**
       * Determines if the widget is highlighted
       *
       * @returns {boolean} true if the widget is highlighted, false if the widget is not highlighted .
       */
      isHighlighted(): boolean
  
      /**
       * Gets whether ignore the content size (custom size)
       *
       * @returns {boolean} true that widget will ignore it's size, use texture size, false otherwise.
       */
      isIgnoreContentAdaptWithSize(): boolean
  
      /**
       * Returns whether enable layout component of a widget
       *
       * @returns {Boolean} true represent the widget use Layout Component, false represent the widget couldn't use Layout Component.
       */
      isLayoutComponentEnabled(): boolean
  
      /**
       * Return whether the widget is propagate touch events to its parents or not
       *
       * @returns v3.2{boolean}
       */
      isPropagateTouchEvents(): boolean
  
      /**
       * Return whether the widget is swallowing touch or not
       *
       * @returns v3.2{boolean}
       */
      isSwallowTouches(): boolean
  
      /**
       * Returns whether or not touch is enabled.
       *
       * @returns {boolean} true if the widget is touch enabled, false if the widget is touch disabled.
       */
      isTouchEnabled(): boolean
  
      /**
       *
       *
       * @returns v3.2{boolean} true represent the widget use Unify Size, false represent the widget couldn't use Unify Size
       */
      isUnifySizeEnabled(): boolean
  
      /**
       * Calls updateSizeAndPosition and its parent's onEnter
       */
      onEnter(): any
  
      /**
       * Calls unscheduleUpdate and its parent's onExit
       */
      onExit(): any
  
      /**
       * This method is called when a focus change event happens
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      onFocusChange(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * The callback of touch began event.
       * If the bounding box of ccui.Widget contains the touch point, it will do the following things:
       * 1. sets highlight state,
       * 2. sends event to parent widget by interceptTouchEvent
       * 3. calls the callback of touch began event.
       * 4. returns true,
       * otherwise returns false directly.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       *
       * @returns {boolean}
       */
      onTouchBegan(touch: cc.Touch, event: cc.Event): boolean
  
      /**
       * A call back function called when widget is selected, and on touch canceled.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchCancelled(touchPoint: cc.Point): any
  
      /**
       * The callback of touch end event
       * It sends event to parent widget by interceptTouchEvent,
       * calls the callback of touch end event (highlight= true) or touch canceled event (highlight= false).
       * sets the highlight state to false ,
       *
       * @param {any} touch
       * @param {any} event
       */
      onTouchEnded(touch: any, event: any): any
  
      /**
       * A call back function called when widget is selected, and on touch long clicked.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchLongClicked(touchPoint: cc.Point): any
  
      /**
       * The callback of touch moved event.
       * It sets the highlight state by touch, sends event to parent widget by interceptTouchEvent and calls the callback of touch moved event.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       */
      onTouchMoved(touch: cc.Touch, event: cc.Event): any
  
      /**
       * Removes all node
       */
      removeAllNodes(): any
  
      /**
       * Removes a node from ccui.Widget
       *
       * @param {cc.Node} node
       * @param {Boolean} cleanup
       */
      removeNode(node: cc.Node, cleanup: boolean): any
  
      /**
       * Removes node by tag
       *
       * @param {Number} tag
       * @param {Boolean} cleanup
       */
      removeNodeByTag(tag: number, cleanup: boolean): any
  
      /**
       * when a widget calls this method, it will get focus immediately.
       */
      requestFocus(): any
  
      /**
       * Sets whether the widget is bright. The default value is true, a widget is default to bright
       *
       * @param {Boolean} bright true if the widget is bright, false if the widget is dark.
       */
      setBright(bright: boolean): any
  
      /**
       * To set the bright style of ccui.Widget.
       *
       * @param {Number} style BRIGHT_NORMAL the widget is normal state, BRIGHT_HIGHLIGHT the widget is height light state.
       */
      setBrightStyle(style: number): any
  
      /**
       * Sets callback name to widget.
       *
       * @param {String} callbackName
       */
      setCallbackName(callbackName: string): any
  
      /**
       * Sets callback type to widget
       *
       * @param {String} callbackType
       */
      setCallbackType(callbackType: string): any
  
      /**
       * Sets whether the widget is enabled
       * true if the widget is enabled, widget may be touched , false if the widget is disabled, widget cannot be touched.
       * The default value is true, a widget is default to enabled
       *
       * @param {Boolean} enabled
       */
      setEnabled(enabled: boolean): any
  
      /**
       * Sets whether the widget should be flipped horizontally or not.
       *
       * @param {Boolean} flipX true if the widget should be flipped horizontally, false otherwise.
       */
      setFlippedX(flipX: boolean): any
  
      /**
       * Sets whether the widget should be flipped vertically or not.
       *
       * @param {Boolean} flipY true if the widget should be flipped vertically, false otherwise.
       */
      setFlippedY(flipY: boolean): any
  
      /**
       * Sets whether the widget is on focused
       * The default value is false, a widget is default to not on focused
       *
       * @param {boolean} focus pass true to let the widget get focus or pass false to let the widget lose focus
       */
      setFocused(focus: boolean): any
  
      /**
       * sets whether the widget could accept focus.
       *
       * @param {Boolean} enable true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      setFocusEnabled(enable: boolean): any
  
      /**
       * Sets whether the widget is highlighted. The default value is false, a widget is default to not highlighted
       *
       * @param {any} highlight true if the widget is highlighted, false if the widget is not highlighted.
       */
      setHighlighted(highlight: any): any
  
      /**
       * Whether enable layout component of a widget
       *
       * @param {Boolean} enable enable layout Component of a widget
       */
      setLayoutComponentEnabled(enable: boolean): any
  
      /**
       * Gets LayoutParameter of widget.
       *
       * @param {ccui.LayoutParameter} parameter
       */
      setLayoutParameter(parameter: ccui.LayoutParameter): any
  
      /**
       * Changes the position (x,y) of the widget .
       * The original point (0,0) is at the left-bottom corner of screen.
       *
       * @param {cc.Point|Number} pos
       * @param {Number} posY
       */
      setPosition(pos: cc.Point | number, posY: number): any
  
      /**
       * Changes the position (x,y) of the widget
       *
       * @param {cc.Point} percent
       */
      setPositionPercent(percent: cc.Point): any
  
      /**
       * Changes the position type of the widget
       *
       * @param {Number} type the position type of widget
       */
      setPositionType(type: number): any
  
      /**
       * Allow widget touch events to propagate to its parents. Set false will disable propagation
       *
       * @param {Boolean} isPropagate
       */
      setPropagateTouchEvents(isPropagate: boolean): any
  
      /**
       * Changes the size that is widget's size
       *
       * @param {cc.Size} size that is widget's size
       */
      setSize(size: cc.Size): any
  
      /**
       * Changes the percent that is widget's percent size
       *
       * @param {cc.Point} percent that is widget's percent size, width and height value from 0 to 1.
       */
      setSizePercent(percent: cc.Point): any
  
      /**
       * TEXTURE_RES_TYPE
       * Changes the size type of widget.
       *
       * @param {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} type that is widget's size type
       */
      setSizeType(type: any): any
  
      /**
       * Specify widget to swallow touches or not
       *
       * @param {Boolean} swallow
       */
      setSwallowTouches(swallow: boolean): any
  
      /**
       * Sets whether the widget is touch enabled. The default value is false, a widget is default to touch disabled
       *
       * @param {Boolean} enable true if the widget is touch enabled, false if the widget is touch disabled.
       */
      setTouchEnabled(enable: boolean): any
  
      /**
       *
       *
       * @param {Boolean} enable enable Unify Size of a widget
       */
      setUnifySizeEnabled(enable: boolean): any
  
      /**
       * updates its size by size type and its position by position type.
       *
       * @param {cc.Size} parentSize parent size
       */
      updateSizeAndPosition(parentSize: cc.Size): any
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    }
  }
  
  declare namespace ccui {
    interface ICheckBox extends ccui.IWidget {
  
      selected: boolean
  
      addEventListener(selector: Function, target: object): any
  
      addEventListenerCheckBox(selector: Function, target: object): any
  
      getSelectedState(): any
  
      isSelected(): boolean
  
      loadTextureBackGround(backGround: string, texType: any): any
  
      loadTextureBackGroundDisabled(backGroundDisabled: string, texType: any): any
  
      loadTextureBackGroundSelected(backGroundSelected: string, texType: any): any
  
      loadTextureFrontCross(cross: string, texType: any): any
  
      loadTextureFrontCrossDisabled(frontCrossDisabled: string, texType: any): any
  
      loadTextures(backGround: string, backGroundSelected: string, cross: string, backGroundDisabled: string, frontCrossDisabled: string, texType: any): any
  
      setSelected(selected: boolean): any
  
      setSelectedState(selected: any): any
    }
  
    interface ICheckBoxOverrides {
  
      getDescription(): string
  
      getVirtualRenderer(): cc.Node
  
      getVirtualRendererSize(): cc.Size
    }
  
  
  
    class CheckBox implements ICheckBox, ICheckBoxOverrides {
  
      /**
       * allocates and initializes a UICheckBox.
       * Constructor of ccui.CheckBox, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
       *
       * @param {String} backGround
       * @param {String} backGroundSelected
       * @param {String} cross
       * @param {String} backGroundDisabled
       * @param {String} frontCrossDisabled
       * @param {Number} texType
       */
      constructor(backGround: string, backGroundSelected: string, cross: string, backGroundDisabled: string, frontCrossDisabled: string, texType: number)
  
  
  
      /**
       * The disabled Background renderer's zOrder
       */
      static BOX_DISABLED_RENDERER_ZORDER: any
  
      /**
       * The normal background renderer's zOrder
       */
      static BOX_RENDERER_ZORDER: any
  
      /**
       * The selected Background renderer's zOrder
       */
      static BOX_SELECTED_RENDERER_ZORDER: any
  
      /**
       * The selected state of ccui.CheckBox's event.
       */
      static EVENT_SELECTED: any
  
      /**
       * The unselected state of ccui.CheckBox's event.
       */
      static EVENT_UNSELECTED: any
  
      /**
       * The disabled front renderer's zOrder
       */
      static FRONT_CROSS_DISABLED_RENDERER_ZORDER: any
  
      /**
       * The normal front renderer's zOrder
       */
      static FRONT_CROSS_RENDERER_ZORDER: any
  
      /**
       * allocates and initializes a UICheckBox.
       *
       * @param {string} backGround backGround texture.
       * @param {string} backGroundSeleted backGround selected state texture.
       * @param {string} cross cross texture.
       * @param {string} backGroundDisabled cross dark state texture.
       * @param {string} frontCrossDisabled cross dark state texture.
       * @param {Number} texType
       *
       * @returns {ccui.CheckBox}
       */
      static create(backGround: string, backGroundSeleted: string, cross: string, backGroundDisabled: string, frontCrossDisabled: string, texType: number): ccui.CheckBox
  
  
      /**
       * Returns the "class name" of widget.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * override "getVirtualRenderer" method of widget.
       *
       * @returns {cc.Node} the renderer of ccui.CheckBox.
       */
      getVirtualRenderer(): cc.Node
  
      /**
       * Returns the content size of Renderer.
       *
       * @returns {cc.Size}
       */
      getVirtualRendererSize(): cc.Size
  
  
      /**
       * - Indicate whether the check box has been selected
       */
      selected: boolean
  
      /**
       * add a call back function would called when checkbox is selected or unselected.
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addEventListener(selector: Function, target: object): any
  
      /**
       * add event listener to ccui.CheckBox. it would called when checkbox is selected or unselected.
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addEventListenerCheckBox(selector: Function, target: object): any
  
      /**
       *
       */
      getSelectedState(): any
  
      /**
       * Returns the selected state of ccui.CheckBox.
       *
       * @returns {boolean}
       */
      isSelected(): boolean
  
      /**
       * Loads background texture for checkbox.
       *
       * @param {String} backGround background filename
       * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
       */
      loadTextureBackGround(backGround: string, texType: any): any
  
      /**
       * Loads disabled state of backGround texture for checkbox.
       *
       * @param {String} backGroundDisabled
       * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
       */
      loadTextureBackGroundDisabled(backGroundDisabled: string, texType: any): any
  
      /**
       * Loads selected state of background texture for checkbox.
       *
       * @param {String} backGroundSelected
       * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
       */
      loadTextureBackGroundSelected(backGroundSelected: string, texType: any): any
  
      /**
       * Loads cross texture for checkbox.
       *
       * @param {String} cross
       * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
       */
      loadTextureFrontCross(cross: string, texType: any): any
  
      /**
       * Loads frontCrossDisabled texture for checkbox.
       *
       * @param {String} frontCrossDisabled
       * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
       */
      loadTextureFrontCrossDisabled(frontCrossDisabled: string, texType: any): any
  
      /**
       * Loads textures for checkbox.
       *
       * @param {String} backGround
       * @param {String} backGroundSelected
       * @param {String} cross
       * @param {String} backGroundDisabled
       * @param {String} frontCrossDisabled
       * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
       */
      loadTextures(backGround: string, backGroundSelected: string, cross: string, backGroundDisabled: string, frontCrossDisabled: string, texType: any): any
  
      /**
       * Sets the selected state to ccui.CheckBox
       *
       * @param {Boolean} selected
       */
      setSelected(selected: boolean): any
  
      /**
       *
       *
       * @param {any} selected
       */
      setSelectedState(selected: any): any
  
  
      /**
       * - The action tag of the widget
       */
      actionTag: number
  
      /**
       * - Indicate whether the widget is bright
       */
      bright: boolean
  
      /**
       * - Indicate whether the widget is enabled
       */
      enabled: boolean
  
      /**
       * - Indicate whether the widget is focused
       */
      focused: boolean
  
      /**
       * - Height in percentage of parent height
       */
      heightPercent: number
  
      /**
       * - The name of the widget
       */
      name: string
  
      /**
       * When a widget lose/get focus, this method will be called. Be Caution when you provide your own version,
       * you must call widget.setFocused(true/false) to change the focus state of the current focused widget;
       */
      onFocusChanged: any
  
      /**
       * use this function to manually specify the next focused widget regards to each direction
       */
      onNextFocusedWidget: any
  
      /**
       * - The size type of the widget
       */
      sizeType: any
  
      /**
       * - Indicate whether touch events are enabled
       */
      touchEnabled: boolean
  
      /**
       * - Indicate whether the update function is scheduled
       */
      updateEnabled: boolean
  
      /**
       * - <@readonly> The direct parent when it's a widget also, otherwise equals null
       */
      widgetParent: ccui.Widget
  
      /**
       * - <@readonly> The type of the widget
       */
      widgetType: any
  
      /**
       * - Width in percentage of parent width
       */
      widthPercent: number
  
      /**
       * - Position x in percentage of width
       */
      xPercent: number
  
      /**
       * - Position y in percentage of height
       */
      yPercent: number
  
      /**
       * Set a event handler to the widget in order to use cocostudio editor and framework
       *
       * @param {function} callback
       */
      addCCSEventListener(callback: Function): any
  
      /**
       * Adds a node for widget (this function is deleted in -x)
       *
       * @param {cc.Node} node
       * @param {Number} zOrder
       * @param {Number} tag
       */
      addNode(node: cc.Node, zOrder: number, tag: number): any
  
      /**
       * Sets the touch event target/selector of the ccui.Widget
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addTouchEventListener(selector: Function, target: object): any
  
      /**
       * Calls the checkChildInfo of widget's parent, its subclass will override it.
       *
       * @param {number} handleState
       * @param {ccui.Widget} sender
       * @param {cc.Point} touchPoint
       */
      checkChildInfo(handleState: number, sender: ccui.Widget, touchPoint: cc.Point): any
  
      /**
       * Checks a point if in parent's area.
       *
       * @param {cc.Point} pt
       *
       * @returns {Boolean}
       */
      clippingParentAreaContainPoint(pt: cc.Point): boolean
  
      /**
       * Clones a new widget.
       *
       * @returns {ccui.Widget}
       */
      clone(): ccui.Widget
  
      /**
       * A call back function when widget lost of focus.
       */
      didNotSelectSelf(): any
  
      /**
       * Dispatch a EventFocus through a EventDispatcher
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      dispatchFocusEvent(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * When a widget is in a layout, you could call this method to get the next focused widget within a specified direction.
       * If the widget is not in a layout, it will return itself
       *
       * @param {any} direction the direction to look for the next focused widget in a layout
       * @param {any} current the current focused widget
       */
      findNextFocusedWidget(direction: any, current: any): any
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomBoundary(): number
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomInParent(): number
  
      /**
       * Gets callback name of widget
       *
       * @returns v3.3{String|Null}
       */
      getCallbackName(): string | null
  
      /**
       * Gets callback type of widget
       *
       * @returns v3.3{String|null}
       */
      getCallbackType(): string | null
  
      /**
       * no matter what widget object you call this method on , it will return you the exact one focused widget
       */
      getCurrentFocusedWidget(): any
  
      /**
       * Get custom size of ccui.Widget
       *
       * @returns {cc.Size}
       */
      getCustomSize(): cc.Size
  
      /**
       * Returns the "class name" of widget.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Gets layout parameter
       *
       * @param {ccui.LayoutParameter.NONE|ccui.LayoutParameter.LINEAR|ccui.LayoutParameter.RELATIVE} type
       *
       * @returns {ccui.LayoutParameter}
       */
      getLayoutParameter(type: any): ccui.LayoutParameter
  
      /**
       * Gets layout size of ccui.Widget.
       *
       * @returns {cc.Size}
       */
      getLayoutSize(): cc.Size
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftBoundary(): number
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftInParent(): number
  
      /**
       * Gets node by tag
       *
       * @param {Number} tag
       *
       * @returns {cc.Node}
       */
      getNodeByTag(tag: number): cc.Node
  
      /**
       * Returns all children.
       *
       * @returns {Array}
       */
      getNodes(): any[]
  
      /**
       * Gets the percent (x,y) of the widget
       *
       * @returns {cc.Point} The percent (x,y) of the widget in OpenGL coordinates
       */
      getPositionPercent(): cc.Point
  
      /**
       * Gets the position type of the widget
       *
       * @returns {Number} the position type of widget
       */
      getPositionType(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightBoundary(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightInParent(): number
  
      /**
       * Returns size of widget
       *
       * @returns {cc.Size}
       */
      getSize(): cc.Size
  
      /**
       * Returns size percent of ccui.Widget
       *
       * @returns {cc.Point}
       */
      getSizePercent(): cc.Point
  
      /**
       * Gets the size type of widget.
       *
       * @returns {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} that is widget's size type
       */
      getSizeType(): any
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopBoundary(): number
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopInParent(): number
  
      /**
       * Gets the position of touch began event.
       *
       * @returns {cc.Point}
       */
      getTouchBeganPosition(): cc.Point
  
      /**
       * Gets the touch end point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch end point.
       */
      getTouchEndPos(): cc.Point
  
      /**
       * Gets the position of touch end event
       *
       * @returns {cc.Point}
       */
      getTouchEndPosition(): cc.Point
  
      /**
       * Gets the touch move point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch move point.
       */
      getTouchMovePos(): cc.Point
  
      /**
       * Gets the position of touch moved event
       *
       * @returns {cc.Point}
       */
      getTouchMovePosition(): cc.Point
  
      /**
       * Gets the touch began point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch began point.
       */
      getTouchStartPos(): cc.Point
  
      /**
       * Gets the Virtual Renderer of widget.
       *
       * @returns {ccui.Widget}
       */
      getVirtualRenderer(): ccui.Widget
  
      /**
       * Gets the content size of widget. Content size is widget's texture size.
       */
      getVirtualRendererSize(): any
  
      /**
       * The direct parent when it's a widget also, otherwise equals null
       *
       * @returns {ccui.Widget|null}
       */
      getWidgetParent(): ccui.Widget | null
  
      /**
       * get widget type
       *
       * @returns {ccui.Widget.TYPE_WIDGET|ccui.Widget.TYPE_CONTAINER}
       */
      getWidgetType(): any
  
      /**
       * Gets world position of ccui.Widget.
       *
       * @returns {cc.Point} world position of ccui.Widget.
       */
      getWorldPosition(): cc.Point
  
      /**
       * Checks a point if is in widget's space
       *
       * @param {cc.Point} pt
       *
       * @returns {boolean} true if the point is in widget's space, false otherwise.
       */
      hitTest(pt: cc.Point): boolean
  
      /**
       * Ignore the widget size
       *
       * @param {Boolean} ignore true that widget will ignore it's size, use texture size, false otherwise. Default value is true.
       */
      ignoreContentAdaptWithSize(ignore: boolean): any
  
      /**
       * initializes state of widget. please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
       *
       * @returns {boolean}
       */
      init(): boolean
  
      /**
       * Sends the touch event to widget's parent, its subclass will override it, e.g. ccui.ScrollView, ccui.PageView
       *
       * @param {Number} eventType
       * @param {ccui.Widget} sender
       * @param {cc.Touch} touch
       */
      interceptTouchEvent(eventType: number, sender: ccui.Widget, touch: cc.Touch): any
  
      /**
       * Determines if the widget is bright
       *
       * @returns {boolean} true if the widget is bright, false if the widget is dark.
       */
      isBright(): boolean
  
      /**
       * returns whether clipping parent widget contains point.
       *
       * @param {cc.Point} pt location point
       *
       * @returns {Boolean}
       */
      isClippingParentContainsPoint(pt: cc.Point): boolean
  
      /**
       * Determines if the widget is enabled
       *
       * @returns {boolean}
       */
      isEnabled(): boolean
  
      /**
       * Returns the flag which indicates whether the widget is flipped horizontally or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleX(sprite.getScaleX() * -1);
       *
       * @returns {Boolean} true if the widget is flipped horizontally, false otherwise.
       */
      isFlippedX(): boolean
  
      /**
       * Return the flag which indicates whether the widget is flipped vertically or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleY(widget.getScaleY() * -1);
       *
       * @returns {Boolean} true if the widget is flipped vertically, false otherwise.
       */
      isFlippedY(): boolean
  
      /**
       * Determines if the widget is on focused
       *
       * @returns {boolean} whether the widget is focused or not
       */
      isFocused(): boolean
  
      /**
       * returns whether the widget could accept focus.
       *
       * @returns {boolean} true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      isFocusEnabled(): boolean
  
      /**
       * Determines if the widget is highlighted
       *
       * @returns {boolean} true if the widget is highlighted, false if the widget is not highlighted .
       */
      isHighlighted(): boolean
  
      /**
       * Gets whether ignore the content size (custom size)
       *
       * @returns {boolean} true that widget will ignore it's size, use texture size, false otherwise.
       */
      isIgnoreContentAdaptWithSize(): boolean
  
      /**
       * Returns whether enable layout component of a widget
       *
       * @returns {Boolean} true represent the widget use Layout Component, false represent the widget couldn't use Layout Component.
       */
      isLayoutComponentEnabled(): boolean
  
      /**
       * Return whether the widget is propagate touch events to its parents or not
       *
       * @returns v3.2{boolean}
       */
      isPropagateTouchEvents(): boolean
  
      /**
       * Return whether the widget is swallowing touch or not
       *
       * @returns v3.2{boolean}
       */
      isSwallowTouches(): boolean
  
      /**
       * Returns whether or not touch is enabled.
       *
       * @returns {boolean} true if the widget is touch enabled, false if the widget is touch disabled.
       */
      isTouchEnabled(): boolean
  
      /**
       *
       *
       * @returns v3.2{boolean} true represent the widget use Unify Size, false represent the widget couldn't use Unify Size
       */
      isUnifySizeEnabled(): boolean
  
      /**
       * Calls updateSizeAndPosition and its parent's onEnter
       */
      onEnter(): any
  
      /**
       * Calls unscheduleUpdate and its parent's onExit
       */
      onExit(): any
  
      /**
       * This method is called when a focus change event happens
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      onFocusChange(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * The callback of touch began event.
       * If the bounding box of ccui.Widget contains the touch point, it will do the following things:
       * 1. sets highlight state,
       * 2. sends event to parent widget by interceptTouchEvent
       * 3. calls the callback of touch began event.
       * 4. returns true,
       * otherwise returns false directly.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       *
       * @returns {boolean}
       */
      onTouchBegan(touch: cc.Touch, event: cc.Event): boolean
  
      /**
       * A call back function called when widget is selected, and on touch canceled.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchCancelled(touchPoint: cc.Point): any
  
      /**
       * The callback of touch end event
       * It sends event to parent widget by interceptTouchEvent,
       * calls the callback of touch end event (highlight= true) or touch canceled event (highlight= false).
       * sets the highlight state to false ,
       *
       * @param {any} touch
       * @param {any} event
       */
      onTouchEnded(touch: any, event: any): any
  
      /**
       * A call back function called when widget is selected, and on touch long clicked.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchLongClicked(touchPoint: cc.Point): any
  
      /**
       * The callback of touch moved event.
       * It sets the highlight state by touch, sends event to parent widget by interceptTouchEvent and calls the callback of touch moved event.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       */
      onTouchMoved(touch: cc.Touch, event: cc.Event): any
  
      /**
       * Removes all node
       */
      removeAllNodes(): any
  
      /**
       * Removes a node from ccui.Widget
       *
       * @param {cc.Node} node
       * @param {Boolean} cleanup
       */
      removeNode(node: cc.Node, cleanup: boolean): any
  
      /**
       * Removes node by tag
       *
       * @param {Number} tag
       * @param {Boolean} cleanup
       */
      removeNodeByTag(tag: number, cleanup: boolean): any
  
      /**
       * when a widget calls this method, it will get focus immediately.
       */
      requestFocus(): any
  
      /**
       * Sets whether the widget is bright. The default value is true, a widget is default to bright
       *
       * @param {Boolean} bright true if the widget is bright, false if the widget is dark.
       */
      setBright(bright: boolean): any
  
      /**
       * To set the bright style of ccui.Widget.
       *
       * @param {Number} style BRIGHT_NORMAL the widget is normal state, BRIGHT_HIGHLIGHT the widget is height light state.
       */
      setBrightStyle(style: number): any
  
      /**
       * Sets callback name to widget.
       *
       * @param {String} callbackName
       */
      setCallbackName(callbackName: string): any
  
      /**
       * Sets callback type to widget
       *
       * @param {String} callbackType
       */
      setCallbackType(callbackType: string): any
  
      /**
       * Sets _customSize of ccui.Widget, if ignoreSize is true, the content size is its renderer's contentSize, otherwise the content size is parameter.
       * and updates size percent by parent content size. At last, updates its children's size and position.
       *
       * @param {cc.Size|Number} contentSize content size or width of content size
       * @param {Number} height
       */
      setContentSize(contentSize: cc.Size | number, height: number): any
  
      /**
       * Sets whether the widget is enabled
       * true if the widget is enabled, widget may be touched , false if the widget is disabled, widget cannot be touched.
       * The default value is true, a widget is default to enabled
       *
       * @param {Boolean} enabled
       */
      setEnabled(enabled: boolean): any
  
      /**
       * Sets whether the widget should be flipped horizontally or not.
       *
       * @param {Boolean} flipX true if the widget should be flipped horizontally, false otherwise.
       */
      setFlippedX(flipX: boolean): any
  
      /**
       * Sets whether the widget should be flipped vertically or not.
       *
       * @param {Boolean} flipY true if the widget should be flipped vertically, false otherwise.
       */
      setFlippedY(flipY: boolean): any
  
      /**
       * Sets whether the widget is on focused
       * The default value is false, a widget is default to not on focused
       *
       * @param {boolean} focus pass true to let the widget get focus or pass false to let the widget lose focus
       */
      setFocused(focus: boolean): any
  
      /**
       * sets whether the widget could accept focus.
       *
       * @param {Boolean} enable true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      setFocusEnabled(enable: boolean): any
  
      /**
       * Sets whether the widget is highlighted. The default value is false, a widget is default to not highlighted
       *
       * @param {any} highlight true if the widget is highlighted, false if the widget is not highlighted.
       */
      setHighlighted(highlight: any): any
  
      /**
       * Whether enable layout component of a widget
       *
       * @param {Boolean} enable enable layout Component of a widget
       */
      setLayoutComponentEnabled(enable: boolean): any
  
      /**
       * Gets LayoutParameter of widget.
       *
       * @param {ccui.LayoutParameter} parameter
       */
      setLayoutParameter(parameter: ccui.LayoutParameter): any
  
      /**
       * Changes the position (x,y) of the widget .
       * The original point (0,0) is at the left-bottom corner of screen.
       *
       * @param {cc.Point|Number} pos
       * @param {Number} posY
       */
      setPosition(pos: cc.Point | number, posY: number): any
  
      /**
       * Changes the position (x,y) of the widget
       *
       * @param {cc.Point} percent
       */
      setPositionPercent(percent: cc.Point): any
  
      /**
       * Changes the position type of the widget
       *
       * @param {Number} type the position type of widget
       */
      setPositionType(type: number): any
  
      /**
       * Allow widget touch events to propagate to its parents. Set false will disable propagation
       *
       * @param {Boolean} isPropagate
       */
      setPropagateTouchEvents(isPropagate: boolean): any
  
      /**
       * Changes the size that is widget's size
       *
       * @param {cc.Size} size that is widget's size
       */
      setSize(size: cc.Size): any
  
      /**
       * Changes the percent that is widget's percent size
       *
       * @param {cc.Point} percent that is widget's percent size, width and height value from 0 to 1.
       */
      setSizePercent(percent: cc.Point): any
  
      /**
       * TEXTURE_RES_TYPE
       * Changes the size type of widget.
       *
       * @param {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} type that is widget's size type
       */
      setSizeType(type: any): any
  
      /**
       * Specify widget to swallow touches or not
       *
       * @param {Boolean} swallow
       */
      setSwallowTouches(swallow: boolean): any
  
      /**
       * Sets whether the widget is touch enabled. The default value is false, a widget is default to touch disabled
       *
       * @param {Boolean} enable true if the widget is touch enabled, false if the widget is touch disabled.
       */
      setTouchEnabled(enable: boolean): any
  
      /**
       *
       *
       * @param {Boolean} enable enable Unify Size of a widget
       */
      setUnifySizeEnabled(enable: boolean): any
  
      /**
       * updates its size by size type and its position by position type.
       *
       * @param {cc.Size} parentSize parent size
       */
      updateSizeAndPosition(parentSize: cc.Size): any
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    }
  }
  
  declare namespace ccui {
    interface IImageView extends ccui.IWidget {
  
  
      getCapInsets(): cc.Rect
  
      isScale9Enabled(): boolean
  
      loadTexture(fileName: string, texType: any): any
  
      setCapInsets(capInsets: cc.Rect): any
  
      setScale9Enabled(able: boolean): any
  
      setTextureRect(rect: cc.Rect): any
    }
  
    interface IImageViewOverrides {
  
      getDescription(): string
  
      getVirtualRenderer(): cc.Node
  
      getVirtualRendererSize(): cc.Size
  
      ignoreContentAdaptWithSize(ignore: boolean): any
  
      setContentSize(contentSize: cc.Size | number, height: number): any
    }
  
  
  
    class ImageView implements IImageView, IImageViewOverrides {
  
      /**
       * allocates and initializes a ccui.ImageView.
       * Constructor of ccui.ImageView, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
       *
       * @param {String} imageFileName
       * @param {Number} texType
       */
      constructor(imageFileName: string, texType: number)
  
  
  
      /**
       * The zOrder value of ccui.ImageView's renderer.
       */
      static RENDERER_ZORDER: any
  
      /**
       * Allocates and initializes a UIImageView.
       *
       * @param {string} imageFileName
       * @param {Number} texType
       *
       * @returns {ccui.ImageView}
       */
      static create(imageFileName: string, texType: number): ccui.ImageView
  
  
      /**
       * Returns the "class name" of ccui.ImageView.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Returns the renderer of ccui.ImageView
       *
       * @returns {cc.Node}
       */
      getVirtualRenderer(): cc.Node
  
      /**
       * Returns the image's texture size.
       *
       * @returns {cc.Size}
       */
      getVirtualRendererSize(): cc.Size
  
      /**
       * Ignore the imageView's custom size, true that imageView will ignore it's custom size, use renderer's content size, false otherwise.
       *
       * @param {Boolean} ignore
       */
      ignoreContentAdaptWithSize(ignore: boolean): any
  
      /**
       * Sets _customSize of ccui.Widget, if ignoreSize is true, the content size is its renderer's contentSize, otherwise the content size is parameter.
       * and updates size percent by parent content size. At last, updates its children's size and position.
       *
       * @param {cc.Size|Number} contentSize content size or width of content size
       * @param {Number} height
       */
      setContentSize(contentSize: cc.Size | number, height: number): any
  
  
  
      /**
       * Returns cap insets of ccui.ImageView.
       *
       * @returns {cc.Rect}
       */
      getCapInsets(): cc.Rect
  
      /**
       * Returns ImageView is using scale9 renderer or not.
       *
       * @returns {Boolean}
       */
      isScale9Enabled(): boolean
  
      /**
       * Loads textures for button.
       *
       * @param {String} fileName
       * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
       */
      loadTexture(fileName: string, texType: any): any
  
      /**
       * Sets capinsets for button, if button is using scale9 renderer.
       *
       * @param {cc.Rect} capInsets
       */
      setCapInsets(capInsets: cc.Rect): any
  
      /**
       * Sets if button is using scale9 renderer.
       *
       * @param {Boolean} able
       */
      setScale9Enabled(able: boolean): any
  
      /**
       * Sets texture rect
       *
       * @param {cc.Rect} rect
       */
      setTextureRect(rect: cc.Rect): any
  
  
      /**
       * - The action tag of the widget
       */
      actionTag: number
  
      /**
       * - Indicate whether the widget is bright
       */
      bright: boolean
  
      /**
       * - Indicate whether the widget is enabled
       */
      enabled: boolean
  
      /**
       * - Indicate whether the widget is focused
       */
      focused: boolean
  
      /**
       * - Height in percentage of parent height
       */
      heightPercent: number
  
      /**
       * - The name of the widget
       */
      name: string
  
      /**
       * When a widget lose/get focus, this method will be called. Be Caution when you provide your own version,
       * you must call widget.setFocused(true/false) to change the focus state of the current focused widget;
       */
      onFocusChanged: any
  
      /**
       * use this function to manually specify the next focused widget regards to each direction
       */
      onNextFocusedWidget: any
  
      /**
       * - The size type of the widget
       */
      sizeType: any
  
      /**
       * - Indicate whether touch events are enabled
       */
      touchEnabled: boolean
  
      /**
       * - Indicate whether the update function is scheduled
       */
      updateEnabled: boolean
  
      /**
       * - <@readonly> The direct parent when it's a widget also, otherwise equals null
       */
      widgetParent: ccui.Widget
  
      /**
       * - <@readonly> The type of the widget
       */
      widgetType: any
  
      /**
       * - Width in percentage of parent width
       */
      widthPercent: number
  
      /**
       * - Position x in percentage of width
       */
      xPercent: number
  
      /**
       * - Position y in percentage of height
       */
      yPercent: number
  
      /**
       * Set a event handler to the widget in order to use cocostudio editor and framework
       *
       * @param {function} callback
       */
      addCCSEventListener(callback: Function): any
  
      /**
       * Adds a node for widget (this function is deleted in -x)
       *
       * @param {cc.Node} node
       * @param {Number} zOrder
       * @param {Number} tag
       */
      addNode(node: cc.Node, zOrder: number, tag: number): any
  
      /**
       * Sets the touch event target/selector of the ccui.Widget
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addTouchEventListener(selector: Function, target: object): any
  
      /**
       * Calls the checkChildInfo of widget's parent, its subclass will override it.
       *
       * @param {number} handleState
       * @param {ccui.Widget} sender
       * @param {cc.Point} touchPoint
       */
      checkChildInfo(handleState: number, sender: ccui.Widget, touchPoint: cc.Point): any
  
      /**
       * Checks a point if in parent's area.
       *
       * @param {cc.Point} pt
       *
       * @returns {Boolean}
       */
      clippingParentAreaContainPoint(pt: cc.Point): boolean
  
      /**
       * Clones a new widget.
       *
       * @returns {ccui.Widget}
       */
      clone(): ccui.Widget
  
      /**
       * A call back function when widget lost of focus.
       */
      didNotSelectSelf(): any
  
      /**
       * Dispatch a EventFocus through a EventDispatcher
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      dispatchFocusEvent(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * When a widget is in a layout, you could call this method to get the next focused widget within a specified direction.
       * If the widget is not in a layout, it will return itself
       *
       * @param {any} direction the direction to look for the next focused widget in a layout
       * @param {any} current the current focused widget
       */
      findNextFocusedWidget(direction: any, current: any): any
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomBoundary(): number
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomInParent(): number
  
      /**
       * Gets callback name of widget
       *
       * @returns v3.3{String|Null}
       */
      getCallbackName(): string | null
  
      /**
       * Gets callback type of widget
       *
       * @returns v3.3{String|null}
       */
      getCallbackType(): string | null
  
      /**
       * no matter what widget object you call this method on , it will return you the exact one focused widget
       */
      getCurrentFocusedWidget(): any
  
      /**
       * Get custom size of ccui.Widget
       *
       * @returns {cc.Size}
       */
      getCustomSize(): cc.Size
  
      /**
       * Returns the "class name" of widget.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Gets layout parameter
       *
       * @param {ccui.LayoutParameter.NONE|ccui.LayoutParameter.LINEAR|ccui.LayoutParameter.RELATIVE} type
       *
       * @returns {ccui.LayoutParameter}
       */
      getLayoutParameter(type: any): ccui.LayoutParameter
  
      /**
       * Gets layout size of ccui.Widget.
       *
       * @returns {cc.Size}
       */
      getLayoutSize(): cc.Size
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftBoundary(): number
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftInParent(): number
  
      /**
       * Gets node by tag
       *
       * @param {Number} tag
       *
       * @returns {cc.Node}
       */
      getNodeByTag(tag: number): cc.Node
  
      /**
       * Returns all children.
       *
       * @returns {Array}
       */
      getNodes(): any[]
  
      /**
       * Gets the percent (x,y) of the widget
       *
       * @returns {cc.Point} The percent (x,y) of the widget in OpenGL coordinates
       */
      getPositionPercent(): cc.Point
  
      /**
       * Gets the position type of the widget
       *
       * @returns {Number} the position type of widget
       */
      getPositionType(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightBoundary(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightInParent(): number
  
      /**
       * Returns size of widget
       *
       * @returns {cc.Size}
       */
      getSize(): cc.Size
  
      /**
       * Returns size percent of ccui.Widget
       *
       * @returns {cc.Point}
       */
      getSizePercent(): cc.Point
  
      /**
       * Gets the size type of widget.
       *
       * @returns {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} that is widget's size type
       */
      getSizeType(): any
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopBoundary(): number
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopInParent(): number
  
      /**
       * Gets the position of touch began event.
       *
       * @returns {cc.Point}
       */
      getTouchBeganPosition(): cc.Point
  
      /**
       * Gets the touch end point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch end point.
       */
      getTouchEndPos(): cc.Point
  
      /**
       * Gets the position of touch end event
       *
       * @returns {cc.Point}
       */
      getTouchEndPosition(): cc.Point
  
      /**
       * Gets the touch move point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch move point.
       */
      getTouchMovePos(): cc.Point
  
      /**
       * Gets the position of touch moved event
       *
       * @returns {cc.Point}
       */
      getTouchMovePosition(): cc.Point
  
      /**
       * Gets the touch began point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch began point.
       */
      getTouchStartPos(): cc.Point
  
      /**
       * Gets the Virtual Renderer of widget.
       *
       * @returns {ccui.Widget}
       */
      getVirtualRenderer(): ccui.Widget
  
      /**
       * Gets the content size of widget. Content size is widget's texture size.
       */
      getVirtualRendererSize(): any
  
      /**
       * The direct parent when it's a widget also, otherwise equals null
       *
       * @returns {ccui.Widget|null}
       */
      getWidgetParent(): ccui.Widget | null
  
      /**
       * get widget type
       *
       * @returns {ccui.Widget.TYPE_WIDGET|ccui.Widget.TYPE_CONTAINER}
       */
      getWidgetType(): any
  
      /**
       * Gets world position of ccui.Widget.
       *
       * @returns {cc.Point} world position of ccui.Widget.
       */
      getWorldPosition(): cc.Point
  
      /**
       * Checks a point if is in widget's space
       *
       * @param {cc.Point} pt
       *
       * @returns {boolean} true if the point is in widget's space, false otherwise.
       */
      hitTest(pt: cc.Point): boolean
  
      /**
       * Ignore the widget size
       *
       * @param {Boolean} ignore true that widget will ignore it's size, use texture size, false otherwise. Default value is true.
       */
      ignoreContentAdaptWithSize(ignore: boolean): any
  
      /**
       * initializes state of widget. please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
       *
       * @returns {boolean}
       */
      init(): boolean
  
      /**
       * Sends the touch event to widget's parent, its subclass will override it, e.g. ccui.ScrollView, ccui.PageView
       *
       * @param {Number} eventType
       * @param {ccui.Widget} sender
       * @param {cc.Touch} touch
       */
      interceptTouchEvent(eventType: number, sender: ccui.Widget, touch: cc.Touch): any
  
      /**
       * Determines if the widget is bright
       *
       * @returns {boolean} true if the widget is bright, false if the widget is dark.
       */
      isBright(): boolean
  
      /**
       * returns whether clipping parent widget contains point.
       *
       * @param {cc.Point} pt location point
       *
       * @returns {Boolean}
       */
      isClippingParentContainsPoint(pt: cc.Point): boolean
  
      /**
       * Determines if the widget is enabled
       *
       * @returns {boolean}
       */
      isEnabled(): boolean
  
      /**
       * Returns the flag which indicates whether the widget is flipped horizontally or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleX(sprite.getScaleX() * -1);
       *
       * @returns {Boolean} true if the widget is flipped horizontally, false otherwise.
       */
      isFlippedX(): boolean
  
      /**
       * Return the flag which indicates whether the widget is flipped vertically or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleY(widget.getScaleY() * -1);
       *
       * @returns {Boolean} true if the widget is flipped vertically, false otherwise.
       */
      isFlippedY(): boolean
  
      /**
       * Determines if the widget is on focused
       *
       * @returns {boolean} whether the widget is focused or not
       */
      isFocused(): boolean
  
      /**
       * returns whether the widget could accept focus.
       *
       * @returns {boolean} true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      isFocusEnabled(): boolean
  
      /**
       * Determines if the widget is highlighted
       *
       * @returns {boolean} true if the widget is highlighted, false if the widget is not highlighted .
       */
      isHighlighted(): boolean
  
      /**
       * Gets whether ignore the content size (custom size)
       *
       * @returns {boolean} true that widget will ignore it's size, use texture size, false otherwise.
       */
      isIgnoreContentAdaptWithSize(): boolean
  
      /**
       * Returns whether enable layout component of a widget
       *
       * @returns {Boolean} true represent the widget use Layout Component, false represent the widget couldn't use Layout Component.
       */
      isLayoutComponentEnabled(): boolean
  
      /**
       * Return whether the widget is propagate touch events to its parents or not
       *
       * @returns v3.2{boolean}
       */
      isPropagateTouchEvents(): boolean
  
      /**
       * Return whether the widget is swallowing touch or not
       *
       * @returns v3.2{boolean}
       */
      isSwallowTouches(): boolean
  
      /**
       * Returns whether or not touch is enabled.
       *
       * @returns {boolean} true if the widget is touch enabled, false if the widget is touch disabled.
       */
      isTouchEnabled(): boolean
  
      /**
       *
       *
       * @returns v3.2{boolean} true represent the widget use Unify Size, false represent the widget couldn't use Unify Size
       */
      isUnifySizeEnabled(): boolean
  
      /**
       * Calls updateSizeAndPosition and its parent's onEnter
       */
      onEnter(): any
  
      /**
       * Calls unscheduleUpdate and its parent's onExit
       */
      onExit(): any
  
      /**
       * This method is called when a focus change event happens
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      onFocusChange(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * The callback of touch began event.
       * If the bounding box of ccui.Widget contains the touch point, it will do the following things:
       * 1. sets highlight state,
       * 2. sends event to parent widget by interceptTouchEvent
       * 3. calls the callback of touch began event.
       * 4. returns true,
       * otherwise returns false directly.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       *
       * @returns {boolean}
       */
      onTouchBegan(touch: cc.Touch, event: cc.Event): boolean
  
      /**
       * A call back function called when widget is selected, and on touch canceled.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchCancelled(touchPoint: cc.Point): any
  
      /**
       * The callback of touch end event
       * It sends event to parent widget by interceptTouchEvent,
       * calls the callback of touch end event (highlight= true) or touch canceled event (highlight= false).
       * sets the highlight state to false ,
       *
       * @param {any} touch
       * @param {any} event
       */
      onTouchEnded(touch: any, event: any): any
  
      /**
       * A call back function called when widget is selected, and on touch long clicked.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchLongClicked(touchPoint: cc.Point): any
  
      /**
       * The callback of touch moved event.
       * It sets the highlight state by touch, sends event to parent widget by interceptTouchEvent and calls the callback of touch moved event.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       */
      onTouchMoved(touch: cc.Touch, event: cc.Event): any
  
      /**
       * Removes all node
       */
      removeAllNodes(): any
  
      /**
       * Removes a node from ccui.Widget
       *
       * @param {cc.Node} node
       * @param {Boolean} cleanup
       */
      removeNode(node: cc.Node, cleanup: boolean): any
  
      /**
       * Removes node by tag
       *
       * @param {Number} tag
       * @param {Boolean} cleanup
       */
      removeNodeByTag(tag: number, cleanup: boolean): any
  
      /**
       * when a widget calls this method, it will get focus immediately.
       */
      requestFocus(): any
  
      /**
       * Sets whether the widget is bright. The default value is true, a widget is default to bright
       *
       * @param {Boolean} bright true if the widget is bright, false if the widget is dark.
       */
      setBright(bright: boolean): any
  
      /**
       * To set the bright style of ccui.Widget.
       *
       * @param {Number} style BRIGHT_NORMAL the widget is normal state, BRIGHT_HIGHLIGHT the widget is height light state.
       */
      setBrightStyle(style: number): any
  
      /**
       * Sets callback name to widget.
       *
       * @param {String} callbackName
       */
      setCallbackName(callbackName: string): any
  
      /**
       * Sets callback type to widget
       *
       * @param {String} callbackType
       */
      setCallbackType(callbackType: string): any
  
      /**
       * Sets _customSize of ccui.Widget, if ignoreSize is true, the content size is its renderer's contentSize, otherwise the content size is parameter.
       * and updates size percent by parent content size. At last, updates its children's size and position.
       *
       * @param {cc.Size|Number} contentSize content size or width of content size
       * @param {Number} height
       */
      setContentSize(contentSize: cc.Size | number, height: number): any
  
      /**
       * Sets whether the widget is enabled
       * true if the widget is enabled, widget may be touched , false if the widget is disabled, widget cannot be touched.
       * The default value is true, a widget is default to enabled
       *
       * @param {Boolean} enabled
       */
      setEnabled(enabled: boolean): any
  
      /**
       * Sets whether the widget should be flipped horizontally or not.
       *
       * @param {Boolean} flipX true if the widget should be flipped horizontally, false otherwise.
       */
      setFlippedX(flipX: boolean): any
  
      /**
       * Sets whether the widget should be flipped vertically or not.
       *
       * @param {Boolean} flipY true if the widget should be flipped vertically, false otherwise.
       */
      setFlippedY(flipY: boolean): any
  
      /**
       * Sets whether the widget is on focused
       * The default value is false, a widget is default to not on focused
       *
       * @param {boolean} focus pass true to let the widget get focus or pass false to let the widget lose focus
       */
      setFocused(focus: boolean): any
  
      /**
       * sets whether the widget could accept focus.
       *
       * @param {Boolean} enable true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      setFocusEnabled(enable: boolean): any
  
      /**
       * Sets whether the widget is highlighted. The default value is false, a widget is default to not highlighted
       *
       * @param {any} highlight true if the widget is highlighted, false if the widget is not highlighted.
       */
      setHighlighted(highlight: any): any
  
      /**
       * Whether enable layout component of a widget
       *
       * @param {Boolean} enable enable layout Component of a widget
       */
      setLayoutComponentEnabled(enable: boolean): any
  
      /**
       * Gets LayoutParameter of widget.
       *
       * @param {ccui.LayoutParameter} parameter
       */
      setLayoutParameter(parameter: ccui.LayoutParameter): any
  
      /**
       * Changes the position (x,y) of the widget .
       * The original point (0,0) is at the left-bottom corner of screen.
       *
       * @param {cc.Point|Number} pos
       * @param {Number} posY
       */
      setPosition(pos: cc.Point | number, posY: number): any
  
      /**
       * Changes the position (x,y) of the widget
       *
       * @param {cc.Point} percent
       */
      setPositionPercent(percent: cc.Point): any
  
      /**
       * Changes the position type of the widget
       *
       * @param {Number} type the position type of widget
       */
      setPositionType(type: number): any
  
      /**
       * Allow widget touch events to propagate to its parents. Set false will disable propagation
       *
       * @param {Boolean} isPropagate
       */
      setPropagateTouchEvents(isPropagate: boolean): any
  
      /**
       * Changes the size that is widget's size
       *
       * @param {cc.Size} size that is widget's size
       */
      setSize(size: cc.Size): any
  
      /**
       * Changes the percent that is widget's percent size
       *
       * @param {cc.Point} percent that is widget's percent size, width and height value from 0 to 1.
       */
      setSizePercent(percent: cc.Point): any
  
      /**
       * TEXTURE_RES_TYPE
       * Changes the size type of widget.
       *
       * @param {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} type that is widget's size type
       */
      setSizeType(type: any): any
  
      /**
       * Specify widget to swallow touches or not
       *
       * @param {Boolean} swallow
       */
      setSwallowTouches(swallow: boolean): any
  
      /**
       * Sets whether the widget is touch enabled. The default value is false, a widget is default to touch disabled
       *
       * @param {Boolean} enable true if the widget is touch enabled, false if the widget is touch disabled.
       */
      setTouchEnabled(enable: boolean): any
  
      /**
       *
       *
       * @param {Boolean} enable enable Unify Size of a widget
       */
      setUnifySizeEnabled(enable: boolean): any
  
      /**
       * updates its size by size type and its position by position type.
       *
       * @param {cc.Size} parentSize parent size
       */
      updateSizeAndPosition(parentSize: cc.Size): any
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    }
  }
  
  declare namespace ccui {
    interface ILabelBMFont extends ccui.IWidget {
  
      string: string
  
    }
  
    interface ILabelBMFontOverrides {
  
    }
  
  
  
    class LabelBMFont implements ILabelBMFont, ILabelBMFontOverrides {
  
      /**
       * The TextBMFont control of Cocos UI, it rendered by LabelBMFont.
       */
      constructor()
  
  
  
  
  
  
  
  
      /**
       * - Content string of the label
       */
      string: string
  
  
  
      /**
       * - The action tag of the widget
       */
      actionTag: number
  
      /**
       * - Indicate whether the widget is bright
       */
      bright: boolean
  
      /**
       * - Indicate whether the widget is enabled
       */
      enabled: boolean
  
      /**
       * - Indicate whether the widget is focused
       */
      focused: boolean
  
      /**
       * - Height in percentage of parent height
       */
      heightPercent: number
  
      /**
       * - The name of the widget
       */
      name: string
  
      /**
       * When a widget lose/get focus, this method will be called. Be Caution when you provide your own version,
       * you must call widget.setFocused(true/false) to change the focus state of the current focused widget;
       */
      onFocusChanged: any
  
      /**
       * use this function to manually specify the next focused widget regards to each direction
       */
      onNextFocusedWidget: any
  
      /**
       * - The size type of the widget
       */
      sizeType: any
  
      /**
       * - Indicate whether touch events are enabled
       */
      touchEnabled: boolean
  
      /**
       * - Indicate whether the update function is scheduled
       */
      updateEnabled: boolean
  
      /**
       * - <@readonly> The direct parent when it's a widget also, otherwise equals null
       */
      widgetParent: ccui.Widget
  
      /**
       * - <@readonly> The type of the widget
       */
      widgetType: any
  
      /**
       * - Width in percentage of parent width
       */
      widthPercent: number
  
      /**
       * - Position x in percentage of width
       */
      xPercent: number
  
      /**
       * - Position y in percentage of height
       */
      yPercent: number
  
      /**
       * Set a event handler to the widget in order to use cocostudio editor and framework
       *
       * @param {function} callback
       */
      addCCSEventListener(callback: Function): any
  
      /**
       * Adds a node for widget (this function is deleted in -x)
       *
       * @param {cc.Node} node
       * @param {Number} zOrder
       * @param {Number} tag
       */
      addNode(node: cc.Node, zOrder: number, tag: number): any
  
      /**
       * Sets the touch event target/selector of the ccui.Widget
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addTouchEventListener(selector: Function, target: object): any
  
      /**
       * Calls the checkChildInfo of widget's parent, its subclass will override it.
       *
       * @param {number} handleState
       * @param {ccui.Widget} sender
       * @param {cc.Point} touchPoint
       */
      checkChildInfo(handleState: number, sender: ccui.Widget, touchPoint: cc.Point): any
  
      /**
       * Checks a point if in parent's area.
       *
       * @param {cc.Point} pt
       *
       * @returns {Boolean}
       */
      clippingParentAreaContainPoint(pt: cc.Point): boolean
  
      /**
       * Clones a new widget.
       *
       * @returns {ccui.Widget}
       */
      clone(): ccui.Widget
  
      /**
       * A call back function when widget lost of focus.
       */
      didNotSelectSelf(): any
  
      /**
       * Dispatch a EventFocus through a EventDispatcher
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      dispatchFocusEvent(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * When a widget is in a layout, you could call this method to get the next focused widget within a specified direction.
       * If the widget is not in a layout, it will return itself
       *
       * @param {any} direction the direction to look for the next focused widget in a layout
       * @param {any} current the current focused widget
       */
      findNextFocusedWidget(direction: any, current: any): any
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomBoundary(): number
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomInParent(): number
  
      /**
       * Gets callback name of widget
       *
       * @returns v3.3{String|Null}
       */
      getCallbackName(): string | null
  
      /**
       * Gets callback type of widget
       *
       * @returns v3.3{String|null}
       */
      getCallbackType(): string | null
  
      /**
       * no matter what widget object you call this method on , it will return you the exact one focused widget
       */
      getCurrentFocusedWidget(): any
  
      /**
       * Get custom size of ccui.Widget
       *
       * @returns {cc.Size}
       */
      getCustomSize(): cc.Size
  
      /**
       * Returns the "class name" of widget.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Gets layout parameter
       *
       * @param {ccui.LayoutParameter.NONE|ccui.LayoutParameter.LINEAR|ccui.LayoutParameter.RELATIVE} type
       *
       * @returns {ccui.LayoutParameter}
       */
      getLayoutParameter(type: any): ccui.LayoutParameter
  
      /**
       * Gets layout size of ccui.Widget.
       *
       * @returns {cc.Size}
       */
      getLayoutSize(): cc.Size
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftBoundary(): number
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftInParent(): number
  
      /**
       * Gets node by tag
       *
       * @param {Number} tag
       *
       * @returns {cc.Node}
       */
      getNodeByTag(tag: number): cc.Node
  
      /**
       * Returns all children.
       *
       * @returns {Array}
       */
      getNodes(): any[]
  
      /**
       * Gets the percent (x,y) of the widget
       *
       * @returns {cc.Point} The percent (x,y) of the widget in OpenGL coordinates
       */
      getPositionPercent(): cc.Point
  
      /**
       * Gets the position type of the widget
       *
       * @returns {Number} the position type of widget
       */
      getPositionType(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightBoundary(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightInParent(): number
  
      /**
       * Returns size of widget
       *
       * @returns {cc.Size}
       */
      getSize(): cc.Size
  
      /**
       * Returns size percent of ccui.Widget
       *
       * @returns {cc.Point}
       */
      getSizePercent(): cc.Point
  
      /**
       * Gets the size type of widget.
       *
       * @returns {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} that is widget's size type
       */
      getSizeType(): any
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopBoundary(): number
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopInParent(): number
  
      /**
       * Gets the position of touch began event.
       *
       * @returns {cc.Point}
       */
      getTouchBeganPosition(): cc.Point
  
      /**
       * Gets the touch end point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch end point.
       */
      getTouchEndPos(): cc.Point
  
      /**
       * Gets the position of touch end event
       *
       * @returns {cc.Point}
       */
      getTouchEndPosition(): cc.Point
  
      /**
       * Gets the touch move point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch move point.
       */
      getTouchMovePos(): cc.Point
  
      /**
       * Gets the position of touch moved event
       *
       * @returns {cc.Point}
       */
      getTouchMovePosition(): cc.Point
  
      /**
       * Gets the touch began point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch began point.
       */
      getTouchStartPos(): cc.Point
  
      /**
       * Gets the Virtual Renderer of widget.
       *
       * @returns {ccui.Widget}
       */
      getVirtualRenderer(): ccui.Widget
  
      /**
       * Gets the content size of widget. Content size is widget's texture size.
       */
      getVirtualRendererSize(): any
  
      /**
       * The direct parent when it's a widget also, otherwise equals null
       *
       * @returns {ccui.Widget|null}
       */
      getWidgetParent(): ccui.Widget | null
  
      /**
       * get widget type
       *
       * @returns {ccui.Widget.TYPE_WIDGET|ccui.Widget.TYPE_CONTAINER}
       */
      getWidgetType(): any
  
      /**
       * Gets world position of ccui.Widget.
       *
       * @returns {cc.Point} world position of ccui.Widget.
       */
      getWorldPosition(): cc.Point
  
      /**
       * Checks a point if is in widget's space
       *
       * @param {cc.Point} pt
       *
       * @returns {boolean} true if the point is in widget's space, false otherwise.
       */
      hitTest(pt: cc.Point): boolean
  
      /**
       * Ignore the widget size
       *
       * @param {Boolean} ignore true that widget will ignore it's size, use texture size, false otherwise. Default value is true.
       */
      ignoreContentAdaptWithSize(ignore: boolean): any
  
      /**
       * initializes state of widget. please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
       *
       * @returns {boolean}
       */
      init(): boolean
  
      /**
       * Sends the touch event to widget's parent, its subclass will override it, e.g. ccui.ScrollView, ccui.PageView
       *
       * @param {Number} eventType
       * @param {ccui.Widget} sender
       * @param {cc.Touch} touch
       */
      interceptTouchEvent(eventType: number, sender: ccui.Widget, touch: cc.Touch): any
  
      /**
       * Determines if the widget is bright
       *
       * @returns {boolean} true if the widget is bright, false if the widget is dark.
       */
      isBright(): boolean
  
      /**
       * returns whether clipping parent widget contains point.
       *
       * @param {cc.Point} pt location point
       *
       * @returns {Boolean}
       */
      isClippingParentContainsPoint(pt: cc.Point): boolean
  
      /**
       * Determines if the widget is enabled
       *
       * @returns {boolean}
       */
      isEnabled(): boolean
  
      /**
       * Returns the flag which indicates whether the widget is flipped horizontally or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleX(sprite.getScaleX() * -1);
       *
       * @returns {Boolean} true if the widget is flipped horizontally, false otherwise.
       */
      isFlippedX(): boolean
  
      /**
       * Return the flag which indicates whether the widget is flipped vertically or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleY(widget.getScaleY() * -1);
       *
       * @returns {Boolean} true if the widget is flipped vertically, false otherwise.
       */
      isFlippedY(): boolean
  
      /**
       * Determines if the widget is on focused
       *
       * @returns {boolean} whether the widget is focused or not
       */
      isFocused(): boolean
  
      /**
       * returns whether the widget could accept focus.
       *
       * @returns {boolean} true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      isFocusEnabled(): boolean
  
      /**
       * Determines if the widget is highlighted
       *
       * @returns {boolean} true if the widget is highlighted, false if the widget is not highlighted .
       */
      isHighlighted(): boolean
  
      /**
       * Gets whether ignore the content size (custom size)
       *
       * @returns {boolean} true that widget will ignore it's size, use texture size, false otherwise.
       */
      isIgnoreContentAdaptWithSize(): boolean
  
      /**
       * Returns whether enable layout component of a widget
       *
       * @returns {Boolean} true represent the widget use Layout Component, false represent the widget couldn't use Layout Component.
       */
      isLayoutComponentEnabled(): boolean
  
      /**
       * Return whether the widget is propagate touch events to its parents or not
       *
       * @returns v3.2{boolean}
       */
      isPropagateTouchEvents(): boolean
  
      /**
       * Return whether the widget is swallowing touch or not
       *
       * @returns v3.2{boolean}
       */
      isSwallowTouches(): boolean
  
      /**
       * Returns whether or not touch is enabled.
       *
       * @returns {boolean} true if the widget is touch enabled, false if the widget is touch disabled.
       */
      isTouchEnabled(): boolean
  
      /**
       *
       *
       * @returns v3.2{boolean} true represent the widget use Unify Size, false represent the widget couldn't use Unify Size
       */
      isUnifySizeEnabled(): boolean
  
      /**
       * Calls updateSizeAndPosition and its parent's onEnter
       */
      onEnter(): any
  
      /**
       * Calls unscheduleUpdate and its parent's onExit
       */
      onExit(): any
  
      /**
       * This method is called when a focus change event happens
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      onFocusChange(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * The callback of touch began event.
       * If the bounding box of ccui.Widget contains the touch point, it will do the following things:
       * 1. sets highlight state,
       * 2. sends event to parent widget by interceptTouchEvent
       * 3. calls the callback of touch began event.
       * 4. returns true,
       * otherwise returns false directly.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       *
       * @returns {boolean}
       */
      onTouchBegan(touch: cc.Touch, event: cc.Event): boolean
  
      /**
       * A call back function called when widget is selected, and on touch canceled.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchCancelled(touchPoint: cc.Point): any
  
      /**
       * The callback of touch end event
       * It sends event to parent widget by interceptTouchEvent,
       * calls the callback of touch end event (highlight= true) or touch canceled event (highlight= false).
       * sets the highlight state to false ,
       *
       * @param {any} touch
       * @param {any} event
       */
      onTouchEnded(touch: any, event: any): any
  
      /**
       * A call back function called when widget is selected, and on touch long clicked.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchLongClicked(touchPoint: cc.Point): any
  
      /**
       * The callback of touch moved event.
       * It sets the highlight state by touch, sends event to parent widget by interceptTouchEvent and calls the callback of touch moved event.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       */
      onTouchMoved(touch: cc.Touch, event: cc.Event): any
  
      /**
       * Removes all node
       */
      removeAllNodes(): any
  
      /**
       * Removes a node from ccui.Widget
       *
       * @param {cc.Node} node
       * @param {Boolean} cleanup
       */
      removeNode(node: cc.Node, cleanup: boolean): any
  
      /**
       * Removes node by tag
       *
       * @param {Number} tag
       * @param {Boolean} cleanup
       */
      removeNodeByTag(tag: number, cleanup: boolean): any
  
      /**
       * when a widget calls this method, it will get focus immediately.
       */
      requestFocus(): any
  
      /**
       * Sets whether the widget is bright. The default value is true, a widget is default to bright
       *
       * @param {Boolean} bright true if the widget is bright, false if the widget is dark.
       */
      setBright(bright: boolean): any
  
      /**
       * To set the bright style of ccui.Widget.
       *
       * @param {Number} style BRIGHT_NORMAL the widget is normal state, BRIGHT_HIGHLIGHT the widget is height light state.
       */
      setBrightStyle(style: number): any
  
      /**
       * Sets callback name to widget.
       *
       * @param {String} callbackName
       */
      setCallbackName(callbackName: string): any
  
      /**
       * Sets callback type to widget
       *
       * @param {String} callbackType
       */
      setCallbackType(callbackType: string): any
  
      /**
       * Sets _customSize of ccui.Widget, if ignoreSize is true, the content size is its renderer's contentSize, otherwise the content size is parameter.
       * and updates size percent by parent content size. At last, updates its children's size and position.
       *
       * @param {cc.Size|Number} contentSize content size or width of content size
       * @param {Number} height
       */
      setContentSize(contentSize: cc.Size | number, height: number): any
  
      /**
       * Sets whether the widget is enabled
       * true if the widget is enabled, widget may be touched , false if the widget is disabled, widget cannot be touched.
       * The default value is true, a widget is default to enabled
       *
       * @param {Boolean} enabled
       */
      setEnabled(enabled: boolean): any
  
      /**
       * Sets whether the widget should be flipped horizontally or not.
       *
       * @param {Boolean} flipX true if the widget should be flipped horizontally, false otherwise.
       */
      setFlippedX(flipX: boolean): any
  
      /**
       * Sets whether the widget should be flipped vertically or not.
       *
       * @param {Boolean} flipY true if the widget should be flipped vertically, false otherwise.
       */
      setFlippedY(flipY: boolean): any
  
      /**
       * Sets whether the widget is on focused
       * The default value is false, a widget is default to not on focused
       *
       * @param {boolean} focus pass true to let the widget get focus or pass false to let the widget lose focus
       */
      setFocused(focus: boolean): any
  
      /**
       * sets whether the widget could accept focus.
       *
       * @param {Boolean} enable true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      setFocusEnabled(enable: boolean): any
  
      /**
       * Sets whether the widget is highlighted. The default value is false, a widget is default to not highlighted
       *
       * @param {any} highlight true if the widget is highlighted, false if the widget is not highlighted.
       */
      setHighlighted(highlight: any): any
  
      /**
       * Whether enable layout component of a widget
       *
       * @param {Boolean} enable enable layout Component of a widget
       */
      setLayoutComponentEnabled(enable: boolean): any
  
      /**
       * Gets LayoutParameter of widget.
       *
       * @param {ccui.LayoutParameter} parameter
       */
      setLayoutParameter(parameter: ccui.LayoutParameter): any
  
      /**
       * Changes the position (x,y) of the widget .
       * The original point (0,0) is at the left-bottom corner of screen.
       *
       * @param {cc.Point|Number} pos
       * @param {Number} posY
       */
      setPosition(pos: cc.Point | number, posY: number): any
  
      /**
       * Changes the position (x,y) of the widget
       *
       * @param {cc.Point} percent
       */
      setPositionPercent(percent: cc.Point): any
  
      /**
       * Changes the position type of the widget
       *
       * @param {Number} type the position type of widget
       */
      setPositionType(type: number): any
  
      /**
       * Allow widget touch events to propagate to its parents. Set false will disable propagation
       *
       * @param {Boolean} isPropagate
       */
      setPropagateTouchEvents(isPropagate: boolean): any
  
      /**
       * Changes the size that is widget's size
       *
       * @param {cc.Size} size that is widget's size
       */
      setSize(size: cc.Size): any
  
      /**
       * Changes the percent that is widget's percent size
       *
       * @param {cc.Point} percent that is widget's percent size, width and height value from 0 to 1.
       */
      setSizePercent(percent: cc.Point): any
  
      /**
       * TEXTURE_RES_TYPE
       * Changes the size type of widget.
       *
       * @param {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} type that is widget's size type
       */
      setSizeType(type: any): any
  
      /**
       * Specify widget to swallow touches or not
       *
       * @param {Boolean} swallow
       */
      setSwallowTouches(swallow: boolean): any
  
      /**
       * Sets whether the widget is touch enabled. The default value is false, a widget is default to touch disabled
       *
       * @param {Boolean} enable true if the widget is touch enabled, false if the widget is touch disabled.
       */
      setTouchEnabled(enable: boolean): any
  
      /**
       *
       *
       * @param {Boolean} enable enable Unify Size of a widget
       */
      setUnifySizeEnabled(enable: boolean): any
  
      /**
       * updates its size by size type and its position by position type.
       *
       * @param {cc.Size} parentSize parent size
       */
      updateSizeAndPosition(parentSize: cc.Size): any
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    }
  }
  
  declare namespace ccui {
    interface ILayout extends ccui.IWidget {
  
      clippingEnabled: boolean
  
      clippingType: any
  
      layoutType: any
  
      addChild(widget: ccui.Widget, zOrder: number, tag: number | string): any
  
      forceDoLayout(): any
  
      getBackGroundColor(): cc.Color
  
      getBackGroundColorOpacity(): number
  
      getBackGroundColorType(): any
  
      getBackGroundColorVector(): cc.Point
  
      getBackGroundEndColor(): cc.Color
  
      getBackGroundImageCapInsets(): cc.Rect
  
      getBackGroundImageColor(): cc.Color
  
      getBackGroundImageOpacity(): number
  
      getBackGroundImageTextureSize(): cc.Size
  
      getBackGroundStartColor(): cc.Color
  
      getClippingType(): any
  
      getLayoutType(): null
  
      isBackGroundImageScale9Enabled(): boolean
  
      isClippingEnabled(): boolean
  
      isLoopFocus(): boolean
  
      isPassFocusToChild(): boolean
  
      onPassFocusToChild(direction: number, current: ccui.Widget): any
  
      removeAllChildren(cleanup: boolean): any
  
      removeAllChildrenWithCleanup(cleanup: boolean): any
  
      removeBackGroundImage(): any
  
      removeChild(widget: ccui.Widget, cleanup: boolean): any
  
      requestDoLayout(): any
  
      setBackGroundColor(color: cc.Color, endColor: cc.Color): any
  
      setBackGroundColorOpacity(opacity: number): any
  
      setBackGroundColorType(type: any): any
  
      setBackGroundColorVector(vector: cc.Point): any
  
      setBackGroundImage(fileName: string, texType: any): any
  
      setBackGroundImageCapInsets(capInsets: cc.Rect): any
  
      setBackGroundImageColor(color: cc.Color): any
  
      setBackGroundImageOpacity(opacity: number): any
  
      setBackGroundImageScale9Enabled(able: boolean): any
  
      setClippingEnabled(able: boolean): any
  
      setClippingType(type: any): any
  
      setLayoutType(type: any): any
  
      setLoopFocus(loop: boolean): any
  
      setPassFocusToChild(pass: any): any
  
      visit(parentCmd: any): any
    }
  
    interface ILayoutOverrides {
  
      findNextFocusedWidget(direction: number, current: ccui.Widget): ccui.Widget
  
      getDescription(): string
  
      onEnter(): any
  
      onExit(): any
    }
  
  
  
    class Layout implements ILayout, ILayoutOverrides {
  
      /**
       * Allocates and initializes an UILayout.
       * Constructor of ccui.Layout
       */
      constructor()
  
  
  
      /**
       * The absolute of ccui.Layout's layout type.
       */
      static ABSOLUTE: any
  
      /**
       * The zOrder value of ccui.Layout's image background.
       */
      static BACKGROUND_IMAGE_ZORDER: any
  
      /**
       * The zOrder value of ccui.Layout's color background.
       */
      static BACKGROUND_RENDERER_ZORDER: any
  
      /**
       * The gradient of ccui.Layout's background color type, it will use a LayerGradient to draw the background.
       */
      static BG_COLOR_GRADIENT: any
  
      /**
       * The None of ccui.Layout's background color type
       */
      static BG_COLOR_NONE: any
  
      /**
       * The solid of ccui.Layout's background color type, it will use a LayerColor to draw the background.
       */
      static BG_COLOR_SOLID: any
  
      /**
       * The scissor of ccui.Layout's clipping type.
       */
      static CLIPPING_SCISSOR: any
  
      /**
       * The stencil of ccui.Layout's clipping type.
       */
      static CLIPPING_STENCIL: any
  
      /**
       * The horizontal of ccui.Layout's layout type.
       */
      static LINEAR_HORIZONTAL: any
  
      /**
       * The vertical of ccui.Layout's layout type.
       */
      static LINEAR_VERTICAL: any
  
      /**
       * The relative of ccui.Layout's layout type.
       */
      static RELATIVE: any
  
      /**
       * allocates and initializes a UILayout.
       *
       * @returns {ccui.Layout}
       */
      static create(): ccui.Layout
  
  
      /**
       * When a widget is in a layout, you could call this method to get the next focused widget within a specified direction.
       * If the widget is not in a layout, it will return itself
       *
       * @param {Number} direction the direction to look for the next focused widget in a layout
       * @param {ccui.Widget} current the current focused widget
       *
       * @returns {ccui.Widget} return the index of widget in the layout
       */
      findNextFocusedWidget(direction: number, current: ccui.Widget): ccui.Widget
  
      /**
       * Returns the "class name" of widget.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Calls its parent's onEnter, and calls its clippingStencil's onEnter if clippingStencil isn't null.
       */
      onEnter(): any
  
      /**
       * Calls its parent's onExit, and calls its clippingStencil's onExit if clippingStencil isn't null.
       */
      onExit(): any
  
  
      /**
       * - Indicate whether clipping is enabled
       */
      clippingEnabled: boolean
  
      /**
       *
       */
      clippingType: any
  
      /**
       *
       */
      layoutType: any
  
      /**
       * Adds a widget to the container.
       *
       * @param {ccui.Widget} widget
       * @param {Number} zOrder
       * @param {Number|string} tag tag or name
       */
      addChild(widget: ccui.Widget, zOrder: number, tag: number | string): any
  
      /**
       * force refresh widget layout
       */
      forceDoLayout(): any
  
      /**
       * Gets background color of ccui.Layout, if color type is Layout.COLOR_SOLID.
       *
       * @returns {cc.Color}
       */
      getBackGroundColor(): cc.Color
  
      /**
       * Get background opacity value of ccui.Layout.
       *
       * @returns {Number}
       */
      getBackGroundColorOpacity(): number
  
      /**
       * Get background color type of ccui.Layout.
       *
       * @returns {ccui.Layout.BG_COLOR_NONE|ccui.Layout.BG_COLOR_SOLID|ccui.Layout.BG_COLOR_GRADIENT}
       */
      getBackGroundColorType(): any
  
      /**
       * Gets background color vector of ccui.Layout, if color type is Layout.COLOR_GRADIENT
       *
       * @returns {cc.Point}
       */
      getBackGroundColorVector(): cc.Point
  
      /**
       * Gets background end color of ccui.Layout
       *
       * @returns {cc.Color}
       */
      getBackGroundEndColor(): cc.Color
  
      /**
       * Gets background image capinsets of ccui.Layout.
       *
       * @returns {cc.Rect}
       */
      getBackGroundImageCapInsets(): cc.Rect
  
      /**
       * Gets backGround image color
       *
       * @returns {cc.Color}
       */
      getBackGroundImageColor(): cc.Color
  
      /**
       * Gets backGround image opacity
       *
       * @returns {Number}
       */
      getBackGroundImageOpacity(): number
  
      /**
       * Gets background image texture size.
       *
       * @returns {cc.Size}
       */
      getBackGroundImageTextureSize(): cc.Size
  
      /**
       * Gets background start color of ccui.Layout
       *
       * @returns {cc.Color}
       */
      getBackGroundStartColor(): cc.Color
  
      /**
       * Gets clipping type of ccui.Layout
       *
       * @returns {ccui.Layout.CLIPPING_STENCIL|ccui.Layout.CLIPPING_SCISSOR}
       */
      getClippingType(): any
  
      /**
       * Gets LayoutType of ccui.Layout.
       *
       * @returns {null}
       */
      getLayoutType(): null
  
      /**
       * Get whether background image is use scale9 renderer.
       *
       * @returns {Boolean}
       */
      isBackGroundImageScale9Enabled(): boolean
  
      /**
       * Gets if layout is clipping enabled.
       *
       * @returns {Boolean} if layout is clipping enabled.
       */
      isClippingEnabled(): boolean
  
      /**
       * Gets whether enable focus loop
       *
       * @returns {boolean} If focus loop is enabled, then it will return true, otherwise it returns false. The default value is false.
       */
      isLoopFocus(): boolean
  
      /**
       * Returns whether the layout will pass the focus to its children or not. The default value is true
       *
       * @returns {boolean} To query whether the layout will pass the focus to its children or not. The default value is true
       */
      isPassFocusToChild(): boolean
  
      /**
       * To specify a user-defined functor to decide which child widget of the layout should get focused
       *
       * @param {Number} direction
       * @param {ccui.Widget} current
       */
      onPassFocusToChild(direction: number, current: ccui.Widget): any
  
      /**
       * Removes all children from the container with a cleanup, and sets the layout dirty flag to true.
       *
       * @param {Boolean} cleanup
       */
      removeAllChildren(cleanup: boolean): any
  
      /**
       * Removes all children from the container, do a cleanup to all running actions depending on the cleanup parameter,
       * and sets the layout dirty flag to true.
       *
       * @param {Boolean} cleanup true if all running actions on all children nodes should be cleanup, false otherwise.
       */
      removeAllChildrenWithCleanup(cleanup: boolean): any
  
      /**
       * Remove the background image of ccui.Layout.
       */
      removeBackGroundImage(): any
  
      /**
       * Removes child widget from ccui.Layout, and sets the layout dirty flag to true.
       *
       * @param {ccui.Widget} widget
       * @param {Boolean} cleanup
       */
      removeChild(widget: ccui.Widget, cleanup: boolean): any
  
      /**
       * request to refresh widget layout, it will do layout at visit calls
       */
      requestDoLayout(): any
  
      /**
       * Sets background color for layout, if color type is Layout.COLOR_SOLID
       *
       * @param {cc.Color} color
       * @param {cc.Color} endColor
       */
      setBackGroundColor(color: cc.Color, endColor: cc.Color): any
  
      /**
       * Sets background opacity to ccui.Layout.
       *
       * @param {number} opacity
       */
      setBackGroundColorOpacity(opacity: number): any
  
      /**
       * Sets Color Type for ccui.Layout.
       *
       * @param {ccui.Layout.BG_COLOR_NONE|ccui.Layout.BG_COLOR_SOLID|ccui.Layout.BG_COLOR_GRADIENT} type
       */
      setBackGroundColorType(type: any): any
  
      /**
       * Sets background color vector for layout, if color type is Layout.COLOR_GRADIENT
       *
       * @param {cc.Point} vector
       */
      setBackGroundColorVector(vector: cc.Point): any
  
      /**
       * Sets a background image for layout
       *
       * @param {String} fileName
       * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
       */
      setBackGroundImage(fileName: string, texType: any): any
  
      /**
       * Sets a background image CapInsets for layout, if the background image is a scale9 render.
       *
       * @param {cc.Rect} capInsets capinsets of background image.
       */
      setBackGroundImageCapInsets(capInsets: cc.Rect): any
  
      /**
       * Sets backGround image color
       *
       * @param {cc.Color} color
       */
      setBackGroundImageColor(color: cc.Color): any
  
      /**
       * Sets backGround image Opacity
       *
       * @param {Number} opacity
       */
      setBackGroundImageOpacity(opacity: number): any
  
      /**
       * Sets background image use scale9 renderer.
       *
       * @param {Boolean} able true that use scale9 renderer, false otherwise.
       */
      setBackGroundImageScale9Enabled(able: boolean): any
  
      /**
       * Changes if layout can clip it's content and locChild.
       * If you really need this, please enable it. But it would reduce the rendering efficiency.
       *
       * @param {Boolean} able clipping enabled.
       */
      setClippingEnabled(able: boolean): any
  
      /**
       * Sets clipping type to ccui.Layout
       *
       * @param {ccui.Layout.CLIPPING_STENCIL|ccui.Layout.CLIPPING_SCISSOR} type
       */
      setClippingType(type: any): any
  
      /**
       * Sets LayoutType to ccui.Layout, LayoutManager will do layout by layout type..
       *
       * @param {ccui.Layout.ABSOLUTE|ccui.Layout.LINEAR_VERTICAL|ccui.Layout.LINEAR_HORIZONTAL|ccui.Layout.RELATIVE} type
       */
      setLayoutType(type: any): any
  
      /**
       * If a layout is loop focused which means that the focus movement will be inside the layout
       *
       * @param {Boolean} loop pass true to let the focus movement loop inside the layout
       */
      setLoopFocus(loop: boolean): any
  
      /**
       * Specifies whether the layout pass its focus to its child
       *
       * @param {any} pass To specify whether the layout pass its focus to its child
       */
      setPassFocusToChild(pass: any): any
  
      /**
       * Calls adaptRenderers (its subclass will override it.) and do layout.
       * If clippingEnabled is true, it will clip/scissor area.
       *
       * @param {cc.Node.RenderCmd} parentCmd
       */
      visit(parentCmd: any): any
  
  
      /**
       * - The action tag of the widget
       */
      actionTag: number
  
      /**
       * - Indicate whether the widget is bright
       */
      bright: boolean
  
      /**
       * - Indicate whether the widget is enabled
       */
      enabled: boolean
  
      /**
       * - Indicate whether the widget is focused
       */
      focused: boolean
  
      /**
       * - Height in percentage of parent height
       */
      heightPercent: number
  
      /**
       * - The name of the widget
       */
      name: string
  
      /**
       * When a widget lose/get focus, this method will be called. Be Caution when you provide your own version,
       * you must call widget.setFocused(true/false) to change the focus state of the current focused widget;
       */
      onFocusChanged: any
  
      /**
       * use this function to manually specify the next focused widget regards to each direction
       */
      onNextFocusedWidget: any
  
      /**
       * - The size type of the widget
       */
      sizeType: any
  
      /**
       * - Indicate whether touch events are enabled
       */
      touchEnabled: boolean
  
      /**
       * - Indicate whether the update function is scheduled
       */
      updateEnabled: boolean
  
      /**
       * - <@readonly> The direct parent when it's a widget also, otherwise equals null
       */
      widgetParent: ccui.Widget
  
      /**
       * - <@readonly> The type of the widget
       */
      widgetType: any
  
      /**
       * - Width in percentage of parent width
       */
      widthPercent: number
  
      /**
       * - Position x in percentage of width
       */
      xPercent: number
  
      /**
       * - Position y in percentage of height
       */
      yPercent: number
  
      /**
       * Set a event handler to the widget in order to use cocostudio editor and framework
       *
       * @param {function} callback
       */
      addCCSEventListener(callback: Function): any
  
      /**
       * Adds a node for widget (this function is deleted in -x)
       *
       * @param {cc.Node} node
       * @param {Number} zOrder
       * @param {Number} tag
       */
      addNode(node: cc.Node, zOrder: number, tag: number): any
  
      /**
       * Sets the touch event target/selector of the ccui.Widget
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addTouchEventListener(selector: Function, target: object): any
  
      /**
       * Calls the checkChildInfo of widget's parent, its subclass will override it.
       *
       * @param {number} handleState
       * @param {ccui.Widget} sender
       * @param {cc.Point} touchPoint
       */
      checkChildInfo(handleState: number, sender: ccui.Widget, touchPoint: cc.Point): any
  
      /**
       * Checks a point if in parent's area.
       *
       * @param {cc.Point} pt
       *
       * @returns {Boolean}
       */
      clippingParentAreaContainPoint(pt: cc.Point): boolean
  
      /**
       * Clones a new widget.
       *
       * @returns {ccui.Widget}
       */
      clone(): ccui.Widget
  
      /**
       * A call back function when widget lost of focus.
       */
      didNotSelectSelf(): any
  
      /**
       * Dispatch a EventFocus through a EventDispatcher
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      dispatchFocusEvent(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * When a widget is in a layout, you could call this method to get the next focused widget within a specified direction.
       * If the widget is not in a layout, it will return itself
       *
       * @param {any} direction the direction to look for the next focused widget in a layout
       * @param {any} current the current focused widget
       */
      findNextFocusedWidget(direction: any, current: any): any
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomBoundary(): number
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomInParent(): number
  
      /**
       * Gets callback name of widget
       *
       * @returns v3.3{String|Null}
       */
      getCallbackName(): string | null
  
      /**
       * Gets callback type of widget
       *
       * @returns v3.3{String|null}
       */
      getCallbackType(): string | null
  
      /**
       * no matter what widget object you call this method on , it will return you the exact one focused widget
       */
      getCurrentFocusedWidget(): any
  
      /**
       * Get custom size of ccui.Widget
       *
       * @returns {cc.Size}
       */
      getCustomSize(): cc.Size
  
      /**
       * Returns the "class name" of widget.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Gets layout parameter
       *
       * @param {ccui.LayoutParameter.NONE|ccui.LayoutParameter.LINEAR|ccui.LayoutParameter.RELATIVE} type
       *
       * @returns {ccui.LayoutParameter}
       */
      getLayoutParameter(type: any): ccui.LayoutParameter
  
      /**
       * Gets layout size of ccui.Widget.
       *
       * @returns {cc.Size}
       */
      getLayoutSize(): cc.Size
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftBoundary(): number
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftInParent(): number
  
      /**
       * Gets node by tag
       *
       * @param {Number} tag
       *
       * @returns {cc.Node}
       */
      getNodeByTag(tag: number): cc.Node
  
      /**
       * Returns all children.
       *
       * @returns {Array}
       */
      getNodes(): any[]
  
      /**
       * Gets the percent (x,y) of the widget
       *
       * @returns {cc.Point} The percent (x,y) of the widget in OpenGL coordinates
       */
      getPositionPercent(): cc.Point
  
      /**
       * Gets the position type of the widget
       *
       * @returns {Number} the position type of widget
       */
      getPositionType(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightBoundary(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightInParent(): number
  
      /**
       * Returns size of widget
       *
       * @returns {cc.Size}
       */
      getSize(): cc.Size
  
      /**
       * Returns size percent of ccui.Widget
       *
       * @returns {cc.Point}
       */
      getSizePercent(): cc.Point
  
      /**
       * Gets the size type of widget.
       *
       * @returns {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} that is widget's size type
       */
      getSizeType(): any
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopBoundary(): number
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopInParent(): number
  
      /**
       * Gets the position of touch began event.
       *
       * @returns {cc.Point}
       */
      getTouchBeganPosition(): cc.Point
  
      /**
       * Gets the touch end point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch end point.
       */
      getTouchEndPos(): cc.Point
  
      /**
       * Gets the position of touch end event
       *
       * @returns {cc.Point}
       */
      getTouchEndPosition(): cc.Point
  
      /**
       * Gets the touch move point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch move point.
       */
      getTouchMovePos(): cc.Point
  
      /**
       * Gets the position of touch moved event
       *
       * @returns {cc.Point}
       */
      getTouchMovePosition(): cc.Point
  
      /**
       * Gets the touch began point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch began point.
       */
      getTouchStartPos(): cc.Point
  
      /**
       * Gets the Virtual Renderer of widget.
       *
       * @returns {ccui.Widget}
       */
      getVirtualRenderer(): ccui.Widget
  
      /**
       * Gets the content size of widget. Content size is widget's texture size.
       */
      getVirtualRendererSize(): any
  
      /**
       * The direct parent when it's a widget also, otherwise equals null
       *
       * @returns {ccui.Widget|null}
       */
      getWidgetParent(): ccui.Widget | null
  
      /**
       * get widget type
       *
       * @returns {ccui.Widget.TYPE_WIDGET|ccui.Widget.TYPE_CONTAINER}
       */
      getWidgetType(): any
  
      /**
       * Gets world position of ccui.Widget.
       *
       * @returns {cc.Point} world position of ccui.Widget.
       */
      getWorldPosition(): cc.Point
  
      /**
       * Checks a point if is in widget's space
       *
       * @param {cc.Point} pt
       *
       * @returns {boolean} true if the point is in widget's space, false otherwise.
       */
      hitTest(pt: cc.Point): boolean
  
      /**
       * Ignore the widget size
       *
       * @param {Boolean} ignore true that widget will ignore it's size, use texture size, false otherwise. Default value is true.
       */
      ignoreContentAdaptWithSize(ignore: boolean): any
  
      /**
       * initializes state of widget. please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
       *
       * @returns {boolean}
       */
      init(): boolean
  
      /**
       * Sends the touch event to widget's parent, its subclass will override it, e.g. ccui.ScrollView, ccui.PageView
       *
       * @param {Number} eventType
       * @param {ccui.Widget} sender
       * @param {cc.Touch} touch
       */
      interceptTouchEvent(eventType: number, sender: ccui.Widget, touch: cc.Touch): any
  
      /**
       * Determines if the widget is bright
       *
       * @returns {boolean} true if the widget is bright, false if the widget is dark.
       */
      isBright(): boolean
  
      /**
       * returns whether clipping parent widget contains point.
       *
       * @param {cc.Point} pt location point
       *
       * @returns {Boolean}
       */
      isClippingParentContainsPoint(pt: cc.Point): boolean
  
      /**
       * Determines if the widget is enabled
       *
       * @returns {boolean}
       */
      isEnabled(): boolean
  
      /**
       * Returns the flag which indicates whether the widget is flipped horizontally or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleX(sprite.getScaleX() * -1);
       *
       * @returns {Boolean} true if the widget is flipped horizontally, false otherwise.
       */
      isFlippedX(): boolean
  
      /**
       * Return the flag which indicates whether the widget is flipped vertically or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleY(widget.getScaleY() * -1);
       *
       * @returns {Boolean} true if the widget is flipped vertically, false otherwise.
       */
      isFlippedY(): boolean
  
      /**
       * Determines if the widget is on focused
       *
       * @returns {boolean} whether the widget is focused or not
       */
      isFocused(): boolean
  
      /**
       * returns whether the widget could accept focus.
       *
       * @returns {boolean} true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      isFocusEnabled(): boolean
  
      /**
       * Determines if the widget is highlighted
       *
       * @returns {boolean} true if the widget is highlighted, false if the widget is not highlighted .
       */
      isHighlighted(): boolean
  
      /**
       * Gets whether ignore the content size (custom size)
       *
       * @returns {boolean} true that widget will ignore it's size, use texture size, false otherwise.
       */
      isIgnoreContentAdaptWithSize(): boolean
  
      /**
       * Returns whether enable layout component of a widget
       *
       * @returns {Boolean} true represent the widget use Layout Component, false represent the widget couldn't use Layout Component.
       */
      isLayoutComponentEnabled(): boolean
  
      /**
       * Return whether the widget is propagate touch events to its parents or not
       *
       * @returns v3.2{boolean}
       */
      isPropagateTouchEvents(): boolean
  
      /**
       * Return whether the widget is swallowing touch or not
       *
       * @returns v3.2{boolean}
       */
      isSwallowTouches(): boolean
  
      /**
       * Returns whether or not touch is enabled.
       *
       * @returns {boolean} true if the widget is touch enabled, false if the widget is touch disabled.
       */
      isTouchEnabled(): boolean
  
      /**
       *
       *
       * @returns v3.2{boolean} true represent the widget use Unify Size, false represent the widget couldn't use Unify Size
       */
      isUnifySizeEnabled(): boolean
  
      /**
       * Calls updateSizeAndPosition and its parent's onEnter
       */
      onEnter(): any
  
      /**
       * Calls unscheduleUpdate and its parent's onExit
       */
      onExit(): any
  
      /**
       * This method is called when a focus change event happens
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      onFocusChange(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * The callback of touch began event.
       * If the bounding box of ccui.Widget contains the touch point, it will do the following things:
       * 1. sets highlight state,
       * 2. sends event to parent widget by interceptTouchEvent
       * 3. calls the callback of touch began event.
       * 4. returns true,
       * otherwise returns false directly.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       *
       * @returns {boolean}
       */
      onTouchBegan(touch: cc.Touch, event: cc.Event): boolean
  
      /**
       * A call back function called when widget is selected, and on touch canceled.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchCancelled(touchPoint: cc.Point): any
  
      /**
       * The callback of touch end event
       * It sends event to parent widget by interceptTouchEvent,
       * calls the callback of touch end event (highlight= true) or touch canceled event (highlight= false).
       * sets the highlight state to false ,
       *
       * @param {any} touch
       * @param {any} event
       */
      onTouchEnded(touch: any, event: any): any
  
      /**
       * A call back function called when widget is selected, and on touch long clicked.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchLongClicked(touchPoint: cc.Point): any
  
      /**
       * The callback of touch moved event.
       * It sets the highlight state by touch, sends event to parent widget by interceptTouchEvent and calls the callback of touch moved event.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       */
      onTouchMoved(touch: cc.Touch, event: cc.Event): any
  
      /**
       * Removes all node
       */
      removeAllNodes(): any
  
      /**
       * Removes a node from ccui.Widget
       *
       * @param {cc.Node} node
       * @param {Boolean} cleanup
       */
      removeNode(node: cc.Node, cleanup: boolean): any
  
      /**
       * Removes node by tag
       *
       * @param {Number} tag
       * @param {Boolean} cleanup
       */
      removeNodeByTag(tag: number, cleanup: boolean): any
  
      /**
       * when a widget calls this method, it will get focus immediately.
       */
      requestFocus(): any
  
      /**
       * Sets whether the widget is bright. The default value is true, a widget is default to bright
       *
       * @param {Boolean} bright true if the widget is bright, false if the widget is dark.
       */
      setBright(bright: boolean): any
  
      /**
       * To set the bright style of ccui.Widget.
       *
       * @param {Number} style BRIGHT_NORMAL the widget is normal state, BRIGHT_HIGHLIGHT the widget is height light state.
       */
      setBrightStyle(style: number): any
  
      /**
       * Sets callback name to widget.
       *
       * @param {String} callbackName
       */
      setCallbackName(callbackName: string): any
  
      /**
       * Sets callback type to widget
       *
       * @param {String} callbackType
       */
      setCallbackType(callbackType: string): any
  
      /**
       * Sets _customSize of ccui.Widget, if ignoreSize is true, the content size is its renderer's contentSize, otherwise the content size is parameter.
       * and updates size percent by parent content size. At last, updates its children's size and position.
       *
       * @param {cc.Size|Number} contentSize content size or width of content size
       * @param {Number} height
       */
      setContentSize(contentSize: cc.Size | number, height: number): any
  
      /**
       * Sets whether the widget is enabled
       * true if the widget is enabled, widget may be touched , false if the widget is disabled, widget cannot be touched.
       * The default value is true, a widget is default to enabled
       *
       * @param {Boolean} enabled
       */
      setEnabled(enabled: boolean): any
  
      /**
       * Sets whether the widget should be flipped horizontally or not.
       *
       * @param {Boolean} flipX true if the widget should be flipped horizontally, false otherwise.
       */
      setFlippedX(flipX: boolean): any
  
      /**
       * Sets whether the widget should be flipped vertically or not.
       *
       * @param {Boolean} flipY true if the widget should be flipped vertically, false otherwise.
       */
      setFlippedY(flipY: boolean): any
  
      /**
       * Sets whether the widget is on focused
       * The default value is false, a widget is default to not on focused
       *
       * @param {boolean} focus pass true to let the widget get focus or pass false to let the widget lose focus
       */
      setFocused(focus: boolean): any
  
      /**
       * sets whether the widget could accept focus.
       *
       * @param {Boolean} enable true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      setFocusEnabled(enable: boolean): any
  
      /**
       * Sets whether the widget is highlighted. The default value is false, a widget is default to not highlighted
       *
       * @param {any} highlight true if the widget is highlighted, false if the widget is not highlighted.
       */
      setHighlighted(highlight: any): any
  
      /**
       * Whether enable layout component of a widget
       *
       * @param {Boolean} enable enable layout Component of a widget
       */
      setLayoutComponentEnabled(enable: boolean): any
  
      /**
       * Gets LayoutParameter of widget.
       *
       * @param {ccui.LayoutParameter} parameter
       */
      setLayoutParameter(parameter: ccui.LayoutParameter): any
  
      /**
       * Changes the position (x,y) of the widget .
       * The original point (0,0) is at the left-bottom corner of screen.
       *
       * @param {cc.Point|Number} pos
       * @param {Number} posY
       */
      setPosition(pos: cc.Point | number, posY: number): any
  
      /**
       * Changes the position (x,y) of the widget
       *
       * @param {cc.Point} percent
       */
      setPositionPercent(percent: cc.Point): any
  
      /**
       * Changes the position type of the widget
       *
       * @param {Number} type the position type of widget
       */
      setPositionType(type: number): any
  
      /**
       * Allow widget touch events to propagate to its parents. Set false will disable propagation
       *
       * @param {Boolean} isPropagate
       */
      setPropagateTouchEvents(isPropagate: boolean): any
  
      /**
       * Changes the size that is widget's size
       *
       * @param {cc.Size} size that is widget's size
       */
      setSize(size: cc.Size): any
  
      /**
       * Changes the percent that is widget's percent size
       *
       * @param {cc.Point} percent that is widget's percent size, width and height value from 0 to 1.
       */
      setSizePercent(percent: cc.Point): any
  
      /**
       * TEXTURE_RES_TYPE
       * Changes the size type of widget.
       *
       * @param {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} type that is widget's size type
       */
      setSizeType(type: any): any
  
      /**
       * Specify widget to swallow touches or not
       *
       * @param {Boolean} swallow
       */
      setSwallowTouches(swallow: boolean): any
  
      /**
       * Sets whether the widget is touch enabled. The default value is false, a widget is default to touch disabled
       *
       * @param {Boolean} enable true if the widget is touch enabled, false if the widget is touch disabled.
       */
      setTouchEnabled(enable: boolean): any
  
      /**
       *
       *
       * @param {Boolean} enable enable Unify Size of a widget
       */
      setUnifySizeEnabled(enable: boolean): any
  
      /**
       * updates its size by size type and its position by position type.
       *
       * @param {cc.Size} parentSize parent size
       */
      updateSizeAndPosition(parentSize: cc.Size): any
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    }
  }
  
  declare namespace ccui {
    interface IHBox extends ccui.ILayout {
  
  
    }
  
    interface IHBoxOverrides {
  
    }
  
  
  
    class HBox implements IHBox, IHBoxOverrides {
  
      /**
       * The constructor of ccui.HBox
       *
       * @param {cc.Size} size
       */
      constructor(size: cc.Size)
  
  
  
  
      /**
       * Creates a HBox object
       *
       * @param {cc.Size} size
       *
       * @returns {ccui.HBox}
       */
      static create(size: cc.Size): ccui.HBox
  
  
  
  
  
  
  
      /**
       * - Indicate whether clipping is enabled
       */
      clippingEnabled: boolean
  
      /**
       *
       */
      clippingType: any
  
      /**
       *
       */
      layoutType: any
  
      /**
       * Adds a widget to the container.
       *
       * @param {ccui.Widget} widget
       * @param {Number} zOrder
       * @param {Number|string} tag tag or name
       */
      addChild(widget: ccui.Widget, zOrder: number, tag: number | string): any
  
      /**
       * force refresh widget layout
       */
      forceDoLayout(): any
  
      /**
       * Gets background color of ccui.Layout, if color type is Layout.COLOR_SOLID.
       *
       * @returns {cc.Color}
       */
      getBackGroundColor(): cc.Color
  
      /**
       * Get background opacity value of ccui.Layout.
       *
       * @returns {Number}
       */
      getBackGroundColorOpacity(): number
  
      /**
       * Get background color type of ccui.Layout.
       *
       * @returns {ccui.Layout.BG_COLOR_NONE|ccui.Layout.BG_COLOR_SOLID|ccui.Layout.BG_COLOR_GRADIENT}
       */
      getBackGroundColorType(): any
  
      /**
       * Gets background color vector of ccui.Layout, if color type is Layout.COLOR_GRADIENT
       *
       * @returns {cc.Point}
       */
      getBackGroundColorVector(): cc.Point
  
      /**
       * Gets background end color of ccui.Layout
       *
       * @returns {cc.Color}
       */
      getBackGroundEndColor(): cc.Color
  
      /**
       * Gets background image capinsets of ccui.Layout.
       *
       * @returns {cc.Rect}
       */
      getBackGroundImageCapInsets(): cc.Rect
  
      /**
       * Gets backGround image color
       *
       * @returns {cc.Color}
       */
      getBackGroundImageColor(): cc.Color
  
      /**
       * Gets backGround image opacity
       *
       * @returns {Number}
       */
      getBackGroundImageOpacity(): number
  
      /**
       * Gets background image texture size.
       *
       * @returns {cc.Size}
       */
      getBackGroundImageTextureSize(): cc.Size
  
      /**
       * Gets background start color of ccui.Layout
       *
       * @returns {cc.Color}
       */
      getBackGroundStartColor(): cc.Color
  
      /**
       * Gets clipping type of ccui.Layout
       *
       * @returns {ccui.Layout.CLIPPING_STENCIL|ccui.Layout.CLIPPING_SCISSOR}
       */
      getClippingType(): any
  
      /**
       * Gets LayoutType of ccui.Layout.
       *
       * @returns {null}
       */
      getLayoutType(): null
  
      /**
       * Get whether background image is use scale9 renderer.
       *
       * @returns {Boolean}
       */
      isBackGroundImageScale9Enabled(): boolean
  
      /**
       * Gets if layout is clipping enabled.
       *
       * @returns {Boolean} if layout is clipping enabled.
       */
      isClippingEnabled(): boolean
  
      /**
       * Gets whether enable focus loop
       *
       * @returns {boolean} If focus loop is enabled, then it will return true, otherwise it returns false. The default value is false.
       */
      isLoopFocus(): boolean
  
      /**
       * Returns whether the layout will pass the focus to its children or not. The default value is true
       *
       * @returns {boolean} To query whether the layout will pass the focus to its children or not. The default value is true
       */
      isPassFocusToChild(): boolean
  
      /**
       * To specify a user-defined functor to decide which child widget of the layout should get focused
       *
       * @param {Number} direction
       * @param {ccui.Widget} current
       */
      onPassFocusToChild(direction: number, current: ccui.Widget): any
  
      /**
       * Removes all children from the container with a cleanup, and sets the layout dirty flag to true.
       *
       * @param {Boolean} cleanup
       */
      removeAllChildren(cleanup: boolean): any
  
      /**
       * Removes all children from the container, do a cleanup to all running actions depending on the cleanup parameter,
       * and sets the layout dirty flag to true.
       *
       * @param {Boolean} cleanup true if all running actions on all children nodes should be cleanup, false otherwise.
       */
      removeAllChildrenWithCleanup(cleanup: boolean): any
  
      /**
       * Remove the background image of ccui.Layout.
       */
      removeBackGroundImage(): any
  
      /**
       * Removes child widget from ccui.Layout, and sets the layout dirty flag to true.
       *
       * @param {ccui.Widget} widget
       * @param {Boolean} cleanup
       */
      removeChild(widget: ccui.Widget, cleanup: boolean): any
  
      /**
       * request to refresh widget layout, it will do layout at visit calls
       */
      requestDoLayout(): any
  
      /**
       * Sets background color for layout, if color type is Layout.COLOR_SOLID
       *
       * @param {cc.Color} color
       * @param {cc.Color} endColor
       */
      setBackGroundColor(color: cc.Color, endColor: cc.Color): any
  
      /**
       * Sets background opacity to ccui.Layout.
       *
       * @param {number} opacity
       */
      setBackGroundColorOpacity(opacity: number): any
  
      /**
       * Sets Color Type for ccui.Layout.
       *
       * @param {ccui.Layout.BG_COLOR_NONE|ccui.Layout.BG_COLOR_SOLID|ccui.Layout.BG_COLOR_GRADIENT} type
       */
      setBackGroundColorType(type: any): any
  
      /**
       * Sets background color vector for layout, if color type is Layout.COLOR_GRADIENT
       *
       * @param {cc.Point} vector
       */
      setBackGroundColorVector(vector: cc.Point): any
  
      /**
       * Sets a background image for layout
       *
       * @param {String} fileName
       * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
       */
      setBackGroundImage(fileName: string, texType: any): any
  
      /**
       * Sets a background image CapInsets for layout, if the background image is a scale9 render.
       *
       * @param {cc.Rect} capInsets capinsets of background image.
       */
      setBackGroundImageCapInsets(capInsets: cc.Rect): any
  
      /**
       * Sets backGround image color
       *
       * @param {cc.Color} color
       */
      setBackGroundImageColor(color: cc.Color): any
  
      /**
       * Sets backGround image Opacity
       *
       * @param {Number} opacity
       */
      setBackGroundImageOpacity(opacity: number): any
  
      /**
       * Sets background image use scale9 renderer.
       *
       * @param {Boolean} able true that use scale9 renderer, false otherwise.
       */
      setBackGroundImageScale9Enabled(able: boolean): any
  
      /**
       * Changes if layout can clip it's content and locChild.
       * If you really need this, please enable it. But it would reduce the rendering efficiency.
       *
       * @param {Boolean} able clipping enabled.
       */
      setClippingEnabled(able: boolean): any
  
      /**
       * Sets clipping type to ccui.Layout
       *
       * @param {ccui.Layout.CLIPPING_STENCIL|ccui.Layout.CLIPPING_SCISSOR} type
       */
      setClippingType(type: any): any
  
      /**
       * Sets LayoutType to ccui.Layout, LayoutManager will do layout by layout type..
       *
       * @param {ccui.Layout.ABSOLUTE|ccui.Layout.LINEAR_VERTICAL|ccui.Layout.LINEAR_HORIZONTAL|ccui.Layout.RELATIVE} type
       */
      setLayoutType(type: any): any
  
      /**
       * If a layout is loop focused which means that the focus movement will be inside the layout
       *
       * @param {Boolean} loop pass true to let the focus movement loop inside the layout
       */
      setLoopFocus(loop: boolean): any
  
      /**
       * Specifies whether the layout pass its focus to its child
       *
       * @param {any} pass To specify whether the layout pass its focus to its child
       */
      setPassFocusToChild(pass: any): any
  
      /**
       * Calls adaptRenderers (its subclass will override it.) and do layout.
       * If clippingEnabled is true, it will clip/scissor area.
       *
       * @param {cc.Node.RenderCmd} parentCmd
       */
      visit(parentCmd: any): any
  
  
      /**
       * - The action tag of the widget
       */
      actionTag: number
  
      /**
       * - Indicate whether the widget is bright
       */
      bright: boolean
  
      /**
       * - Indicate whether the widget is enabled
       */
      enabled: boolean
  
      /**
       * - Indicate whether the widget is focused
       */
      focused: boolean
  
      /**
       * - Height in percentage of parent height
       */
      heightPercent: number
  
      /**
       * - The name of the widget
       */
      name: string
  
      /**
       * When a widget lose/get focus, this method will be called. Be Caution when you provide your own version,
       * you must call widget.setFocused(true/false) to change the focus state of the current focused widget;
       */
      onFocusChanged: any
  
      /**
       * use this function to manually specify the next focused widget regards to each direction
       */
      onNextFocusedWidget: any
  
      /**
       * - The size type of the widget
       */
      sizeType: any
  
      /**
       * - Indicate whether touch events are enabled
       */
      touchEnabled: boolean
  
      /**
       * - Indicate whether the update function is scheduled
       */
      updateEnabled: boolean
  
      /**
       * - <@readonly> The direct parent when it's a widget also, otherwise equals null
       */
      widgetParent: ccui.Widget
  
      /**
       * - <@readonly> The type of the widget
       */
      widgetType: any
  
      /**
       * - Width in percentage of parent width
       */
      widthPercent: number
  
      /**
       * - Position x in percentage of width
       */
      xPercent: number
  
      /**
       * - Position y in percentage of height
       */
      yPercent: number
  
      /**
       * Set a event handler to the widget in order to use cocostudio editor and framework
       *
       * @param {function} callback
       */
      addCCSEventListener(callback: Function): any
  
      /**
       * Adds a node for widget (this function is deleted in -x)
       *
       * @param {cc.Node} node
       * @param {Number} zOrder
       * @param {Number} tag
       */
      addNode(node: cc.Node, zOrder: number, tag: number): any
  
      /**
       * Sets the touch event target/selector of the ccui.Widget
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addTouchEventListener(selector: Function, target: object): any
  
      /**
       * Calls the checkChildInfo of widget's parent, its subclass will override it.
       *
       * @param {number} handleState
       * @param {ccui.Widget} sender
       * @param {cc.Point} touchPoint
       */
      checkChildInfo(handleState: number, sender: ccui.Widget, touchPoint: cc.Point): any
  
      /**
       * Checks a point if in parent's area.
       *
       * @param {cc.Point} pt
       *
       * @returns {Boolean}
       */
      clippingParentAreaContainPoint(pt: cc.Point): boolean
  
      /**
       * Clones a new widget.
       *
       * @returns {ccui.Widget}
       */
      clone(): ccui.Widget
  
      /**
       * A call back function when widget lost of focus.
       */
      didNotSelectSelf(): any
  
      /**
       * Dispatch a EventFocus through a EventDispatcher
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      dispatchFocusEvent(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * When a widget is in a layout, you could call this method to get the next focused widget within a specified direction.
       * If the widget is not in a layout, it will return itself
       *
       * @param {any} direction the direction to look for the next focused widget in a layout
       * @param {any} current the current focused widget
       */
      findNextFocusedWidget(direction: any, current: any): any
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomBoundary(): number
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomInParent(): number
  
      /**
       * Gets callback name of widget
       *
       * @returns v3.3{String|Null}
       */
      getCallbackName(): string | null
  
      /**
       * Gets callback type of widget
       *
       * @returns v3.3{String|null}
       */
      getCallbackType(): string | null
  
      /**
       * no matter what widget object you call this method on , it will return you the exact one focused widget
       */
      getCurrentFocusedWidget(): any
  
      /**
       * Get custom size of ccui.Widget
       *
       * @returns {cc.Size}
       */
      getCustomSize(): cc.Size
  
      /**
       * Returns the "class name" of widget.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Gets layout parameter
       *
       * @param {ccui.LayoutParameter.NONE|ccui.LayoutParameter.LINEAR|ccui.LayoutParameter.RELATIVE} type
       *
       * @returns {ccui.LayoutParameter}
       */
      getLayoutParameter(type: any): ccui.LayoutParameter
  
      /**
       * Gets layout size of ccui.Widget.
       *
       * @returns {cc.Size}
       */
      getLayoutSize(): cc.Size
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftBoundary(): number
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftInParent(): number
  
      /**
       * Gets node by tag
       *
       * @param {Number} tag
       *
       * @returns {cc.Node}
       */
      getNodeByTag(tag: number): cc.Node
  
      /**
       * Returns all children.
       *
       * @returns {Array}
       */
      getNodes(): any[]
  
      /**
       * Gets the percent (x,y) of the widget
       *
       * @returns {cc.Point} The percent (x,y) of the widget in OpenGL coordinates
       */
      getPositionPercent(): cc.Point
  
      /**
       * Gets the position type of the widget
       *
       * @returns {Number} the position type of widget
       */
      getPositionType(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightBoundary(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightInParent(): number
  
      /**
       * Returns size of widget
       *
       * @returns {cc.Size}
       */
      getSize(): cc.Size
  
      /**
       * Returns size percent of ccui.Widget
       *
       * @returns {cc.Point}
       */
      getSizePercent(): cc.Point
  
      /**
       * Gets the size type of widget.
       *
       * @returns {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} that is widget's size type
       */
      getSizeType(): any
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopBoundary(): number
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopInParent(): number
  
      /**
       * Gets the position of touch began event.
       *
       * @returns {cc.Point}
       */
      getTouchBeganPosition(): cc.Point
  
      /**
       * Gets the touch end point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch end point.
       */
      getTouchEndPos(): cc.Point
  
      /**
       * Gets the position of touch end event
       *
       * @returns {cc.Point}
       */
      getTouchEndPosition(): cc.Point
  
      /**
       * Gets the touch move point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch move point.
       */
      getTouchMovePos(): cc.Point
  
      /**
       * Gets the position of touch moved event
       *
       * @returns {cc.Point}
       */
      getTouchMovePosition(): cc.Point
  
      /**
       * Gets the touch began point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch began point.
       */
      getTouchStartPos(): cc.Point
  
      /**
       * Gets the Virtual Renderer of widget.
       *
       * @returns {ccui.Widget}
       */
      getVirtualRenderer(): ccui.Widget
  
      /**
       * Gets the content size of widget. Content size is widget's texture size.
       */
      getVirtualRendererSize(): any
  
      /**
       * The direct parent when it's a widget also, otherwise equals null
       *
       * @returns {ccui.Widget|null}
       */
      getWidgetParent(): ccui.Widget | null
  
      /**
       * get widget type
       *
       * @returns {ccui.Widget.TYPE_WIDGET|ccui.Widget.TYPE_CONTAINER}
       */
      getWidgetType(): any
  
      /**
       * Gets world position of ccui.Widget.
       *
       * @returns {cc.Point} world position of ccui.Widget.
       */
      getWorldPosition(): cc.Point
  
      /**
       * Checks a point if is in widget's space
       *
       * @param {cc.Point} pt
       *
       * @returns {boolean} true if the point is in widget's space, false otherwise.
       */
      hitTest(pt: cc.Point): boolean
  
      /**
       * Ignore the widget size
       *
       * @param {Boolean} ignore true that widget will ignore it's size, use texture size, false otherwise. Default value is true.
       */
      ignoreContentAdaptWithSize(ignore: boolean): any
  
      /**
       * initializes state of widget. please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
       *
       * @returns {boolean}
       */
      init(): boolean
  
      /**
       * Sends the touch event to widget's parent, its subclass will override it, e.g. ccui.ScrollView, ccui.PageView
       *
       * @param {Number} eventType
       * @param {ccui.Widget} sender
       * @param {cc.Touch} touch
       */
      interceptTouchEvent(eventType: number, sender: ccui.Widget, touch: cc.Touch): any
  
      /**
       * Determines if the widget is bright
       *
       * @returns {boolean} true if the widget is bright, false if the widget is dark.
       */
      isBright(): boolean
  
      /**
       * returns whether clipping parent widget contains point.
       *
       * @param {cc.Point} pt location point
       *
       * @returns {Boolean}
       */
      isClippingParentContainsPoint(pt: cc.Point): boolean
  
      /**
       * Determines if the widget is enabled
       *
       * @returns {boolean}
       */
      isEnabled(): boolean
  
      /**
       * Returns the flag which indicates whether the widget is flipped horizontally or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleX(sprite.getScaleX() * -1);
       *
       * @returns {Boolean} true if the widget is flipped horizontally, false otherwise.
       */
      isFlippedX(): boolean
  
      /**
       * Return the flag which indicates whether the widget is flipped vertically or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleY(widget.getScaleY() * -1);
       *
       * @returns {Boolean} true if the widget is flipped vertically, false otherwise.
       */
      isFlippedY(): boolean
  
      /**
       * Determines if the widget is on focused
       *
       * @returns {boolean} whether the widget is focused or not
       */
      isFocused(): boolean
  
      /**
       * returns whether the widget could accept focus.
       *
       * @returns {boolean} true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      isFocusEnabled(): boolean
  
      /**
       * Determines if the widget is highlighted
       *
       * @returns {boolean} true if the widget is highlighted, false if the widget is not highlighted .
       */
      isHighlighted(): boolean
  
      /**
       * Gets whether ignore the content size (custom size)
       *
       * @returns {boolean} true that widget will ignore it's size, use texture size, false otherwise.
       */
      isIgnoreContentAdaptWithSize(): boolean
  
      /**
       * Returns whether enable layout component of a widget
       *
       * @returns {Boolean} true represent the widget use Layout Component, false represent the widget couldn't use Layout Component.
       */
      isLayoutComponentEnabled(): boolean
  
      /**
       * Return whether the widget is propagate touch events to its parents or not
       *
       * @returns v3.2{boolean}
       */
      isPropagateTouchEvents(): boolean
  
      /**
       * Return whether the widget is swallowing touch or not
       *
       * @returns v3.2{boolean}
       */
      isSwallowTouches(): boolean
  
      /**
       * Returns whether or not touch is enabled.
       *
       * @returns {boolean} true if the widget is touch enabled, false if the widget is touch disabled.
       */
      isTouchEnabled(): boolean
  
      /**
       *
       *
       * @returns v3.2{boolean} true represent the widget use Unify Size, false represent the widget couldn't use Unify Size
       */
      isUnifySizeEnabled(): boolean
  
      /**
       * Calls updateSizeAndPosition and its parent's onEnter
       */
      onEnter(): any
  
      /**
       * Calls unscheduleUpdate and its parent's onExit
       */
      onExit(): any
  
      /**
       * This method is called when a focus change event happens
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      onFocusChange(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * The callback of touch began event.
       * If the bounding box of ccui.Widget contains the touch point, it will do the following things:
       * 1. sets highlight state,
       * 2. sends event to parent widget by interceptTouchEvent
       * 3. calls the callback of touch began event.
       * 4. returns true,
       * otherwise returns false directly.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       *
       * @returns {boolean}
       */
      onTouchBegan(touch: cc.Touch, event: cc.Event): boolean
  
      /**
       * A call back function called when widget is selected, and on touch canceled.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchCancelled(touchPoint: cc.Point): any
  
      /**
       * The callback of touch end event
       * It sends event to parent widget by interceptTouchEvent,
       * calls the callback of touch end event (highlight= true) or touch canceled event (highlight= false).
       * sets the highlight state to false ,
       *
       * @param {any} touch
       * @param {any} event
       */
      onTouchEnded(touch: any, event: any): any
  
      /**
       * A call back function called when widget is selected, and on touch long clicked.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchLongClicked(touchPoint: cc.Point): any
  
      /**
       * The callback of touch moved event.
       * It sets the highlight state by touch, sends event to parent widget by interceptTouchEvent and calls the callback of touch moved event.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       */
      onTouchMoved(touch: cc.Touch, event: cc.Event): any
  
      /**
       * Removes all node
       */
      removeAllNodes(): any
  
      /**
       * Removes a node from ccui.Widget
       *
       * @param {cc.Node} node
       * @param {Boolean} cleanup
       */
      removeNode(node: cc.Node, cleanup: boolean): any
  
      /**
       * Removes node by tag
       *
       * @param {Number} tag
       * @param {Boolean} cleanup
       */
      removeNodeByTag(tag: number, cleanup: boolean): any
  
      /**
       * when a widget calls this method, it will get focus immediately.
       */
      requestFocus(): any
  
      /**
       * Sets whether the widget is bright. The default value is true, a widget is default to bright
       *
       * @param {Boolean} bright true if the widget is bright, false if the widget is dark.
       */
      setBright(bright: boolean): any
  
      /**
       * To set the bright style of ccui.Widget.
       *
       * @param {Number} style BRIGHT_NORMAL the widget is normal state, BRIGHT_HIGHLIGHT the widget is height light state.
       */
      setBrightStyle(style: number): any
  
      /**
       * Sets callback name to widget.
       *
       * @param {String} callbackName
       */
      setCallbackName(callbackName: string): any
  
      /**
       * Sets callback type to widget
       *
       * @param {String} callbackType
       */
      setCallbackType(callbackType: string): any
  
      /**
       * Sets _customSize of ccui.Widget, if ignoreSize is true, the content size is its renderer's contentSize, otherwise the content size is parameter.
       * and updates size percent by parent content size. At last, updates its children's size and position.
       *
       * @param {cc.Size|Number} contentSize content size or width of content size
       * @param {Number} height
       */
      setContentSize(contentSize: cc.Size | number, height: number): any
  
      /**
       * Sets whether the widget is enabled
       * true if the widget is enabled, widget may be touched , false if the widget is disabled, widget cannot be touched.
       * The default value is true, a widget is default to enabled
       *
       * @param {Boolean} enabled
       */
      setEnabled(enabled: boolean): any
  
      /**
       * Sets whether the widget should be flipped horizontally or not.
       *
       * @param {Boolean} flipX true if the widget should be flipped horizontally, false otherwise.
       */
      setFlippedX(flipX: boolean): any
  
      /**
       * Sets whether the widget should be flipped vertically or not.
       *
       * @param {Boolean} flipY true if the widget should be flipped vertically, false otherwise.
       */
      setFlippedY(flipY: boolean): any
  
      /**
       * Sets whether the widget is on focused
       * The default value is false, a widget is default to not on focused
       *
       * @param {boolean} focus pass true to let the widget get focus or pass false to let the widget lose focus
       */
      setFocused(focus: boolean): any
  
      /**
       * sets whether the widget could accept focus.
       *
       * @param {Boolean} enable true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      setFocusEnabled(enable: boolean): any
  
      /**
       * Sets whether the widget is highlighted. The default value is false, a widget is default to not highlighted
       *
       * @param {any} highlight true if the widget is highlighted, false if the widget is not highlighted.
       */
      setHighlighted(highlight: any): any
  
      /**
       * Whether enable layout component of a widget
       *
       * @param {Boolean} enable enable layout Component of a widget
       */
      setLayoutComponentEnabled(enable: boolean): any
  
      /**
       * Gets LayoutParameter of widget.
       *
       * @param {ccui.LayoutParameter} parameter
       */
      setLayoutParameter(parameter: ccui.LayoutParameter): any
  
      /**
       * Changes the position (x,y) of the widget .
       * The original point (0,0) is at the left-bottom corner of screen.
       *
       * @param {cc.Point|Number} pos
       * @param {Number} posY
       */
      setPosition(pos: cc.Point | number, posY: number): any
  
      /**
       * Changes the position (x,y) of the widget
       *
       * @param {cc.Point} percent
       */
      setPositionPercent(percent: cc.Point): any
  
      /**
       * Changes the position type of the widget
       *
       * @param {Number} type the position type of widget
       */
      setPositionType(type: number): any
  
      /**
       * Allow widget touch events to propagate to its parents. Set false will disable propagation
       *
       * @param {Boolean} isPropagate
       */
      setPropagateTouchEvents(isPropagate: boolean): any
  
      /**
       * Changes the size that is widget's size
       *
       * @param {cc.Size} size that is widget's size
       */
      setSize(size: cc.Size): any
  
      /**
       * Changes the percent that is widget's percent size
       *
       * @param {cc.Point} percent that is widget's percent size, width and height value from 0 to 1.
       */
      setSizePercent(percent: cc.Point): any
  
      /**
       * TEXTURE_RES_TYPE
       * Changes the size type of widget.
       *
       * @param {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} type that is widget's size type
       */
      setSizeType(type: any): any
  
      /**
       * Specify widget to swallow touches or not
       *
       * @param {Boolean} swallow
       */
      setSwallowTouches(swallow: boolean): any
  
      /**
       * Sets whether the widget is touch enabled. The default value is false, a widget is default to touch disabled
       *
       * @param {Boolean} enable true if the widget is touch enabled, false if the widget is touch disabled.
       */
      setTouchEnabled(enable: boolean): any
  
      /**
       *
       *
       * @param {Boolean} enable enable Unify Size of a widget
       */
      setUnifySizeEnabled(enable: boolean): any
  
      /**
       * updates its size by size type and its position by position type.
       *
       * @param {cc.Size} parentSize parent size
       */
      updateSizeAndPosition(parentSize: cc.Size): any
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    }
  }
  
  declare namespace ccui {
    interface IRelativeBox extends ccui.ILayout {
  
  
    }
  
    interface IRelativeBoxOverrides {
  
    }
  
  
  
    class RelativeBox implements IRelativeBox, IRelativeBoxOverrides {
  
      /**
       * The constructor of ccui.RelativeBox
       *
       * @param {cc.Size} size
       */
      constructor(size: cc.Size)
  
  
  
  
      /**
       * Creates a relative box
       *
       * @param {cc.Size} size
       *
       * @returns {ccui.RelativeBox}
       */
      static create(size: cc.Size): ccui.RelativeBox
  
  
  
  
  
  
  
      /**
       * - Indicate whether clipping is enabled
       */
      clippingEnabled: boolean
  
      /**
       *
       */
      clippingType: any
  
      /**
       *
       */
      layoutType: any
  
      /**
       * Adds a widget to the container.
       *
       * @param {ccui.Widget} widget
       * @param {Number} zOrder
       * @param {Number|string} tag tag or name
       */
      addChild(widget: ccui.Widget, zOrder: number, tag: number | string): any
  
      /**
       * force refresh widget layout
       */
      forceDoLayout(): any
  
      /**
       * Gets background color of ccui.Layout, if color type is Layout.COLOR_SOLID.
       *
       * @returns {cc.Color}
       */
      getBackGroundColor(): cc.Color
  
      /**
       * Get background opacity value of ccui.Layout.
       *
       * @returns {Number}
       */
      getBackGroundColorOpacity(): number
  
      /**
       * Get background color type of ccui.Layout.
       *
       * @returns {ccui.Layout.BG_COLOR_NONE|ccui.Layout.BG_COLOR_SOLID|ccui.Layout.BG_COLOR_GRADIENT}
       */
      getBackGroundColorType(): any
  
      /**
       * Gets background color vector of ccui.Layout, if color type is Layout.COLOR_GRADIENT
       *
       * @returns {cc.Point}
       */
      getBackGroundColorVector(): cc.Point
  
      /**
       * Gets background end color of ccui.Layout
       *
       * @returns {cc.Color}
       */
      getBackGroundEndColor(): cc.Color
  
      /**
       * Gets background image capinsets of ccui.Layout.
       *
       * @returns {cc.Rect}
       */
      getBackGroundImageCapInsets(): cc.Rect
  
      /**
       * Gets backGround image color
       *
       * @returns {cc.Color}
       */
      getBackGroundImageColor(): cc.Color
  
      /**
       * Gets backGround image opacity
       *
       * @returns {Number}
       */
      getBackGroundImageOpacity(): number
  
      /**
       * Gets background image texture size.
       *
       * @returns {cc.Size}
       */
      getBackGroundImageTextureSize(): cc.Size
  
      /**
       * Gets background start color of ccui.Layout
       *
       * @returns {cc.Color}
       */
      getBackGroundStartColor(): cc.Color
  
      /**
       * Gets clipping type of ccui.Layout
       *
       * @returns {ccui.Layout.CLIPPING_STENCIL|ccui.Layout.CLIPPING_SCISSOR}
       */
      getClippingType(): any
  
      /**
       * Gets LayoutType of ccui.Layout.
       *
       * @returns {null}
       */
      getLayoutType(): null
  
      /**
       * Get whether background image is use scale9 renderer.
       *
       * @returns {Boolean}
       */
      isBackGroundImageScale9Enabled(): boolean
  
      /**
       * Gets if layout is clipping enabled.
       *
       * @returns {Boolean} if layout is clipping enabled.
       */
      isClippingEnabled(): boolean
  
      /**
       * Gets whether enable focus loop
       *
       * @returns {boolean} If focus loop is enabled, then it will return true, otherwise it returns false. The default value is false.
       */
      isLoopFocus(): boolean
  
      /**
       * Returns whether the layout will pass the focus to its children or not. The default value is true
       *
       * @returns {boolean} To query whether the layout will pass the focus to its children or not. The default value is true
       */
      isPassFocusToChild(): boolean
  
      /**
       * To specify a user-defined functor to decide which child widget of the layout should get focused
       *
       * @param {Number} direction
       * @param {ccui.Widget} current
       */
      onPassFocusToChild(direction: number, current: ccui.Widget): any
  
      /**
       * Removes all children from the container with a cleanup, and sets the layout dirty flag to true.
       *
       * @param {Boolean} cleanup
       */
      removeAllChildren(cleanup: boolean): any
  
      /**
       * Removes all children from the container, do a cleanup to all running actions depending on the cleanup parameter,
       * and sets the layout dirty flag to true.
       *
       * @param {Boolean} cleanup true if all running actions on all children nodes should be cleanup, false otherwise.
       */
      removeAllChildrenWithCleanup(cleanup: boolean): any
  
      /**
       * Remove the background image of ccui.Layout.
       */
      removeBackGroundImage(): any
  
      /**
       * Removes child widget from ccui.Layout, and sets the layout dirty flag to true.
       *
       * @param {ccui.Widget} widget
       * @param {Boolean} cleanup
       */
      removeChild(widget: ccui.Widget, cleanup: boolean): any
  
      /**
       * request to refresh widget layout, it will do layout at visit calls
       */
      requestDoLayout(): any
  
      /**
       * Sets background color for layout, if color type is Layout.COLOR_SOLID
       *
       * @param {cc.Color} color
       * @param {cc.Color} endColor
       */
      setBackGroundColor(color: cc.Color, endColor: cc.Color): any
  
      /**
       * Sets background opacity to ccui.Layout.
       *
       * @param {number} opacity
       */
      setBackGroundColorOpacity(opacity: number): any
  
      /**
       * Sets Color Type for ccui.Layout.
       *
       * @param {ccui.Layout.BG_COLOR_NONE|ccui.Layout.BG_COLOR_SOLID|ccui.Layout.BG_COLOR_GRADIENT} type
       */
      setBackGroundColorType(type: any): any
  
      /**
       * Sets background color vector for layout, if color type is Layout.COLOR_GRADIENT
       *
       * @param {cc.Point} vector
       */
      setBackGroundColorVector(vector: cc.Point): any
  
      /**
       * Sets a background image for layout
       *
       * @param {String} fileName
       * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
       */
      setBackGroundImage(fileName: string, texType: any): any
  
      /**
       * Sets a background image CapInsets for layout, if the background image is a scale9 render.
       *
       * @param {cc.Rect} capInsets capinsets of background image.
       */
      setBackGroundImageCapInsets(capInsets: cc.Rect): any
  
      /**
       * Sets backGround image color
       *
       * @param {cc.Color} color
       */
      setBackGroundImageColor(color: cc.Color): any
  
      /**
       * Sets backGround image Opacity
       *
       * @param {Number} opacity
       */
      setBackGroundImageOpacity(opacity: number): any
  
      /**
       * Sets background image use scale9 renderer.
       *
       * @param {Boolean} able true that use scale9 renderer, false otherwise.
       */
      setBackGroundImageScale9Enabled(able: boolean): any
  
      /**
       * Changes if layout can clip it's content and locChild.
       * If you really need this, please enable it. But it would reduce the rendering efficiency.
       *
       * @param {Boolean} able clipping enabled.
       */
      setClippingEnabled(able: boolean): any
  
      /**
       * Sets clipping type to ccui.Layout
       *
       * @param {ccui.Layout.CLIPPING_STENCIL|ccui.Layout.CLIPPING_SCISSOR} type
       */
      setClippingType(type: any): any
  
      /**
       * Sets LayoutType to ccui.Layout, LayoutManager will do layout by layout type..
       *
       * @param {ccui.Layout.ABSOLUTE|ccui.Layout.LINEAR_VERTICAL|ccui.Layout.LINEAR_HORIZONTAL|ccui.Layout.RELATIVE} type
       */
      setLayoutType(type: any): any
  
      /**
       * If a layout is loop focused which means that the focus movement will be inside the layout
       *
       * @param {Boolean} loop pass true to let the focus movement loop inside the layout
       */
      setLoopFocus(loop: boolean): any
  
      /**
       * Specifies whether the layout pass its focus to its child
       *
       * @param {any} pass To specify whether the layout pass its focus to its child
       */
      setPassFocusToChild(pass: any): any
  
      /**
       * Calls adaptRenderers (its subclass will override it.) and do layout.
       * If clippingEnabled is true, it will clip/scissor area.
       *
       * @param {cc.Node.RenderCmd} parentCmd
       */
      visit(parentCmd: any): any
  
  
      /**
       * - The action tag of the widget
       */
      actionTag: number
  
      /**
       * - Indicate whether the widget is bright
       */
      bright: boolean
  
      /**
       * - Indicate whether the widget is enabled
       */
      enabled: boolean
  
      /**
       * - Indicate whether the widget is focused
       */
      focused: boolean
  
      /**
       * - Height in percentage of parent height
       */
      heightPercent: number
  
      /**
       * - The name of the widget
       */
      name: string
  
      /**
       * When a widget lose/get focus, this method will be called. Be Caution when you provide your own version,
       * you must call widget.setFocused(true/false) to change the focus state of the current focused widget;
       */
      onFocusChanged: any
  
      /**
       * use this function to manually specify the next focused widget regards to each direction
       */
      onNextFocusedWidget: any
  
      /**
       * - The size type of the widget
       */
      sizeType: any
  
      /**
       * - Indicate whether touch events are enabled
       */
      touchEnabled: boolean
  
      /**
       * - Indicate whether the update function is scheduled
       */
      updateEnabled: boolean
  
      /**
       * - <@readonly> The direct parent when it's a widget also, otherwise equals null
       */
      widgetParent: ccui.Widget
  
      /**
       * - <@readonly> The type of the widget
       */
      widgetType: any
  
      /**
       * - Width in percentage of parent width
       */
      widthPercent: number
  
      /**
       * - Position x in percentage of width
       */
      xPercent: number
  
      /**
       * - Position y in percentage of height
       */
      yPercent: number
  
      /**
       * Set a event handler to the widget in order to use cocostudio editor and framework
       *
       * @param {function} callback
       */
      addCCSEventListener(callback: Function): any
  
      /**
       * Adds a node for widget (this function is deleted in -x)
       *
       * @param {cc.Node} node
       * @param {Number} zOrder
       * @param {Number} tag
       */
      addNode(node: cc.Node, zOrder: number, tag: number): any
  
      /**
       * Sets the touch event target/selector of the ccui.Widget
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addTouchEventListener(selector: Function, target: object): any
  
      /**
       * Calls the checkChildInfo of widget's parent, its subclass will override it.
       *
       * @param {number} handleState
       * @param {ccui.Widget} sender
       * @param {cc.Point} touchPoint
       */
      checkChildInfo(handleState: number, sender: ccui.Widget, touchPoint: cc.Point): any
  
      /**
       * Checks a point if in parent's area.
       *
       * @param {cc.Point} pt
       *
       * @returns {Boolean}
       */
      clippingParentAreaContainPoint(pt: cc.Point): boolean
  
      /**
       * Clones a new widget.
       *
       * @returns {ccui.Widget}
       */
      clone(): ccui.Widget
  
      /**
       * A call back function when widget lost of focus.
       */
      didNotSelectSelf(): any
  
      /**
       * Dispatch a EventFocus through a EventDispatcher
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      dispatchFocusEvent(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * When a widget is in a layout, you could call this method to get the next focused widget within a specified direction.
       * If the widget is not in a layout, it will return itself
       *
       * @param {any} direction the direction to look for the next focused widget in a layout
       * @param {any} current the current focused widget
       */
      findNextFocusedWidget(direction: any, current: any): any
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomBoundary(): number
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomInParent(): number
  
      /**
       * Gets callback name of widget
       *
       * @returns v3.3{String|Null}
       */
      getCallbackName(): string | null
  
      /**
       * Gets callback type of widget
       *
       * @returns v3.3{String|null}
       */
      getCallbackType(): string | null
  
      /**
       * no matter what widget object you call this method on , it will return you the exact one focused widget
       */
      getCurrentFocusedWidget(): any
  
      /**
       * Get custom size of ccui.Widget
       *
       * @returns {cc.Size}
       */
      getCustomSize(): cc.Size
  
      /**
       * Returns the "class name" of widget.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Gets layout parameter
       *
       * @param {ccui.LayoutParameter.NONE|ccui.LayoutParameter.LINEAR|ccui.LayoutParameter.RELATIVE} type
       *
       * @returns {ccui.LayoutParameter}
       */
      getLayoutParameter(type: any): ccui.LayoutParameter
  
      /**
       * Gets layout size of ccui.Widget.
       *
       * @returns {cc.Size}
       */
      getLayoutSize(): cc.Size
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftBoundary(): number
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftInParent(): number
  
      /**
       * Gets node by tag
       *
       * @param {Number} tag
       *
       * @returns {cc.Node}
       */
      getNodeByTag(tag: number): cc.Node
  
      /**
       * Returns all children.
       *
       * @returns {Array}
       */
      getNodes(): any[]
  
      /**
       * Gets the percent (x,y) of the widget
       *
       * @returns {cc.Point} The percent (x,y) of the widget in OpenGL coordinates
       */
      getPositionPercent(): cc.Point
  
      /**
       * Gets the position type of the widget
       *
       * @returns {Number} the position type of widget
       */
      getPositionType(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightBoundary(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightInParent(): number
  
      /**
       * Returns size of widget
       *
       * @returns {cc.Size}
       */
      getSize(): cc.Size
  
      /**
       * Returns size percent of ccui.Widget
       *
       * @returns {cc.Point}
       */
      getSizePercent(): cc.Point
  
      /**
       * Gets the size type of widget.
       *
       * @returns {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} that is widget's size type
       */
      getSizeType(): any
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopBoundary(): number
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopInParent(): number
  
      /**
       * Gets the position of touch began event.
       *
       * @returns {cc.Point}
       */
      getTouchBeganPosition(): cc.Point
  
      /**
       * Gets the touch end point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch end point.
       */
      getTouchEndPos(): cc.Point
  
      /**
       * Gets the position of touch end event
       *
       * @returns {cc.Point}
       */
      getTouchEndPosition(): cc.Point
  
      /**
       * Gets the touch move point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch move point.
       */
      getTouchMovePos(): cc.Point
  
      /**
       * Gets the position of touch moved event
       *
       * @returns {cc.Point}
       */
      getTouchMovePosition(): cc.Point
  
      /**
       * Gets the touch began point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch began point.
       */
      getTouchStartPos(): cc.Point
  
      /**
       * Gets the Virtual Renderer of widget.
       *
       * @returns {ccui.Widget}
       */
      getVirtualRenderer(): ccui.Widget
  
      /**
       * Gets the content size of widget. Content size is widget's texture size.
       */
      getVirtualRendererSize(): any
  
      /**
       * The direct parent when it's a widget also, otherwise equals null
       *
       * @returns {ccui.Widget|null}
       */
      getWidgetParent(): ccui.Widget | null
  
      /**
       * get widget type
       *
       * @returns {ccui.Widget.TYPE_WIDGET|ccui.Widget.TYPE_CONTAINER}
       */
      getWidgetType(): any
  
      /**
       * Gets world position of ccui.Widget.
       *
       * @returns {cc.Point} world position of ccui.Widget.
       */
      getWorldPosition(): cc.Point
  
      /**
       * Checks a point if is in widget's space
       *
       * @param {cc.Point} pt
       *
       * @returns {boolean} true if the point is in widget's space, false otherwise.
       */
      hitTest(pt: cc.Point): boolean
  
      /**
       * Ignore the widget size
       *
       * @param {Boolean} ignore true that widget will ignore it's size, use texture size, false otherwise. Default value is true.
       */
      ignoreContentAdaptWithSize(ignore: boolean): any
  
      /**
       * initializes state of widget. please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
       *
       * @returns {boolean}
       */
      init(): boolean
  
      /**
       * Sends the touch event to widget's parent, its subclass will override it, e.g. ccui.ScrollView, ccui.PageView
       *
       * @param {Number} eventType
       * @param {ccui.Widget} sender
       * @param {cc.Touch} touch
       */
      interceptTouchEvent(eventType: number, sender: ccui.Widget, touch: cc.Touch): any
  
      /**
       * Determines if the widget is bright
       *
       * @returns {boolean} true if the widget is bright, false if the widget is dark.
       */
      isBright(): boolean
  
      /**
       * returns whether clipping parent widget contains point.
       *
       * @param {cc.Point} pt location point
       *
       * @returns {Boolean}
       */
      isClippingParentContainsPoint(pt: cc.Point): boolean
  
      /**
       * Determines if the widget is enabled
       *
       * @returns {boolean}
       */
      isEnabled(): boolean
  
      /**
       * Returns the flag which indicates whether the widget is flipped horizontally or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleX(sprite.getScaleX() * -1);
       *
       * @returns {Boolean} true if the widget is flipped horizontally, false otherwise.
       */
      isFlippedX(): boolean
  
      /**
       * Return the flag which indicates whether the widget is flipped vertically or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleY(widget.getScaleY() * -1);
       *
       * @returns {Boolean} true if the widget is flipped vertically, false otherwise.
       */
      isFlippedY(): boolean
  
      /**
       * Determines if the widget is on focused
       *
       * @returns {boolean} whether the widget is focused or not
       */
      isFocused(): boolean
  
      /**
       * returns whether the widget could accept focus.
       *
       * @returns {boolean} true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      isFocusEnabled(): boolean
  
      /**
       * Determines if the widget is highlighted
       *
       * @returns {boolean} true if the widget is highlighted, false if the widget is not highlighted .
       */
      isHighlighted(): boolean
  
      /**
       * Gets whether ignore the content size (custom size)
       *
       * @returns {boolean} true that widget will ignore it's size, use texture size, false otherwise.
       */
      isIgnoreContentAdaptWithSize(): boolean
  
      /**
       * Returns whether enable layout component of a widget
       *
       * @returns {Boolean} true represent the widget use Layout Component, false represent the widget couldn't use Layout Component.
       */
      isLayoutComponentEnabled(): boolean
  
      /**
       * Return whether the widget is propagate touch events to its parents or not
       *
       * @returns v3.2{boolean}
       */
      isPropagateTouchEvents(): boolean
  
      /**
       * Return whether the widget is swallowing touch or not
       *
       * @returns v3.2{boolean}
       */
      isSwallowTouches(): boolean
  
      /**
       * Returns whether or not touch is enabled.
       *
       * @returns {boolean} true if the widget is touch enabled, false if the widget is touch disabled.
       */
      isTouchEnabled(): boolean
  
      /**
       *
       *
       * @returns v3.2{boolean} true represent the widget use Unify Size, false represent the widget couldn't use Unify Size
       */
      isUnifySizeEnabled(): boolean
  
      /**
       * Calls updateSizeAndPosition and its parent's onEnter
       */
      onEnter(): any
  
      /**
       * Calls unscheduleUpdate and its parent's onExit
       */
      onExit(): any
  
      /**
       * This method is called when a focus change event happens
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      onFocusChange(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * The callback of touch began event.
       * If the bounding box of ccui.Widget contains the touch point, it will do the following things:
       * 1. sets highlight state,
       * 2. sends event to parent widget by interceptTouchEvent
       * 3. calls the callback of touch began event.
       * 4. returns true,
       * otherwise returns false directly.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       *
       * @returns {boolean}
       */
      onTouchBegan(touch: cc.Touch, event: cc.Event): boolean
  
      /**
       * A call back function called when widget is selected, and on touch canceled.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchCancelled(touchPoint: cc.Point): any
  
      /**
       * The callback of touch end event
       * It sends event to parent widget by interceptTouchEvent,
       * calls the callback of touch end event (highlight= true) or touch canceled event (highlight= false).
       * sets the highlight state to false ,
       *
       * @param {any} touch
       * @param {any} event
       */
      onTouchEnded(touch: any, event: any): any
  
      /**
       * A call back function called when widget is selected, and on touch long clicked.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchLongClicked(touchPoint: cc.Point): any
  
      /**
       * The callback of touch moved event.
       * It sets the highlight state by touch, sends event to parent widget by interceptTouchEvent and calls the callback of touch moved event.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       */
      onTouchMoved(touch: cc.Touch, event: cc.Event): any
  
      /**
       * Removes all node
       */
      removeAllNodes(): any
  
      /**
       * Removes a node from ccui.Widget
       *
       * @param {cc.Node} node
       * @param {Boolean} cleanup
       */
      removeNode(node: cc.Node, cleanup: boolean): any
  
      /**
       * Removes node by tag
       *
       * @param {Number} tag
       * @param {Boolean} cleanup
       */
      removeNodeByTag(tag: number, cleanup: boolean): any
  
      /**
       * when a widget calls this method, it will get focus immediately.
       */
      requestFocus(): any
  
      /**
       * Sets whether the widget is bright. The default value is true, a widget is default to bright
       *
       * @param {Boolean} bright true if the widget is bright, false if the widget is dark.
       */
      setBright(bright: boolean): any
  
      /**
       * To set the bright style of ccui.Widget.
       *
       * @param {Number} style BRIGHT_NORMAL the widget is normal state, BRIGHT_HIGHLIGHT the widget is height light state.
       */
      setBrightStyle(style: number): any
  
      /**
       * Sets callback name to widget.
       *
       * @param {String} callbackName
       */
      setCallbackName(callbackName: string): any
  
      /**
       * Sets callback type to widget
       *
       * @param {String} callbackType
       */
      setCallbackType(callbackType: string): any
  
      /**
       * Sets _customSize of ccui.Widget, if ignoreSize is true, the content size is its renderer's contentSize, otherwise the content size is parameter.
       * and updates size percent by parent content size. At last, updates its children's size and position.
       *
       * @param {cc.Size|Number} contentSize content size or width of content size
       * @param {Number} height
       */
      setContentSize(contentSize: cc.Size | number, height: number): any
  
      /**
       * Sets whether the widget is enabled
       * true if the widget is enabled, widget may be touched , false if the widget is disabled, widget cannot be touched.
       * The default value is true, a widget is default to enabled
       *
       * @param {Boolean} enabled
       */
      setEnabled(enabled: boolean): any
  
      /**
       * Sets whether the widget should be flipped horizontally or not.
       *
       * @param {Boolean} flipX true if the widget should be flipped horizontally, false otherwise.
       */
      setFlippedX(flipX: boolean): any
  
      /**
       * Sets whether the widget should be flipped vertically or not.
       *
       * @param {Boolean} flipY true if the widget should be flipped vertically, false otherwise.
       */
      setFlippedY(flipY: boolean): any
  
      /**
       * Sets whether the widget is on focused
       * The default value is false, a widget is default to not on focused
       *
       * @param {boolean} focus pass true to let the widget get focus or pass false to let the widget lose focus
       */
      setFocused(focus: boolean): any
  
      /**
       * sets whether the widget could accept focus.
       *
       * @param {Boolean} enable true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      setFocusEnabled(enable: boolean): any
  
      /**
       * Sets whether the widget is highlighted. The default value is false, a widget is default to not highlighted
       *
       * @param {any} highlight true if the widget is highlighted, false if the widget is not highlighted.
       */
      setHighlighted(highlight: any): any
  
      /**
       * Whether enable layout component of a widget
       *
       * @param {Boolean} enable enable layout Component of a widget
       */
      setLayoutComponentEnabled(enable: boolean): any
  
      /**
       * Gets LayoutParameter of widget.
       *
       * @param {ccui.LayoutParameter} parameter
       */
      setLayoutParameter(parameter: ccui.LayoutParameter): any
  
      /**
       * Changes the position (x,y) of the widget .
       * The original point (0,0) is at the left-bottom corner of screen.
       *
       * @param {cc.Point|Number} pos
       * @param {Number} posY
       */
      setPosition(pos: cc.Point | number, posY: number): any
  
      /**
       * Changes the position (x,y) of the widget
       *
       * @param {cc.Point} percent
       */
      setPositionPercent(percent: cc.Point): any
  
      /**
       * Changes the position type of the widget
       *
       * @param {Number} type the position type of widget
       */
      setPositionType(type: number): any
  
      /**
       * Allow widget touch events to propagate to its parents. Set false will disable propagation
       *
       * @param {Boolean} isPropagate
       */
      setPropagateTouchEvents(isPropagate: boolean): any
  
      /**
       * Changes the size that is widget's size
       *
       * @param {cc.Size} size that is widget's size
       */
      setSize(size: cc.Size): any
  
      /**
       * Changes the percent that is widget's percent size
       *
       * @param {cc.Point} percent that is widget's percent size, width and height value from 0 to 1.
       */
      setSizePercent(percent: cc.Point): any
  
      /**
       * TEXTURE_RES_TYPE
       * Changes the size type of widget.
       *
       * @param {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} type that is widget's size type
       */
      setSizeType(type: any): any
  
      /**
       * Specify widget to swallow touches or not
       *
       * @param {Boolean} swallow
       */
      setSwallowTouches(swallow: boolean): any
  
      /**
       * Sets whether the widget is touch enabled. The default value is false, a widget is default to touch disabled
       *
       * @param {Boolean} enable true if the widget is touch enabled, false if the widget is touch disabled.
       */
      setTouchEnabled(enable: boolean): any
  
      /**
       *
       *
       * @param {Boolean} enable enable Unify Size of a widget
       */
      setUnifySizeEnabled(enable: boolean): any
  
      /**
       * updates its size by size type and its position by position type.
       *
       * @param {cc.Size} parentSize parent size
       */
      updateSizeAndPosition(parentSize: cc.Size): any
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    }
  }
  
  declare namespace ccui {
    interface IScrollView extends ccui.ILayout {
  
      bounceEnabled: boolean
  
      direction: any
  
      inertiaScrollEnabled: boolean
  
      innerHeight: number
  
      innerWidth: number
  
      touchTotalTimeThreshold: number
  
      addEventListener(selector: Function): any
  
      addEventListenerScrollView(selector: Function, target: object): any
  
      getChildByName(name: string): ccui.Widget
  
      getChildByTag(tag: number): ccui.Widget
  
      getChildren(): any[]
  
      getChildrenCount(): number
  
      getDirection(): any
  
      getInnerContainer(): ccui.Layout
  
      getInnerContainerPosition(): any
  
      getInnerContainerSize(): cc.Size
  
      getScrollBarAutoHideTime(): number
  
      getScrollBarColor(): cc.Color
  
      getScrollBarOpacity(): number
  
      getScrollBarPositionFromCornerForHorizontal(): cc.Point
  
      getScrollBarPositionFromCornerForVertical(): cc.Point
  
      getScrollBarWidth(): number
  
      getTouchTotalTimeThreshold(): number
  
      isBounceEnabled(): boolean
  
      isInertiaScrollEnabled(): boolean
  
      isScrollBarAutoHideEnabled(): boolean
  
      isScrollBarEnabled(): boolean
  
      jumpToBottom(): any
  
      jumpToBottomLeft(): any
  
      jumpToBottomRight(): any
  
      jumpToLeft(): any
  
      jumpToPercentBothDirection(percent: cc.Point): any
  
      jumpToPercentHorizontal(percent: number): any
  
      jumpToPercentVertical(percent: number): any
  
      jumpToRight(): any
  
      jumpToTop(): any
  
      jumpToTopLeft(): any
  
      jumpToTopRight(): any
  
      scrollToBottom(time: number, attenuated: boolean): any
  
      scrollToBottomLeft(time: number, attenuated: boolean): any
  
      scrollToBottomRight(time: number, attenuated: boolean): any
  
      scrollToLeft(time: number, attenuated: boolean): any
  
      scrollToPercentBothDirection(percent: cc.Point, time: number, attenuated: boolean): any
  
      scrollToPercentHorizontal(percent: number, time: number, attenuated: boolean): any
  
      scrollToPercentVertical(percent: number, time: number, attenuated: boolean): any
  
      scrollToRight(time: number, attenuated: boolean): any
  
      scrollToTop(time: number, attenuated: boolean): any
  
      scrollToTopLeft(time: number, attenuated: boolean): any
  
      scrollToTopRight(time: number, attenuated: boolean): any
  
      setBounceEnabled(enabled: boolean): any
  
      setDirection(dir: any): any
  
      setInertiaScrollEnabled(enabled: boolean): any
  
      setInnerContainerPosition(position: cc.Point): any
  
      setInnerContainerSize(size: cc.Size): any
  
      setScrollBarAutoHideEnabled(autoHideEnabled: boolean): any
  
      setScrollBarAutoHideTime(autoHideTime: number): any
  
      setScrollBarColor(color: cc.Color): any
  
      setScrollBarEnabled(enabled: boolean): any
  
      setScrollBarOpacity(opacity: number): any
  
      setScrollBarPositionFromCorner(positionFromCorner: cc.Point): any
  
      setScrollBarPositionFromCornerForHorizontal(positionFromCorner: cc.Point): any
  
      setScrollBarPositionFromCornerForVertical(positionFromCorner: cc.Point): any
  
      setScrollBarWidth(width: number): any
  
      setTouchTotalTimeThreshold(touchTotalTimeThreshold: number): any
  
      stopAutoScroll(): any
  
      update(dt: number): any
    }
  
    interface IScrollViewOverrides {
  
      addChild(widget: cc.Node, zOrder: number, tag: number | string): boolean
  
      addNode(node: cc.Node, zOrder: number, tag: number): any
  
      findNextFocusedWidget(_direction: number, current: ccui.Widget): ccui.Widget
  
      getDescription(): string
  
      getLayoutType(): any
  
      getNodeByTag(tag: number): cc.Node
  
      getNodes(): any[]
  
      init(): boolean
  
      interceptTouchEvent(event: number, sender: ccui.Widget, touch: cc.Touch): any
  
      onEnter(): any
  
      onTouchBegan(touch: cc.Touch, event: cc.Event): boolean
  
      onTouchCancelled(touch: cc.Touch, event: cc.Event): any
  
      onTouchEnded(touch: cc.Touch, event: cc.Event): any
  
      onTouchMoved(touch: cc.Touch, event: cc.Event): any
  
      removeAllChildren(): any
  
      removeAllChildrenWithCleanup(cleanup: boolean): any
  
      removeAllNodes(): any
  
      removeChild(child: ccui.Widget, cleanup: boolean): boolean
  
      removeNode(node: cc.Node): any
  
      removeNodeByTag(tag: number): any
  
      setLayoutType(type: any): any
    }
  
  
  
    class ScrollView implements IScrollView, IScrollViewOverrides {
  
      /**
       * Allocates and initializes a UIScrollView.
       * Constructor of ccui.ScrollView. override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
       */
      constructor()
  
  
  
      /**
       * The both flag of ccui.ScrollView's direction.
       */
      static DIR_BOTH: any
  
      /**
       * The horizontal flag of ccui.ScrollView's direction.
       */
      static DIR_HORIZONTAL: any
  
      /**
       * The none flag of ccui.ScrollView's direction.
       */
      static DIR_NONE: any
  
      /**
       * The vertical flag of ccui.ScrollView's direction.
       */
      static DIR_VERTICAL: any
  
      /**
       * The flag autoscroll ended of ccui.ScrollView's event.
       */
      static EVENT_AUTOSCROLL_ENDED: any
  
      /**
       * The flag bounce bottom of ccui.ScrollView's event.
       */
      static EVENT_BOUNCE_BOTTOM: any
  
      /**
       * The flag bounce left of ccui.ScrollView's event.
       */
      static EVENT_BOUNCE_LEFT: any
  
      /**
       * The flag bounce right of ccui.ScrollView's event.
       */
      static EVENT_BOUNCE_RIGHT: any
  
      /**
       * The flag bounce top of ccui.ScrollView's event.
       */
      static EVENT_BOUNCE_TOP: any
  
      /**
       * The flag container moved of ccui.ScrollView's event.
       */
      static EVENT_CONTAINER_MOVED: any
  
      /**
       * The flag scroll to bottom of ccui.ScrollView's event.
       */
      static EVENT_SCROLL_TO_BOTTOM: any
  
      /**
       * The flag scroll to left of ccui.ScrollView's event.
       */
      static EVENT_SCROLL_TO_LEFT: any
  
      /**
       * The flag scroll to right of ccui.ScrollView's event.
       */
      static EVENT_SCROLL_TO_RIGHT: any
  
      /**
       * The flag scroll to top of ccui.ScrollView's event.
       */
      static EVENT_SCROLL_TO_TOP: any
  
      /**
       * The scrolling flag of ccui.ScrollView's event.
       */
      static EVENT_SCROLLING: any
  
      /**
       * allocates and initializes a UIScrollView.
       *
       * @returns {ccui.ScrollView}
       */
      static create(): ccui.ScrollView
  
  
      /**
       * Add child to ccui.ScrollView.
       *
       * @param {cc.Node} widget
       * @param {Number} zOrder
       * @param {Number|string} tag tag or name
       *
       * @returns {boolean}
       */
      addChild(widget: cc.Node, zOrder: number, tag: number | string): boolean
  
      /**
       * Add node for scrollView
       *
       * @param {cc.Node} node
       * @param {Number} zOrder
       * @param {Number} tag
       */
      addNode(node: cc.Node, zOrder: number, tag: number): any
  
      /**
       * When a widget is in a layout, you could call this method to get the next focused widget within a specified _direction.
       * If the widget is not in a layout, it will return itself
       *
       * @param {Number} _direction the _direction to look for the next focused widget in a layout
       * @param {ccui.Widget} current the current focused widget
       *
       * @returns {ccui.Widget}
       */
      findNextFocusedWidget(_direction: number, current: ccui.Widget): ccui.Widget
  
      /**
       * Returns the "class name" of ccui.ScrollView.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Returns the layout type of ccui.ScrollView.
       *
       * @returns {ccui.Layout.ABSOLUTE|ccui.Layout.LINEAR_VERTICAL|ccui.Layout.LINEAR_HORIZONTAL|ccui.Layout.RELATIVE}
       */
      getLayoutType(): any
  
      /**
       * Returns a node by tag
       *
       * @param {Number} tag
       *
       * @returns {cc.Node}
       */
      getNodeByTag(tag: number): cc.Node
  
      /**
       * Returns all nodes of inner container
       *
       * @returns {Array}
       */
      getNodes(): any[]
  
      /**
       * Initializes a ccui.ScrollView. Please do not call this function by yourself, you should pass the parameters to constructor to initialize it.
       *
       * @returns {boolean}
       */
      init(): boolean
  
      /**
       * Intercept touch event, handle its child's touch event.
       *
       * @param {number} event event type
       * @param {ccui.Widget} sender
       * @param {cc.Touch} touch
       */
      interceptTouchEvent(event: number, sender: ccui.Widget, touch: cc.Touch): any
  
      /**
       * Calls the parent class' onEnter and schedules update function.
       */
      onEnter(): any
  
      /**
       * The touch began event callback handler of ccui.ScrollView.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       *
       * @returns {boolean}
       */
      onTouchBegan(touch: cc.Touch, event: cc.Event): boolean
  
      /**
       * The touch canceled event callback of ccui.ScrollView.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       */
      onTouchCancelled(touch: cc.Touch, event: cc.Event): any
  
      /**
       * The touch ended event callback handler of ccui.ScrollView.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       */
      onTouchEnded(touch: cc.Touch, event: cc.Event): any
  
      /**
       * The touch moved event callback handler of ccui.ScrollView.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       */
      onTouchMoved(touch: cc.Touch, event: cc.Event): any
  
      /**
       * Removes all children.
       */
      removeAllChildren(): any
  
      /**
       * Removes all children.
       *
       * @param {Boolean} cleanup
       */
      removeAllChildrenWithCleanup(cleanup: boolean): any
  
      /**
       * Remove all node from ccui.ScrollView.
       */
      removeAllNodes(): any
  
      /**
       * Removes widget child
       *
       * @param {ccui.Widget} child
       * @param {Boolean} cleanup
       *
       * @returns {boolean}
       */
      removeChild(child: ccui.Widget, cleanup: boolean): boolean
  
      /**
       * Removes a node from ccui.ScrollView.
       *
       * @param {cc.Node} node
       */
      removeNode(node: cc.Node): any
  
      /**
       * Removes a node by tag
       *
       * @param {Number} tag
       */
      removeNodeByTag(tag: number): any
  
      /**
       * Sets LayoutType of ccui.ScrollView.
       *
       * @param {ccui.Layout.ABSOLUTE|ccui.Layout.LINEAR_VERTICAL|ccui.Layout.LINEAR_HORIZONTAL|ccui.Layout.RELATIVE} type
       */
      setLayoutType(type: any): any
  
  
      /**
       * - Indicate whether bounce is enabled
       */
      bounceEnabled: boolean
  
      /**
       * - Scroll direction of the scroll view
       */
      direction: any
  
      /**
       * - Indicate whether inertiaScroll is enabled
       */
      inertiaScrollEnabled: boolean
  
      /**
       * - Inner container height of the scroll view
       */
      innerHeight: number
  
      /**
       * - Inner container width of the scroll view
       */
      innerWidth: number
  
      /**
       * - Touch total time threshold
       */
      touchTotalTimeThreshold: number
  
      /**
       * Adds callback function called ScrollView event triggered
       *
       * @param {Function} selector
       */
      addEventListener(selector: Function): any
  
      /**
       * Adds callback function called ScrollView event triggered
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addEventListenerScrollView(selector: Function, target: object): any
  
      /**
       * Gets a child from the container given its name
       *
       * @param {String} name
       *
       * @returns {ccui.Widget}
       */
      getChildByName(name: string): ccui.Widget
  
      /**
       * Gets a child from the container given its tag
       *
       * @param {Number} tag
       *
       * @returns {ccui.Widget}
       */
      getChildByTag(tag: number): ccui.Widget
  
      /**
       * Returns inner container's children
       *
       * @returns {Array}
       */
      getChildren(): any[]
  
      /**
       * Gets the count of inner container's children
       *
       * @returns {Number}
       */
      getChildrenCount(): number
  
      /**
       * Returns scroll direction of ScrollView.
       *
       * @returns {ccui.ScrollView.DIR_NONE | ccui.ScrollView.DIR_VERTICAL | ccui.ScrollView.DIR_HORIZONTAL | ccui.ScrollView.DIR_BOTH}
       */
      getDirection(): any
  
      /**
       * Gets inner container of ScrollView. Inner container is the container of ScrollView's children.
       *
       * @returns {ccui.Layout}
       */
      getInnerContainer(): ccui.Layout
  
      /**
       * Get inner container position
       */
      getInnerContainerPosition(): any
  
      /**
       * Returns inner container size of ScrollView.
       * Inner container size must be larger than or equal ScrollView's size.
       *
       * @returns {cc.Size} inner container size.
       */
      getInnerContainerSize(): cc.Size
  
      /**
       * Get the scroll bar's auto hide time
       *
       * @returns {number}
       */
      getScrollBarAutoHideTime(): number
  
      /**
       * Get the scroll bar's color
       *
       * @returns {cc.Color} the scroll bar's color
       */
      getScrollBarColor(): cc.Color
  
      /**
       * Get the scroll bar's opacity
       *
       * @returns {number}
       */
      getScrollBarOpacity(): number
  
      /**
       * Get the horizontal scroll bar's position from right-top corner.
       *
       * @returns {cc.Point}
       */
      getScrollBarPositionFromCornerForHorizontal(): cc.Point
  
      /**
       * Get the vertical scroll bar's position from right-top corner.
       *
       * @returns {cc.Point}
       */
      getScrollBarPositionFromCornerForVertical(): cc.Point
  
      /**
       * Get the scroll bar's width
       *
       * @returns {number} the scroll bar's width
       */
      getScrollBarWidth(): number
  
      /**
       * Get the touch total time threshold
       *
       * @returns {Number}
       */
      getTouchTotalTimeThreshold(): number
  
      /**
       * Returns whether bounce is enabled
       *
       * @returns {boolean}
       */
      isBounceEnabled(): boolean
  
      /**
       * Returns whether inertiaScroll is enabled
       *
       * @returns {boolean}
       */
      isInertiaScrollEnabled(): boolean
  
      /**
       * Query scroll bar auto hide state
       *
       * @returns {boolean}
       */
      isScrollBarAutoHideEnabled(): boolean
  
      /**
       * Query scroll bar state.
       *
       * @returns {boolean} True if scroll bar is enabled, false otherwise.
       */
      isScrollBarEnabled(): boolean
  
      /**
       * Move inner container to bottom boundary of ScrollView.
       */
      jumpToBottom(): any
  
      /**
       * Move inner container to bottom and left boundary of ScrollView.
       */
      jumpToBottomLeft(): any
  
      /**
       * Move inner container to bottom and right boundary of ScrollView.
       */
      jumpToBottomRight(): any
  
      /**
       * Move inner container to left boundary of ScrollView.
       */
      jumpToLeft(): any
  
      /**
       * Move inner container to both _direction percent position of ScrollView.
       *
       * @param {cc.Point} percent The destination vertical percent, accept value between 0 - 100
       */
      jumpToPercentBothDirection(percent: cc.Point): any
  
      /**
       * Move inner container to horizontal percent position of ScrollView.
       *
       * @param {Number} percent The destination vertical percent, accept value between 0 - 100
       */
      jumpToPercentHorizontal(percent: number): any
  
      /**
       * Move inner container to vertical percent position of ScrollView.
       *
       * @param {Number} percent The destination vertical percent, accept value between 0 - 100
       */
      jumpToPercentVertical(percent: number): any
  
      /**
       * Move inner container to right boundary of ScrollView.
       */
      jumpToRight(): any
  
      /**
       * Move inner container to top boundary of ScrollView.
       */
      jumpToTop(): any
  
      /**
       * Move inner container to top and left boundary of ScrollView.
       */
      jumpToTopLeft(): any
  
      /**
       * Move inner container to top and right boundary of ScrollView.
       */
      jumpToTopRight(): any
  
      /**
       * Scroll inner container to bottom boundary of ScrollView.
       *
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToBottom(time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to bottom and left boundary of ScrollView.
       *
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToBottomLeft(time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to bottom and right boundary of ScrollView.
       *
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToBottomRight(time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to left boundary of ScrollView.
       *
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToLeft(time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to both _direction percent position of ScrollView.
       *
       * @param {cc.Point} percent
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToPercentBothDirection(percent: cc.Point, time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to horizontal percent position of ScrollView.
       *
       * @param {Number} percent
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToPercentHorizontal(percent: number, time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to vertical percent position of ScrollView.
       *
       * @param {Number} percent
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToPercentVertical(percent: number, time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to right boundary of ScrollView.
       *
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToRight(time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to top boundary of ScrollView.
       *
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToTop(time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to top and left boundary of ScrollView.
       *
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToTopLeft(time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to top and right boundary of ScrollView.
       *
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToTopRight(time: number, attenuated: boolean): any
  
      /**
       * Sets bounce enabled
       *
       * @param {Boolean} enabled
       */
      setBounceEnabled(enabled: boolean): any
  
      /**
       * Changes scroll _direction of ScrollView.
       *
       * @param {ccui.ScrollView.DIR_NONE | ccui.ScrollView.DIR_VERTICAL | ccui.ScrollView.DIR_HORIZONTAL | ccui.ScrollView.DIR_BOTH} dir Direction::VERTICAL means vertical scroll, Direction::HORIZONTAL means horizontal scroll
       */
      setDirection(dir: any): any
  
      /**
       * Sets inertiaScroll enabled
       *
       * @param {boolean} enabled
       */
      setInertiaScrollEnabled(enabled: boolean): any
  
      /**
       * Set inner container position
       *
       * @param {cc.Point} position Inner container position.
       */
      setInnerContainerPosition(position: cc.Point): any
  
      /**
       * Changes inner container size of ScrollView.
       * Inner container size must be larger than or equal the size of ScrollView.
       *
       * @param {cc.Size} size inner container size.
       */
      setInnerContainerSize(size: cc.Size): any
  
      /**
       * Set scroll bar auto hide state
       *
       * @param {boolean} autoHideEnabled scroll bar auto hide state
       */
      setScrollBarAutoHideEnabled(autoHideEnabled: boolean): any
  
      /**
       * Set scroll bar auto hide time
       *
       * @param {number} autoHideTime scroll bar auto hide state
       */
      setScrollBarAutoHideTime(autoHideTime: number): any
  
      /**
       * Set the scroll bar's color
       *
       * @param {cc.Color} color the scroll bar's color
       */
      setScrollBarColor(color: cc.Color): any
  
      /**
       * Toggle scroll bar enabled.
       *
       * @param {boolean} enabled True if enable scroll bar, false otherwise.
       */
      setScrollBarEnabled(enabled: boolean): any
  
      /**
       * Set the scroll bar's opacity
       *
       * @param {number} opacity the scroll bar's opacity
       */
      setScrollBarOpacity(opacity: number): any
  
      /**
       * Set the scroll bar positions from the left-bottom corner (horizontal) and right-top corner (vertical).
       *
       * @param {cc.Point} positionFromCorner The position from the left-bottom corner (horizontal) and right-top corner (vertical).
       */
      setScrollBarPositionFromCorner(positionFromCorner: cc.Point): any
  
      /**
       * Set the horizontal scroll bar position from left-bottom corner.
       *
       * @param {cc.Point} positionFromCorner The position from left-bottom corner
       */
      setScrollBarPositionFromCornerForHorizontal(positionFromCorner: cc.Point): any
  
      /**
       * Set the vertical scroll bar position from right-top corner.
       *
       * @param {cc.Point} positionFromCorner The position from right-top corner
       */
      setScrollBarPositionFromCornerForVertical(positionFromCorner: cc.Point): any
  
      /**
       * Set the scroll bar's width
       *
       * @param {number} width The scroll bar's width
       */
      setScrollBarWidth(width: number): any
  
      /**
       * Set the touch total time threshold
       *
       * @param {Number} touchTotalTimeThreshold
       */
      setTouchTotalTimeThreshold(touchTotalTimeThreshold: number): any
  
      /**
       * Immediately stops inner container scroll initiated by any of the "scrollTo*" member functions
       */
      stopAutoScroll(): any
  
      /**
       * The update callback handler.
       *
       * @param {Number} dt
       */
      update(dt: number): any
  
  
      /**
       * - Indicate whether clipping is enabled
       */
      clippingEnabled: boolean
  
      /**
       *
       */
      clippingType: any
  
      /**
       *
       */
      layoutType: any
  
      /**
       * Adds a widget to the container.
       *
       * @param {ccui.Widget} widget
       * @param {Number} zOrder
       * @param {Number|string} tag tag or name
       */
      addChild(widget: ccui.Widget, zOrder: number, tag: number | string): any
  
      /**
       * force refresh widget layout
       */
      forceDoLayout(): any
  
      /**
       * Gets background color of ccui.Layout, if color type is Layout.COLOR_SOLID.
       *
       * @returns {cc.Color}
       */
      getBackGroundColor(): cc.Color
  
      /**
       * Get background opacity value of ccui.Layout.
       *
       * @returns {Number}
       */
      getBackGroundColorOpacity(): number
  
      /**
       * Get background color type of ccui.Layout.
       *
       * @returns {ccui.Layout.BG_COLOR_NONE|ccui.Layout.BG_COLOR_SOLID|ccui.Layout.BG_COLOR_GRADIENT}
       */
      getBackGroundColorType(): any
  
      /**
       * Gets background color vector of ccui.Layout, if color type is Layout.COLOR_GRADIENT
       *
       * @returns {cc.Point}
       */
      getBackGroundColorVector(): cc.Point
  
      /**
       * Gets background end color of ccui.Layout
       *
       * @returns {cc.Color}
       */
      getBackGroundEndColor(): cc.Color
  
      /**
       * Gets background image capinsets of ccui.Layout.
       *
       * @returns {cc.Rect}
       */
      getBackGroundImageCapInsets(): cc.Rect
  
      /**
       * Gets backGround image color
       *
       * @returns {cc.Color}
       */
      getBackGroundImageColor(): cc.Color
  
      /**
       * Gets backGround image opacity
       *
       * @returns {Number}
       */
      getBackGroundImageOpacity(): number
  
      /**
       * Gets background image texture size.
       *
       * @returns {cc.Size}
       */
      getBackGroundImageTextureSize(): cc.Size
  
      /**
       * Gets background start color of ccui.Layout
       *
       * @returns {cc.Color}
       */
      getBackGroundStartColor(): cc.Color
  
      /**
       * Gets clipping type of ccui.Layout
       *
       * @returns {ccui.Layout.CLIPPING_STENCIL|ccui.Layout.CLIPPING_SCISSOR}
       */
      getClippingType(): any
  
      /**
       * Gets LayoutType of ccui.Layout.
       *
       * @returns {null}
       */
      getLayoutType(): null
  
      /**
       * Get whether background image is use scale9 renderer.
       *
       * @returns {Boolean}
       */
      isBackGroundImageScale9Enabled(): boolean
  
      /**
       * Gets if layout is clipping enabled.
       *
       * @returns {Boolean} if layout is clipping enabled.
       */
      isClippingEnabled(): boolean
  
      /**
       * Gets whether enable focus loop
       *
       * @returns {boolean} If focus loop is enabled, then it will return true, otherwise it returns false. The default value is false.
       */
      isLoopFocus(): boolean
  
      /**
       * Returns whether the layout will pass the focus to its children or not. The default value is true
       *
       * @returns {boolean} To query whether the layout will pass the focus to its children or not. The default value is true
       */
      isPassFocusToChild(): boolean
  
      /**
       * To specify a user-defined functor to decide which child widget of the layout should get focused
       *
       * @param {Number} direction
       * @param {ccui.Widget} current
       */
      onPassFocusToChild(direction: number, current: ccui.Widget): any
  
      /**
       * Removes all children from the container with a cleanup, and sets the layout dirty flag to true.
       *
       * @param {Boolean} cleanup
       */
      removeAllChildren(cleanup: boolean): any
  
      /**
       * Removes all children from the container, do a cleanup to all running actions depending on the cleanup parameter,
       * and sets the layout dirty flag to true.
       *
       * @param {Boolean} cleanup true if all running actions on all children nodes should be cleanup, false otherwise.
       */
      removeAllChildrenWithCleanup(cleanup: boolean): any
  
      /**
       * Remove the background image of ccui.Layout.
       */
      removeBackGroundImage(): any
  
      /**
       * Removes child widget from ccui.Layout, and sets the layout dirty flag to true.
       *
       * @param {ccui.Widget} widget
       * @param {Boolean} cleanup
       */
      removeChild(widget: ccui.Widget, cleanup: boolean): any
  
      /**
       * request to refresh widget layout, it will do layout at visit calls
       */
      requestDoLayout(): any
  
      /**
       * Sets background color for layout, if color type is Layout.COLOR_SOLID
       *
       * @param {cc.Color} color
       * @param {cc.Color} endColor
       */
      setBackGroundColor(color: cc.Color, endColor: cc.Color): any
  
      /**
       * Sets background opacity to ccui.Layout.
       *
       * @param {number} opacity
       */
      setBackGroundColorOpacity(opacity: number): any
  
      /**
       * Sets Color Type for ccui.Layout.
       *
       * @param {ccui.Layout.BG_COLOR_NONE|ccui.Layout.BG_COLOR_SOLID|ccui.Layout.BG_COLOR_GRADIENT} type
       */
      setBackGroundColorType(type: any): any
  
      /**
       * Sets background color vector for layout, if color type is Layout.COLOR_GRADIENT
       *
       * @param {cc.Point} vector
       */
      setBackGroundColorVector(vector: cc.Point): any
  
      /**
       * Sets a background image for layout
       *
       * @param {String} fileName
       * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
       */
      setBackGroundImage(fileName: string, texType: any): any
  
      /**
       * Sets a background image CapInsets for layout, if the background image is a scale9 render.
       *
       * @param {cc.Rect} capInsets capinsets of background image.
       */
      setBackGroundImageCapInsets(capInsets: cc.Rect): any
  
      /**
       * Sets backGround image color
       *
       * @param {cc.Color} color
       */
      setBackGroundImageColor(color: cc.Color): any
  
      /**
       * Sets backGround image Opacity
       *
       * @param {Number} opacity
       */
      setBackGroundImageOpacity(opacity: number): any
  
      /**
       * Sets background image use scale9 renderer.
       *
       * @param {Boolean} able true that use scale9 renderer, false otherwise.
       */
      setBackGroundImageScale9Enabled(able: boolean): any
  
      /**
       * Changes if layout can clip it's content and locChild.
       * If you really need this, please enable it. But it would reduce the rendering efficiency.
       *
       * @param {Boolean} able clipping enabled.
       */
      setClippingEnabled(able: boolean): any
  
      /**
       * Sets clipping type to ccui.Layout
       *
       * @param {ccui.Layout.CLIPPING_STENCIL|ccui.Layout.CLIPPING_SCISSOR} type
       */
      setClippingType(type: any): any
  
      /**
       * Sets LayoutType to ccui.Layout, LayoutManager will do layout by layout type..
       *
       * @param {ccui.Layout.ABSOLUTE|ccui.Layout.LINEAR_VERTICAL|ccui.Layout.LINEAR_HORIZONTAL|ccui.Layout.RELATIVE} type
       */
      setLayoutType(type: any): any
  
      /**
       * If a layout is loop focused which means that the focus movement will be inside the layout
       *
       * @param {Boolean} loop pass true to let the focus movement loop inside the layout
       */
      setLoopFocus(loop: boolean): any
  
      /**
       * Specifies whether the layout pass its focus to its child
       *
       * @param {any} pass To specify whether the layout pass its focus to its child
       */
      setPassFocusToChild(pass: any): any
  
      /**
       * Calls adaptRenderers (its subclass will override it.) and do layout.
       * If clippingEnabled is true, it will clip/scissor area.
       *
       * @param {cc.Node.RenderCmd} parentCmd
       */
      visit(parentCmd: any): any
  
  
      /**
       * - The action tag of the widget
       */
      actionTag: number
  
      /**
       * - Indicate whether the widget is bright
       */
      bright: boolean
  
      /**
       * - Indicate whether the widget is enabled
       */
      enabled: boolean
  
      /**
       * - Indicate whether the widget is focused
       */
      focused: boolean
  
      /**
       * - Height in percentage of parent height
       */
      heightPercent: number
  
      /**
       * - The name of the widget
       */
      name: string
  
      /**
       * When a widget lose/get focus, this method will be called. Be Caution when you provide your own version,
       * you must call widget.setFocused(true/false) to change the focus state of the current focused widget;
       */
      onFocusChanged: any
  
      /**
       * use this function to manually specify the next focused widget regards to each direction
       */
      onNextFocusedWidget: any
  
      /**
       * - The size type of the widget
       */
      sizeType: any
  
      /**
       * - Indicate whether touch events are enabled
       */
      touchEnabled: boolean
  
      /**
       * - Indicate whether the update function is scheduled
       */
      updateEnabled: boolean
  
      /**
       * - <@readonly> The direct parent when it's a widget also, otherwise equals null
       */
      widgetParent: ccui.Widget
  
      /**
       * - <@readonly> The type of the widget
       */
      widgetType: any
  
      /**
       * - Width in percentage of parent width
       */
      widthPercent: number
  
      /**
       * - Position x in percentage of width
       */
      xPercent: number
  
      /**
       * - Position y in percentage of height
       */
      yPercent: number
  
      /**
       * Set a event handler to the widget in order to use cocostudio editor and framework
       *
       * @param {function} callback
       */
      addCCSEventListener(callback: Function): any
  
      /**
       * Adds a node for widget (this function is deleted in -x)
       *
       * @param {cc.Node} node
       * @param {Number} zOrder
       * @param {Number} tag
       */
      addNode(node: cc.Node, zOrder: number, tag: number): any
  
      /**
       * Sets the touch event target/selector of the ccui.Widget
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addTouchEventListener(selector: Function, target: object): any
  
      /**
       * Calls the checkChildInfo of widget's parent, its subclass will override it.
       *
       * @param {number} handleState
       * @param {ccui.Widget} sender
       * @param {cc.Point} touchPoint
       */
      checkChildInfo(handleState: number, sender: ccui.Widget, touchPoint: cc.Point): any
  
      /**
       * Checks a point if in parent's area.
       *
       * @param {cc.Point} pt
       *
       * @returns {Boolean}
       */
      clippingParentAreaContainPoint(pt: cc.Point): boolean
  
      /**
       * Clones a new widget.
       *
       * @returns {ccui.Widget}
       */
      clone(): ccui.Widget
  
      /**
       * A call back function when widget lost of focus.
       */
      didNotSelectSelf(): any
  
      /**
       * Dispatch a EventFocus through a EventDispatcher
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      dispatchFocusEvent(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * When a widget is in a layout, you could call this method to get the next focused widget within a specified direction.
       * If the widget is not in a layout, it will return itself
       *
       * @param {any} direction the direction to look for the next focused widget in a layout
       * @param {any} current the current focused widget
       */
      findNextFocusedWidget(direction: any, current: any): any
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomBoundary(): number
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomInParent(): number
  
      /**
       * Gets callback name of widget
       *
       * @returns v3.3{String|Null}
       */
      getCallbackName(): string | null
  
      /**
       * Gets callback type of widget
       *
       * @returns v3.3{String|null}
       */
      getCallbackType(): string | null
  
      /**
       * no matter what widget object you call this method on , it will return you the exact one focused widget
       */
      getCurrentFocusedWidget(): any
  
      /**
       * Get custom size of ccui.Widget
       *
       * @returns {cc.Size}
       */
      getCustomSize(): cc.Size
  
      /**
       * Returns the "class name" of widget.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Gets layout parameter
       *
       * @param {ccui.LayoutParameter.NONE|ccui.LayoutParameter.LINEAR|ccui.LayoutParameter.RELATIVE} type
       *
       * @returns {ccui.LayoutParameter}
       */
      getLayoutParameter(type: any): ccui.LayoutParameter
  
      /**
       * Gets layout size of ccui.Widget.
       *
       * @returns {cc.Size}
       */
      getLayoutSize(): cc.Size
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftBoundary(): number
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftInParent(): number
  
      /**
       * Gets node by tag
       *
       * @param {Number} tag
       *
       * @returns {cc.Node}
       */
      getNodeByTag(tag: number): cc.Node
  
      /**
       * Returns all children.
       *
       * @returns {Array}
       */
      getNodes(): any[]
  
      /**
       * Gets the percent (x,y) of the widget
       *
       * @returns {cc.Point} The percent (x,y) of the widget in OpenGL coordinates
       */
      getPositionPercent(): cc.Point
  
      /**
       * Gets the position type of the widget
       *
       * @returns {Number} the position type of widget
       */
      getPositionType(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightBoundary(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightInParent(): number
  
      /**
       * Returns size of widget
       *
       * @returns {cc.Size}
       */
      getSize(): cc.Size
  
      /**
       * Returns size percent of ccui.Widget
       *
       * @returns {cc.Point}
       */
      getSizePercent(): cc.Point
  
      /**
       * Gets the size type of widget.
       *
       * @returns {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} that is widget's size type
       */
      getSizeType(): any
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopBoundary(): number
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopInParent(): number
  
      /**
       * Gets the position of touch began event.
       *
       * @returns {cc.Point}
       */
      getTouchBeganPosition(): cc.Point
  
      /**
       * Gets the touch end point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch end point.
       */
      getTouchEndPos(): cc.Point
  
      /**
       * Gets the position of touch end event
       *
       * @returns {cc.Point}
       */
      getTouchEndPosition(): cc.Point
  
      /**
       * Gets the touch move point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch move point.
       */
      getTouchMovePos(): cc.Point
  
      /**
       * Gets the position of touch moved event
       *
       * @returns {cc.Point}
       */
      getTouchMovePosition(): cc.Point
  
      /**
       * Gets the touch began point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch began point.
       */
      getTouchStartPos(): cc.Point
  
      /**
       * Gets the Virtual Renderer of widget.
       *
       * @returns {ccui.Widget}
       */
      getVirtualRenderer(): ccui.Widget
  
      /**
       * Gets the content size of widget. Content size is widget's texture size.
       */
      getVirtualRendererSize(): any
  
      /**
       * The direct parent when it's a widget also, otherwise equals null
       *
       * @returns {ccui.Widget|null}
       */
      getWidgetParent(): ccui.Widget | null
  
      /**
       * get widget type
       *
       * @returns {ccui.Widget.TYPE_WIDGET|ccui.Widget.TYPE_CONTAINER}
       */
      getWidgetType(): any
  
      /**
       * Gets world position of ccui.Widget.
       *
       * @returns {cc.Point} world position of ccui.Widget.
       */
      getWorldPosition(): cc.Point
  
      /**
       * Checks a point if is in widget's space
       *
       * @param {cc.Point} pt
       *
       * @returns {boolean} true if the point is in widget's space, false otherwise.
       */
      hitTest(pt: cc.Point): boolean
  
      /**
       * Ignore the widget size
       *
       * @param {Boolean} ignore true that widget will ignore it's size, use texture size, false otherwise. Default value is true.
       */
      ignoreContentAdaptWithSize(ignore: boolean): any
  
      /**
       * initializes state of widget. please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
       *
       * @returns {boolean}
       */
      init(): boolean
  
      /**
       * Sends the touch event to widget's parent, its subclass will override it, e.g. ccui.ScrollView, ccui.PageView
       *
       * @param {Number} eventType
       * @param {ccui.Widget} sender
       * @param {cc.Touch} touch
       */
      interceptTouchEvent(eventType: number, sender: ccui.Widget, touch: cc.Touch): any
  
      /**
       * Determines if the widget is bright
       *
       * @returns {boolean} true if the widget is bright, false if the widget is dark.
       */
      isBright(): boolean
  
      /**
       * returns whether clipping parent widget contains point.
       *
       * @param {cc.Point} pt location point
       *
       * @returns {Boolean}
       */
      isClippingParentContainsPoint(pt: cc.Point): boolean
  
      /**
       * Determines if the widget is enabled
       *
       * @returns {boolean}
       */
      isEnabled(): boolean
  
      /**
       * Returns the flag which indicates whether the widget is flipped horizontally or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleX(sprite.getScaleX() * -1);
       *
       * @returns {Boolean} true if the widget is flipped horizontally, false otherwise.
       */
      isFlippedX(): boolean
  
      /**
       * Return the flag which indicates whether the widget is flipped vertically or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleY(widget.getScaleY() * -1);
       *
       * @returns {Boolean} true if the widget is flipped vertically, false otherwise.
       */
      isFlippedY(): boolean
  
      /**
       * Determines if the widget is on focused
       *
       * @returns {boolean} whether the widget is focused or not
       */
      isFocused(): boolean
  
      /**
       * returns whether the widget could accept focus.
       *
       * @returns {boolean} true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      isFocusEnabled(): boolean
  
      /**
       * Determines if the widget is highlighted
       *
       * @returns {boolean} true if the widget is highlighted, false if the widget is not highlighted .
       */
      isHighlighted(): boolean
  
      /**
       * Gets whether ignore the content size (custom size)
       *
       * @returns {boolean} true that widget will ignore it's size, use texture size, false otherwise.
       */
      isIgnoreContentAdaptWithSize(): boolean
  
      /**
       * Returns whether enable layout component of a widget
       *
       * @returns {Boolean} true represent the widget use Layout Component, false represent the widget couldn't use Layout Component.
       */
      isLayoutComponentEnabled(): boolean
  
      /**
       * Return whether the widget is propagate touch events to its parents or not
       *
       * @returns v3.2{boolean}
       */
      isPropagateTouchEvents(): boolean
  
      /**
       * Return whether the widget is swallowing touch or not
       *
       * @returns v3.2{boolean}
       */
      isSwallowTouches(): boolean
  
      /**
       * Returns whether or not touch is enabled.
       *
       * @returns {boolean} true if the widget is touch enabled, false if the widget is touch disabled.
       */
      isTouchEnabled(): boolean
  
      /**
       *
       *
       * @returns v3.2{boolean} true represent the widget use Unify Size, false represent the widget couldn't use Unify Size
       */
      isUnifySizeEnabled(): boolean
  
      /**
       * Calls updateSizeAndPosition and its parent's onEnter
       */
      onEnter(): any
  
      /**
       * Calls unscheduleUpdate and its parent's onExit
       */
      onExit(): any
  
      /**
       * This method is called when a focus change event happens
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      onFocusChange(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * The callback of touch began event.
       * If the bounding box of ccui.Widget contains the touch point, it will do the following things:
       * 1. sets highlight state,
       * 2. sends event to parent widget by interceptTouchEvent
       * 3. calls the callback of touch began event.
       * 4. returns true,
       * otherwise returns false directly.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       *
       * @returns {boolean}
       */
      onTouchBegan(touch: cc.Touch, event: cc.Event): boolean
  
      /**
       * A call back function called when widget is selected, and on touch canceled.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchCancelled(touchPoint: cc.Point): any
  
      /**
       * The callback of touch end event
       * It sends event to parent widget by interceptTouchEvent,
       * calls the callback of touch end event (highlight= true) or touch canceled event (highlight= false).
       * sets the highlight state to false ,
       *
       * @param {any} touch
       * @param {any} event
       */
      onTouchEnded(touch: any, event: any): any
  
      /**
       * A call back function called when widget is selected, and on touch long clicked.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchLongClicked(touchPoint: cc.Point): any
  
      /**
       * The callback of touch moved event.
       * It sets the highlight state by touch, sends event to parent widget by interceptTouchEvent and calls the callback of touch moved event.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       */
      onTouchMoved(touch: cc.Touch, event: cc.Event): any
  
      /**
       * Removes all node
       */
      removeAllNodes(): any
  
      /**
       * Removes a node from ccui.Widget
       *
       * @param {cc.Node} node
       * @param {Boolean} cleanup
       */
      removeNode(node: cc.Node, cleanup: boolean): any
  
      /**
       * Removes node by tag
       *
       * @param {Number} tag
       * @param {Boolean} cleanup
       */
      removeNodeByTag(tag: number, cleanup: boolean): any
  
      /**
       * when a widget calls this method, it will get focus immediately.
       */
      requestFocus(): any
  
      /**
       * Sets whether the widget is bright. The default value is true, a widget is default to bright
       *
       * @param {Boolean} bright true if the widget is bright, false if the widget is dark.
       */
      setBright(bright: boolean): any
  
      /**
       * To set the bright style of ccui.Widget.
       *
       * @param {Number} style BRIGHT_NORMAL the widget is normal state, BRIGHT_HIGHLIGHT the widget is height light state.
       */
      setBrightStyle(style: number): any
  
      /**
       * Sets callback name to widget.
       *
       * @param {String} callbackName
       */
      setCallbackName(callbackName: string): any
  
      /**
       * Sets callback type to widget
       *
       * @param {String} callbackType
       */
      setCallbackType(callbackType: string): any
  
      /**
       * Sets _customSize of ccui.Widget, if ignoreSize is true, the content size is its renderer's contentSize, otherwise the content size is parameter.
       * and updates size percent by parent content size. At last, updates its children's size and position.
       *
       * @param {cc.Size|Number} contentSize content size or width of content size
       * @param {Number} height
       */
      setContentSize(contentSize: cc.Size | number, height: number): any
  
      /**
       * Sets whether the widget is enabled
       * true if the widget is enabled, widget may be touched , false if the widget is disabled, widget cannot be touched.
       * The default value is true, a widget is default to enabled
       *
       * @param {Boolean} enabled
       */
      setEnabled(enabled: boolean): any
  
      /**
       * Sets whether the widget should be flipped horizontally or not.
       *
       * @param {Boolean} flipX true if the widget should be flipped horizontally, false otherwise.
       */
      setFlippedX(flipX: boolean): any
  
      /**
       * Sets whether the widget should be flipped vertically or not.
       *
       * @param {Boolean} flipY true if the widget should be flipped vertically, false otherwise.
       */
      setFlippedY(flipY: boolean): any
  
      /**
       * Sets whether the widget is on focused
       * The default value is false, a widget is default to not on focused
       *
       * @param {boolean} focus pass true to let the widget get focus or pass false to let the widget lose focus
       */
      setFocused(focus: boolean): any
  
      /**
       * sets whether the widget could accept focus.
       *
       * @param {Boolean} enable true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      setFocusEnabled(enable: boolean): any
  
      /**
       * Sets whether the widget is highlighted. The default value is false, a widget is default to not highlighted
       *
       * @param {any} highlight true if the widget is highlighted, false if the widget is not highlighted.
       */
      setHighlighted(highlight: any): any
  
      /**
       * Whether enable layout component of a widget
       *
       * @param {Boolean} enable enable layout Component of a widget
       */
      setLayoutComponentEnabled(enable: boolean): any
  
      /**
       * Gets LayoutParameter of widget.
       *
       * @param {ccui.LayoutParameter} parameter
       */
      setLayoutParameter(parameter: ccui.LayoutParameter): any
  
      /**
       * Changes the position (x,y) of the widget .
       * The original point (0,0) is at the left-bottom corner of screen.
       *
       * @param {cc.Point|Number} pos
       * @param {Number} posY
       */
      setPosition(pos: cc.Point | number, posY: number): any
  
      /**
       * Changes the position (x,y) of the widget
       *
       * @param {cc.Point} percent
       */
      setPositionPercent(percent: cc.Point): any
  
      /**
       * Changes the position type of the widget
       *
       * @param {Number} type the position type of widget
       */
      setPositionType(type: number): any
  
      /**
       * Allow widget touch events to propagate to its parents. Set false will disable propagation
       *
       * @param {Boolean} isPropagate
       */
      setPropagateTouchEvents(isPropagate: boolean): any
  
      /**
       * Changes the size that is widget's size
       *
       * @param {cc.Size} size that is widget's size
       */
      setSize(size: cc.Size): any
  
      /**
       * Changes the percent that is widget's percent size
       *
       * @param {cc.Point} percent that is widget's percent size, width and height value from 0 to 1.
       */
      setSizePercent(percent: cc.Point): any
  
      /**
       * TEXTURE_RES_TYPE
       * Changes the size type of widget.
       *
       * @param {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} type that is widget's size type
       */
      setSizeType(type: any): any
  
      /**
       * Specify widget to swallow touches or not
       *
       * @param {Boolean} swallow
       */
      setSwallowTouches(swallow: boolean): any
  
      /**
       * Sets whether the widget is touch enabled. The default value is false, a widget is default to touch disabled
       *
       * @param {Boolean} enable true if the widget is touch enabled, false if the widget is touch disabled.
       */
      setTouchEnabled(enable: boolean): any
  
      /**
       *
       *
       * @param {Boolean} enable enable Unify Size of a widget
       */
      setUnifySizeEnabled(enable: boolean): any
  
      /**
       * updates its size by size type and its position by position type.
       *
       * @param {cc.Size} parentSize parent size
       */
      updateSizeAndPosition(parentSize: cc.Size): any
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    }
  }
  
  declare namespace ccui {
    interface IListView extends ccui.IScrollView {
  
  
      addEventListenerListView(selector: Function, target: object): any
  
      doLayout(): any
  
      getBottommostItemInCurrentView(): ccui.Widget
  
      getCenterItemInCurrentView(): ccui.Widget
  
      getClosestItemToPosition(targetPosition: cc.Point, itemAnchorPoint: cc.Point): ccui.Widget
  
      getClosestItemToPositionInCurrentView(positionRatioInView: cc.Point, itemAnchorPoint: cc.Point): ccui.Widget
  
      getCurSelectedIndex(): number
  
      getIndex(item: ccui.Widget): number
  
      getItem(index: number): ccui.Widget
  
      getItems(): any[]
  
      getItemsMargin(): number
  
      getLeftmostItemInCurrentView(): ccui.Widget
  
      getMagneticAllowedOutOfBoundary(): boolean
  
      getMagneticType(): number
  
      getRightmostItemInCurrentView(): ccui.Widget
  
      getTopmostItemInCurrentView(): ccui.Widget
  
      insertCustomItem(item: ccui.Widget, index: number): any
  
      insertDefaultItem(index: number): any
  
      jumpToItem(itemIndex: number, positionRatioInView: cc.Point, itemAnchorPoint: cc.Point): any
  
      pushBackCustomItem(item: ccui.Widget): any
  
      pushBackDefaultItem(): any
  
      refreshView(): any
  
      removeAllItems(): any
  
      removeItem(index: number): any
  
      removeLastItem(): any
  
      requestRefreshView(): any
  
      scrollToItem(itemIndex: number, positionRatioInView: cc.Point, itemAnchorPoint: cc.Point, timeInSec: number): any
  
      setGravity(gravity: any): any
  
      setItemModel(model: ccui.Widget): any
  
      setItemsMargin(margin: number): any
  
      setMagneticAllowedOutOfBoundary(magneticAllowedOutOfBoundary: boolean): any
  
      setMagneticType(magneticType: any): any
    }
  
    interface IListViewOverrides {
  
      addChild(widget: cc.Node, zOrder: number, tag: number | string): any
  
      addEventListener(selector: Function): any
  
      getDescription(): string
  
      interceptTouchEvent(eventType: number, sender: ccui.Widget, touch: cc.Touch): any
  
      removeAllChildren(): any
  
      removeAllChildrenWithCleanup(cleanup: boolean): any
  
      removeChild(widget: cc.Node, cleanup: boolean): any
  
      setDirection(dir: any): any
    }
  
  
  
    class ListView implements IListView, IListViewOverrides {
  
      /**
       * allocates and initializes a UIListView.
       * Constructor of ccui.ListView, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
       */
      constructor()
  
  
  
      /**
       * The flag selected item of ccui.ListView's event.
       */
      static EVENT_SELECTED_ITEM: any
  
      /**
       * The bottom flag of ccui.ListView's gravity.
       */
      static GRAVITY_BOTTOM: any
  
      /**
       * The center horizontal flag of ccui.ListView's gravity.
       */
      static GRAVITY_CENTER_HORIZONTAL: any
  
      /**
       * The center vertical flag of ccui.ListView's gravity.
       */
      static GRAVITY_CENTER_VERTICAL: any
  
      /**
       * The left flag of ccui.ListView's gravity.
       */
      static GRAVITY_LEFT: any
  
      /**
       * The right flag of ccui.ListView's gravity.
       */
      static GRAVITY_RIGHT: any
  
      /**
       * The top flag of ccui.ListView's gravity.
       */
      static GRAVITY_TOP: any
  
      /**
       * The flag of ccui.ListView's magnetic both end type.
       * ListView tries to align its items in left or right end if it is horizontal, top or bottom in vertical.
       * The aligning side (left or right, top or bottom) is determined by user's scroll direction.
       */
      static MAGNETIC_BOTH_END: any
  
      /**
       * The flag of ccui.ListView's magnetic bottom type.
       */
      static MAGNETIC_BOTTOM: any
  
      /**
       * The flag of ccui.ListView's magnetic center type.
       * ListView tries to align its items in center of current view.
       */
      static MAGNETIC_CENTER: any
  
      /**
       * The flag of ccui.ListView's magnetic left type.
       */
      static MAGNETIC_LEFT: any
  
      /**
       * The flag of ccui.ListView's magnetic none type.
       */
      static MAGNETIC_NONE: any
  
      /**
       * The flag of ccui.ListView's magnetic right type.
       */
      static MAGNETIC_RIGHT: any
  
      /**
       * The flag of ccui.ListView's magnetic top type.
       */
      static MAGNETIC_TOP: any
  
      /**
       * The flag selected item end of ccui.ListView's event.
       */
      static ON_SELECTED_ITEM_END: any
  
      /**
       * The flag selected item start of ccui.ListView's event.
       */
      static ON_SELECTED_ITEM_START: any
  
      /**
       * allocates and initializes a UIListView.
       */
      static create(): any
  
  
      /**
       * add child to ListView
       *
       * @param {cc.Node} widget
       * @param {Number} zOrder
       * @param {Number|String} tag tag or name
       */
      addChild(widget: cc.Node, zOrder: number, tag: number | string): any
  
      /**
       * Adds callback function called ListView event triggered
       *
       * @param {Function} selector
       */
      addEventListener(selector: Function): any
  
      /**
       * Returns the "class name" of ccui.ListView.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Intercept touch event, handle its child's touch event.
       *
       * @param {Number} eventType
       * @param {ccui.Widget} sender
       * @param {cc.Touch} touch
       */
      interceptTouchEvent(eventType: number, sender: ccui.Widget, touch: cc.Touch): any
  
      /**
       * Removes all children from ccui.ListView.
       */
      removeAllChildren(): any
  
      /**
       * Removes all children from ccui.ListView and do a cleanup all running actions depending on the cleanup parameter.
       *
       * @param {Boolean} cleanup
       */
      removeAllChildrenWithCleanup(cleanup: boolean): any
  
      /**
       * remove child from ListView
       *
       * @param {cc.Node} widget
       * @param {Boolean} cleanup
       */
      removeChild(widget: cc.Node, cleanup: boolean): any
  
      /**
       * Changes scroll direction of ccui.ListView.
       *
       * @param {ccui.ScrollView.DIR_NONE | ccui.ScrollView.DIR_VERTICAL | ccui.ScrollView.DIR_HORIZONTAL | ccui.ScrollView.DIR_BOTH} dir
       */
      setDirection(dir: any): any
  
  
  
      /**
       * Adds event listener to ccui.ListView.
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addEventListenerListView(selector: Function, target: object): any
  
      /**
       * provides a public _doLayout function for Editor. it calls _doLayout.
       */
      doLayout(): any
  
      /**
       * Query the topmost item in horizontal list
       *
       * @returns {?ccui.Widget} A item instance.
       */
      getBottommostItemInCurrentView(): ccui.Widget
  
      /**
       * Query the center item
       *
       * @returns {?ccui.Widget} A item instance.
       */
      getCenterItemInCurrentView(): ccui.Widget
  
      /**
       * Query the closest item to a specific position in inner container.
       *
       * @param {cc.Point} targetPosition Specifies the target position in inner container's coordinates.
       * @param {cc.Point} itemAnchorPoint Specifies an anchor point of each item for position to calculate distance.
       *
       * @returns {?ccui.Widget} A item instance if list view is not empty. Otherwise, returns null.
       */
      getClosestItemToPosition(targetPosition: cc.Point, itemAnchorPoint: cc.Point): ccui.Widget
  
      /**
       * Query the closest item to a specific position in current view.
       * For instance, to find the item in the center of view, call 'getClosestItemToPositionInCurrentView(cc.p(0.5, 0.5), cc.p(0.5, 0.5))'.
       *
       * @param {cc.Point} positionRatioInView Specifies the target position with ratio in list view's content size.
       * @param {cc.Point} itemAnchorPoint Specifies an anchor point of each item for position to calculate distance.
       *
       * @returns {?ccui.Widget} A item instance if list view is not empty. Otherwise, returns null.
       */
      getClosestItemToPositionInCurrentView(positionRatioInView: cc.Point, itemAnchorPoint: cc.Point): ccui.Widget
  
      /**
       * Returns current selected index
       *
       * @returns {number}
       */
      getCurSelectedIndex(): number
  
      /**
       * Returns the index of item.
       *
       * @param {ccui.Widget} item the item which need to be checked.
       *
       * @returns {Number} the index of item.
       */
      getIndex(item: ccui.Widget): number
  
      /**
       * Returns a item whose index is same as the parameter.
       *
       * @param {Number} index
       *
       * @returns {ccui.Widget}
       */
      getItem(index: number): ccui.Widget
  
      /**
       * Returns the item container.
       *
       * @returns {Array}
       */
      getItems(): any[]
  
      /**
       * Returns the margin between each item.
       *
       * @returns {Number}
       */
      getItemsMargin(): number
  
      /**
       * Query the leftmost item in horizontal list
       *
       * @returns {?ccui.Widget} A item instance.
       */
      getLeftmostItemInCurrentView(): ccui.Widget
  
      /**
       * Query whether the magnetic out of boundary is allowed.
       *
       * @returns {boolean}
       */
      getMagneticAllowedOutOfBoundary(): boolean
  
      /**
       * Get magnetic type of ListView.
       *
       * @returns {number}
       */
      getMagneticType(): number
  
      /**
       * Query the rightmost item in horizontal list
       *
       * @returns {?ccui.Widget} A item instance.
       */
      getRightmostItemInCurrentView(): ccui.Widget
  
      /**
       * Query the topmost item in horizontal list
       *
       * @returns {?ccui.Widget} A item instance.
       */
      getTopmostItemInCurrentView(): ccui.Widget
  
      /**
       * Push back custom item into ccui.ListView.
       *
       * @param {ccui.Widget} item
       * @param {Number} index
       */
      insertCustomItem(item: ccui.Widget, index: number): any
  
      /**
       * Insert a default item(create by a cloned model) into ListView.
       *
       * @param {Number} index
       */
      insertDefaultItem(index: number): any
  
      /**
       * Jump to specific item
       *
       * @param {number} itemIndex Specifies the item's index
       * @param {cc.Point} positionRatioInView Specifies the position with ratio in list view's content size.
       * @param {cc.Point} itemAnchorPoint Specifies an anchor point of each item for position to calculate distance.
       */
      jumpToItem(itemIndex: number, positionRatioInView: cc.Point, itemAnchorPoint: cc.Point): any
  
      /**
       * Push back custom item into ListView.
       *
       * @param {ccui.Widget} item
       */
      pushBackCustomItem(item: ccui.Widget): any
  
      /**
       * Push back a default item(create by a cloned model) into ListView.
       */
      pushBackDefaultItem(): any
  
      /**
       * Refreshes list view.
       */
      refreshView(): any
  
      /**
       * Removes all items from ccui.ListView.
       */
      removeAllItems(): any
  
      /**
       * Removes a item whose index is same as the parameter.
       *
       * @param {Number} index
       */
      removeItem(index: number): any
  
      /**
       * Removes the last item of ccui.ListView.
       */
      removeLastItem(): any
  
      /**
       * Requests refresh list view.
       */
      requestRefreshView(): any
  
      /**
       * Scroll to specific item
       *
       * @param {number} itemIndex Specifies the item's index
       * @param {cc.Point} positionRatioInView Specifies the position with ratio in list view's content size.
       * @param {cc.Point} itemAnchorPoint Specifies an anchor point of each item for position to calculate distance.
       * @param {number} timeInSec Scroll time
       */
      scrollToItem(itemIndex: number, positionRatioInView: cc.Point, itemAnchorPoint: cc.Point, timeInSec: number): any
  
      /**
       * Changes the gravity of ListView.
       *
       * @param {ccui.ListView.GRAVITY_LEFT|ccui.ListView.GRAVITY_RIGHT|ccui.ListView.GRAVITY_CENTER_HORIZONTAL|ccui.ListView.GRAVITY_BOTTOM|ccui.ListView.GRAVITY_CENTER_VERTICAL} gravity
       */
      setGravity(gravity: any): any
  
      /**
       * Sets a item model for ListView. A model will be cloned for adding default item.
       *
       * @param {ccui.Widget} model
       */
      setItemModel(model: ccui.Widget): any
  
      /**
       * Changes the margin between each item.
       *
       * @param {Number} margin
       */
      setItemsMargin(margin: number): any
  
      /**
       * Set magnetic allowed out of boundary.
       *
       * @param {boolean} magneticAllowedOutOfBoundary
       */
      setMagneticAllowedOutOfBoundary(magneticAllowedOutOfBoundary: boolean): any
  
      /**
       * Set magnetic type of ListView.
       *
       * @param {ccui.ListView.MAGNETIC_NONE|ccui.ListView.MAGNETIC_CENTER|ccui.ListView.MAGNETIC_BOTH_END|ccui.ListView.MAGNETIC_LEFT|ccui.ListView.MAGNETIC_RIGHT|ccui.ListView.MAGNETIC_TOP|ccui.ListView.MAGNETIC_BOTTOM} magneticType
       */
      setMagneticType(magneticType: any): any
  
  
      /**
       * - Indicate whether bounce is enabled
       */
      bounceEnabled: boolean
  
      /**
       * - Scroll direction of the scroll view
       */
      direction: any
  
      /**
       * - Indicate whether inertiaScroll is enabled
       */
      inertiaScrollEnabled: boolean
  
      /**
       * - Inner container height of the scroll view
       */
      innerHeight: number
  
      /**
       * - Inner container width of the scroll view
       */
      innerWidth: number
  
      /**
       * - Touch total time threshold
       */
      touchTotalTimeThreshold: number
  
      /**
       * Adds callback function called ScrollView event triggered
       *
       * @param {Function} selector
       */
      addEventListener(selector: Function): any
  
      /**
       * Adds callback function called ScrollView event triggered
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addEventListenerScrollView(selector: Function, target: object): any
  
      /**
       * Gets a child from the container given its name
       *
       * @param {String} name
       *
       * @returns {ccui.Widget}
       */
      getChildByName(name: string): ccui.Widget
  
      /**
       * Gets a child from the container given its tag
       *
       * @param {Number} tag
       *
       * @returns {ccui.Widget}
       */
      getChildByTag(tag: number): ccui.Widget
  
      /**
       * Returns inner container's children
       *
       * @returns {Array}
       */
      getChildren(): any[]
  
      /**
       * Gets the count of inner container's children
       *
       * @returns {Number}
       */
      getChildrenCount(): number
  
      /**
       * Returns scroll direction of ScrollView.
       *
       * @returns {ccui.ScrollView.DIR_NONE | ccui.ScrollView.DIR_VERTICAL | ccui.ScrollView.DIR_HORIZONTAL | ccui.ScrollView.DIR_BOTH}
       */
      getDirection(): any
  
      /**
       * Gets inner container of ScrollView. Inner container is the container of ScrollView's children.
       *
       * @returns {ccui.Layout}
       */
      getInnerContainer(): ccui.Layout
  
      /**
       * Get inner container position
       */
      getInnerContainerPosition(): any
  
      /**
       * Returns inner container size of ScrollView.
       * Inner container size must be larger than or equal ScrollView's size.
       *
       * @returns {cc.Size} inner container size.
       */
      getInnerContainerSize(): cc.Size
  
      /**
       * Get the scroll bar's auto hide time
       *
       * @returns {number}
       */
      getScrollBarAutoHideTime(): number
  
      /**
       * Get the scroll bar's color
       *
       * @returns {cc.Color} the scroll bar's color
       */
      getScrollBarColor(): cc.Color
  
      /**
       * Get the scroll bar's opacity
       *
       * @returns {number}
       */
      getScrollBarOpacity(): number
  
      /**
       * Get the horizontal scroll bar's position from right-top corner.
       *
       * @returns {cc.Point}
       */
      getScrollBarPositionFromCornerForHorizontal(): cc.Point
  
      /**
       * Get the vertical scroll bar's position from right-top corner.
       *
       * @returns {cc.Point}
       */
      getScrollBarPositionFromCornerForVertical(): cc.Point
  
      /**
       * Get the scroll bar's width
       *
       * @returns {number} the scroll bar's width
       */
      getScrollBarWidth(): number
  
      /**
       * Get the touch total time threshold
       *
       * @returns {Number}
       */
      getTouchTotalTimeThreshold(): number
  
      /**
       * Returns whether bounce is enabled
       *
       * @returns {boolean}
       */
      isBounceEnabled(): boolean
  
      /**
       * Returns whether inertiaScroll is enabled
       *
       * @returns {boolean}
       */
      isInertiaScrollEnabled(): boolean
  
      /**
       * Query scroll bar auto hide state
       *
       * @returns {boolean}
       */
      isScrollBarAutoHideEnabled(): boolean
  
      /**
       * Query scroll bar state.
       *
       * @returns {boolean} True if scroll bar is enabled, false otherwise.
       */
      isScrollBarEnabled(): boolean
  
      /**
       * Move inner container to bottom boundary of ScrollView.
       */
      jumpToBottom(): any
  
      /**
       * Move inner container to bottom and left boundary of ScrollView.
       */
      jumpToBottomLeft(): any
  
      /**
       * Move inner container to bottom and right boundary of ScrollView.
       */
      jumpToBottomRight(): any
  
      /**
       * Move inner container to left boundary of ScrollView.
       */
      jumpToLeft(): any
  
      /**
       * Move inner container to both _direction percent position of ScrollView.
       *
       * @param {cc.Point} percent The destination vertical percent, accept value between 0 - 100
       */
      jumpToPercentBothDirection(percent: cc.Point): any
  
      /**
       * Move inner container to horizontal percent position of ScrollView.
       *
       * @param {Number} percent The destination vertical percent, accept value between 0 - 100
       */
      jumpToPercentHorizontal(percent: number): any
  
      /**
       * Move inner container to vertical percent position of ScrollView.
       *
       * @param {Number} percent The destination vertical percent, accept value between 0 - 100
       */
      jumpToPercentVertical(percent: number): any
  
      /**
       * Move inner container to right boundary of ScrollView.
       */
      jumpToRight(): any
  
      /**
       * Move inner container to top boundary of ScrollView.
       */
      jumpToTop(): any
  
      /**
       * Move inner container to top and left boundary of ScrollView.
       */
      jumpToTopLeft(): any
  
      /**
       * Move inner container to top and right boundary of ScrollView.
       */
      jumpToTopRight(): any
  
      /**
       * Scroll inner container to bottom boundary of ScrollView.
       *
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToBottom(time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to bottom and left boundary of ScrollView.
       *
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToBottomLeft(time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to bottom and right boundary of ScrollView.
       *
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToBottomRight(time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to left boundary of ScrollView.
       *
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToLeft(time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to both _direction percent position of ScrollView.
       *
       * @param {cc.Point} percent
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToPercentBothDirection(percent: cc.Point, time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to horizontal percent position of ScrollView.
       *
       * @param {Number} percent
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToPercentHorizontal(percent: number, time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to vertical percent position of ScrollView.
       *
       * @param {Number} percent
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToPercentVertical(percent: number, time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to right boundary of ScrollView.
       *
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToRight(time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to top boundary of ScrollView.
       *
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToTop(time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to top and left boundary of ScrollView.
       *
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToTopLeft(time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to top and right boundary of ScrollView.
       *
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToTopRight(time: number, attenuated: boolean): any
  
      /**
       * Sets bounce enabled
       *
       * @param {Boolean} enabled
       */
      setBounceEnabled(enabled: boolean): any
  
      /**
       * Changes scroll _direction of ScrollView.
       *
       * @param {ccui.ScrollView.DIR_NONE | ccui.ScrollView.DIR_VERTICAL | ccui.ScrollView.DIR_HORIZONTAL | ccui.ScrollView.DIR_BOTH} dir Direction::VERTICAL means vertical scroll, Direction::HORIZONTAL means horizontal scroll
       */
      setDirection(dir: any): any
  
      /**
       * Sets inertiaScroll enabled
       *
       * @param {boolean} enabled
       */
      setInertiaScrollEnabled(enabled: boolean): any
  
      /**
       * Set inner container position
       *
       * @param {cc.Point} position Inner container position.
       */
      setInnerContainerPosition(position: cc.Point): any
  
      /**
       * Changes inner container size of ScrollView.
       * Inner container size must be larger than or equal the size of ScrollView.
       *
       * @param {cc.Size} size inner container size.
       */
      setInnerContainerSize(size: cc.Size): any
  
      /**
       * Set scroll bar auto hide state
       *
       * @param {boolean} autoHideEnabled scroll bar auto hide state
       */
      setScrollBarAutoHideEnabled(autoHideEnabled: boolean): any
  
      /**
       * Set scroll bar auto hide time
       *
       * @param {number} autoHideTime scroll bar auto hide state
       */
      setScrollBarAutoHideTime(autoHideTime: number): any
  
      /**
       * Set the scroll bar's color
       *
       * @param {cc.Color} color the scroll bar's color
       */
      setScrollBarColor(color: cc.Color): any
  
      /**
       * Toggle scroll bar enabled.
       *
       * @param {boolean} enabled True if enable scroll bar, false otherwise.
       */
      setScrollBarEnabled(enabled: boolean): any
  
      /**
       * Set the scroll bar's opacity
       *
       * @param {number} opacity the scroll bar's opacity
       */
      setScrollBarOpacity(opacity: number): any
  
      /**
       * Set the scroll bar positions from the left-bottom corner (horizontal) and right-top corner (vertical).
       *
       * @param {cc.Point} positionFromCorner The position from the left-bottom corner (horizontal) and right-top corner (vertical).
       */
      setScrollBarPositionFromCorner(positionFromCorner: cc.Point): any
  
      /**
       * Set the horizontal scroll bar position from left-bottom corner.
       *
       * @param {cc.Point} positionFromCorner The position from left-bottom corner
       */
      setScrollBarPositionFromCornerForHorizontal(positionFromCorner: cc.Point): any
  
      /**
       * Set the vertical scroll bar position from right-top corner.
       *
       * @param {cc.Point} positionFromCorner The position from right-top corner
       */
      setScrollBarPositionFromCornerForVertical(positionFromCorner: cc.Point): any
  
      /**
       * Set the scroll bar's width
       *
       * @param {number} width The scroll bar's width
       */
      setScrollBarWidth(width: number): any
  
      /**
       * Set the touch total time threshold
       *
       * @param {Number} touchTotalTimeThreshold
       */
      setTouchTotalTimeThreshold(touchTotalTimeThreshold: number): any
  
      /**
       * Immediately stops inner container scroll initiated by any of the "scrollTo*" member functions
       */
      stopAutoScroll(): any
  
      /**
       * The update callback handler.
       *
       * @param {Number} dt
       */
      update(dt: number): any
  
  
      /**
       * - Indicate whether clipping is enabled
       */
      clippingEnabled: boolean
  
      /**
       *
       */
      clippingType: any
  
      /**
       *
       */
      layoutType: any
  
      /**
       * Adds a widget to the container.
       *
       * @param {ccui.Widget} widget
       * @param {Number} zOrder
       * @param {Number|string} tag tag or name
       */
      addChild(widget: ccui.Widget, zOrder: number, tag: number | string): any
  
      /**
       * force refresh widget layout
       */
      forceDoLayout(): any
  
      /**
       * Gets background color of ccui.Layout, if color type is Layout.COLOR_SOLID.
       *
       * @returns {cc.Color}
       */
      getBackGroundColor(): cc.Color
  
      /**
       * Get background opacity value of ccui.Layout.
       *
       * @returns {Number}
       */
      getBackGroundColorOpacity(): number
  
      /**
       * Get background color type of ccui.Layout.
       *
       * @returns {ccui.Layout.BG_COLOR_NONE|ccui.Layout.BG_COLOR_SOLID|ccui.Layout.BG_COLOR_GRADIENT}
       */
      getBackGroundColorType(): any
  
      /**
       * Gets background color vector of ccui.Layout, if color type is Layout.COLOR_GRADIENT
       *
       * @returns {cc.Point}
       */
      getBackGroundColorVector(): cc.Point
  
      /**
       * Gets background end color of ccui.Layout
       *
       * @returns {cc.Color}
       */
      getBackGroundEndColor(): cc.Color
  
      /**
       * Gets background image capinsets of ccui.Layout.
       *
       * @returns {cc.Rect}
       */
      getBackGroundImageCapInsets(): cc.Rect
  
      /**
       * Gets backGround image color
       *
       * @returns {cc.Color}
       */
      getBackGroundImageColor(): cc.Color
  
      /**
       * Gets backGround image opacity
       *
       * @returns {Number}
       */
      getBackGroundImageOpacity(): number
  
      /**
       * Gets background image texture size.
       *
       * @returns {cc.Size}
       */
      getBackGroundImageTextureSize(): cc.Size
  
      /**
       * Gets background start color of ccui.Layout
       *
       * @returns {cc.Color}
       */
      getBackGroundStartColor(): cc.Color
  
      /**
       * Gets clipping type of ccui.Layout
       *
       * @returns {ccui.Layout.CLIPPING_STENCIL|ccui.Layout.CLIPPING_SCISSOR}
       */
      getClippingType(): any
  
      /**
       * Gets LayoutType of ccui.Layout.
       *
       * @returns {null}
       */
      getLayoutType(): null
  
      /**
       * Get whether background image is use scale9 renderer.
       *
       * @returns {Boolean}
       */
      isBackGroundImageScale9Enabled(): boolean
  
      /**
       * Gets if layout is clipping enabled.
       *
       * @returns {Boolean} if layout is clipping enabled.
       */
      isClippingEnabled(): boolean
  
      /**
       * Gets whether enable focus loop
       *
       * @returns {boolean} If focus loop is enabled, then it will return true, otherwise it returns false. The default value is false.
       */
      isLoopFocus(): boolean
  
      /**
       * Returns whether the layout will pass the focus to its children or not. The default value is true
       *
       * @returns {boolean} To query whether the layout will pass the focus to its children or not. The default value is true
       */
      isPassFocusToChild(): boolean
  
      /**
       * To specify a user-defined functor to decide which child widget of the layout should get focused
       *
       * @param {Number} direction
       * @param {ccui.Widget} current
       */
      onPassFocusToChild(direction: number, current: ccui.Widget): any
  
      /**
       * Removes all children from the container with a cleanup, and sets the layout dirty flag to true.
       *
       * @param {Boolean} cleanup
       */
      removeAllChildren(cleanup: boolean): any
  
      /**
       * Removes all children from the container, do a cleanup to all running actions depending on the cleanup parameter,
       * and sets the layout dirty flag to true.
       *
       * @param {Boolean} cleanup true if all running actions on all children nodes should be cleanup, false otherwise.
       */
      removeAllChildrenWithCleanup(cleanup: boolean): any
  
      /**
       * Remove the background image of ccui.Layout.
       */
      removeBackGroundImage(): any
  
      /**
       * Removes child widget from ccui.Layout, and sets the layout dirty flag to true.
       *
       * @param {ccui.Widget} widget
       * @param {Boolean} cleanup
       */
      removeChild(widget: ccui.Widget, cleanup: boolean): any
  
      /**
       * request to refresh widget layout, it will do layout at visit calls
       */
      requestDoLayout(): any
  
      /**
       * Sets background color for layout, if color type is Layout.COLOR_SOLID
       *
       * @param {cc.Color} color
       * @param {cc.Color} endColor
       */
      setBackGroundColor(color: cc.Color, endColor: cc.Color): any
  
      /**
       * Sets background opacity to ccui.Layout.
       *
       * @param {number} opacity
       */
      setBackGroundColorOpacity(opacity: number): any
  
      /**
       * Sets Color Type for ccui.Layout.
       *
       * @param {ccui.Layout.BG_COLOR_NONE|ccui.Layout.BG_COLOR_SOLID|ccui.Layout.BG_COLOR_GRADIENT} type
       */
      setBackGroundColorType(type: any): any
  
      /**
       * Sets background color vector for layout, if color type is Layout.COLOR_GRADIENT
       *
       * @param {cc.Point} vector
       */
      setBackGroundColorVector(vector: cc.Point): any
  
      /**
       * Sets a background image for layout
       *
       * @param {String} fileName
       * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
       */
      setBackGroundImage(fileName: string, texType: any): any
  
      /**
       * Sets a background image CapInsets for layout, if the background image is a scale9 render.
       *
       * @param {cc.Rect} capInsets capinsets of background image.
       */
      setBackGroundImageCapInsets(capInsets: cc.Rect): any
  
      /**
       * Sets backGround image color
       *
       * @param {cc.Color} color
       */
      setBackGroundImageColor(color: cc.Color): any
  
      /**
       * Sets backGround image Opacity
       *
       * @param {Number} opacity
       */
      setBackGroundImageOpacity(opacity: number): any
  
      /**
       * Sets background image use scale9 renderer.
       *
       * @param {Boolean} able true that use scale9 renderer, false otherwise.
       */
      setBackGroundImageScale9Enabled(able: boolean): any
  
      /**
       * Changes if layout can clip it's content and locChild.
       * If you really need this, please enable it. But it would reduce the rendering efficiency.
       *
       * @param {Boolean} able clipping enabled.
       */
      setClippingEnabled(able: boolean): any
  
      /**
       * Sets clipping type to ccui.Layout
       *
       * @param {ccui.Layout.CLIPPING_STENCIL|ccui.Layout.CLIPPING_SCISSOR} type
       */
      setClippingType(type: any): any
  
      /**
       * Sets LayoutType to ccui.Layout, LayoutManager will do layout by layout type..
       *
       * @param {ccui.Layout.ABSOLUTE|ccui.Layout.LINEAR_VERTICAL|ccui.Layout.LINEAR_HORIZONTAL|ccui.Layout.RELATIVE} type
       */
      setLayoutType(type: any): any
  
      /**
       * If a layout is loop focused which means that the focus movement will be inside the layout
       *
       * @param {Boolean} loop pass true to let the focus movement loop inside the layout
       */
      setLoopFocus(loop: boolean): any
  
      /**
       * Specifies whether the layout pass its focus to its child
       *
       * @param {any} pass To specify whether the layout pass its focus to its child
       */
      setPassFocusToChild(pass: any): any
  
      /**
       * Calls adaptRenderers (its subclass will override it.) and do layout.
       * If clippingEnabled is true, it will clip/scissor area.
       *
       * @param {cc.Node.RenderCmd} parentCmd
       */
      visit(parentCmd: any): any
  
  
      /**
       * - The action tag of the widget
       */
      actionTag: number
  
      /**
       * - Indicate whether the widget is bright
       */
      bright: boolean
  
      /**
       * - Indicate whether the widget is enabled
       */
      enabled: boolean
  
      /**
       * - Indicate whether the widget is focused
       */
      focused: boolean
  
      /**
       * - Height in percentage of parent height
       */
      heightPercent: number
  
      /**
       * - The name of the widget
       */
      name: string
  
      /**
       * When a widget lose/get focus, this method will be called. Be Caution when you provide your own version,
       * you must call widget.setFocused(true/false) to change the focus state of the current focused widget;
       */
      onFocusChanged: any
  
      /**
       * use this function to manually specify the next focused widget regards to each direction
       */
      onNextFocusedWidget: any
  
      /**
       * - The size type of the widget
       */
      sizeType: any
  
      /**
       * - Indicate whether touch events are enabled
       */
      touchEnabled: boolean
  
      /**
       * - Indicate whether the update function is scheduled
       */
      updateEnabled: boolean
  
      /**
       * - <@readonly> The direct parent when it's a widget also, otherwise equals null
       */
      widgetParent: ccui.Widget
  
      /**
       * - <@readonly> The type of the widget
       */
      widgetType: any
  
      /**
       * - Width in percentage of parent width
       */
      widthPercent: number
  
      /**
       * - Position x in percentage of width
       */
      xPercent: number
  
      /**
       * - Position y in percentage of height
       */
      yPercent: number
  
      /**
       * Set a event handler to the widget in order to use cocostudio editor and framework
       *
       * @param {function} callback
       */
      addCCSEventListener(callback: Function): any
  
      /**
       * Adds a node for widget (this function is deleted in -x)
       *
       * @param {cc.Node} node
       * @param {Number} zOrder
       * @param {Number} tag
       */
      addNode(node: cc.Node, zOrder: number, tag: number): any
  
      /**
       * Sets the touch event target/selector of the ccui.Widget
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addTouchEventListener(selector: Function, target: object): any
  
      /**
       * Calls the checkChildInfo of widget's parent, its subclass will override it.
       *
       * @param {number} handleState
       * @param {ccui.Widget} sender
       * @param {cc.Point} touchPoint
       */
      checkChildInfo(handleState: number, sender: ccui.Widget, touchPoint: cc.Point): any
  
      /**
       * Checks a point if in parent's area.
       *
       * @param {cc.Point} pt
       *
       * @returns {Boolean}
       */
      clippingParentAreaContainPoint(pt: cc.Point): boolean
  
      /**
       * Clones a new widget.
       *
       * @returns {ccui.Widget}
       */
      clone(): ccui.Widget
  
      /**
       * A call back function when widget lost of focus.
       */
      didNotSelectSelf(): any
  
      /**
       * Dispatch a EventFocus through a EventDispatcher
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      dispatchFocusEvent(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * When a widget is in a layout, you could call this method to get the next focused widget within a specified direction.
       * If the widget is not in a layout, it will return itself
       *
       * @param {any} direction the direction to look for the next focused widget in a layout
       * @param {any} current the current focused widget
       */
      findNextFocusedWidget(direction: any, current: any): any
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomBoundary(): number
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomInParent(): number
  
      /**
       * Gets callback name of widget
       *
       * @returns v3.3{String|Null}
       */
      getCallbackName(): string | null
  
      /**
       * Gets callback type of widget
       *
       * @returns v3.3{String|null}
       */
      getCallbackType(): string | null
  
      /**
       * no matter what widget object you call this method on , it will return you the exact one focused widget
       */
      getCurrentFocusedWidget(): any
  
      /**
       * Get custom size of ccui.Widget
       *
       * @returns {cc.Size}
       */
      getCustomSize(): cc.Size
  
      /**
       * Returns the "class name" of widget.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Gets layout parameter
       *
       * @param {ccui.LayoutParameter.NONE|ccui.LayoutParameter.LINEAR|ccui.LayoutParameter.RELATIVE} type
       *
       * @returns {ccui.LayoutParameter}
       */
      getLayoutParameter(type: any): ccui.LayoutParameter
  
      /**
       * Gets layout size of ccui.Widget.
       *
       * @returns {cc.Size}
       */
      getLayoutSize(): cc.Size
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftBoundary(): number
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftInParent(): number
  
      /**
       * Gets node by tag
       *
       * @param {Number} tag
       *
       * @returns {cc.Node}
       */
      getNodeByTag(tag: number): cc.Node
  
      /**
       * Returns all children.
       *
       * @returns {Array}
       */
      getNodes(): any[]
  
      /**
       * Gets the percent (x,y) of the widget
       *
       * @returns {cc.Point} The percent (x,y) of the widget in OpenGL coordinates
       */
      getPositionPercent(): cc.Point
  
      /**
       * Gets the position type of the widget
       *
       * @returns {Number} the position type of widget
       */
      getPositionType(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightBoundary(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightInParent(): number
  
      /**
       * Returns size of widget
       *
       * @returns {cc.Size}
       */
      getSize(): cc.Size
  
      /**
       * Returns size percent of ccui.Widget
       *
       * @returns {cc.Point}
       */
      getSizePercent(): cc.Point
  
      /**
       * Gets the size type of widget.
       *
       * @returns {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} that is widget's size type
       */
      getSizeType(): any
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopBoundary(): number
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopInParent(): number
  
      /**
       * Gets the position of touch began event.
       *
       * @returns {cc.Point}
       */
      getTouchBeganPosition(): cc.Point
  
      /**
       * Gets the touch end point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch end point.
       */
      getTouchEndPos(): cc.Point
  
      /**
       * Gets the position of touch end event
       *
       * @returns {cc.Point}
       */
      getTouchEndPosition(): cc.Point
  
      /**
       * Gets the touch move point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch move point.
       */
      getTouchMovePos(): cc.Point
  
      /**
       * Gets the position of touch moved event
       *
       * @returns {cc.Point}
       */
      getTouchMovePosition(): cc.Point
  
      /**
       * Gets the touch began point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch began point.
       */
      getTouchStartPos(): cc.Point
  
      /**
       * Gets the Virtual Renderer of widget.
       *
       * @returns {ccui.Widget}
       */
      getVirtualRenderer(): ccui.Widget
  
      /**
       * Gets the content size of widget. Content size is widget's texture size.
       */
      getVirtualRendererSize(): any
  
      /**
       * The direct parent when it's a widget also, otherwise equals null
       *
       * @returns {ccui.Widget|null}
       */
      getWidgetParent(): ccui.Widget | null
  
      /**
       * get widget type
       *
       * @returns {ccui.Widget.TYPE_WIDGET|ccui.Widget.TYPE_CONTAINER}
       */
      getWidgetType(): any
  
      /**
       * Gets world position of ccui.Widget.
       *
       * @returns {cc.Point} world position of ccui.Widget.
       */
      getWorldPosition(): cc.Point
  
      /**
       * Checks a point if is in widget's space
       *
       * @param {cc.Point} pt
       *
       * @returns {boolean} true if the point is in widget's space, false otherwise.
       */
      hitTest(pt: cc.Point): boolean
  
      /**
       * Ignore the widget size
       *
       * @param {Boolean} ignore true that widget will ignore it's size, use texture size, false otherwise. Default value is true.
       */
      ignoreContentAdaptWithSize(ignore: boolean): any
  
      /**
       * initializes state of widget. please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
       *
       * @returns {boolean}
       */
      init(): boolean
  
      /**
       * Sends the touch event to widget's parent, its subclass will override it, e.g. ccui.ScrollView, ccui.PageView
       *
       * @param {Number} eventType
       * @param {ccui.Widget} sender
       * @param {cc.Touch} touch
       */
      interceptTouchEvent(eventType: number, sender: ccui.Widget, touch: cc.Touch): any
  
      /**
       * Determines if the widget is bright
       *
       * @returns {boolean} true if the widget is bright, false if the widget is dark.
       */
      isBright(): boolean
  
      /**
       * returns whether clipping parent widget contains point.
       *
       * @param {cc.Point} pt location point
       *
       * @returns {Boolean}
       */
      isClippingParentContainsPoint(pt: cc.Point): boolean
  
      /**
       * Determines if the widget is enabled
       *
       * @returns {boolean}
       */
      isEnabled(): boolean
  
      /**
       * Returns the flag which indicates whether the widget is flipped horizontally or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleX(sprite.getScaleX() * -1);
       *
       * @returns {Boolean} true if the widget is flipped horizontally, false otherwise.
       */
      isFlippedX(): boolean
  
      /**
       * Return the flag which indicates whether the widget is flipped vertically or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleY(widget.getScaleY() * -1);
       *
       * @returns {Boolean} true if the widget is flipped vertically, false otherwise.
       */
      isFlippedY(): boolean
  
      /**
       * Determines if the widget is on focused
       *
       * @returns {boolean} whether the widget is focused or not
       */
      isFocused(): boolean
  
      /**
       * returns whether the widget could accept focus.
       *
       * @returns {boolean} true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      isFocusEnabled(): boolean
  
      /**
       * Determines if the widget is highlighted
       *
       * @returns {boolean} true if the widget is highlighted, false if the widget is not highlighted .
       */
      isHighlighted(): boolean
  
      /**
       * Gets whether ignore the content size (custom size)
       *
       * @returns {boolean} true that widget will ignore it's size, use texture size, false otherwise.
       */
      isIgnoreContentAdaptWithSize(): boolean
  
      /**
       * Returns whether enable layout component of a widget
       *
       * @returns {Boolean} true represent the widget use Layout Component, false represent the widget couldn't use Layout Component.
       */
      isLayoutComponentEnabled(): boolean
  
      /**
       * Return whether the widget is propagate touch events to its parents or not
       *
       * @returns v3.2{boolean}
       */
      isPropagateTouchEvents(): boolean
  
      /**
       * Return whether the widget is swallowing touch or not
       *
       * @returns v3.2{boolean}
       */
      isSwallowTouches(): boolean
  
      /**
       * Returns whether or not touch is enabled.
       *
       * @returns {boolean} true if the widget is touch enabled, false if the widget is touch disabled.
       */
      isTouchEnabled(): boolean
  
      /**
       *
       *
       * @returns v3.2{boolean} true represent the widget use Unify Size, false represent the widget couldn't use Unify Size
       */
      isUnifySizeEnabled(): boolean
  
      /**
       * Calls updateSizeAndPosition and its parent's onEnter
       */
      onEnter(): any
  
      /**
       * Calls unscheduleUpdate and its parent's onExit
       */
      onExit(): any
  
      /**
       * This method is called when a focus change event happens
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      onFocusChange(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * The callback of touch began event.
       * If the bounding box of ccui.Widget contains the touch point, it will do the following things:
       * 1. sets highlight state,
       * 2. sends event to parent widget by interceptTouchEvent
       * 3. calls the callback of touch began event.
       * 4. returns true,
       * otherwise returns false directly.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       *
       * @returns {boolean}
       */
      onTouchBegan(touch: cc.Touch, event: cc.Event): boolean
  
      /**
       * A call back function called when widget is selected, and on touch canceled.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchCancelled(touchPoint: cc.Point): any
  
      /**
       * The callback of touch end event
       * It sends event to parent widget by interceptTouchEvent,
       * calls the callback of touch end event (highlight= true) or touch canceled event (highlight= false).
       * sets the highlight state to false ,
       *
       * @param {any} touch
       * @param {any} event
       */
      onTouchEnded(touch: any, event: any): any
  
      /**
       * A call back function called when widget is selected, and on touch long clicked.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchLongClicked(touchPoint: cc.Point): any
  
      /**
       * The callback of touch moved event.
       * It sets the highlight state by touch, sends event to parent widget by interceptTouchEvent and calls the callback of touch moved event.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       */
      onTouchMoved(touch: cc.Touch, event: cc.Event): any
  
      /**
       * Removes all node
       */
      removeAllNodes(): any
  
      /**
       * Removes a node from ccui.Widget
       *
       * @param {cc.Node} node
       * @param {Boolean} cleanup
       */
      removeNode(node: cc.Node, cleanup: boolean): any
  
      /**
       * Removes node by tag
       *
       * @param {Number} tag
       * @param {Boolean} cleanup
       */
      removeNodeByTag(tag: number, cleanup: boolean): any
  
      /**
       * when a widget calls this method, it will get focus immediately.
       */
      requestFocus(): any
  
      /**
       * Sets whether the widget is bright. The default value is true, a widget is default to bright
       *
       * @param {Boolean} bright true if the widget is bright, false if the widget is dark.
       */
      setBright(bright: boolean): any
  
      /**
       * To set the bright style of ccui.Widget.
       *
       * @param {Number} style BRIGHT_NORMAL the widget is normal state, BRIGHT_HIGHLIGHT the widget is height light state.
       */
      setBrightStyle(style: number): any
  
      /**
       * Sets callback name to widget.
       *
       * @param {String} callbackName
       */
      setCallbackName(callbackName: string): any
  
      /**
       * Sets callback type to widget
       *
       * @param {String} callbackType
       */
      setCallbackType(callbackType: string): any
  
      /**
       * Sets _customSize of ccui.Widget, if ignoreSize is true, the content size is its renderer's contentSize, otherwise the content size is parameter.
       * and updates size percent by parent content size. At last, updates its children's size and position.
       *
       * @param {cc.Size|Number} contentSize content size or width of content size
       * @param {Number} height
       */
      setContentSize(contentSize: cc.Size | number, height: number): any
  
      /**
       * Sets whether the widget is enabled
       * true if the widget is enabled, widget may be touched , false if the widget is disabled, widget cannot be touched.
       * The default value is true, a widget is default to enabled
       *
       * @param {Boolean} enabled
       */
      setEnabled(enabled: boolean): any
  
      /**
       * Sets whether the widget should be flipped horizontally or not.
       *
       * @param {Boolean} flipX true if the widget should be flipped horizontally, false otherwise.
       */
      setFlippedX(flipX: boolean): any
  
      /**
       * Sets whether the widget should be flipped vertically or not.
       *
       * @param {Boolean} flipY true if the widget should be flipped vertically, false otherwise.
       */
      setFlippedY(flipY: boolean): any
  
      /**
       * Sets whether the widget is on focused
       * The default value is false, a widget is default to not on focused
       *
       * @param {boolean} focus pass true to let the widget get focus or pass false to let the widget lose focus
       */
      setFocused(focus: boolean): any
  
      /**
       * sets whether the widget could accept focus.
       *
       * @param {Boolean} enable true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      setFocusEnabled(enable: boolean): any
  
      /**
       * Sets whether the widget is highlighted. The default value is false, a widget is default to not highlighted
       *
       * @param {any} highlight true if the widget is highlighted, false if the widget is not highlighted.
       */
      setHighlighted(highlight: any): any
  
      /**
       * Whether enable layout component of a widget
       *
       * @param {Boolean} enable enable layout Component of a widget
       */
      setLayoutComponentEnabled(enable: boolean): any
  
      /**
       * Gets LayoutParameter of widget.
       *
       * @param {ccui.LayoutParameter} parameter
       */
      setLayoutParameter(parameter: ccui.LayoutParameter): any
  
      /**
       * Changes the position (x,y) of the widget .
       * The original point (0,0) is at the left-bottom corner of screen.
       *
       * @param {cc.Point|Number} pos
       * @param {Number} posY
       */
      setPosition(pos: cc.Point | number, posY: number): any
  
      /**
       * Changes the position (x,y) of the widget
       *
       * @param {cc.Point} percent
       */
      setPositionPercent(percent: cc.Point): any
  
      /**
       * Changes the position type of the widget
       *
       * @param {Number} type the position type of widget
       */
      setPositionType(type: number): any
  
      /**
       * Allow widget touch events to propagate to its parents. Set false will disable propagation
       *
       * @param {Boolean} isPropagate
       */
      setPropagateTouchEvents(isPropagate: boolean): any
  
      /**
       * Changes the size that is widget's size
       *
       * @param {cc.Size} size that is widget's size
       */
      setSize(size: cc.Size): any
  
      /**
       * Changes the percent that is widget's percent size
       *
       * @param {cc.Point} percent that is widget's percent size, width and height value from 0 to 1.
       */
      setSizePercent(percent: cc.Point): any
  
      /**
       * TEXTURE_RES_TYPE
       * Changes the size type of widget.
       *
       * @param {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} type that is widget's size type
       */
      setSizeType(type: any): any
  
      /**
       * Specify widget to swallow touches or not
       *
       * @param {Boolean} swallow
       */
      setSwallowTouches(swallow: boolean): any
  
      /**
       * Sets whether the widget is touch enabled. The default value is false, a widget is default to touch disabled
       *
       * @param {Boolean} enable true if the widget is touch enabled, false if the widget is touch disabled.
       */
      setTouchEnabled(enable: boolean): any
  
      /**
       *
       *
       * @param {Boolean} enable enable Unify Size of a widget
       */
      setUnifySizeEnabled(enable: boolean): any
  
      /**
       * updates its size by size type and its position by position type.
       *
       * @param {cc.Size} parentSize parent size
       */
      updateSizeAndPosition(parentSize: cc.Size): any
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    }
  }
  
  declare namespace ccui {
    interface IPageView extends ccui.IListView {
  
  
      addEventListenerPageView(selector: Function, target: object): any
  
      addPage(page: ccui.Widget): any
  
      addWidgetToPage(widget: ccui.Widget, pageIdx: number, forceCreate: boolean): any
  
      getCurPageIndex(): number
  
      getCurrentPageIndex(): number
  
      getCustomScrollThreshold(): any
  
      getIndicatorEnabled(): boolean
  
      getIndicatorIndexNodesColor(): cc.Color
  
      getIndicatorIndexNodesScale(): number
  
      getIndicatorPosition(): cc.Point
  
      getIndicatorPositionAsAnchorPoint(): cc.Point
  
      getIndicatorSelectedIndexColor(): cc.Color
  
      getIndicatorSpaceBetweenIndexNodes(): number
  
      getPage(index: number): ccui.Layout
  
      getPages(): any[]
  
      insertPage(page: ccui.Widget, idx: number): any
  
      isUsingCustomScrollThreshold(): any
  
      removeAllPages(): any
  
      removePage(page: ccui.Widget): any
  
      removePageAtIndex(index: number): any
  
      scrollToPage(idx: number): any
  
      setCurPageIndex(index: number): any
  
      setCurrentPageIndex(index: number): any
  
      setCustomScrollThreshold(threshold: any): any
  
      setIndicatorEnabled(enabled: boolean): any
  
      setIndicatorIndexNodesColor(color: cc.Color): any
  
      setIndicatorIndexNodesScale(scale: number): any
  
      setIndicatorIndexNodesTexture(texName: string, texType: any): any
  
      setIndicatorPosition(position: cc.Point): any
  
      setIndicatorPositionAsAnchorPoint(positionAsAnchorPoint: cc.Point): any
  
      setIndicatorSelectedIndexColor(color: cc.Color): any
  
      setIndicatorSpaceBetweenIndexNodes(spaceBetweenIndexNodes: number): any
  
      setUsingCustomScrollThreshold(flag: any): any
    }
  
    interface IPageViewOverrides {
  
      getDescription(): string
  
      scrollToItem(idx: number): any
  
      setDirection(direction: any): any
    }
  
  
  
    class PageView implements IPageView, IPageViewOverrides {
  
      /**
       * Allocates and initializes a UIPageView.
       * Constructor of ccui.PageView. please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
       */
      constructor()
  
  
  
      /**
       * The right flag of ccui.PageView's auto scroll direction.
       */
      static DIRECTION_LEFT: any
  
      /**
       * The right flag of ccui.PageView's auto scroll direction.
       */
      static DIRECTION_RIGHT: any
  
      /**
       * The turning flag of ccui.PageView's event.
       */
      static EVENT_TURNING: any
  
      /**
       * The left flag of ccui.PageView's touch direction.
       */
      static TOUCH_DIR_LEFT: any
  
      /**
       * The right flag of ccui.PageView's touch direction.
       */
      static TOUCH_DIR_RIGHT: any
  
      /**
       * allocates and initializes a UIPageView.
       *
       * @returns {ccui.PageView}
       */
      static create(): ccui.PageView
  
  
      /**
       * Returns the "class name" of ccui.PageView.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * scroll PageView to index.
       *
       * @param {number} idx A given index in the PageView. Index start from 0 to pageCount -1.
       */
      scrollToItem(idx: number): any
  
      /**
       * Changes scroll direction of ccui.PageView.
       *
       * @param {ccui.ScrollView.DIR_NONE | ccui.ScrollView.DIR_VERTICAL | ccui.ScrollView.DIR_HORIZONTAL | ccui.ScrollView.DIR_BOTH} direction
       */
      setDirection(direction: any): any
  
  
  
      /**
       * Adds event listener to ccui.PageView.
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addEventListenerPageView(selector: Function, target: object): any
  
      /**
       * Insert a page into the end of PageView.
       *
       * @param {ccui.Widget} page Page to be inserted.
       */
      addPage(page: ccui.Widget): any
  
      /**
       * Add a widget to a page of PageView.
       *
       * @param {ccui.Widget} widget widget to be added to PageView.
       * @param {number} pageIdx index of page.
       * @param {Boolean} forceCreate if force create and there is no page exist, PageView would create a default page for adding widget.
       */
      addWidgetToPage(widget: ccui.Widget, pageIdx: number, forceCreate: boolean): any
  
      /**
       * Returns current page index
       *
       * @returns {number}
       */
      getCurPageIndex(): number
  
      /**
       * Returns current page index
       *
       * @returns {number}
       */
      getCurrentPageIndex(): number
  
      /**
       * Returns user defined scroll page threshold.
       */
      getCustomScrollThreshold(): any
  
      /**
       * Query page indicator state.
       *
       * @returns {boolean} True if page indicator is enabled, false otherwise.
       */
      getIndicatorEnabled(): boolean
  
      /**
       * Get the color of page indicator's index nodes.
       *
       * @returns {cc.Color}
       */
      getIndicatorIndexNodesColor(): cc.Color
  
      /**
       * Get the scale of page indicator's index nodes.
       *
       * @returns {Number}
       */
      getIndicatorIndexNodesScale(): number
  
      /**
       * Get the page indicator's position.
       *
       * @returns {cc.Point}
       */
      getIndicatorPosition(): cc.Point
  
      /**
       * Get the page indicator's position as anchor point.
       *
       * @returns {cc.Point}
       */
      getIndicatorPositionAsAnchorPoint(): cc.Point
  
      /**
       * Get the color of page indicator's selected index.
       *
       * @returns {cc.Color}
       */
      getIndicatorSelectedIndexColor(): cc.Color
  
      /**
       * Get the space between page indicator's index nodes.
       *
       * @returns {number}
       */
      getIndicatorSpaceBetweenIndexNodes(): number
  
      /**
       * Returns a page from PageView by index
       *
       * @param {Number} index
       *
       * @returns {ccui.Layout}
       */
      getPage(index: number): ccui.Layout
  
      /**
       * Returns all pages of PageView
       *
       * @returns {Array}
       */
      getPages(): any[]
  
      /**
       * Insert a page into PageView at a given index.
       *
       * @param {ccui.Widget} page Page to be inserted.
       * @param {number} idx A given index.
       */
      insertPage(page: ccui.Widget, idx: number): any
  
      /**
       * Queries whether we are using user defined scroll page threshold or not
       */
      isUsingCustomScrollThreshold(): any
  
      /**
       * Removes all pages from PageView
       */
      removeAllPages(): any
  
      /**
       * Removes a page from PageView.
       *
       * @param {ccui.Widget} page Page to be removed.
       */
      removePage(page: ccui.Widget): any
  
      /**
       * Removes a page at index of PageView.
       *
       * @param {number} index A given index.
       */
      removePageAtIndex(index: number): any
  
      /**
       * scroll PageView to index.
       *
       * @param {number} idx A given index in the PageView. Index start from 0 to pageCount -1.
       */
      scrollToPage(idx: number): any
  
      /**
       * Jump to a page with a given index without scrolling.
       * This is the different between scrollToPage.
       *
       * @param {number} index A given index in PageView. Index start from 0 to pageCount -1.
       */
      setCurPageIndex(index: number): any
  
      /**
       * Jump to a page with a given index without scrolling.
       * This is the different between scrollToPage.
       *
       * @param {number} index A given index in PageView. Index start from 0 to pageCount -1.
       */
      setCurrentPageIndex(index: number): any
  
      /**
       * Set custom scroll threshold to page view. If you don't specify the value, the pageView will scroll when half page view width reached.
       *
       * @param {any} threshold
       */
      setCustomScrollThreshold(threshold: any): any
  
      /**
       * Toggle page indicator enabled.
       *
       * @param {boolean} enabled True if enable page indicator, false otherwise.
       */
      setIndicatorEnabled(enabled: boolean): any
  
      /**
       * Set color of page indicator's index nodes.
       *
       * @param {cc.Color} color Color for indicator
       */
      setIndicatorIndexNodesColor(color: cc.Color): any
  
      /**
       * Set scale of page indicator's index nodes.
       *
       * @param {Number} scale Scale for indicator
       */
      setIndicatorIndexNodesScale(scale: number): any
  
      /**
       * Sets texture of indicator index nodes
       *
       * @param {String} texName
       * @param {ccui.Widget.LOCAL_TEXTURE | ccui.Widget.PLIST_TEXTURE} texType
       */
      setIndicatorIndexNodesTexture(texName: string, texType: any): any
  
      /**
       * Set the page indicator's position in page view.
       *
       * @param {cc.Point} position The position in page view
       */
      setIndicatorPosition(position: cc.Point): any
  
      /**
       * Set the page indicator's position using anchor point.
       *
       * @param {cc.Point} positionAsAnchorPoint The position as anchor point.
       */
      setIndicatorPositionAsAnchorPoint(positionAsAnchorPoint: cc.Point): any
  
      /**
       * Set color of page indicator's selected index.
       *
       * @param {cc.Color} color Color for indicator
       */
      setIndicatorSelectedIndexColor(color: cc.Color): any
  
      /**
       * Set space between page indicator's index nodes.
       *
       * @param {number} spaceBetweenIndexNodes Space between nodes in pixel.
       */
      setIndicatorSpaceBetweenIndexNodes(spaceBetweenIndexNodes: number): any
  
      /**
       * Set using user defined scroll page threshold or not. If you set it to false, then the default scroll threshold is pageView.width / 2.
       *
       * @param {any} flag
       */
      setUsingCustomScrollThreshold(flag: any): any
  
  
  
      /**
       * Adds event listener to ccui.ListView.
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addEventListenerListView(selector: Function, target: object): any
  
      /**
       * provides a public _doLayout function for Editor. it calls _doLayout.
       */
      doLayout(): any
  
      /**
       * Query the topmost item in horizontal list
       *
       * @returns {?ccui.Widget} A item instance.
       */
      getBottommostItemInCurrentView(): ccui.Widget
  
      /**
       * Query the center item
       *
       * @returns {?ccui.Widget} A item instance.
       */
      getCenterItemInCurrentView(): ccui.Widget
  
      /**
       * Query the closest item to a specific position in inner container.
       *
       * @param {cc.Point} targetPosition Specifies the target position in inner container's coordinates.
       * @param {cc.Point} itemAnchorPoint Specifies an anchor point of each item for position to calculate distance.
       *
       * @returns {?ccui.Widget} A item instance if list view is not empty. Otherwise, returns null.
       */
      getClosestItemToPosition(targetPosition: cc.Point, itemAnchorPoint: cc.Point): ccui.Widget
  
      /**
       * Query the closest item to a specific position in current view.
       * For instance, to find the item in the center of view, call 'getClosestItemToPositionInCurrentView(cc.p(0.5, 0.5), cc.p(0.5, 0.5))'.
       *
       * @param {cc.Point} positionRatioInView Specifies the target position with ratio in list view's content size.
       * @param {cc.Point} itemAnchorPoint Specifies an anchor point of each item for position to calculate distance.
       *
       * @returns {?ccui.Widget} A item instance if list view is not empty. Otherwise, returns null.
       */
      getClosestItemToPositionInCurrentView(positionRatioInView: cc.Point, itemAnchorPoint: cc.Point): ccui.Widget
  
      /**
       * Returns current selected index
       *
       * @returns {number}
       */
      getCurSelectedIndex(): number
  
      /**
       * Returns the index of item.
       *
       * @param {ccui.Widget} item the item which need to be checked.
       *
       * @returns {Number} the index of item.
       */
      getIndex(item: ccui.Widget): number
  
      /**
       * Returns a item whose index is same as the parameter.
       *
       * @param {Number} index
       *
       * @returns {ccui.Widget}
       */
      getItem(index: number): ccui.Widget
  
      /**
       * Returns the item container.
       *
       * @returns {Array}
       */
      getItems(): any[]
  
      /**
       * Returns the margin between each item.
       *
       * @returns {Number}
       */
      getItemsMargin(): number
  
      /**
       * Query the leftmost item in horizontal list
       *
       * @returns {?ccui.Widget} A item instance.
       */
      getLeftmostItemInCurrentView(): ccui.Widget
  
      /**
       * Query whether the magnetic out of boundary is allowed.
       *
       * @returns {boolean}
       */
      getMagneticAllowedOutOfBoundary(): boolean
  
      /**
       * Get magnetic type of ListView.
       *
       * @returns {number}
       */
      getMagneticType(): number
  
      /**
       * Query the rightmost item in horizontal list
       *
       * @returns {?ccui.Widget} A item instance.
       */
      getRightmostItemInCurrentView(): ccui.Widget
  
      /**
       * Query the topmost item in horizontal list
       *
       * @returns {?ccui.Widget} A item instance.
       */
      getTopmostItemInCurrentView(): ccui.Widget
  
      /**
       * Push back custom item into ccui.ListView.
       *
       * @param {ccui.Widget} item
       * @param {Number} index
       */
      insertCustomItem(item: ccui.Widget, index: number): any
  
      /**
       * Insert a default item(create by a cloned model) into ListView.
       *
       * @param {Number} index
       */
      insertDefaultItem(index: number): any
  
      /**
       * Jump to specific item
       *
       * @param {number} itemIndex Specifies the item's index
       * @param {cc.Point} positionRatioInView Specifies the position with ratio in list view's content size.
       * @param {cc.Point} itemAnchorPoint Specifies an anchor point of each item for position to calculate distance.
       */
      jumpToItem(itemIndex: number, positionRatioInView: cc.Point, itemAnchorPoint: cc.Point): any
  
      /**
       * Push back custom item into ListView.
       *
       * @param {ccui.Widget} item
       */
      pushBackCustomItem(item: ccui.Widget): any
  
      /**
       * Push back a default item(create by a cloned model) into ListView.
       */
      pushBackDefaultItem(): any
  
      /**
       * Refreshes list view.
       */
      refreshView(): any
  
      /**
       * Removes all items from ccui.ListView.
       */
      removeAllItems(): any
  
      /**
       * Removes a item whose index is same as the parameter.
       *
       * @param {Number} index
       */
      removeItem(index: number): any
  
      /**
       * Removes the last item of ccui.ListView.
       */
      removeLastItem(): any
  
      /**
       * Requests refresh list view.
       */
      requestRefreshView(): any
  
      /**
       * Scroll to specific item
       *
       * @param {number} itemIndex Specifies the item's index
       * @param {cc.Point} positionRatioInView Specifies the position with ratio in list view's content size.
       * @param {cc.Point} itemAnchorPoint Specifies an anchor point of each item for position to calculate distance.
       * @param {number} timeInSec Scroll time
       */
      scrollToItem(itemIndex: number, positionRatioInView: cc.Point, itemAnchorPoint: cc.Point, timeInSec: number): any
  
      /**
       * Changes the gravity of ListView.
       *
       * @param {ccui.ListView.GRAVITY_LEFT|ccui.ListView.GRAVITY_RIGHT|ccui.ListView.GRAVITY_CENTER_HORIZONTAL|ccui.ListView.GRAVITY_BOTTOM|ccui.ListView.GRAVITY_CENTER_VERTICAL} gravity
       */
      setGravity(gravity: any): any
  
      /**
       * Sets a item model for ListView. A model will be cloned for adding default item.
       *
       * @param {ccui.Widget} model
       */
      setItemModel(model: ccui.Widget): any
  
      /**
       * Changes the margin between each item.
       *
       * @param {Number} margin
       */
      setItemsMargin(margin: number): any
  
      /**
       * Set magnetic allowed out of boundary.
       *
       * @param {boolean} magneticAllowedOutOfBoundary
       */
      setMagneticAllowedOutOfBoundary(magneticAllowedOutOfBoundary: boolean): any
  
      /**
       * Set magnetic type of ListView.
       *
       * @param {ccui.ListView.MAGNETIC_NONE|ccui.ListView.MAGNETIC_CENTER|ccui.ListView.MAGNETIC_BOTH_END|ccui.ListView.MAGNETIC_LEFT|ccui.ListView.MAGNETIC_RIGHT|ccui.ListView.MAGNETIC_TOP|ccui.ListView.MAGNETIC_BOTTOM} magneticType
       */
      setMagneticType(magneticType: any): any
  
  
      /**
       * - Indicate whether bounce is enabled
       */
      bounceEnabled: boolean
  
      /**
       * - Scroll direction of the scroll view
       */
      direction: any
  
      /**
       * - Indicate whether inertiaScroll is enabled
       */
      inertiaScrollEnabled: boolean
  
      /**
       * - Inner container height of the scroll view
       */
      innerHeight: number
  
      /**
       * - Inner container width of the scroll view
       */
      innerWidth: number
  
      /**
       * - Touch total time threshold
       */
      touchTotalTimeThreshold: number
  
      /**
       * Adds callback function called ScrollView event triggered
       *
       * @param {Function} selector
       */
      addEventListener(selector: Function): any
  
      /**
       * Adds callback function called ScrollView event triggered
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addEventListenerScrollView(selector: Function, target: object): any
  
      /**
       * Gets a child from the container given its name
       *
       * @param {String} name
       *
       * @returns {ccui.Widget}
       */
      getChildByName(name: string): ccui.Widget
  
      /**
       * Gets a child from the container given its tag
       *
       * @param {Number} tag
       *
       * @returns {ccui.Widget}
       */
      getChildByTag(tag: number): ccui.Widget
  
      /**
       * Returns inner container's children
       *
       * @returns {Array}
       */
      getChildren(): any[]
  
      /**
       * Gets the count of inner container's children
       *
       * @returns {Number}
       */
      getChildrenCount(): number
  
      /**
       * Returns scroll direction of ScrollView.
       *
       * @returns {ccui.ScrollView.DIR_NONE | ccui.ScrollView.DIR_VERTICAL | ccui.ScrollView.DIR_HORIZONTAL | ccui.ScrollView.DIR_BOTH}
       */
      getDirection(): any
  
      /**
       * Gets inner container of ScrollView. Inner container is the container of ScrollView's children.
       *
       * @returns {ccui.Layout}
       */
      getInnerContainer(): ccui.Layout
  
      /**
       * Get inner container position
       */
      getInnerContainerPosition(): any
  
      /**
       * Returns inner container size of ScrollView.
       * Inner container size must be larger than or equal ScrollView's size.
       *
       * @returns {cc.Size} inner container size.
       */
      getInnerContainerSize(): cc.Size
  
      /**
       * Get the scroll bar's auto hide time
       *
       * @returns {number}
       */
      getScrollBarAutoHideTime(): number
  
      /**
       * Get the scroll bar's color
       *
       * @returns {cc.Color} the scroll bar's color
       */
      getScrollBarColor(): cc.Color
  
      /**
       * Get the scroll bar's opacity
       *
       * @returns {number}
       */
      getScrollBarOpacity(): number
  
      /**
       * Get the horizontal scroll bar's position from right-top corner.
       *
       * @returns {cc.Point}
       */
      getScrollBarPositionFromCornerForHorizontal(): cc.Point
  
      /**
       * Get the vertical scroll bar's position from right-top corner.
       *
       * @returns {cc.Point}
       */
      getScrollBarPositionFromCornerForVertical(): cc.Point
  
      /**
       * Get the scroll bar's width
       *
       * @returns {number} the scroll bar's width
       */
      getScrollBarWidth(): number
  
      /**
       * Get the touch total time threshold
       *
       * @returns {Number}
       */
      getTouchTotalTimeThreshold(): number
  
      /**
       * Returns whether bounce is enabled
       *
       * @returns {boolean}
       */
      isBounceEnabled(): boolean
  
      /**
       * Returns whether inertiaScroll is enabled
       *
       * @returns {boolean}
       */
      isInertiaScrollEnabled(): boolean
  
      /**
       * Query scroll bar auto hide state
       *
       * @returns {boolean}
       */
      isScrollBarAutoHideEnabled(): boolean
  
      /**
       * Query scroll bar state.
       *
       * @returns {boolean} True if scroll bar is enabled, false otherwise.
       */
      isScrollBarEnabled(): boolean
  
      /**
       * Move inner container to bottom boundary of ScrollView.
       */
      jumpToBottom(): any
  
      /**
       * Move inner container to bottom and left boundary of ScrollView.
       */
      jumpToBottomLeft(): any
  
      /**
       * Move inner container to bottom and right boundary of ScrollView.
       */
      jumpToBottomRight(): any
  
      /**
       * Move inner container to left boundary of ScrollView.
       */
      jumpToLeft(): any
  
      /**
       * Move inner container to both _direction percent position of ScrollView.
       *
       * @param {cc.Point} percent The destination vertical percent, accept value between 0 - 100
       */
      jumpToPercentBothDirection(percent: cc.Point): any
  
      /**
       * Move inner container to horizontal percent position of ScrollView.
       *
       * @param {Number} percent The destination vertical percent, accept value between 0 - 100
       */
      jumpToPercentHorizontal(percent: number): any
  
      /**
       * Move inner container to vertical percent position of ScrollView.
       *
       * @param {Number} percent The destination vertical percent, accept value between 0 - 100
       */
      jumpToPercentVertical(percent: number): any
  
      /**
       * Move inner container to right boundary of ScrollView.
       */
      jumpToRight(): any
  
      /**
       * Move inner container to top boundary of ScrollView.
       */
      jumpToTop(): any
  
      /**
       * Move inner container to top and left boundary of ScrollView.
       */
      jumpToTopLeft(): any
  
      /**
       * Move inner container to top and right boundary of ScrollView.
       */
      jumpToTopRight(): any
  
      /**
       * Scroll inner container to bottom boundary of ScrollView.
       *
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToBottom(time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to bottom and left boundary of ScrollView.
       *
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToBottomLeft(time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to bottom and right boundary of ScrollView.
       *
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToBottomRight(time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to left boundary of ScrollView.
       *
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToLeft(time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to both _direction percent position of ScrollView.
       *
       * @param {cc.Point} percent
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToPercentBothDirection(percent: cc.Point, time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to horizontal percent position of ScrollView.
       *
       * @param {Number} percent
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToPercentHorizontal(percent: number, time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to vertical percent position of ScrollView.
       *
       * @param {Number} percent
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToPercentVertical(percent: number, time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to right boundary of ScrollView.
       *
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToRight(time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to top boundary of ScrollView.
       *
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToTop(time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to top and left boundary of ScrollView.
       *
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToTopLeft(time: number, attenuated: boolean): any
  
      /**
       * Scroll inner container to top and right boundary of ScrollView.
       *
       * @param {Number} time
       * @param {Boolean} attenuated
       */
      scrollToTopRight(time: number, attenuated: boolean): any
  
      /**
       * Sets bounce enabled
       *
       * @param {Boolean} enabled
       */
      setBounceEnabled(enabled: boolean): any
  
      /**
       * Changes scroll _direction of ScrollView.
       *
       * @param {ccui.ScrollView.DIR_NONE | ccui.ScrollView.DIR_VERTICAL | ccui.ScrollView.DIR_HORIZONTAL | ccui.ScrollView.DIR_BOTH} dir Direction::VERTICAL means vertical scroll, Direction::HORIZONTAL means horizontal scroll
       */
      setDirection(dir: any): any
  
      /**
       * Sets inertiaScroll enabled
       *
       * @param {boolean} enabled
       */
      setInertiaScrollEnabled(enabled: boolean): any
  
      /**
       * Set inner container position
       *
       * @param {cc.Point} position Inner container position.
       */
      setInnerContainerPosition(position: cc.Point): any
  
      /**
       * Changes inner container size of ScrollView.
       * Inner container size must be larger than or equal the size of ScrollView.
       *
       * @param {cc.Size} size inner container size.
       */
      setInnerContainerSize(size: cc.Size): any
  
      /**
       * Set scroll bar auto hide state
       *
       * @param {boolean} autoHideEnabled scroll bar auto hide state
       */
      setScrollBarAutoHideEnabled(autoHideEnabled: boolean): any
  
      /**
       * Set scroll bar auto hide time
       *
       * @param {number} autoHideTime scroll bar auto hide state
       */
      setScrollBarAutoHideTime(autoHideTime: number): any
  
      /**
       * Set the scroll bar's color
       *
       * @param {cc.Color} color the scroll bar's color
       */
      setScrollBarColor(color: cc.Color): any
  
      /**
       * Toggle scroll bar enabled.
       *
       * @param {boolean} enabled True if enable scroll bar, false otherwise.
       */
      setScrollBarEnabled(enabled: boolean): any
  
      /**
       * Set the scroll bar's opacity
       *
       * @param {number} opacity the scroll bar's opacity
       */
      setScrollBarOpacity(opacity: number): any
  
      /**
       * Set the scroll bar positions from the left-bottom corner (horizontal) and right-top corner (vertical).
       *
       * @param {cc.Point} positionFromCorner The position from the left-bottom corner (horizontal) and right-top corner (vertical).
       */
      setScrollBarPositionFromCorner(positionFromCorner: cc.Point): any
  
      /**
       * Set the horizontal scroll bar position from left-bottom corner.
       *
       * @param {cc.Point} positionFromCorner The position from left-bottom corner
       */
      setScrollBarPositionFromCornerForHorizontal(positionFromCorner: cc.Point): any
  
      /**
       * Set the vertical scroll bar position from right-top corner.
       *
       * @param {cc.Point} positionFromCorner The position from right-top corner
       */
      setScrollBarPositionFromCornerForVertical(positionFromCorner: cc.Point): any
  
      /**
       * Set the scroll bar's width
       *
       * @param {number} width The scroll bar's width
       */
      setScrollBarWidth(width: number): any
  
      /**
       * Set the touch total time threshold
       *
       * @param {Number} touchTotalTimeThreshold
       */
      setTouchTotalTimeThreshold(touchTotalTimeThreshold: number): any
  
      /**
       * Immediately stops inner container scroll initiated by any of the "scrollTo*" member functions
       */
      stopAutoScroll(): any
  
      /**
       * The update callback handler.
       *
       * @param {Number} dt
       */
      update(dt: number): any
  
  
      /**
       * - Indicate whether clipping is enabled
       */
      clippingEnabled: boolean
  
      /**
       *
       */
      clippingType: any
  
      /**
       *
       */
      layoutType: any
  
      /**
       * Adds a widget to the container.
       *
       * @param {ccui.Widget} widget
       * @param {Number} zOrder
       * @param {Number|string} tag tag or name
       */
      addChild(widget: ccui.Widget, zOrder: number, tag: number | string): any
  
      /**
       * force refresh widget layout
       */
      forceDoLayout(): any
  
      /**
       * Gets background color of ccui.Layout, if color type is Layout.COLOR_SOLID.
       *
       * @returns {cc.Color}
       */
      getBackGroundColor(): cc.Color
  
      /**
       * Get background opacity value of ccui.Layout.
       *
       * @returns {Number}
       */
      getBackGroundColorOpacity(): number
  
      /**
       * Get background color type of ccui.Layout.
       *
       * @returns {ccui.Layout.BG_COLOR_NONE|ccui.Layout.BG_COLOR_SOLID|ccui.Layout.BG_COLOR_GRADIENT}
       */
      getBackGroundColorType(): any
  
      /**
       * Gets background color vector of ccui.Layout, if color type is Layout.COLOR_GRADIENT
       *
       * @returns {cc.Point}
       */
      getBackGroundColorVector(): cc.Point
  
      /**
       * Gets background end color of ccui.Layout
       *
       * @returns {cc.Color}
       */
      getBackGroundEndColor(): cc.Color
  
      /**
       * Gets background image capinsets of ccui.Layout.
       *
       * @returns {cc.Rect}
       */
      getBackGroundImageCapInsets(): cc.Rect
  
      /**
       * Gets backGround image color
       *
       * @returns {cc.Color}
       */
      getBackGroundImageColor(): cc.Color
  
      /**
       * Gets backGround image opacity
       *
       * @returns {Number}
       */
      getBackGroundImageOpacity(): number
  
      /**
       * Gets background image texture size.
       *
       * @returns {cc.Size}
       */
      getBackGroundImageTextureSize(): cc.Size
  
      /**
       * Gets background start color of ccui.Layout
       *
       * @returns {cc.Color}
       */
      getBackGroundStartColor(): cc.Color
  
      /**
       * Gets clipping type of ccui.Layout
       *
       * @returns {ccui.Layout.CLIPPING_STENCIL|ccui.Layout.CLIPPING_SCISSOR}
       */
      getClippingType(): any
  
      /**
       * Gets LayoutType of ccui.Layout.
       *
       * @returns {null}
       */
      getLayoutType(): null
  
      /**
       * Get whether background image is use scale9 renderer.
       *
       * @returns {Boolean}
       */
      isBackGroundImageScale9Enabled(): boolean
  
      /**
       * Gets if layout is clipping enabled.
       *
       * @returns {Boolean} if layout is clipping enabled.
       */
      isClippingEnabled(): boolean
  
      /**
       * Gets whether enable focus loop
       *
       * @returns {boolean} If focus loop is enabled, then it will return true, otherwise it returns false. The default value is false.
       */
      isLoopFocus(): boolean
  
      /**
       * Returns whether the layout will pass the focus to its children or not. The default value is true
       *
       * @returns {boolean} To query whether the layout will pass the focus to its children or not. The default value is true
       */
      isPassFocusToChild(): boolean
  
      /**
       * To specify a user-defined functor to decide which child widget of the layout should get focused
       *
       * @param {Number} direction
       * @param {ccui.Widget} current
       */
      onPassFocusToChild(direction: number, current: ccui.Widget): any
  
      /**
       * Removes all children from the container with a cleanup, and sets the layout dirty flag to true.
       *
       * @param {Boolean} cleanup
       */
      removeAllChildren(cleanup: boolean): any
  
      /**
       * Removes all children from the container, do a cleanup to all running actions depending on the cleanup parameter,
       * and sets the layout dirty flag to true.
       *
       * @param {Boolean} cleanup true if all running actions on all children nodes should be cleanup, false otherwise.
       */
      removeAllChildrenWithCleanup(cleanup: boolean): any
  
      /**
       * Remove the background image of ccui.Layout.
       */
      removeBackGroundImage(): any
  
      /**
       * Removes child widget from ccui.Layout, and sets the layout dirty flag to true.
       *
       * @param {ccui.Widget} widget
       * @param {Boolean} cleanup
       */
      removeChild(widget: ccui.Widget, cleanup: boolean): any
  
      /**
       * request to refresh widget layout, it will do layout at visit calls
       */
      requestDoLayout(): any
  
      /**
       * Sets background color for layout, if color type is Layout.COLOR_SOLID
       *
       * @param {cc.Color} color
       * @param {cc.Color} endColor
       */
      setBackGroundColor(color: cc.Color, endColor: cc.Color): any
  
      /**
       * Sets background opacity to ccui.Layout.
       *
       * @param {number} opacity
       */
      setBackGroundColorOpacity(opacity: number): any
  
      /**
       * Sets Color Type for ccui.Layout.
       *
       * @param {ccui.Layout.BG_COLOR_NONE|ccui.Layout.BG_COLOR_SOLID|ccui.Layout.BG_COLOR_GRADIENT} type
       */
      setBackGroundColorType(type: any): any
  
      /**
       * Sets background color vector for layout, if color type is Layout.COLOR_GRADIENT
       *
       * @param {cc.Point} vector
       */
      setBackGroundColorVector(vector: cc.Point): any
  
      /**
       * Sets a background image for layout
       *
       * @param {String} fileName
       * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
       */
      setBackGroundImage(fileName: string, texType: any): any
  
      /**
       * Sets a background image CapInsets for layout, if the background image is a scale9 render.
       *
       * @param {cc.Rect} capInsets capinsets of background image.
       */
      setBackGroundImageCapInsets(capInsets: cc.Rect): any
  
      /**
       * Sets backGround image color
       *
       * @param {cc.Color} color
       */
      setBackGroundImageColor(color: cc.Color): any
  
      /**
       * Sets backGround image Opacity
       *
       * @param {Number} opacity
       */
      setBackGroundImageOpacity(opacity: number): any
  
      /**
       * Sets background image use scale9 renderer.
       *
       * @param {Boolean} able true that use scale9 renderer, false otherwise.
       */
      setBackGroundImageScale9Enabled(able: boolean): any
  
      /**
       * Changes if layout can clip it's content and locChild.
       * If you really need this, please enable it. But it would reduce the rendering efficiency.
       *
       * @param {Boolean} able clipping enabled.
       */
      setClippingEnabled(able: boolean): any
  
      /**
       * Sets clipping type to ccui.Layout
       *
       * @param {ccui.Layout.CLIPPING_STENCIL|ccui.Layout.CLIPPING_SCISSOR} type
       */
      setClippingType(type: any): any
  
      /**
       * Sets LayoutType to ccui.Layout, LayoutManager will do layout by layout type..
       *
       * @param {ccui.Layout.ABSOLUTE|ccui.Layout.LINEAR_VERTICAL|ccui.Layout.LINEAR_HORIZONTAL|ccui.Layout.RELATIVE} type
       */
      setLayoutType(type: any): any
  
      /**
       * If a layout is loop focused which means that the focus movement will be inside the layout
       *
       * @param {Boolean} loop pass true to let the focus movement loop inside the layout
       */
      setLoopFocus(loop: boolean): any
  
      /**
       * Specifies whether the layout pass its focus to its child
       *
       * @param {any} pass To specify whether the layout pass its focus to its child
       */
      setPassFocusToChild(pass: any): any
  
      /**
       * Calls adaptRenderers (its subclass will override it.) and do layout.
       * If clippingEnabled is true, it will clip/scissor area.
       *
       * @param {cc.Node.RenderCmd} parentCmd
       */
      visit(parentCmd: any): any
  
  
      /**
       * - The action tag of the widget
       */
      actionTag: number
  
      /**
       * - Indicate whether the widget is bright
       */
      bright: boolean
  
      /**
       * - Indicate whether the widget is enabled
       */
      enabled: boolean
  
      /**
       * - Indicate whether the widget is focused
       */
      focused: boolean
  
      /**
       * - Height in percentage of parent height
       */
      heightPercent: number
  
      /**
       * - The name of the widget
       */
      name: string
  
      /**
       * When a widget lose/get focus, this method will be called. Be Caution when you provide your own version,
       * you must call widget.setFocused(true/false) to change the focus state of the current focused widget;
       */
      onFocusChanged: any
  
      /**
       * use this function to manually specify the next focused widget regards to each direction
       */
      onNextFocusedWidget: any
  
      /**
       * - The size type of the widget
       */
      sizeType: any
  
      /**
       * - Indicate whether touch events are enabled
       */
      touchEnabled: boolean
  
      /**
       * - Indicate whether the update function is scheduled
       */
      updateEnabled: boolean
  
      /**
       * - <@readonly> The direct parent when it's a widget also, otherwise equals null
       */
      widgetParent: ccui.Widget
  
      /**
       * - <@readonly> The type of the widget
       */
      widgetType: any
  
      /**
       * - Width in percentage of parent width
       */
      widthPercent: number
  
      /**
       * - Position x in percentage of width
       */
      xPercent: number
  
      /**
       * - Position y in percentage of height
       */
      yPercent: number
  
      /**
       * Set a event handler to the widget in order to use cocostudio editor and framework
       *
       * @param {function} callback
       */
      addCCSEventListener(callback: Function): any
  
      /**
       * Adds a node for widget (this function is deleted in -x)
       *
       * @param {cc.Node} node
       * @param {Number} zOrder
       * @param {Number} tag
       */
      addNode(node: cc.Node, zOrder: number, tag: number): any
  
      /**
       * Sets the touch event target/selector of the ccui.Widget
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addTouchEventListener(selector: Function, target: object): any
  
      /**
       * Calls the checkChildInfo of widget's parent, its subclass will override it.
       *
       * @param {number} handleState
       * @param {ccui.Widget} sender
       * @param {cc.Point} touchPoint
       */
      checkChildInfo(handleState: number, sender: ccui.Widget, touchPoint: cc.Point): any
  
      /**
       * Checks a point if in parent's area.
       *
       * @param {cc.Point} pt
       *
       * @returns {Boolean}
       */
      clippingParentAreaContainPoint(pt: cc.Point): boolean
  
      /**
       * Clones a new widget.
       *
       * @returns {ccui.Widget}
       */
      clone(): ccui.Widget
  
      /**
       * A call back function when widget lost of focus.
       */
      didNotSelectSelf(): any
  
      /**
       * Dispatch a EventFocus through a EventDispatcher
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      dispatchFocusEvent(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * When a widget is in a layout, you could call this method to get the next focused widget within a specified direction.
       * If the widget is not in a layout, it will return itself
       *
       * @param {any} direction the direction to look for the next focused widget in a layout
       * @param {any} current the current focused widget
       */
      findNextFocusedWidget(direction: any, current: any): any
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomBoundary(): number
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomInParent(): number
  
      /**
       * Gets callback name of widget
       *
       * @returns v3.3{String|Null}
       */
      getCallbackName(): string | null
  
      /**
       * Gets callback type of widget
       *
       * @returns v3.3{String|null}
       */
      getCallbackType(): string | null
  
      /**
       * no matter what widget object you call this method on , it will return you the exact one focused widget
       */
      getCurrentFocusedWidget(): any
  
      /**
       * Get custom size of ccui.Widget
       *
       * @returns {cc.Size}
       */
      getCustomSize(): cc.Size
  
      /**
       * Returns the "class name" of widget.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Gets layout parameter
       *
       * @param {ccui.LayoutParameter.NONE|ccui.LayoutParameter.LINEAR|ccui.LayoutParameter.RELATIVE} type
       *
       * @returns {ccui.LayoutParameter}
       */
      getLayoutParameter(type: any): ccui.LayoutParameter
  
      /**
       * Gets layout size of ccui.Widget.
       *
       * @returns {cc.Size}
       */
      getLayoutSize(): cc.Size
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftBoundary(): number
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftInParent(): number
  
      /**
       * Gets node by tag
       *
       * @param {Number} tag
       *
       * @returns {cc.Node}
       */
      getNodeByTag(tag: number): cc.Node
  
      /**
       * Returns all children.
       *
       * @returns {Array}
       */
      getNodes(): any[]
  
      /**
       * Gets the percent (x,y) of the widget
       *
       * @returns {cc.Point} The percent (x,y) of the widget in OpenGL coordinates
       */
      getPositionPercent(): cc.Point
  
      /**
       * Gets the position type of the widget
       *
       * @returns {Number} the position type of widget
       */
      getPositionType(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightBoundary(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightInParent(): number
  
      /**
       * Returns size of widget
       *
       * @returns {cc.Size}
       */
      getSize(): cc.Size
  
      /**
       * Returns size percent of ccui.Widget
       *
       * @returns {cc.Point}
       */
      getSizePercent(): cc.Point
  
      /**
       * Gets the size type of widget.
       *
       * @returns {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} that is widget's size type
       */
      getSizeType(): any
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopBoundary(): number
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopInParent(): number
  
      /**
       * Gets the position of touch began event.
       *
       * @returns {cc.Point}
       */
      getTouchBeganPosition(): cc.Point
  
      /**
       * Gets the touch end point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch end point.
       */
      getTouchEndPos(): cc.Point
  
      /**
       * Gets the position of touch end event
       *
       * @returns {cc.Point}
       */
      getTouchEndPosition(): cc.Point
  
      /**
       * Gets the touch move point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch move point.
       */
      getTouchMovePos(): cc.Point
  
      /**
       * Gets the position of touch moved event
       *
       * @returns {cc.Point}
       */
      getTouchMovePosition(): cc.Point
  
      /**
       * Gets the touch began point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch began point.
       */
      getTouchStartPos(): cc.Point
  
      /**
       * Gets the Virtual Renderer of widget.
       *
       * @returns {ccui.Widget}
       */
      getVirtualRenderer(): ccui.Widget
  
      /**
       * Gets the content size of widget. Content size is widget's texture size.
       */
      getVirtualRendererSize(): any
  
      /**
       * The direct parent when it's a widget also, otherwise equals null
       *
       * @returns {ccui.Widget|null}
       */
      getWidgetParent(): ccui.Widget | null
  
      /**
       * get widget type
       *
       * @returns {ccui.Widget.TYPE_WIDGET|ccui.Widget.TYPE_CONTAINER}
       */
      getWidgetType(): any
  
      /**
       * Gets world position of ccui.Widget.
       *
       * @returns {cc.Point} world position of ccui.Widget.
       */
      getWorldPosition(): cc.Point
  
      /**
       * Checks a point if is in widget's space
       *
       * @param {cc.Point} pt
       *
       * @returns {boolean} true if the point is in widget's space, false otherwise.
       */
      hitTest(pt: cc.Point): boolean
  
      /**
       * Ignore the widget size
       *
       * @param {Boolean} ignore true that widget will ignore it's size, use texture size, false otherwise. Default value is true.
       */
      ignoreContentAdaptWithSize(ignore: boolean): any
  
      /**
       * initializes state of widget. please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
       *
       * @returns {boolean}
       */
      init(): boolean
  
      /**
       * Sends the touch event to widget's parent, its subclass will override it, e.g. ccui.ScrollView, ccui.PageView
       *
       * @param {Number} eventType
       * @param {ccui.Widget} sender
       * @param {cc.Touch} touch
       */
      interceptTouchEvent(eventType: number, sender: ccui.Widget, touch: cc.Touch): any
  
      /**
       * Determines if the widget is bright
       *
       * @returns {boolean} true if the widget is bright, false if the widget is dark.
       */
      isBright(): boolean
  
      /**
       * returns whether clipping parent widget contains point.
       *
       * @param {cc.Point} pt location point
       *
       * @returns {Boolean}
       */
      isClippingParentContainsPoint(pt: cc.Point): boolean
  
      /**
       * Determines if the widget is enabled
       *
       * @returns {boolean}
       */
      isEnabled(): boolean
  
      /**
       * Returns the flag which indicates whether the widget is flipped horizontally or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleX(sprite.getScaleX() * -1);
       *
       * @returns {Boolean} true if the widget is flipped horizontally, false otherwise.
       */
      isFlippedX(): boolean
  
      /**
       * Return the flag which indicates whether the widget is flipped vertically or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleY(widget.getScaleY() * -1);
       *
       * @returns {Boolean} true if the widget is flipped vertically, false otherwise.
       */
      isFlippedY(): boolean
  
      /**
       * Determines if the widget is on focused
       *
       * @returns {boolean} whether the widget is focused or not
       */
      isFocused(): boolean
  
      /**
       * returns whether the widget could accept focus.
       *
       * @returns {boolean} true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      isFocusEnabled(): boolean
  
      /**
       * Determines if the widget is highlighted
       *
       * @returns {boolean} true if the widget is highlighted, false if the widget is not highlighted .
       */
      isHighlighted(): boolean
  
      /**
       * Gets whether ignore the content size (custom size)
       *
       * @returns {boolean} true that widget will ignore it's size, use texture size, false otherwise.
       */
      isIgnoreContentAdaptWithSize(): boolean
  
      /**
       * Returns whether enable layout component of a widget
       *
       * @returns {Boolean} true represent the widget use Layout Component, false represent the widget couldn't use Layout Component.
       */
      isLayoutComponentEnabled(): boolean
  
      /**
       * Return whether the widget is propagate touch events to its parents or not
       *
       * @returns v3.2{boolean}
       */
      isPropagateTouchEvents(): boolean
  
      /**
       * Return whether the widget is swallowing touch or not
       *
       * @returns v3.2{boolean}
       */
      isSwallowTouches(): boolean
  
      /**
       * Returns whether or not touch is enabled.
       *
       * @returns {boolean} true if the widget is touch enabled, false if the widget is touch disabled.
       */
      isTouchEnabled(): boolean
  
      /**
       *
       *
       * @returns v3.2{boolean} true represent the widget use Unify Size, false represent the widget couldn't use Unify Size
       */
      isUnifySizeEnabled(): boolean
  
      /**
       * Calls updateSizeAndPosition and its parent's onEnter
       */
      onEnter(): any
  
      /**
       * Calls unscheduleUpdate and its parent's onExit
       */
      onExit(): any
  
      /**
       * This method is called when a focus change event happens
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      onFocusChange(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * The callback of touch began event.
       * If the bounding box of ccui.Widget contains the touch point, it will do the following things:
       * 1. sets highlight state,
       * 2. sends event to parent widget by interceptTouchEvent
       * 3. calls the callback of touch began event.
       * 4. returns true,
       * otherwise returns false directly.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       *
       * @returns {boolean}
       */
      onTouchBegan(touch: cc.Touch, event: cc.Event): boolean
  
      /**
       * A call back function called when widget is selected, and on touch canceled.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchCancelled(touchPoint: cc.Point): any
  
      /**
       * The callback of touch end event
       * It sends event to parent widget by interceptTouchEvent,
       * calls the callback of touch end event (highlight= true) or touch canceled event (highlight= false).
       * sets the highlight state to false ,
       *
       * @param {any} touch
       * @param {any} event
       */
      onTouchEnded(touch: any, event: any): any
  
      /**
       * A call back function called when widget is selected, and on touch long clicked.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchLongClicked(touchPoint: cc.Point): any
  
      /**
       * The callback of touch moved event.
       * It sets the highlight state by touch, sends event to parent widget by interceptTouchEvent and calls the callback of touch moved event.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       */
      onTouchMoved(touch: cc.Touch, event: cc.Event): any
  
      /**
       * Removes all node
       */
      removeAllNodes(): any
  
      /**
       * Removes a node from ccui.Widget
       *
       * @param {cc.Node} node
       * @param {Boolean} cleanup
       */
      removeNode(node: cc.Node, cleanup: boolean): any
  
      /**
       * Removes node by tag
       *
       * @param {Number} tag
       * @param {Boolean} cleanup
       */
      removeNodeByTag(tag: number, cleanup: boolean): any
  
      /**
       * when a widget calls this method, it will get focus immediately.
       */
      requestFocus(): any
  
      /**
       * Sets whether the widget is bright. The default value is true, a widget is default to bright
       *
       * @param {Boolean} bright true if the widget is bright, false if the widget is dark.
       */
      setBright(bright: boolean): any
  
      /**
       * To set the bright style of ccui.Widget.
       *
       * @param {Number} style BRIGHT_NORMAL the widget is normal state, BRIGHT_HIGHLIGHT the widget is height light state.
       */
      setBrightStyle(style: number): any
  
      /**
       * Sets callback name to widget.
       *
       * @param {String} callbackName
       */
      setCallbackName(callbackName: string): any
  
      /**
       * Sets callback type to widget
       *
       * @param {String} callbackType
       */
      setCallbackType(callbackType: string): any
  
      /**
       * Sets _customSize of ccui.Widget, if ignoreSize is true, the content size is its renderer's contentSize, otherwise the content size is parameter.
       * and updates size percent by parent content size. At last, updates its children's size and position.
       *
       * @param {cc.Size|Number} contentSize content size or width of content size
       * @param {Number} height
       */
      setContentSize(contentSize: cc.Size | number, height: number): any
  
      /**
       * Sets whether the widget is enabled
       * true if the widget is enabled, widget may be touched , false if the widget is disabled, widget cannot be touched.
       * The default value is true, a widget is default to enabled
       *
       * @param {Boolean} enabled
       */
      setEnabled(enabled: boolean): any
  
      /**
       * Sets whether the widget should be flipped horizontally or not.
       *
       * @param {Boolean} flipX true if the widget should be flipped horizontally, false otherwise.
       */
      setFlippedX(flipX: boolean): any
  
      /**
       * Sets whether the widget should be flipped vertically or not.
       *
       * @param {Boolean} flipY true if the widget should be flipped vertically, false otherwise.
       */
      setFlippedY(flipY: boolean): any
  
      /**
       * Sets whether the widget is on focused
       * The default value is false, a widget is default to not on focused
       *
       * @param {boolean} focus pass true to let the widget get focus or pass false to let the widget lose focus
       */
      setFocused(focus: boolean): any
  
      /**
       * sets whether the widget could accept focus.
       *
       * @param {Boolean} enable true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      setFocusEnabled(enable: boolean): any
  
      /**
       * Sets whether the widget is highlighted. The default value is false, a widget is default to not highlighted
       *
       * @param {any} highlight true if the widget is highlighted, false if the widget is not highlighted.
       */
      setHighlighted(highlight: any): any
  
      /**
       * Whether enable layout component of a widget
       *
       * @param {Boolean} enable enable layout Component of a widget
       */
      setLayoutComponentEnabled(enable: boolean): any
  
      /**
       * Gets LayoutParameter of widget.
       *
       * @param {ccui.LayoutParameter} parameter
       */
      setLayoutParameter(parameter: ccui.LayoutParameter): any
  
      /**
       * Changes the position (x,y) of the widget .
       * The original point (0,0) is at the left-bottom corner of screen.
       *
       * @param {cc.Point|Number} pos
       * @param {Number} posY
       */
      setPosition(pos: cc.Point | number, posY: number): any
  
      /**
       * Changes the position (x,y) of the widget
       *
       * @param {cc.Point} percent
       */
      setPositionPercent(percent: cc.Point): any
  
      /**
       * Changes the position type of the widget
       *
       * @param {Number} type the position type of widget
       */
      setPositionType(type: number): any
  
      /**
       * Allow widget touch events to propagate to its parents. Set false will disable propagation
       *
       * @param {Boolean} isPropagate
       */
      setPropagateTouchEvents(isPropagate: boolean): any
  
      /**
       * Changes the size that is widget's size
       *
       * @param {cc.Size} size that is widget's size
       */
      setSize(size: cc.Size): any
  
      /**
       * Changes the percent that is widget's percent size
       *
       * @param {cc.Point} percent that is widget's percent size, width and height value from 0 to 1.
       */
      setSizePercent(percent: cc.Point): any
  
      /**
       * TEXTURE_RES_TYPE
       * Changes the size type of widget.
       *
       * @param {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} type that is widget's size type
       */
      setSizeType(type: any): any
  
      /**
       * Specify widget to swallow touches or not
       *
       * @param {Boolean} swallow
       */
      setSwallowTouches(swallow: boolean): any
  
      /**
       * Sets whether the widget is touch enabled. The default value is false, a widget is default to touch disabled
       *
       * @param {Boolean} enable true if the widget is touch enabled, false if the widget is touch disabled.
       */
      setTouchEnabled(enable: boolean): any
  
      /**
       *
       *
       * @param {Boolean} enable enable Unify Size of a widget
       */
      setUnifySizeEnabled(enable: boolean): any
  
      /**
       * updates its size by size type and its position by position type.
       *
       * @param {cc.Size} parentSize parent size
       */
      updateSizeAndPosition(parentSize: cc.Size): any
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    }
  }
  
  declare namespace ccui {
    interface IVBox extends ccui.ILayout {
  
  
      initWithSize(size: cc.Size): boolean
    }
  
    interface IVBoxOverrides {
  
    }
  
  
  
    class VBox implements IVBox, IVBoxOverrides {
  
      /**
       * The constructor of ccui.VBox
       *
       * @param {cc.Size} size
       */
      constructor(size: cc.Size)
  
  
  
  
      /**
       * Creates a VBox
       *
       * @param {cc.Size} size
       *
       * @returns {ccui.VBox}
       */
      static create(size: cc.Size): ccui.VBox
  
  
  
  
  
      /**
       * Initializes a VBox with size.
       *
       * @param {cc.Size} size
       *
       * @returns {boolean}
       */
      initWithSize(size: cc.Size): boolean
  
  
      /**
       * - Indicate whether clipping is enabled
       */
      clippingEnabled: boolean
  
      /**
       *
       */
      clippingType: any
  
      /**
       *
       */
      layoutType: any
  
      /**
       * Adds a widget to the container.
       *
       * @param {ccui.Widget} widget
       * @param {Number} zOrder
       * @param {Number|string} tag tag or name
       */
      addChild(widget: ccui.Widget, zOrder: number, tag: number | string): any
  
      /**
       * force refresh widget layout
       */
      forceDoLayout(): any
  
      /**
       * Gets background color of ccui.Layout, if color type is Layout.COLOR_SOLID.
       *
       * @returns {cc.Color}
       */
      getBackGroundColor(): cc.Color
  
      /**
       * Get background opacity value of ccui.Layout.
       *
       * @returns {Number}
       */
      getBackGroundColorOpacity(): number
  
      /**
       * Get background color type of ccui.Layout.
       *
       * @returns {ccui.Layout.BG_COLOR_NONE|ccui.Layout.BG_COLOR_SOLID|ccui.Layout.BG_COLOR_GRADIENT}
       */
      getBackGroundColorType(): any
  
      /**
       * Gets background color vector of ccui.Layout, if color type is Layout.COLOR_GRADIENT
       *
       * @returns {cc.Point}
       */
      getBackGroundColorVector(): cc.Point
  
      /**
       * Gets background end color of ccui.Layout
       *
       * @returns {cc.Color}
       */
      getBackGroundEndColor(): cc.Color
  
      /**
       * Gets background image capinsets of ccui.Layout.
       *
       * @returns {cc.Rect}
       */
      getBackGroundImageCapInsets(): cc.Rect
  
      /**
       * Gets backGround image color
       *
       * @returns {cc.Color}
       */
      getBackGroundImageColor(): cc.Color
  
      /**
       * Gets backGround image opacity
       *
       * @returns {Number}
       */
      getBackGroundImageOpacity(): number
  
      /**
       * Gets background image texture size.
       *
       * @returns {cc.Size}
       */
      getBackGroundImageTextureSize(): cc.Size
  
      /**
       * Gets background start color of ccui.Layout
       *
       * @returns {cc.Color}
       */
      getBackGroundStartColor(): cc.Color
  
      /**
       * Gets clipping type of ccui.Layout
       *
       * @returns {ccui.Layout.CLIPPING_STENCIL|ccui.Layout.CLIPPING_SCISSOR}
       */
      getClippingType(): any
  
      /**
       * Gets LayoutType of ccui.Layout.
       *
       * @returns {null}
       */
      getLayoutType(): null
  
      /**
       * Get whether background image is use scale9 renderer.
       *
       * @returns {Boolean}
       */
      isBackGroundImageScale9Enabled(): boolean
  
      /**
       * Gets if layout is clipping enabled.
       *
       * @returns {Boolean} if layout is clipping enabled.
       */
      isClippingEnabled(): boolean
  
      /**
       * Gets whether enable focus loop
       *
       * @returns {boolean} If focus loop is enabled, then it will return true, otherwise it returns false. The default value is false.
       */
      isLoopFocus(): boolean
  
      /**
       * Returns whether the layout will pass the focus to its children or not. The default value is true
       *
       * @returns {boolean} To query whether the layout will pass the focus to its children or not. The default value is true
       */
      isPassFocusToChild(): boolean
  
      /**
       * To specify a user-defined functor to decide which child widget of the layout should get focused
       *
       * @param {Number} direction
       * @param {ccui.Widget} current
       */
      onPassFocusToChild(direction: number, current: ccui.Widget): any
  
      /**
       * Removes all children from the container with a cleanup, and sets the layout dirty flag to true.
       *
       * @param {Boolean} cleanup
       */
      removeAllChildren(cleanup: boolean): any
  
      /**
       * Removes all children from the container, do a cleanup to all running actions depending on the cleanup parameter,
       * and sets the layout dirty flag to true.
       *
       * @param {Boolean} cleanup true if all running actions on all children nodes should be cleanup, false otherwise.
       */
      removeAllChildrenWithCleanup(cleanup: boolean): any
  
      /**
       * Remove the background image of ccui.Layout.
       */
      removeBackGroundImage(): any
  
      /**
       * Removes child widget from ccui.Layout, and sets the layout dirty flag to true.
       *
       * @param {ccui.Widget} widget
       * @param {Boolean} cleanup
       */
      removeChild(widget: ccui.Widget, cleanup: boolean): any
  
      /**
       * request to refresh widget layout, it will do layout at visit calls
       */
      requestDoLayout(): any
  
      /**
       * Sets background color for layout, if color type is Layout.COLOR_SOLID
       *
       * @param {cc.Color} color
       * @param {cc.Color} endColor
       */
      setBackGroundColor(color: cc.Color, endColor: cc.Color): any
  
      /**
       * Sets background opacity to ccui.Layout.
       *
       * @param {number} opacity
       */
      setBackGroundColorOpacity(opacity: number): any
  
      /**
       * Sets Color Type for ccui.Layout.
       *
       * @param {ccui.Layout.BG_COLOR_NONE|ccui.Layout.BG_COLOR_SOLID|ccui.Layout.BG_COLOR_GRADIENT} type
       */
      setBackGroundColorType(type: any): any
  
      /**
       * Sets background color vector for layout, if color type is Layout.COLOR_GRADIENT
       *
       * @param {cc.Point} vector
       */
      setBackGroundColorVector(vector: cc.Point): any
  
      /**
       * Sets a background image for layout
       *
       * @param {String} fileName
       * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
       */
      setBackGroundImage(fileName: string, texType: any): any
  
      /**
       * Sets a background image CapInsets for layout, if the background image is a scale9 render.
       *
       * @param {cc.Rect} capInsets capinsets of background image.
       */
      setBackGroundImageCapInsets(capInsets: cc.Rect): any
  
      /**
       * Sets backGround image color
       *
       * @param {cc.Color} color
       */
      setBackGroundImageColor(color: cc.Color): any
  
      /**
       * Sets backGround image Opacity
       *
       * @param {Number} opacity
       */
      setBackGroundImageOpacity(opacity: number): any
  
      /**
       * Sets background image use scale9 renderer.
       *
       * @param {Boolean} able true that use scale9 renderer, false otherwise.
       */
      setBackGroundImageScale9Enabled(able: boolean): any
  
      /**
       * Changes if layout can clip it's content and locChild.
       * If you really need this, please enable it. But it would reduce the rendering efficiency.
       *
       * @param {Boolean} able clipping enabled.
       */
      setClippingEnabled(able: boolean): any
  
      /**
       * Sets clipping type to ccui.Layout
       *
       * @param {ccui.Layout.CLIPPING_STENCIL|ccui.Layout.CLIPPING_SCISSOR} type
       */
      setClippingType(type: any): any
  
      /**
       * Sets LayoutType to ccui.Layout, LayoutManager will do layout by layout type..
       *
       * @param {ccui.Layout.ABSOLUTE|ccui.Layout.LINEAR_VERTICAL|ccui.Layout.LINEAR_HORIZONTAL|ccui.Layout.RELATIVE} type
       */
      setLayoutType(type: any): any
  
      /**
       * If a layout is loop focused which means that the focus movement will be inside the layout
       *
       * @param {Boolean} loop pass true to let the focus movement loop inside the layout
       */
      setLoopFocus(loop: boolean): any
  
      /**
       * Specifies whether the layout pass its focus to its child
       *
       * @param {any} pass To specify whether the layout pass its focus to its child
       */
      setPassFocusToChild(pass: any): any
  
      /**
       * Calls adaptRenderers (its subclass will override it.) and do layout.
       * If clippingEnabled is true, it will clip/scissor area.
       *
       * @param {cc.Node.RenderCmd} parentCmd
       */
      visit(parentCmd: any): any
  
  
      /**
       * - The action tag of the widget
       */
      actionTag: number
  
      /**
       * - Indicate whether the widget is bright
       */
      bright: boolean
  
      /**
       * - Indicate whether the widget is enabled
       */
      enabled: boolean
  
      /**
       * - Indicate whether the widget is focused
       */
      focused: boolean
  
      /**
       * - Height in percentage of parent height
       */
      heightPercent: number
  
      /**
       * - The name of the widget
       */
      name: string
  
      /**
       * When a widget lose/get focus, this method will be called. Be Caution when you provide your own version,
       * you must call widget.setFocused(true/false) to change the focus state of the current focused widget;
       */
      onFocusChanged: any
  
      /**
       * use this function to manually specify the next focused widget regards to each direction
       */
      onNextFocusedWidget: any
  
      /**
       * - The size type of the widget
       */
      sizeType: any
  
      /**
       * - Indicate whether touch events are enabled
       */
      touchEnabled: boolean
  
      /**
       * - Indicate whether the update function is scheduled
       */
      updateEnabled: boolean
  
      /**
       * - <@readonly> The direct parent when it's a widget also, otherwise equals null
       */
      widgetParent: ccui.Widget
  
      /**
       * - <@readonly> The type of the widget
       */
      widgetType: any
  
      /**
       * - Width in percentage of parent width
       */
      widthPercent: number
  
      /**
       * - Position x in percentage of width
       */
      xPercent: number
  
      /**
       * - Position y in percentage of height
       */
      yPercent: number
  
      /**
       * Set a event handler to the widget in order to use cocostudio editor and framework
       *
       * @param {function} callback
       */
      addCCSEventListener(callback: Function): any
  
      /**
       * Adds a node for widget (this function is deleted in -x)
       *
       * @param {cc.Node} node
       * @param {Number} zOrder
       * @param {Number} tag
       */
      addNode(node: cc.Node, zOrder: number, tag: number): any
  
      /**
       * Sets the touch event target/selector of the ccui.Widget
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addTouchEventListener(selector: Function, target: object): any
  
      /**
       * Calls the checkChildInfo of widget's parent, its subclass will override it.
       *
       * @param {number} handleState
       * @param {ccui.Widget} sender
       * @param {cc.Point} touchPoint
       */
      checkChildInfo(handleState: number, sender: ccui.Widget, touchPoint: cc.Point): any
  
      /**
       * Checks a point if in parent's area.
       *
       * @param {cc.Point} pt
       *
       * @returns {Boolean}
       */
      clippingParentAreaContainPoint(pt: cc.Point): boolean
  
      /**
       * Clones a new widget.
       *
       * @returns {ccui.Widget}
       */
      clone(): ccui.Widget
  
      /**
       * A call back function when widget lost of focus.
       */
      didNotSelectSelf(): any
  
      /**
       * Dispatch a EventFocus through a EventDispatcher
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      dispatchFocusEvent(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * When a widget is in a layout, you could call this method to get the next focused widget within a specified direction.
       * If the widget is not in a layout, it will return itself
       *
       * @param {any} direction the direction to look for the next focused widget in a layout
       * @param {any} current the current focused widget
       */
      findNextFocusedWidget(direction: any, current: any): any
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomBoundary(): number
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomInParent(): number
  
      /**
       * Gets callback name of widget
       *
       * @returns v3.3{String|Null}
       */
      getCallbackName(): string | null
  
      /**
       * Gets callback type of widget
       *
       * @returns v3.3{String|null}
       */
      getCallbackType(): string | null
  
      /**
       * no matter what widget object you call this method on , it will return you the exact one focused widget
       */
      getCurrentFocusedWidget(): any
  
      /**
       * Get custom size of ccui.Widget
       *
       * @returns {cc.Size}
       */
      getCustomSize(): cc.Size
  
      /**
       * Returns the "class name" of widget.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Gets layout parameter
       *
       * @param {ccui.LayoutParameter.NONE|ccui.LayoutParameter.LINEAR|ccui.LayoutParameter.RELATIVE} type
       *
       * @returns {ccui.LayoutParameter}
       */
      getLayoutParameter(type: any): ccui.LayoutParameter
  
      /**
       * Gets layout size of ccui.Widget.
       *
       * @returns {cc.Size}
       */
      getLayoutSize(): cc.Size
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftBoundary(): number
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftInParent(): number
  
      /**
       * Gets node by tag
       *
       * @param {Number} tag
       *
       * @returns {cc.Node}
       */
      getNodeByTag(tag: number): cc.Node
  
      /**
       * Returns all children.
       *
       * @returns {Array}
       */
      getNodes(): any[]
  
      /**
       * Gets the percent (x,y) of the widget
       *
       * @returns {cc.Point} The percent (x,y) of the widget in OpenGL coordinates
       */
      getPositionPercent(): cc.Point
  
      /**
       * Gets the position type of the widget
       *
       * @returns {Number} the position type of widget
       */
      getPositionType(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightBoundary(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightInParent(): number
  
      /**
       * Returns size of widget
       *
       * @returns {cc.Size}
       */
      getSize(): cc.Size
  
      /**
       * Returns size percent of ccui.Widget
       *
       * @returns {cc.Point}
       */
      getSizePercent(): cc.Point
  
      /**
       * Gets the size type of widget.
       *
       * @returns {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} that is widget's size type
       */
      getSizeType(): any
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopBoundary(): number
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopInParent(): number
  
      /**
       * Gets the position of touch began event.
       *
       * @returns {cc.Point}
       */
      getTouchBeganPosition(): cc.Point
  
      /**
       * Gets the touch end point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch end point.
       */
      getTouchEndPos(): cc.Point
  
      /**
       * Gets the position of touch end event
       *
       * @returns {cc.Point}
       */
      getTouchEndPosition(): cc.Point
  
      /**
       * Gets the touch move point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch move point.
       */
      getTouchMovePos(): cc.Point
  
      /**
       * Gets the position of touch moved event
       *
       * @returns {cc.Point}
       */
      getTouchMovePosition(): cc.Point
  
      /**
       * Gets the touch began point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch began point.
       */
      getTouchStartPos(): cc.Point
  
      /**
       * Gets the Virtual Renderer of widget.
       *
       * @returns {ccui.Widget}
       */
      getVirtualRenderer(): ccui.Widget
  
      /**
       * Gets the content size of widget. Content size is widget's texture size.
       */
      getVirtualRendererSize(): any
  
      /**
       * The direct parent when it's a widget also, otherwise equals null
       *
       * @returns {ccui.Widget|null}
       */
      getWidgetParent(): ccui.Widget | null
  
      /**
       * get widget type
       *
       * @returns {ccui.Widget.TYPE_WIDGET|ccui.Widget.TYPE_CONTAINER}
       */
      getWidgetType(): any
  
      /**
       * Gets world position of ccui.Widget.
       *
       * @returns {cc.Point} world position of ccui.Widget.
       */
      getWorldPosition(): cc.Point
  
      /**
       * Checks a point if is in widget's space
       *
       * @param {cc.Point} pt
       *
       * @returns {boolean} true if the point is in widget's space, false otherwise.
       */
      hitTest(pt: cc.Point): boolean
  
      /**
       * Ignore the widget size
       *
       * @param {Boolean} ignore true that widget will ignore it's size, use texture size, false otherwise. Default value is true.
       */
      ignoreContentAdaptWithSize(ignore: boolean): any
  
      /**
       * initializes state of widget. please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
       *
       * @returns {boolean}
       */
      init(): boolean
  
      /**
       * Sends the touch event to widget's parent, its subclass will override it, e.g. ccui.ScrollView, ccui.PageView
       *
       * @param {Number} eventType
       * @param {ccui.Widget} sender
       * @param {cc.Touch} touch
       */
      interceptTouchEvent(eventType: number, sender: ccui.Widget, touch: cc.Touch): any
  
      /**
       * Determines if the widget is bright
       *
       * @returns {boolean} true if the widget is bright, false if the widget is dark.
       */
      isBright(): boolean
  
      /**
       * returns whether clipping parent widget contains point.
       *
       * @param {cc.Point} pt location point
       *
       * @returns {Boolean}
       */
      isClippingParentContainsPoint(pt: cc.Point): boolean
  
      /**
       * Determines if the widget is enabled
       *
       * @returns {boolean}
       */
      isEnabled(): boolean
  
      /**
       * Returns the flag which indicates whether the widget is flipped horizontally or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleX(sprite.getScaleX() * -1);
       *
       * @returns {Boolean} true if the widget is flipped horizontally, false otherwise.
       */
      isFlippedX(): boolean
  
      /**
       * Return the flag which indicates whether the widget is flipped vertically or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleY(widget.getScaleY() * -1);
       *
       * @returns {Boolean} true if the widget is flipped vertically, false otherwise.
       */
      isFlippedY(): boolean
  
      /**
       * Determines if the widget is on focused
       *
       * @returns {boolean} whether the widget is focused or not
       */
      isFocused(): boolean
  
      /**
       * returns whether the widget could accept focus.
       *
       * @returns {boolean} true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      isFocusEnabled(): boolean
  
      /**
       * Determines if the widget is highlighted
       *
       * @returns {boolean} true if the widget is highlighted, false if the widget is not highlighted .
       */
      isHighlighted(): boolean
  
      /**
       * Gets whether ignore the content size (custom size)
       *
       * @returns {boolean} true that widget will ignore it's size, use texture size, false otherwise.
       */
      isIgnoreContentAdaptWithSize(): boolean
  
      /**
       * Returns whether enable layout component of a widget
       *
       * @returns {Boolean} true represent the widget use Layout Component, false represent the widget couldn't use Layout Component.
       */
      isLayoutComponentEnabled(): boolean
  
      /**
       * Return whether the widget is propagate touch events to its parents or not
       *
       * @returns v3.2{boolean}
       */
      isPropagateTouchEvents(): boolean
  
      /**
       * Return whether the widget is swallowing touch or not
       *
       * @returns v3.2{boolean}
       */
      isSwallowTouches(): boolean
  
      /**
       * Returns whether or not touch is enabled.
       *
       * @returns {boolean} true if the widget is touch enabled, false if the widget is touch disabled.
       */
      isTouchEnabled(): boolean
  
      /**
       *
       *
       * @returns v3.2{boolean} true represent the widget use Unify Size, false represent the widget couldn't use Unify Size
       */
      isUnifySizeEnabled(): boolean
  
      /**
       * Calls updateSizeAndPosition and its parent's onEnter
       */
      onEnter(): any
  
      /**
       * Calls unscheduleUpdate and its parent's onExit
       */
      onExit(): any
  
      /**
       * This method is called when a focus change event happens
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      onFocusChange(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * The callback of touch began event.
       * If the bounding box of ccui.Widget contains the touch point, it will do the following things:
       * 1. sets highlight state,
       * 2. sends event to parent widget by interceptTouchEvent
       * 3. calls the callback of touch began event.
       * 4. returns true,
       * otherwise returns false directly.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       *
       * @returns {boolean}
       */
      onTouchBegan(touch: cc.Touch, event: cc.Event): boolean
  
      /**
       * A call back function called when widget is selected, and on touch canceled.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchCancelled(touchPoint: cc.Point): any
  
      /**
       * The callback of touch end event
       * It sends event to parent widget by interceptTouchEvent,
       * calls the callback of touch end event (highlight= true) or touch canceled event (highlight= false).
       * sets the highlight state to false ,
       *
       * @param {any} touch
       * @param {any} event
       */
      onTouchEnded(touch: any, event: any): any
  
      /**
       * A call back function called when widget is selected, and on touch long clicked.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchLongClicked(touchPoint: cc.Point): any
  
      /**
       * The callback of touch moved event.
       * It sets the highlight state by touch, sends event to parent widget by interceptTouchEvent and calls the callback of touch moved event.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       */
      onTouchMoved(touch: cc.Touch, event: cc.Event): any
  
      /**
       * Removes all node
       */
      removeAllNodes(): any
  
      /**
       * Removes a node from ccui.Widget
       *
       * @param {cc.Node} node
       * @param {Boolean} cleanup
       */
      removeNode(node: cc.Node, cleanup: boolean): any
  
      /**
       * Removes node by tag
       *
       * @param {Number} tag
       * @param {Boolean} cleanup
       */
      removeNodeByTag(tag: number, cleanup: boolean): any
  
      /**
       * when a widget calls this method, it will get focus immediately.
       */
      requestFocus(): any
  
      /**
       * Sets whether the widget is bright. The default value is true, a widget is default to bright
       *
       * @param {Boolean} bright true if the widget is bright, false if the widget is dark.
       */
      setBright(bright: boolean): any
  
      /**
       * To set the bright style of ccui.Widget.
       *
       * @param {Number} style BRIGHT_NORMAL the widget is normal state, BRIGHT_HIGHLIGHT the widget is height light state.
       */
      setBrightStyle(style: number): any
  
      /**
       * Sets callback name to widget.
       *
       * @param {String} callbackName
       */
      setCallbackName(callbackName: string): any
  
      /**
       * Sets callback type to widget
       *
       * @param {String} callbackType
       */
      setCallbackType(callbackType: string): any
  
      /**
       * Sets _customSize of ccui.Widget, if ignoreSize is true, the content size is its renderer's contentSize, otherwise the content size is parameter.
       * and updates size percent by parent content size. At last, updates its children's size and position.
       *
       * @param {cc.Size|Number} contentSize content size or width of content size
       * @param {Number} height
       */
      setContentSize(contentSize: cc.Size | number, height: number): any
  
      /**
       * Sets whether the widget is enabled
       * true if the widget is enabled, widget may be touched , false if the widget is disabled, widget cannot be touched.
       * The default value is true, a widget is default to enabled
       *
       * @param {Boolean} enabled
       */
      setEnabled(enabled: boolean): any
  
      /**
       * Sets whether the widget should be flipped horizontally or not.
       *
       * @param {Boolean} flipX true if the widget should be flipped horizontally, false otherwise.
       */
      setFlippedX(flipX: boolean): any
  
      /**
       * Sets whether the widget should be flipped vertically or not.
       *
       * @param {Boolean} flipY true if the widget should be flipped vertically, false otherwise.
       */
      setFlippedY(flipY: boolean): any
  
      /**
       * Sets whether the widget is on focused
       * The default value is false, a widget is default to not on focused
       *
       * @param {boolean} focus pass true to let the widget get focus or pass false to let the widget lose focus
       */
      setFocused(focus: boolean): any
  
      /**
       * sets whether the widget could accept focus.
       *
       * @param {Boolean} enable true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      setFocusEnabled(enable: boolean): any
  
      /**
       * Sets whether the widget is highlighted. The default value is false, a widget is default to not highlighted
       *
       * @param {any} highlight true if the widget is highlighted, false if the widget is not highlighted.
       */
      setHighlighted(highlight: any): any
  
      /**
       * Whether enable layout component of a widget
       *
       * @param {Boolean} enable enable layout Component of a widget
       */
      setLayoutComponentEnabled(enable: boolean): any
  
      /**
       * Gets LayoutParameter of widget.
       *
       * @param {ccui.LayoutParameter} parameter
       */
      setLayoutParameter(parameter: ccui.LayoutParameter): any
  
      /**
       * Changes the position (x,y) of the widget .
       * The original point (0,0) is at the left-bottom corner of screen.
       *
       * @param {cc.Point|Number} pos
       * @param {Number} posY
       */
      setPosition(pos: cc.Point | number, posY: number): any
  
      /**
       * Changes the position (x,y) of the widget
       *
       * @param {cc.Point} percent
       */
      setPositionPercent(percent: cc.Point): any
  
      /**
       * Changes the position type of the widget
       *
       * @param {Number} type the position type of widget
       */
      setPositionType(type: number): any
  
      /**
       * Allow widget touch events to propagate to its parents. Set false will disable propagation
       *
       * @param {Boolean} isPropagate
       */
      setPropagateTouchEvents(isPropagate: boolean): any
  
      /**
       * Changes the size that is widget's size
       *
       * @param {cc.Size} size that is widget's size
       */
      setSize(size: cc.Size): any
  
      /**
       * Changes the percent that is widget's percent size
       *
       * @param {cc.Point} percent that is widget's percent size, width and height value from 0 to 1.
       */
      setSizePercent(percent: cc.Point): any
  
      /**
       * TEXTURE_RES_TYPE
       * Changes the size type of widget.
       *
       * @param {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} type that is widget's size type
       */
      setSizeType(type: any): any
  
      /**
       * Specify widget to swallow touches or not
       *
       * @param {Boolean} swallow
       */
      setSwallowTouches(swallow: boolean): any
  
      /**
       * Sets whether the widget is touch enabled. The default value is false, a widget is default to touch disabled
       *
       * @param {Boolean} enable true if the widget is touch enabled, false if the widget is touch disabled.
       */
      setTouchEnabled(enable: boolean): any
  
      /**
       *
       *
       * @param {Boolean} enable enable Unify Size of a widget
       */
      setUnifySizeEnabled(enable: boolean): any
  
      /**
       * updates its size by size type and its position by position type.
       *
       * @param {cc.Size} parentSize parent size
       */
      updateSizeAndPosition(parentSize: cc.Size): any
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    }
  }
  
  declare namespace ccui {
    interface ILoadingBar extends ccui.IWidget {
  
      direction: any
  
      percent: number
  
      getCapInsets(): cc.Rect
  
      getDirection(): any
  
      getPercent(): number
  
      isScale9Enabled(): boolean
  
      loadTexture(texture: string, texType: any): any
  
      setCapInsets(capInsets: cc.Rect): any
  
      setDirection(dir: any): any
  
      setPercent(percent: number): any
  
      setScale9Enabled(enabled: boolean): any
    }
  
    interface ILoadingBarOverrides {
  
      getDescription(): string
  
      getVirtualRenderer(): cc.Node
  
      getVirtualRendererSize(): cc.Size | any
  
      ignoreContentAdaptWithSize(ignore: boolean): any
  
      setContentSize(contentSize: number | cc.Size, height: number): any
    }
  
  
  
    class LoadingBar implements ILoadingBar, ILoadingBarOverrides {
  
      /**
       * allocates and initializes a UILoadingBar.
       * Constructor of ccui.LoadingBar, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
       *
       * @param {string} textureName
       * @param {Number} percentage
       */
      constructor(textureName: string, percentage: number)
  
  
  
      /**
       * The zOrder value of ccui.LoadingBar's renderer.
       */
      static RENDERER_ZORDER: any
  
      /**
       * The left direction of ccui.LoadingBar.
       */
      static TYPE_LEFT: any
  
      /**
       * The right direction of ccui.LoadingBar.
       */
      static TYPE_RIGHT: any
  
      /**
       * Allocates and initializes a UILoadingBar.
       *
       * @param {string} textureName
       * @param {Number} percentage
       *
       * @returns {ccui.LoadingBar}
       */
      static create(textureName: string, percentage: number): ccui.LoadingBar
  
  
      /**
       * Returns the "class name" of widget.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Returns the renderer of ccui.LoadingBar
       *
       * @returns {cc.Node}
       */
      getVirtualRenderer(): cc.Node
  
      /**
       * Returns the texture size of renderer.
       *
       * @returns {cc.Size|*}
       */
      getVirtualRendererSize(): cc.Size | any
  
      /**
       * Ignore the LoadingBar's custom size, if ignore is true that LoadingBar will ignore it's custom size, use renderer's content size, false otherwise.
       *
       * @param {Boolean} ignore
       */
      ignoreContentAdaptWithSize(ignore: boolean): any
  
      /**
       * Sets the contentSize of ccui.LoadingBar
       *
       * @param {Number|cc.Size} contentSize
       * @param {Number} height
       */
      setContentSize(contentSize: number | cc.Size, height: number): any
  
  
      /**
       * - The progress direction of loadingbar
       */
      direction: any
  
      /**
       * - The current progress of loadingbar
       */
      percent: number
  
      /**
       * Returns cap insets for loadingBar.
       *
       * @returns {cc.Rect}
       */
      getCapInsets(): cc.Rect
  
      /**
       * Returns the progress direction of LoadingBar.
       * LoadingBarTypeLeft means progress left to right, LoadingBarTypeRight otherwise.
       *
       * @returns {ccui.LoadingBar.TYPE_LEFT | ccui.LoadingBar.TYPE_RIGHT}
       */
      getDirection(): any
  
      /**
       * Returns the progress direction of LoadingBar.
       *
       * @returns {number} percent value from 1 to 100.
       */
      getPercent(): number
  
      /**
       * Returns LoadingBar is using scale9 renderer or not..
       *
       * @returns {Boolean}
       */
      isScale9Enabled(): boolean
  
      /**
       * Loads texture for LoadingBar.
       *
       * @param {String} texture
       * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
       */
      loadTexture(texture: string, texType: any): any
  
      /**
       * Sets capinsets for LoadingBar, if LoadingBar is using scale9 renderer.
       *
       * @param {cc.Rect} capInsets
       */
      setCapInsets(capInsets: cc.Rect): any
  
      /**
       * Changes the progress direction of LoadingBar.
       * LoadingBarTypeLeft means progress left to right, LoadingBarTypeRight otherwise.
       *
       * @param {ccui.LoadingBar.TYPE_LEFT | ccui.LoadingBar.TYPE_RIGHT} dir
       */
      setDirection(dir: any): any
  
      /**
       * The current progress of loadingBar
       *
       * @param {number} percent percent value from 1 to 100.
       */
      setPercent(percent: number): any
  
      /**
       * Sets if LoadingBar is using scale9 renderer.
       *
       * @param {Boolean} enabled
       */
      setScale9Enabled(enabled: boolean): any
  
  
      /**
       * - The action tag of the widget
       */
      actionTag: number
  
      /**
       * - Indicate whether the widget is bright
       */
      bright: boolean
  
      /**
       * - Indicate whether the widget is enabled
       */
      enabled: boolean
  
      /**
       * - Indicate whether the widget is focused
       */
      focused: boolean
  
      /**
       * - Height in percentage of parent height
       */
      heightPercent: number
  
      /**
       * - The name of the widget
       */
      name: string
  
      /**
       * When a widget lose/get focus, this method will be called. Be Caution when you provide your own version,
       * you must call widget.setFocused(true/false) to change the focus state of the current focused widget;
       */
      onFocusChanged: any
  
      /**
       * use this function to manually specify the next focused widget regards to each direction
       */
      onNextFocusedWidget: any
  
      /**
       * - The size type of the widget
       */
      sizeType: any
  
      /**
       * - Indicate whether touch events are enabled
       */
      touchEnabled: boolean
  
      /**
       * - Indicate whether the update function is scheduled
       */
      updateEnabled: boolean
  
      /**
       * - <@readonly> The direct parent when it's a widget also, otherwise equals null
       */
      widgetParent: ccui.Widget
  
      /**
       * - <@readonly> The type of the widget
       */
      widgetType: any
  
      /**
       * - Width in percentage of parent width
       */
      widthPercent: number
  
      /**
       * - Position x in percentage of width
       */
      xPercent: number
  
      /**
       * - Position y in percentage of height
       */
      yPercent: number
  
      /**
       * Set a event handler to the widget in order to use cocostudio editor and framework
       *
       * @param {function} callback
       */
      addCCSEventListener(callback: Function): any
  
      /**
       * Adds a node for widget (this function is deleted in -x)
       *
       * @param {cc.Node} node
       * @param {Number} zOrder
       * @param {Number} tag
       */
      addNode(node: cc.Node, zOrder: number, tag: number): any
  
      /**
       * Sets the touch event target/selector of the ccui.Widget
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addTouchEventListener(selector: Function, target: object): any
  
      /**
       * Calls the checkChildInfo of widget's parent, its subclass will override it.
       *
       * @param {number} handleState
       * @param {ccui.Widget} sender
       * @param {cc.Point} touchPoint
       */
      checkChildInfo(handleState: number, sender: ccui.Widget, touchPoint: cc.Point): any
  
      /**
       * Checks a point if in parent's area.
       *
       * @param {cc.Point} pt
       *
       * @returns {Boolean}
       */
      clippingParentAreaContainPoint(pt: cc.Point): boolean
  
      /**
       * Clones a new widget.
       *
       * @returns {ccui.Widget}
       */
      clone(): ccui.Widget
  
      /**
       * A call back function when widget lost of focus.
       */
      didNotSelectSelf(): any
  
      /**
       * Dispatch a EventFocus through a EventDispatcher
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      dispatchFocusEvent(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * When a widget is in a layout, you could call this method to get the next focused widget within a specified direction.
       * If the widget is not in a layout, it will return itself
       *
       * @param {any} direction the direction to look for the next focused widget in a layout
       * @param {any} current the current focused widget
       */
      findNextFocusedWidget(direction: any, current: any): any
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomBoundary(): number
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomInParent(): number
  
      /**
       * Gets callback name of widget
       *
       * @returns v3.3{String|Null}
       */
      getCallbackName(): string | null
  
      /**
       * Gets callback type of widget
       *
       * @returns v3.3{String|null}
       */
      getCallbackType(): string | null
  
      /**
       * no matter what widget object you call this method on , it will return you the exact one focused widget
       */
      getCurrentFocusedWidget(): any
  
      /**
       * Get custom size of ccui.Widget
       *
       * @returns {cc.Size}
       */
      getCustomSize(): cc.Size
  
      /**
       * Returns the "class name" of widget.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Gets layout parameter
       *
       * @param {ccui.LayoutParameter.NONE|ccui.LayoutParameter.LINEAR|ccui.LayoutParameter.RELATIVE} type
       *
       * @returns {ccui.LayoutParameter}
       */
      getLayoutParameter(type: any): ccui.LayoutParameter
  
      /**
       * Gets layout size of ccui.Widget.
       *
       * @returns {cc.Size}
       */
      getLayoutSize(): cc.Size
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftBoundary(): number
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftInParent(): number
  
      /**
       * Gets node by tag
       *
       * @param {Number} tag
       *
       * @returns {cc.Node}
       */
      getNodeByTag(tag: number): cc.Node
  
      /**
       * Returns all children.
       *
       * @returns {Array}
       */
      getNodes(): any[]
  
      /**
       * Gets the percent (x,y) of the widget
       *
       * @returns {cc.Point} The percent (x,y) of the widget in OpenGL coordinates
       */
      getPositionPercent(): cc.Point
  
      /**
       * Gets the position type of the widget
       *
       * @returns {Number} the position type of widget
       */
      getPositionType(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightBoundary(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightInParent(): number
  
      /**
       * Returns size of widget
       *
       * @returns {cc.Size}
       */
      getSize(): cc.Size
  
      /**
       * Returns size percent of ccui.Widget
       *
       * @returns {cc.Point}
       */
      getSizePercent(): cc.Point
  
      /**
       * Gets the size type of widget.
       *
       * @returns {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} that is widget's size type
       */
      getSizeType(): any
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopBoundary(): number
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopInParent(): number
  
      /**
       * Gets the position of touch began event.
       *
       * @returns {cc.Point}
       */
      getTouchBeganPosition(): cc.Point
  
      /**
       * Gets the touch end point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch end point.
       */
      getTouchEndPos(): cc.Point
  
      /**
       * Gets the position of touch end event
       *
       * @returns {cc.Point}
       */
      getTouchEndPosition(): cc.Point
  
      /**
       * Gets the touch move point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch move point.
       */
      getTouchMovePos(): cc.Point
  
      /**
       * Gets the position of touch moved event
       *
       * @returns {cc.Point}
       */
      getTouchMovePosition(): cc.Point
  
      /**
       * Gets the touch began point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch began point.
       */
      getTouchStartPos(): cc.Point
  
      /**
       * Gets the Virtual Renderer of widget.
       *
       * @returns {ccui.Widget}
       */
      getVirtualRenderer(): ccui.Widget
  
      /**
       * Gets the content size of widget. Content size is widget's texture size.
       */
      getVirtualRendererSize(): any
  
      /**
       * The direct parent when it's a widget also, otherwise equals null
       *
       * @returns {ccui.Widget|null}
       */
      getWidgetParent(): ccui.Widget | null
  
      /**
       * get widget type
       *
       * @returns {ccui.Widget.TYPE_WIDGET|ccui.Widget.TYPE_CONTAINER}
       */
      getWidgetType(): any
  
      /**
       * Gets world position of ccui.Widget.
       *
       * @returns {cc.Point} world position of ccui.Widget.
       */
      getWorldPosition(): cc.Point
  
      /**
       * Checks a point if is in widget's space
       *
       * @param {cc.Point} pt
       *
       * @returns {boolean} true if the point is in widget's space, false otherwise.
       */
      hitTest(pt: cc.Point): boolean
  
      /**
       * Ignore the widget size
       *
       * @param {Boolean} ignore true that widget will ignore it's size, use texture size, false otherwise. Default value is true.
       */
      ignoreContentAdaptWithSize(ignore: boolean): any
  
      /**
       * initializes state of widget. please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
       *
       * @returns {boolean}
       */
      init(): boolean
  
      /**
       * Sends the touch event to widget's parent, its subclass will override it, e.g. ccui.ScrollView, ccui.PageView
       *
       * @param {Number} eventType
       * @param {ccui.Widget} sender
       * @param {cc.Touch} touch
       */
      interceptTouchEvent(eventType: number, sender: ccui.Widget, touch: cc.Touch): any
  
      /**
       * Determines if the widget is bright
       *
       * @returns {boolean} true if the widget is bright, false if the widget is dark.
       */
      isBright(): boolean
  
      /**
       * returns whether clipping parent widget contains point.
       *
       * @param {cc.Point} pt location point
       *
       * @returns {Boolean}
       */
      isClippingParentContainsPoint(pt: cc.Point): boolean
  
      /**
       * Determines if the widget is enabled
       *
       * @returns {boolean}
       */
      isEnabled(): boolean
  
      /**
       * Returns the flag which indicates whether the widget is flipped horizontally or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleX(sprite.getScaleX() * -1);
       *
       * @returns {Boolean} true if the widget is flipped horizontally, false otherwise.
       */
      isFlippedX(): boolean
  
      /**
       * Return the flag which indicates whether the widget is flipped vertically or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleY(widget.getScaleY() * -1);
       *
       * @returns {Boolean} true if the widget is flipped vertically, false otherwise.
       */
      isFlippedY(): boolean
  
      /**
       * Determines if the widget is on focused
       *
       * @returns {boolean} whether the widget is focused or not
       */
      isFocused(): boolean
  
      /**
       * returns whether the widget could accept focus.
       *
       * @returns {boolean} true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      isFocusEnabled(): boolean
  
      /**
       * Determines if the widget is highlighted
       *
       * @returns {boolean} true if the widget is highlighted, false if the widget is not highlighted .
       */
      isHighlighted(): boolean
  
      /**
       * Gets whether ignore the content size (custom size)
       *
       * @returns {boolean} true that widget will ignore it's size, use texture size, false otherwise.
       */
      isIgnoreContentAdaptWithSize(): boolean
  
      /**
       * Returns whether enable layout component of a widget
       *
       * @returns {Boolean} true represent the widget use Layout Component, false represent the widget couldn't use Layout Component.
       */
      isLayoutComponentEnabled(): boolean
  
      /**
       * Return whether the widget is propagate touch events to its parents or not
       *
       * @returns v3.2{boolean}
       */
      isPropagateTouchEvents(): boolean
  
      /**
       * Return whether the widget is swallowing touch or not
       *
       * @returns v3.2{boolean}
       */
      isSwallowTouches(): boolean
  
      /**
       * Returns whether or not touch is enabled.
       *
       * @returns {boolean} true if the widget is touch enabled, false if the widget is touch disabled.
       */
      isTouchEnabled(): boolean
  
      /**
       *
       *
       * @returns v3.2{boolean} true represent the widget use Unify Size, false represent the widget couldn't use Unify Size
       */
      isUnifySizeEnabled(): boolean
  
      /**
       * Calls updateSizeAndPosition and its parent's onEnter
       */
      onEnter(): any
  
      /**
       * Calls unscheduleUpdate and its parent's onExit
       */
      onExit(): any
  
      /**
       * This method is called when a focus change event happens
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      onFocusChange(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * The callback of touch began event.
       * If the bounding box of ccui.Widget contains the touch point, it will do the following things:
       * 1. sets highlight state,
       * 2. sends event to parent widget by interceptTouchEvent
       * 3. calls the callback of touch began event.
       * 4. returns true,
       * otherwise returns false directly.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       *
       * @returns {boolean}
       */
      onTouchBegan(touch: cc.Touch, event: cc.Event): boolean
  
      /**
       * A call back function called when widget is selected, and on touch canceled.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchCancelled(touchPoint: cc.Point): any
  
      /**
       * The callback of touch end event
       * It sends event to parent widget by interceptTouchEvent,
       * calls the callback of touch end event (highlight= true) or touch canceled event (highlight= false).
       * sets the highlight state to false ,
       *
       * @param {any} touch
       * @param {any} event
       */
      onTouchEnded(touch: any, event: any): any
  
      /**
       * A call back function called when widget is selected, and on touch long clicked.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchLongClicked(touchPoint: cc.Point): any
  
      /**
       * The callback of touch moved event.
       * It sets the highlight state by touch, sends event to parent widget by interceptTouchEvent and calls the callback of touch moved event.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       */
      onTouchMoved(touch: cc.Touch, event: cc.Event): any
  
      /**
       * Removes all node
       */
      removeAllNodes(): any
  
      /**
       * Removes a node from ccui.Widget
       *
       * @param {cc.Node} node
       * @param {Boolean} cleanup
       */
      removeNode(node: cc.Node, cleanup: boolean): any
  
      /**
       * Removes node by tag
       *
       * @param {Number} tag
       * @param {Boolean} cleanup
       */
      removeNodeByTag(tag: number, cleanup: boolean): any
  
      /**
       * when a widget calls this method, it will get focus immediately.
       */
      requestFocus(): any
  
      /**
       * Sets whether the widget is bright. The default value is true, a widget is default to bright
       *
       * @param {Boolean} bright true if the widget is bright, false if the widget is dark.
       */
      setBright(bright: boolean): any
  
      /**
       * To set the bright style of ccui.Widget.
       *
       * @param {Number} style BRIGHT_NORMAL the widget is normal state, BRIGHT_HIGHLIGHT the widget is height light state.
       */
      setBrightStyle(style: number): any
  
      /**
       * Sets callback name to widget.
       *
       * @param {String} callbackName
       */
      setCallbackName(callbackName: string): any
  
      /**
       * Sets callback type to widget
       *
       * @param {String} callbackType
       */
      setCallbackType(callbackType: string): any
  
      /**
       * Sets _customSize of ccui.Widget, if ignoreSize is true, the content size is its renderer's contentSize, otherwise the content size is parameter.
       * and updates size percent by parent content size. At last, updates its children's size and position.
       *
       * @param {cc.Size|Number} contentSize content size or width of content size
       * @param {Number} height
       */
      setContentSize(contentSize: cc.Size | number, height: number): any
  
      /**
       * Sets whether the widget is enabled
       * true if the widget is enabled, widget may be touched , false if the widget is disabled, widget cannot be touched.
       * The default value is true, a widget is default to enabled
       *
       * @param {Boolean} enabled
       */
      setEnabled(enabled: boolean): any
  
      /**
       * Sets whether the widget should be flipped horizontally or not.
       *
       * @param {Boolean} flipX true if the widget should be flipped horizontally, false otherwise.
       */
      setFlippedX(flipX: boolean): any
  
      /**
       * Sets whether the widget should be flipped vertically or not.
       *
       * @param {Boolean} flipY true if the widget should be flipped vertically, false otherwise.
       */
      setFlippedY(flipY: boolean): any
  
      /**
       * Sets whether the widget is on focused
       * The default value is false, a widget is default to not on focused
       *
       * @param {boolean} focus pass true to let the widget get focus or pass false to let the widget lose focus
       */
      setFocused(focus: boolean): any
  
      /**
       * sets whether the widget could accept focus.
       *
       * @param {Boolean} enable true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      setFocusEnabled(enable: boolean): any
  
      /**
       * Sets whether the widget is highlighted. The default value is false, a widget is default to not highlighted
       *
       * @param {any} highlight true if the widget is highlighted, false if the widget is not highlighted.
       */
      setHighlighted(highlight: any): any
  
      /**
       * Whether enable layout component of a widget
       *
       * @param {Boolean} enable enable layout Component of a widget
       */
      setLayoutComponentEnabled(enable: boolean): any
  
      /**
       * Gets LayoutParameter of widget.
       *
       * @param {ccui.LayoutParameter} parameter
       */
      setLayoutParameter(parameter: ccui.LayoutParameter): any
  
      /**
       * Changes the position (x,y) of the widget .
       * The original point (0,0) is at the left-bottom corner of screen.
       *
       * @param {cc.Point|Number} pos
       * @param {Number} posY
       */
      setPosition(pos: cc.Point | number, posY: number): any
  
      /**
       * Changes the position (x,y) of the widget
       *
       * @param {cc.Point} percent
       */
      setPositionPercent(percent: cc.Point): any
  
      /**
       * Changes the position type of the widget
       *
       * @param {Number} type the position type of widget
       */
      setPositionType(type: number): any
  
      /**
       * Allow widget touch events to propagate to its parents. Set false will disable propagation
       *
       * @param {Boolean} isPropagate
       */
      setPropagateTouchEvents(isPropagate: boolean): any
  
      /**
       * Changes the size that is widget's size
       *
       * @param {cc.Size} size that is widget's size
       */
      setSize(size: cc.Size): any
  
      /**
       * Changes the percent that is widget's percent size
       *
       * @param {cc.Point} percent that is widget's percent size, width and height value from 0 to 1.
       */
      setSizePercent(percent: cc.Point): any
  
      /**
       * TEXTURE_RES_TYPE
       * Changes the size type of widget.
       *
       * @param {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} type that is widget's size type
       */
      setSizeType(type: any): any
  
      /**
       * Specify widget to swallow touches or not
       *
       * @param {Boolean} swallow
       */
      setSwallowTouches(swallow: boolean): any
  
      /**
       * Sets whether the widget is touch enabled. The default value is false, a widget is default to touch disabled
       *
       * @param {Boolean} enable true if the widget is touch enabled, false if the widget is touch disabled.
       */
      setTouchEnabled(enable: boolean): any
  
      /**
       *
       *
       * @param {Boolean} enable enable Unify Size of a widget
       */
      setUnifySizeEnabled(enable: boolean): any
  
      /**
       * updates its size by size type and its position by position type.
       *
       * @param {cc.Size} parentSize parent size
       */
      updateSizeAndPosition(parentSize: cc.Size): any
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    }
  }
  
  declare namespace ccui {
    interface IRichText extends ccui.IWidget {
  
  
      formatRenderers(): any
  
      formatText(): any
  
      getContentSize(): cc.Size
  
      insertElement(element: ccui.RichElement, index: number): any
  
      pushBackElement(element: ccui.RichElement): any
  
      removeElement(element: ccui.RichElement): any
  
      setAnchorPoint(pt: cc.Point): any
  
      setCascadeOpacityEnabled(value: boolean): any
  
      setLineBreakOnSpace(value: any): any
  
      setTextHorizontalAlignment(value: number): any
  
      setTextVerticalAlignment(value: number): any
  
      setVerticalSpace(space: number): any
    }
  
    interface IRichTextOverrides {
  
      getDescription(): string
  
      getVirtualRendererSize(): cc.Size
  
      ignoreContentAdaptWithSize(ignore: boolean): any
    }
  
  
  
    class RichText implements IRichText, IRichTextOverrides {
  
      /**
       * create a rich text
       * Constructor of ccui.RichText. override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
       */
      constructor()
  
  
  
  
      /**
       * create a rich text
       *
       * @returns {RichText}
       */
      static create(): RichText
  
  
      /**
       * Returns the class name of ccui.RichText.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Returns the renderer container's content size.
       *
       * @returns {cc.Size}
       */
      getVirtualRendererSize(): cc.Size
  
      /**
       * Ignore the richText's custom size, If ignore is true that richText will ignore it's custom size, use renderer's content size, false otherwise.
       *
       * @param {Boolean} ignore
       */
      ignoreContentAdaptWithSize(ignore: boolean): any
  
  
  
      /**
       * Formats richText's renderer.
       */
      formatRenderers(): any
  
      /**
       * Formats the richText's content.
       */
      formatText(): any
  
      /**
       * Gets the content size of ccui.RichText
       *
       * @returns {cc.Size}
       */
      getContentSize(): cc.Size
  
      /**
       * Insert a element
       *
       * @param {ccui.RichElement} element
       * @param {Number} index
       */
      insertElement(element: ccui.RichElement, index: number): any
  
      /**
       * Push a element
       *
       * @param {ccui.RichElement} element
       */
      pushBackElement(element: ccui.RichElement): any
  
      /**
       * Remove element
       *
       * @param {ccui.RichElement} element
       */
      removeElement(element: ccui.RichElement): any
  
      /**
       * Sets anchor point
       *
       * @param {cc.Point} pt
       */
      setAnchorPoint(pt: cc.Point): any
  
      /**
       * Allow child renderer to be affected by ccui.RichText's opacity
       *
       * @param {boolean} value
       */
      setCascadeOpacityEnabled(value: boolean): any
  
      /**
       * This allow the RichText layout to break line on space only like in Latin text format
       * by default the property is false, which break the line on characters
       *
       * @param {any} value
       */
      setLineBreakOnSpace(value: any): any
  
      /**
       * Set the renderer horizontal flow alignment for the Control
       * although it is named TextHorizontalAlignment, it should work with all type of renderer too.
       * NOTE: we should rename this to setHorizontalAlignment directly
       *
       * @param {Number} value - example cc.TEXT_ALIGNMENT_RIGHT
       */
      setTextHorizontalAlignment(value: number): any
  
      /**
       * Set the renderer vertical flow alignment for the Control
       * although it is named TextVerticalAlignment, it should work with all type of renderer too.
       *
       * @param {Number} value - example cc.VERTICAL_TEXT_ALIGNMENT_CENTER
       */
      setTextVerticalAlignment(value: number): any
  
      /**
       * Sets vertical space
       *
       * @param {Number} space
       */
      setVerticalSpace(space: number): any
  
  
      /**
       * - The action tag of the widget
       */
      actionTag: number
  
      /**
       * - Indicate whether the widget is bright
       */
      bright: boolean
  
      /**
       * - Indicate whether the widget is enabled
       */
      enabled: boolean
  
      /**
       * - Indicate whether the widget is focused
       */
      focused: boolean
  
      /**
       * - Height in percentage of parent height
       */
      heightPercent: number
  
      /**
       * - The name of the widget
       */
      name: string
  
      /**
       * When a widget lose/get focus, this method will be called. Be Caution when you provide your own version,
       * you must call widget.setFocused(true/false) to change the focus state of the current focused widget;
       */
      onFocusChanged: any
  
      /**
       * use this function to manually specify the next focused widget regards to each direction
       */
      onNextFocusedWidget: any
  
      /**
       * - The size type of the widget
       */
      sizeType: any
  
      /**
       * - Indicate whether touch events are enabled
       */
      touchEnabled: boolean
  
      /**
       * - Indicate whether the update function is scheduled
       */
      updateEnabled: boolean
  
      /**
       * - <@readonly> The direct parent when it's a widget also, otherwise equals null
       */
      widgetParent: ccui.Widget
  
      /**
       * - <@readonly> The type of the widget
       */
      widgetType: any
  
      /**
       * - Width in percentage of parent width
       */
      widthPercent: number
  
      /**
       * - Position x in percentage of width
       */
      xPercent: number
  
      /**
       * - Position y in percentage of height
       */
      yPercent: number
  
      /**
       * Set a event handler to the widget in order to use cocostudio editor and framework
       *
       * @param {function} callback
       */
      addCCSEventListener(callback: Function): any
  
      /**
       * Adds a node for widget (this function is deleted in -x)
       *
       * @param {cc.Node} node
       * @param {Number} zOrder
       * @param {Number} tag
       */
      addNode(node: cc.Node, zOrder: number, tag: number): any
  
      /**
       * Sets the touch event target/selector of the ccui.Widget
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addTouchEventListener(selector: Function, target: object): any
  
      /**
       * Calls the checkChildInfo of widget's parent, its subclass will override it.
       *
       * @param {number} handleState
       * @param {ccui.Widget} sender
       * @param {cc.Point} touchPoint
       */
      checkChildInfo(handleState: number, sender: ccui.Widget, touchPoint: cc.Point): any
  
      /**
       * Checks a point if in parent's area.
       *
       * @param {cc.Point} pt
       *
       * @returns {Boolean}
       */
      clippingParentAreaContainPoint(pt: cc.Point): boolean
  
      /**
       * Clones a new widget.
       *
       * @returns {ccui.Widget}
       */
      clone(): ccui.Widget
  
      /**
       * A call back function when widget lost of focus.
       */
      didNotSelectSelf(): any
  
      /**
       * Dispatch a EventFocus through a EventDispatcher
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      dispatchFocusEvent(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * When a widget is in a layout, you could call this method to get the next focused widget within a specified direction.
       * If the widget is not in a layout, it will return itself
       *
       * @param {any} direction the direction to look for the next focused widget in a layout
       * @param {any} current the current focused widget
       */
      findNextFocusedWidget(direction: any, current: any): any
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomBoundary(): number
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomInParent(): number
  
      /**
       * Gets callback name of widget
       *
       * @returns v3.3{String|Null}
       */
      getCallbackName(): string | null
  
      /**
       * Gets callback type of widget
       *
       * @returns v3.3{String|null}
       */
      getCallbackType(): string | null
  
      /**
       * no matter what widget object you call this method on , it will return you the exact one focused widget
       */
      getCurrentFocusedWidget(): any
  
      /**
       * Get custom size of ccui.Widget
       *
       * @returns {cc.Size}
       */
      getCustomSize(): cc.Size
  
      /**
       * Returns the "class name" of widget.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Gets layout parameter
       *
       * @param {ccui.LayoutParameter.NONE|ccui.LayoutParameter.LINEAR|ccui.LayoutParameter.RELATIVE} type
       *
       * @returns {ccui.LayoutParameter}
       */
      getLayoutParameter(type: any): ccui.LayoutParameter
  
      /**
       * Gets layout size of ccui.Widget.
       *
       * @returns {cc.Size}
       */
      getLayoutSize(): cc.Size
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftBoundary(): number
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftInParent(): number
  
      /**
       * Gets node by tag
       *
       * @param {Number} tag
       *
       * @returns {cc.Node}
       */
      getNodeByTag(tag: number): cc.Node
  
      /**
       * Returns all children.
       *
       * @returns {Array}
       */
      getNodes(): any[]
  
      /**
       * Gets the percent (x,y) of the widget
       *
       * @returns {cc.Point} The percent (x,y) of the widget in OpenGL coordinates
       */
      getPositionPercent(): cc.Point
  
      /**
       * Gets the position type of the widget
       *
       * @returns {Number} the position type of widget
       */
      getPositionType(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightBoundary(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightInParent(): number
  
      /**
       * Returns size of widget
       *
       * @returns {cc.Size}
       */
      getSize(): cc.Size
  
      /**
       * Returns size percent of ccui.Widget
       *
       * @returns {cc.Point}
       */
      getSizePercent(): cc.Point
  
      /**
       * Gets the size type of widget.
       *
       * @returns {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} that is widget's size type
       */
      getSizeType(): any
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopBoundary(): number
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopInParent(): number
  
      /**
       * Gets the position of touch began event.
       *
       * @returns {cc.Point}
       */
      getTouchBeganPosition(): cc.Point
  
      /**
       * Gets the touch end point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch end point.
       */
      getTouchEndPos(): cc.Point
  
      /**
       * Gets the position of touch end event
       *
       * @returns {cc.Point}
       */
      getTouchEndPosition(): cc.Point
  
      /**
       * Gets the touch move point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch move point.
       */
      getTouchMovePos(): cc.Point
  
      /**
       * Gets the position of touch moved event
       *
       * @returns {cc.Point}
       */
      getTouchMovePosition(): cc.Point
  
      /**
       * Gets the touch began point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch began point.
       */
      getTouchStartPos(): cc.Point
  
      /**
       * Gets the Virtual Renderer of widget.
       *
       * @returns {ccui.Widget}
       */
      getVirtualRenderer(): ccui.Widget
  
      /**
       * Gets the content size of widget. Content size is widget's texture size.
       */
      getVirtualRendererSize(): any
  
      /**
       * The direct parent when it's a widget also, otherwise equals null
       *
       * @returns {ccui.Widget|null}
       */
      getWidgetParent(): ccui.Widget | null
  
      /**
       * get widget type
       *
       * @returns {ccui.Widget.TYPE_WIDGET|ccui.Widget.TYPE_CONTAINER}
       */
      getWidgetType(): any
  
      /**
       * Gets world position of ccui.Widget.
       *
       * @returns {cc.Point} world position of ccui.Widget.
       */
      getWorldPosition(): cc.Point
  
      /**
       * Checks a point if is in widget's space
       *
       * @param {cc.Point} pt
       *
       * @returns {boolean} true if the point is in widget's space, false otherwise.
       */
      hitTest(pt: cc.Point): boolean
  
      /**
       * Ignore the widget size
       *
       * @param {Boolean} ignore true that widget will ignore it's size, use texture size, false otherwise. Default value is true.
       */
      ignoreContentAdaptWithSize(ignore: boolean): any
  
      /**
       * initializes state of widget. please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
       *
       * @returns {boolean}
       */
      init(): boolean
  
      /**
       * Sends the touch event to widget's parent, its subclass will override it, e.g. ccui.ScrollView, ccui.PageView
       *
       * @param {Number} eventType
       * @param {ccui.Widget} sender
       * @param {cc.Touch} touch
       */
      interceptTouchEvent(eventType: number, sender: ccui.Widget, touch: cc.Touch): any
  
      /**
       * Determines if the widget is bright
       *
       * @returns {boolean} true if the widget is bright, false if the widget is dark.
       */
      isBright(): boolean
  
      /**
       * returns whether clipping parent widget contains point.
       *
       * @param {cc.Point} pt location point
       *
       * @returns {Boolean}
       */
      isClippingParentContainsPoint(pt: cc.Point): boolean
  
      /**
       * Determines if the widget is enabled
       *
       * @returns {boolean}
       */
      isEnabled(): boolean
  
      /**
       * Returns the flag which indicates whether the widget is flipped horizontally or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleX(sprite.getScaleX() * -1);
       *
       * @returns {Boolean} true if the widget is flipped horizontally, false otherwise.
       */
      isFlippedX(): boolean
  
      /**
       * Return the flag which indicates whether the widget is flipped vertically or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleY(widget.getScaleY() * -1);
       *
       * @returns {Boolean} true if the widget is flipped vertically, false otherwise.
       */
      isFlippedY(): boolean
  
      /**
       * Determines if the widget is on focused
       *
       * @returns {boolean} whether the widget is focused or not
       */
      isFocused(): boolean
  
      /**
       * returns whether the widget could accept focus.
       *
       * @returns {boolean} true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      isFocusEnabled(): boolean
  
      /**
       * Determines if the widget is highlighted
       *
       * @returns {boolean} true if the widget is highlighted, false if the widget is not highlighted .
       */
      isHighlighted(): boolean
  
      /**
       * Gets whether ignore the content size (custom size)
       *
       * @returns {boolean} true that widget will ignore it's size, use texture size, false otherwise.
       */
      isIgnoreContentAdaptWithSize(): boolean
  
      /**
       * Returns whether enable layout component of a widget
       *
       * @returns {Boolean} true represent the widget use Layout Component, false represent the widget couldn't use Layout Component.
       */
      isLayoutComponentEnabled(): boolean
  
      /**
       * Return whether the widget is propagate touch events to its parents or not
       *
       * @returns v3.2{boolean}
       */
      isPropagateTouchEvents(): boolean
  
      /**
       * Return whether the widget is swallowing touch or not
       *
       * @returns v3.2{boolean}
       */
      isSwallowTouches(): boolean
  
      /**
       * Returns whether or not touch is enabled.
       *
       * @returns {boolean} true if the widget is touch enabled, false if the widget is touch disabled.
       */
      isTouchEnabled(): boolean
  
      /**
       *
       *
       * @returns v3.2{boolean} true represent the widget use Unify Size, false represent the widget couldn't use Unify Size
       */
      isUnifySizeEnabled(): boolean
  
      /**
       * Calls updateSizeAndPosition and its parent's onEnter
       */
      onEnter(): any
  
      /**
       * Calls unscheduleUpdate and its parent's onExit
       */
      onExit(): any
  
      /**
       * This method is called when a focus change event happens
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      onFocusChange(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * The callback of touch began event.
       * If the bounding box of ccui.Widget contains the touch point, it will do the following things:
       * 1. sets highlight state,
       * 2. sends event to parent widget by interceptTouchEvent
       * 3. calls the callback of touch began event.
       * 4. returns true,
       * otherwise returns false directly.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       *
       * @returns {boolean}
       */
      onTouchBegan(touch: cc.Touch, event: cc.Event): boolean
  
      /**
       * A call back function called when widget is selected, and on touch canceled.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchCancelled(touchPoint: cc.Point): any
  
      /**
       * The callback of touch end event
       * It sends event to parent widget by interceptTouchEvent,
       * calls the callback of touch end event (highlight= true) or touch canceled event (highlight= false).
       * sets the highlight state to false ,
       *
       * @param {any} touch
       * @param {any} event
       */
      onTouchEnded(touch: any, event: any): any
  
      /**
       * A call back function called when widget is selected, and on touch long clicked.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchLongClicked(touchPoint: cc.Point): any
  
      /**
       * The callback of touch moved event.
       * It sets the highlight state by touch, sends event to parent widget by interceptTouchEvent and calls the callback of touch moved event.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       */
      onTouchMoved(touch: cc.Touch, event: cc.Event): any
  
      /**
       * Removes all node
       */
      removeAllNodes(): any
  
      /**
       * Removes a node from ccui.Widget
       *
       * @param {cc.Node} node
       * @param {Boolean} cleanup
       */
      removeNode(node: cc.Node, cleanup: boolean): any
  
      /**
       * Removes node by tag
       *
       * @param {Number} tag
       * @param {Boolean} cleanup
       */
      removeNodeByTag(tag: number, cleanup: boolean): any
  
      /**
       * when a widget calls this method, it will get focus immediately.
       */
      requestFocus(): any
  
      /**
       * Sets whether the widget is bright. The default value is true, a widget is default to bright
       *
       * @param {Boolean} bright true if the widget is bright, false if the widget is dark.
       */
      setBright(bright: boolean): any
  
      /**
       * To set the bright style of ccui.Widget.
       *
       * @param {Number} style BRIGHT_NORMAL the widget is normal state, BRIGHT_HIGHLIGHT the widget is height light state.
       */
      setBrightStyle(style: number): any
  
      /**
       * Sets callback name to widget.
       *
       * @param {String} callbackName
       */
      setCallbackName(callbackName: string): any
  
      /**
       * Sets callback type to widget
       *
       * @param {String} callbackType
       */
      setCallbackType(callbackType: string): any
  
      /**
       * Sets _customSize of ccui.Widget, if ignoreSize is true, the content size is its renderer's contentSize, otherwise the content size is parameter.
       * and updates size percent by parent content size. At last, updates its children's size and position.
       *
       * @param {cc.Size|Number} contentSize content size or width of content size
       * @param {Number} height
       */
      setContentSize(contentSize: cc.Size | number, height: number): any
  
      /**
       * Sets whether the widget is enabled
       * true if the widget is enabled, widget may be touched , false if the widget is disabled, widget cannot be touched.
       * The default value is true, a widget is default to enabled
       *
       * @param {Boolean} enabled
       */
      setEnabled(enabled: boolean): any
  
      /**
       * Sets whether the widget should be flipped horizontally or not.
       *
       * @param {Boolean} flipX true if the widget should be flipped horizontally, false otherwise.
       */
      setFlippedX(flipX: boolean): any
  
      /**
       * Sets whether the widget should be flipped vertically or not.
       *
       * @param {Boolean} flipY true if the widget should be flipped vertically, false otherwise.
       */
      setFlippedY(flipY: boolean): any
  
      /**
       * Sets whether the widget is on focused
       * The default value is false, a widget is default to not on focused
       *
       * @param {boolean} focus pass true to let the widget get focus or pass false to let the widget lose focus
       */
      setFocused(focus: boolean): any
  
      /**
       * sets whether the widget could accept focus.
       *
       * @param {Boolean} enable true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      setFocusEnabled(enable: boolean): any
  
      /**
       * Sets whether the widget is highlighted. The default value is false, a widget is default to not highlighted
       *
       * @param {any} highlight true if the widget is highlighted, false if the widget is not highlighted.
       */
      setHighlighted(highlight: any): any
  
      /**
       * Whether enable layout component of a widget
       *
       * @param {Boolean} enable enable layout Component of a widget
       */
      setLayoutComponentEnabled(enable: boolean): any
  
      /**
       * Gets LayoutParameter of widget.
       *
       * @param {ccui.LayoutParameter} parameter
       */
      setLayoutParameter(parameter: ccui.LayoutParameter): any
  
      /**
       * Changes the position (x,y) of the widget .
       * The original point (0,0) is at the left-bottom corner of screen.
       *
       * @param {cc.Point|Number} pos
       * @param {Number} posY
       */
      setPosition(pos: cc.Point | number, posY: number): any
  
      /**
       * Changes the position (x,y) of the widget
       *
       * @param {cc.Point} percent
       */
      setPositionPercent(percent: cc.Point): any
  
      /**
       * Changes the position type of the widget
       *
       * @param {Number} type the position type of widget
       */
      setPositionType(type: number): any
  
      /**
       * Allow widget touch events to propagate to its parents. Set false will disable propagation
       *
       * @param {Boolean} isPropagate
       */
      setPropagateTouchEvents(isPropagate: boolean): any
  
      /**
       * Changes the size that is widget's size
       *
       * @param {cc.Size} size that is widget's size
       */
      setSize(size: cc.Size): any
  
      /**
       * Changes the percent that is widget's percent size
       *
       * @param {cc.Point} percent that is widget's percent size, width and height value from 0 to 1.
       */
      setSizePercent(percent: cc.Point): any
  
      /**
       * TEXTURE_RES_TYPE
       * Changes the size type of widget.
       *
       * @param {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} type that is widget's size type
       */
      setSizeType(type: any): any
  
      /**
       * Specify widget to swallow touches or not
       *
       * @param {Boolean} swallow
       */
      setSwallowTouches(swallow: boolean): any
  
      /**
       * Sets whether the widget is touch enabled. The default value is false, a widget is default to touch disabled
       *
       * @param {Boolean} enable true if the widget is touch enabled, false if the widget is touch disabled.
       */
      setTouchEnabled(enable: boolean): any
  
      /**
       *
       *
       * @param {Boolean} enable enable Unify Size of a widget
       */
      setUnifySizeEnabled(enable: boolean): any
  
      /**
       * updates its size by size type and its position by position type.
       *
       * @param {cc.Size} parentSize parent size
       */
      updateSizeAndPosition(parentSize: cc.Size): any
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    }
  }
  
  declare namespace ccui {
    interface ISlider extends ccui.IWidget {
  
      percent: number
  
      addEventListener(selector: Function, target: object): any
  
      addEventListenerSlider(selector: Function, target: object): any
  
      getCapInsetsBarRenderer(): cc.Rect
  
      getCapInsetsProgressBarRenderer(): cc.Rect
  
      getPercent(): number
  
      isScale9Enabled(): boolean
  
      loadBarTexture(fileName: string, texType: any): any
  
      loadProgressBarTexture(fileName: string, texType: any): any
  
      loadSlidBallTextureDisabled(disabled: string, texType: any): any
  
      loadSlidBallTextureNormal(normal: string, texType: any): any
  
      loadSlidBallTexturePressed(pressed: string, texType: any): any
  
      loadSlidBallTextures(normal: string, pressed: string, disabled: string, texType: any): any
  
      setCapInsetProgressBarRenderer(capInsets: cc.Rect): any
  
      setCapInsets(capInsets: cc.Rect): any
  
      setCapInsetsBarRenderer(capInsets: cc.Rect): any
  
      setPercent(percent: number): any
  
      setScale9Enabled(able: boolean): any
    }
  
    interface ISliderOverrides {
  
      getDescription(): string
  
      getVirtualRenderer(): cc.Node
  
      getVirtualRendererSize(): cc.Size
  
      hitTest(pt: cc.Point): boolean
  
      ignoreContentAdaptWithSize(ignore: boolean): any
    }
  
  
  
    class Slider implements ISlider, ISliderOverrides {
  
      /**
       * allocates and initializes a UISlider.
       * Constructor of ccui.Slider. override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
       *
       * @param {any} barTextureName
       * @param {any} normalBallTextureName
       * @param {any} resType
       */
      constructor(barTextureName: any, normalBallTextureName: any, resType: any)
  
  
  
      /**
       * The zOrder value of ccui.Slider's ball renderer.
       */
      static BALL_RENDERER_ZORDER: any
  
      /**
       * The zOrder value of ccui.Slider's base bar renderer.
       */
      static BASEBAR_RENDERER_ZORDER: any
  
      /**
       * The percent change event flag of ccui.Slider.
       */
      static EVENT_PERCENT_CHANGED: any
  
      /**
       * The zOrder value of ccui.Slider's progress bar renderer.
       */
      static PROGRESSBAR_RENDERER_ZORDER: any
  
      /**
       * allocates and initializes a UISlider.
       *
       * @param {any} barTextureName
       * @param {any} normalBallTextureName
       * @param {any} resType
       *
       * @returns {ccui.Slider}
       */
      static create(barTextureName: any, normalBallTextureName: any, resType: any): ccui.Slider
  
  
      /**
       * Returns the "class name" of ccui.LoadingBar.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Returns the bar renderer.
       *
       * @returns {cc.Node}
       */
      getVirtualRenderer(): cc.Node
  
      /**
       * Returns the content size of bar renderer.
       *
       * @returns {cc.Size}
       */
      getVirtualRendererSize(): cc.Size
  
      /**
       * test the point whether location in loadingBar's bounding box.
       *
       * @param {cc.Point} pt
       *
       * @returns {boolean}
       */
      hitTest(pt: cc.Point): boolean
  
      /**
       * override "ignoreContentAdaptWithSize" method of widget.
       *
       * @param {Boolean} ignore
       */
      ignoreContentAdaptWithSize(ignore: boolean): any
  
  
      /**
       * - The current progress of loadingbar
       */
      percent: number
  
      /**
       * Adds a callback
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addEventListener(selector: Function, target: object): any
  
      /**
       * add event listener
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addEventListenerSlider(selector: Function, target: object): any
  
      /**
       * Returns cap insets for slider.
       *
       * @returns {cc.Rect}
       */
      getCapInsetsBarRenderer(): cc.Rect
  
      /**
       * Returns cap insets of ProgressBar for slider.
       *
       * @returns {cc.Rect}
       */
      getCapInsetsProgressBarRenderer(): cc.Rect
  
      /**
       * Gets the progress direction of slider.
       *
       * @returns {number}
       */
      getPercent(): number
  
      /**
       * Returns slider is using scale9 renderer or not.
       *
       * @returns {Boolean}
       */
      isScale9Enabled(): boolean
  
      /**
       * Loads texture for slider bar.
       *
       * @param {String} fileName
       * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
       */
      loadBarTexture(fileName: string, texType: any): any
  
      /**
       * Loads dark state texture for slider progress bar.
       *
       * @param {String} fileName
       * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
       */
      loadProgressBarTexture(fileName: string, texType: any): any
  
      /**
       * Load dark state texture for slider ball.
       *
       * @param {String} disabled
       * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
       */
      loadSlidBallTextureDisabled(disabled: string, texType: any): any
  
      /**
       * Loads normal state texture for slider ball.
       *
       * @param {String} normal
       * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
       */
      loadSlidBallTextureNormal(normal: string, texType: any): any
  
      /**
       * Loads selected state texture for slider ball.
       *
       * @param {String} pressed
       * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
       */
      loadSlidBallTexturePressed(pressed: string, texType: any): any
  
      /**
       * Loads textures for slider ball.
       *
       * @param {String} normal
       * @param {String} pressed
       * @param {String} disabled
       * @param {ccui.Widget.LOCAL_TEXTURE|ccui.Widget.PLIST_TEXTURE} texType
       */
      loadSlidBallTextures(normal: string, pressed: string, disabled: string, texType: any): any
  
      /**
       * Sets capinsets of ProgressBar for slider, if slider is using scale9 renderer.
       *
       * @param {cc.Rect} capInsets
       */
      setCapInsetProgressBarRenderer(capInsets: cc.Rect): any
  
      /**
       * Sets capinsets for slider, if slider is using scale9 renderer.
       *
       * @param {cc.Rect} capInsets
       */
      setCapInsets(capInsets: cc.Rect): any
  
      /**
       * Sets capinsets for slider's renderer, if slider is using scale9 renderer.
       *
       * @param {cc.Rect} capInsets
       */
      setCapInsetsBarRenderer(capInsets: cc.Rect): any
  
      /**
       * Changes the progress direction of slider.
       *
       * @param {number} percent
       */
      setPercent(percent: number): any
  
      /**
       * Sets if slider is using scale9 renderer.
       *
       * @param {Boolean} able
       */
      setScale9Enabled(able: boolean): any
  
  
      /**
       * - The action tag of the widget
       */
      actionTag: number
  
      /**
       * - Indicate whether the widget is bright
       */
      bright: boolean
  
      /**
       * - Indicate whether the widget is enabled
       */
      enabled: boolean
  
      /**
       * - Indicate whether the widget is focused
       */
      focused: boolean
  
      /**
       * - Height in percentage of parent height
       */
      heightPercent: number
  
      /**
       * - The name of the widget
       */
      name: string
  
      /**
       * When a widget lose/get focus, this method will be called. Be Caution when you provide your own version,
       * you must call widget.setFocused(true/false) to change the focus state of the current focused widget;
       */
      onFocusChanged: any
  
      /**
       * use this function to manually specify the next focused widget regards to each direction
       */
      onNextFocusedWidget: any
  
      /**
       * - The size type of the widget
       */
      sizeType: any
  
      /**
       * - Indicate whether touch events are enabled
       */
      touchEnabled: boolean
  
      /**
       * - Indicate whether the update function is scheduled
       */
      updateEnabled: boolean
  
      /**
       * - <@readonly> The direct parent when it's a widget also, otherwise equals null
       */
      widgetParent: ccui.Widget
  
      /**
       * - <@readonly> The type of the widget
       */
      widgetType: any
  
      /**
       * - Width in percentage of parent width
       */
      widthPercent: number
  
      /**
       * - Position x in percentage of width
       */
      xPercent: number
  
      /**
       * - Position y in percentage of height
       */
      yPercent: number
  
      /**
       * Set a event handler to the widget in order to use cocostudio editor and framework
       *
       * @param {function} callback
       */
      addCCSEventListener(callback: Function): any
  
      /**
       * Adds a node for widget (this function is deleted in -x)
       *
       * @param {cc.Node} node
       * @param {Number} zOrder
       * @param {Number} tag
       */
      addNode(node: cc.Node, zOrder: number, tag: number): any
  
      /**
       * Sets the touch event target/selector of the ccui.Widget
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addTouchEventListener(selector: Function, target: object): any
  
      /**
       * Calls the checkChildInfo of widget's parent, its subclass will override it.
       *
       * @param {number} handleState
       * @param {ccui.Widget} sender
       * @param {cc.Point} touchPoint
       */
      checkChildInfo(handleState: number, sender: ccui.Widget, touchPoint: cc.Point): any
  
      /**
       * Checks a point if in parent's area.
       *
       * @param {cc.Point} pt
       *
       * @returns {Boolean}
       */
      clippingParentAreaContainPoint(pt: cc.Point): boolean
  
      /**
       * Clones a new widget.
       *
       * @returns {ccui.Widget}
       */
      clone(): ccui.Widget
  
      /**
       * A call back function when widget lost of focus.
       */
      didNotSelectSelf(): any
  
      /**
       * Dispatch a EventFocus through a EventDispatcher
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      dispatchFocusEvent(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * When a widget is in a layout, you could call this method to get the next focused widget within a specified direction.
       * If the widget is not in a layout, it will return itself
       *
       * @param {any} direction the direction to look for the next focused widget in a layout
       * @param {any} current the current focused widget
       */
      findNextFocusedWidget(direction: any, current: any): any
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomBoundary(): number
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomInParent(): number
  
      /**
       * Gets callback name of widget
       *
       * @returns v3.3{String|Null}
       */
      getCallbackName(): string | null
  
      /**
       * Gets callback type of widget
       *
       * @returns v3.3{String|null}
       */
      getCallbackType(): string | null
  
      /**
       * no matter what widget object you call this method on , it will return you the exact one focused widget
       */
      getCurrentFocusedWidget(): any
  
      /**
       * Get custom size of ccui.Widget
       *
       * @returns {cc.Size}
       */
      getCustomSize(): cc.Size
  
      /**
       * Returns the "class name" of widget.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Gets layout parameter
       *
       * @param {ccui.LayoutParameter.NONE|ccui.LayoutParameter.LINEAR|ccui.LayoutParameter.RELATIVE} type
       *
       * @returns {ccui.LayoutParameter}
       */
      getLayoutParameter(type: any): ccui.LayoutParameter
  
      /**
       * Gets layout size of ccui.Widget.
       *
       * @returns {cc.Size}
       */
      getLayoutSize(): cc.Size
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftBoundary(): number
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftInParent(): number
  
      /**
       * Gets node by tag
       *
       * @param {Number} tag
       *
       * @returns {cc.Node}
       */
      getNodeByTag(tag: number): cc.Node
  
      /**
       * Returns all children.
       *
       * @returns {Array}
       */
      getNodes(): any[]
  
      /**
       * Gets the percent (x,y) of the widget
       *
       * @returns {cc.Point} The percent (x,y) of the widget in OpenGL coordinates
       */
      getPositionPercent(): cc.Point
  
      /**
       * Gets the position type of the widget
       *
       * @returns {Number} the position type of widget
       */
      getPositionType(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightBoundary(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightInParent(): number
  
      /**
       * Returns size of widget
       *
       * @returns {cc.Size}
       */
      getSize(): cc.Size
  
      /**
       * Returns size percent of ccui.Widget
       *
       * @returns {cc.Point}
       */
      getSizePercent(): cc.Point
  
      /**
       * Gets the size type of widget.
       *
       * @returns {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} that is widget's size type
       */
      getSizeType(): any
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopBoundary(): number
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopInParent(): number
  
      /**
       * Gets the position of touch began event.
       *
       * @returns {cc.Point}
       */
      getTouchBeganPosition(): cc.Point
  
      /**
       * Gets the touch end point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch end point.
       */
      getTouchEndPos(): cc.Point
  
      /**
       * Gets the position of touch end event
       *
       * @returns {cc.Point}
       */
      getTouchEndPosition(): cc.Point
  
      /**
       * Gets the touch move point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch move point.
       */
      getTouchMovePos(): cc.Point
  
      /**
       * Gets the position of touch moved event
       *
       * @returns {cc.Point}
       */
      getTouchMovePosition(): cc.Point
  
      /**
       * Gets the touch began point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch began point.
       */
      getTouchStartPos(): cc.Point
  
      /**
       * Gets the Virtual Renderer of widget.
       *
       * @returns {ccui.Widget}
       */
      getVirtualRenderer(): ccui.Widget
  
      /**
       * Gets the content size of widget. Content size is widget's texture size.
       */
      getVirtualRendererSize(): any
  
      /**
       * The direct parent when it's a widget also, otherwise equals null
       *
       * @returns {ccui.Widget|null}
       */
      getWidgetParent(): ccui.Widget | null
  
      /**
       * get widget type
       *
       * @returns {ccui.Widget.TYPE_WIDGET|ccui.Widget.TYPE_CONTAINER}
       */
      getWidgetType(): any
  
      /**
       * Gets world position of ccui.Widget.
       *
       * @returns {cc.Point} world position of ccui.Widget.
       */
      getWorldPosition(): cc.Point
  
      /**
       * Checks a point if is in widget's space
       *
       * @param {cc.Point} pt
       *
       * @returns {boolean} true if the point is in widget's space, false otherwise.
       */
      hitTest(pt: cc.Point): boolean
  
      /**
       * Ignore the widget size
       *
       * @param {Boolean} ignore true that widget will ignore it's size, use texture size, false otherwise. Default value is true.
       */
      ignoreContentAdaptWithSize(ignore: boolean): any
  
      /**
       * initializes state of widget. please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
       *
       * @returns {boolean}
       */
      init(): boolean
  
      /**
       * Sends the touch event to widget's parent, its subclass will override it, e.g. ccui.ScrollView, ccui.PageView
       *
       * @param {Number} eventType
       * @param {ccui.Widget} sender
       * @param {cc.Touch} touch
       */
      interceptTouchEvent(eventType: number, sender: ccui.Widget, touch: cc.Touch): any
  
      /**
       * Determines if the widget is bright
       *
       * @returns {boolean} true if the widget is bright, false if the widget is dark.
       */
      isBright(): boolean
  
      /**
       * returns whether clipping parent widget contains point.
       *
       * @param {cc.Point} pt location point
       *
       * @returns {Boolean}
       */
      isClippingParentContainsPoint(pt: cc.Point): boolean
  
      /**
       * Determines if the widget is enabled
       *
       * @returns {boolean}
       */
      isEnabled(): boolean
  
      /**
       * Returns the flag which indicates whether the widget is flipped horizontally or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleX(sprite.getScaleX() * -1);
       *
       * @returns {Boolean} true if the widget is flipped horizontally, false otherwise.
       */
      isFlippedX(): boolean
  
      /**
       * Return the flag which indicates whether the widget is flipped vertically or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleY(widget.getScaleY() * -1);
       *
       * @returns {Boolean} true if the widget is flipped vertically, false otherwise.
       */
      isFlippedY(): boolean
  
      /**
       * Determines if the widget is on focused
       *
       * @returns {boolean} whether the widget is focused or not
       */
      isFocused(): boolean
  
      /**
       * returns whether the widget could accept focus.
       *
       * @returns {boolean} true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      isFocusEnabled(): boolean
  
      /**
       * Determines if the widget is highlighted
       *
       * @returns {boolean} true if the widget is highlighted, false if the widget is not highlighted .
       */
      isHighlighted(): boolean
  
      /**
       * Gets whether ignore the content size (custom size)
       *
       * @returns {boolean} true that widget will ignore it's size, use texture size, false otherwise.
       */
      isIgnoreContentAdaptWithSize(): boolean
  
      /**
       * Returns whether enable layout component of a widget
       *
       * @returns {Boolean} true represent the widget use Layout Component, false represent the widget couldn't use Layout Component.
       */
      isLayoutComponentEnabled(): boolean
  
      /**
       * Return whether the widget is propagate touch events to its parents or not
       *
       * @returns v3.2{boolean}
       */
      isPropagateTouchEvents(): boolean
  
      /**
       * Return whether the widget is swallowing touch or not
       *
       * @returns v3.2{boolean}
       */
      isSwallowTouches(): boolean
  
      /**
       * Returns whether or not touch is enabled.
       *
       * @returns {boolean} true if the widget is touch enabled, false if the widget is touch disabled.
       */
      isTouchEnabled(): boolean
  
      /**
       *
       *
       * @returns v3.2{boolean} true represent the widget use Unify Size, false represent the widget couldn't use Unify Size
       */
      isUnifySizeEnabled(): boolean
  
      /**
       * Calls updateSizeAndPosition and its parent's onEnter
       */
      onEnter(): any
  
      /**
       * Calls unscheduleUpdate and its parent's onExit
       */
      onExit(): any
  
      /**
       * This method is called when a focus change event happens
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      onFocusChange(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * The callback of touch began event.
       * If the bounding box of ccui.Widget contains the touch point, it will do the following things:
       * 1. sets highlight state,
       * 2. sends event to parent widget by interceptTouchEvent
       * 3. calls the callback of touch began event.
       * 4. returns true,
       * otherwise returns false directly.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       *
       * @returns {boolean}
       */
      onTouchBegan(touch: cc.Touch, event: cc.Event): boolean
  
      /**
       * A call back function called when widget is selected, and on touch canceled.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchCancelled(touchPoint: cc.Point): any
  
      /**
       * The callback of touch end event
       * It sends event to parent widget by interceptTouchEvent,
       * calls the callback of touch end event (highlight= true) or touch canceled event (highlight= false).
       * sets the highlight state to false ,
       *
       * @param {any} touch
       * @param {any} event
       */
      onTouchEnded(touch: any, event: any): any
  
      /**
       * A call back function called when widget is selected, and on touch long clicked.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchLongClicked(touchPoint: cc.Point): any
  
      /**
       * The callback of touch moved event.
       * It sets the highlight state by touch, sends event to parent widget by interceptTouchEvent and calls the callback of touch moved event.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       */
      onTouchMoved(touch: cc.Touch, event: cc.Event): any
  
      /**
       * Removes all node
       */
      removeAllNodes(): any
  
      /**
       * Removes a node from ccui.Widget
       *
       * @param {cc.Node} node
       * @param {Boolean} cleanup
       */
      removeNode(node: cc.Node, cleanup: boolean): any
  
      /**
       * Removes node by tag
       *
       * @param {Number} tag
       * @param {Boolean} cleanup
       */
      removeNodeByTag(tag: number, cleanup: boolean): any
  
      /**
       * when a widget calls this method, it will get focus immediately.
       */
      requestFocus(): any
  
      /**
       * Sets whether the widget is bright. The default value is true, a widget is default to bright
       *
       * @param {Boolean} bright true if the widget is bright, false if the widget is dark.
       */
      setBright(bright: boolean): any
  
      /**
       * To set the bright style of ccui.Widget.
       *
       * @param {Number} style BRIGHT_NORMAL the widget is normal state, BRIGHT_HIGHLIGHT the widget is height light state.
       */
      setBrightStyle(style: number): any
  
      /**
       * Sets callback name to widget.
       *
       * @param {String} callbackName
       */
      setCallbackName(callbackName: string): any
  
      /**
       * Sets callback type to widget
       *
       * @param {String} callbackType
       */
      setCallbackType(callbackType: string): any
  
      /**
       * Sets _customSize of ccui.Widget, if ignoreSize is true, the content size is its renderer's contentSize, otherwise the content size is parameter.
       * and updates size percent by parent content size. At last, updates its children's size and position.
       *
       * @param {cc.Size|Number} contentSize content size or width of content size
       * @param {Number} height
       */
      setContentSize(contentSize: cc.Size | number, height: number): any
  
      /**
       * Sets whether the widget is enabled
       * true if the widget is enabled, widget may be touched , false if the widget is disabled, widget cannot be touched.
       * The default value is true, a widget is default to enabled
       *
       * @param {Boolean} enabled
       */
      setEnabled(enabled: boolean): any
  
      /**
       * Sets whether the widget should be flipped horizontally or not.
       *
       * @param {Boolean} flipX true if the widget should be flipped horizontally, false otherwise.
       */
      setFlippedX(flipX: boolean): any
  
      /**
       * Sets whether the widget should be flipped vertically or not.
       *
       * @param {Boolean} flipY true if the widget should be flipped vertically, false otherwise.
       */
      setFlippedY(flipY: boolean): any
  
      /**
       * Sets whether the widget is on focused
       * The default value is false, a widget is default to not on focused
       *
       * @param {boolean} focus pass true to let the widget get focus or pass false to let the widget lose focus
       */
      setFocused(focus: boolean): any
  
      /**
       * sets whether the widget could accept focus.
       *
       * @param {Boolean} enable true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      setFocusEnabled(enable: boolean): any
  
      /**
       * Sets whether the widget is highlighted. The default value is false, a widget is default to not highlighted
       *
       * @param {any} highlight true if the widget is highlighted, false if the widget is not highlighted.
       */
      setHighlighted(highlight: any): any
  
      /**
       * Whether enable layout component of a widget
       *
       * @param {Boolean} enable enable layout Component of a widget
       */
      setLayoutComponentEnabled(enable: boolean): any
  
      /**
       * Gets LayoutParameter of widget.
       *
       * @param {ccui.LayoutParameter} parameter
       */
      setLayoutParameter(parameter: ccui.LayoutParameter): any
  
      /**
       * Changes the position (x,y) of the widget .
       * The original point (0,0) is at the left-bottom corner of screen.
       *
       * @param {cc.Point|Number} pos
       * @param {Number} posY
       */
      setPosition(pos: cc.Point | number, posY: number): any
  
      /**
       * Changes the position (x,y) of the widget
       *
       * @param {cc.Point} percent
       */
      setPositionPercent(percent: cc.Point): any
  
      /**
       * Changes the position type of the widget
       *
       * @param {Number} type the position type of widget
       */
      setPositionType(type: number): any
  
      /**
       * Allow widget touch events to propagate to its parents. Set false will disable propagation
       *
       * @param {Boolean} isPropagate
       */
      setPropagateTouchEvents(isPropagate: boolean): any
  
      /**
       * Changes the size that is widget's size
       *
       * @param {cc.Size} size that is widget's size
       */
      setSize(size: cc.Size): any
  
      /**
       * Changes the percent that is widget's percent size
       *
       * @param {cc.Point} percent that is widget's percent size, width and height value from 0 to 1.
       */
      setSizePercent(percent: cc.Point): any
  
      /**
       * TEXTURE_RES_TYPE
       * Changes the size type of widget.
       *
       * @param {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} type that is widget's size type
       */
      setSizeType(type: any): any
  
      /**
       * Specify widget to swallow touches or not
       *
       * @param {Boolean} swallow
       */
      setSwallowTouches(swallow: boolean): any
  
      /**
       * Sets whether the widget is touch enabled. The default value is false, a widget is default to touch disabled
       *
       * @param {Boolean} enable true if the widget is touch enabled, false if the widget is touch disabled.
       */
      setTouchEnabled(enable: boolean): any
  
      /**
       *
       *
       * @param {Boolean} enable enable Unify Size of a widget
       */
      setUnifySizeEnabled(enable: boolean): any
  
      /**
       * updates its size by size type and its position by position type.
       *
       * @param {cc.Size} parentSize parent size
       */
      updateSizeAndPosition(parentSize: cc.Size): any
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    }
  }
  
  declare namespace ccui {
    interface IText extends ccui.IWidget {
  
      boundingHeight: number
  
      boundingWidth: number
  
      font: string
  
      fontName: string
  
      fontSize: number
  
      string: string
  
      stringLength: number
  
      textAlign: number
  
      touchScaleEnabled: boolean
  
      verticalAlign: number
  
      disableEffect(): any
  
      enableGlow(glowColor: any): any
  
      enableOutline(outlineColor: cc.Color, outlineSize: cc.Size): any
  
      enableShadow(shadowColor: cc.Color, offset: cc.Size, blurRadius: number): any
  
      getFontName(): string
  
      getFontSize(): number
  
      getString(): string
  
      getStringLength(): number
  
      getStringValue(): string
  
      getTextAreaSize(): cc.Size
  
      getTextHorizontalAlignment(): cc.TEXT_ALIGNMENT_LEFT | cc.TEXT_ALIGNMENT_CENTER | cc.TEXT_ALIGNMENT_RIGHT
  
      getTextVerticalAlignment(): cc.VERTICAL_TEXT_ALIGNMENT_TOP | cc.VERTICAL_TEXT_ALIGNMENT_CENTER | cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM
  
      getType(): null
  
      isTouchScaleChangeEnabled(): boolean
  
      setFontName(name: any): string
  
      setFontSize(size: number): any
  
      setString(text: string): any
  
      setText(text: string): any
  
      setTextAreaSize(size: cc.Size): any
  
      setTextHorizontalAlignment(alignment: cc.TEXT_ALIGNMENT_LEFT | cc.TEXT_ALIGNMENT_CENTER | cc.TEXT_ALIGNMENT_RIGHT): any
  
      setTextVerticalAlignment(alignment: cc.VERTICAL_TEXT_ALIGNMENT_TOP | cc.VERTICAL_TEXT_ALIGNMENT_CENTER | cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM): any
  
      setTouchScaleChangeEnabled(enable: boolean): any
    }
  
    interface ITextOverrides {
  
      getDescription(): string
  
      getVirtualRenderer(): cc.Node
  
      getVirtualRendererSize(): cc.Size
    }
  
  
  
    class Text implements IText, ITextOverrides {
  
      /**
       * allocates and initializes a UILabel.
       * Constructor of ccui.Text. override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
       *
       * @param {String} textContent
       * @param {String} fontName
       * @param {Number} fontSize
       */
      constructor(textContent: string, fontName: string, fontSize: number)
  
  
  
      /**
       * The zOrder value of ccui.Text's renderer.
       */
      static RENDERER_ZORDER: any
  
  
  
      /**
       * Returns the "class name" of ccui.Text.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Returns the renderer of ccui.Text.
       *
       * @returns {cc.Node}
       */
      getVirtualRenderer(): cc.Node
  
      /**
       * Returns the renderer's content size.
       *
       * @returns {cc.Size}
       */
      getVirtualRendererSize(): cc.Size
  
  
      /**
       * - Height of the bounding area of label, the real content height is limited by boundingHeight
       */
      boundingHeight: number
  
      /**
       * - Width of the bounding area of label, the real content width is limited by boundingWidth
       */
      boundingWidth: number
  
      /**
       * - The label font with a style string: e.g. "18px Verdana"
       */
      font: string
  
      /**
       * - The label font name
       */
      fontName: string
  
      /**
       * - The label font size
       */
      fontSize: number
  
      /**
       * - The content string of the label
       */
      string: string
  
      /**
       * - <@readonly> The content string length of the label
       */
      stringLength: number
  
      /**
       * - Horizontal Alignment of label, cc.TEXT_ALIGNMENT_LEFT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_RIGHT
       */
      textAlign: number
  
      /**
       * - Indicate whether the label will scale when touching
       */
      touchScaleEnabled: boolean
  
      /**
       * - Vertical Alignment of label: cc.VERTICAL_TEXT_ALIGNMENT_TOP|cc.VERTICAL_TEXT_ALIGNMENT_CENTER|cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM
       */
      verticalAlign: number
  
      /**
       * Disables renderer's effect.
       */
      disableEffect(): any
  
      /**
       * Enables glow color
       *
       * @param {any} glowColor
       */
      enableGlow(glowColor: any): any
  
      /**
       * Enables outline style and sets outline's color and size.
       *
       * @param {cc.Color} outlineColor
       * @param {cc.Size} outlineSize
       */
      enableOutline(outlineColor: cc.Color, outlineSize: cc.Size): any
  
      /**
       * Enables shadow style and sets color, offset and blur radius styles.
       *
       * @param {cc.Color} shadowColor
       * @param {cc.Size} offset
       * @param {Number} blurRadius
       */
      enableShadow(shadowColor: cc.Color, offset: cc.Size, blurRadius: number): any
  
      /**
       * Returns font name of ccui.Text.
       *
       * @returns {string}
       */
      getFontName(): string
  
      /**
       * Returns font Size of ccui.Text
       *
       * @returns {Number}
       */
      getFontSize(): number
  
      /**
       * Gets the string value of ccui.Text.
       *
       * @returns {String}
       */
      getString(): string
  
      /**
       * Gets the string length of ccui.Text.
       *
       * @returns {Number}
       */
      getStringLength(): number
  
      /**
       * Gets the string value of ccui.Text.
       *
       * @returns {String}
       */
      getStringValue(): string
  
      /**
       * Returns renderer's dimension.
       *
       * @returns {cc.Size}
       */
      getTextAreaSize(): cc.Size
  
      /**
       * Returns Horizontal Alignment of label
       *
       * @returns {TEXT_ALIGNMENT_LEFT|TEXT_ALIGNMENT_CENTER|TEXT_ALIGNMENT_RIGHT}
       */
      getTextHorizontalAlignment(): cc.TEXT_ALIGNMENT_LEFT | cc.TEXT_ALIGNMENT_CENTER | cc.TEXT_ALIGNMENT_RIGHT
  
      /**
       * Gets text vertical alignment.
       *
       * @returns {VERTICAL_TEXT_ALIGNMENT_TOP|VERTICAL_TEXT_ALIGNMENT_CENTER|VERTICAL_TEXT_ALIGNMENT_BOTTOM}
       */
      getTextVerticalAlignment(): cc.VERTICAL_TEXT_ALIGNMENT_TOP | cc.VERTICAL_TEXT_ALIGNMENT_CENTER | cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM
  
      /**
       * Returns the type of ccui.Text.
       *
       * @returns {null}
       */
      getType(): null
  
      /**
       * Gets the touch scale enabled of label.
       *
       * @returns {Boolean}
       */
      isTouchScaleChangeEnabled(): boolean
  
      /**
       * Sets font name
       *
       * @param {any} name
       *
       * @returns {String} name
       */
      setFontName(name: any): string
  
      /**
       * Sets fontSize
       *
       * @param {Number} size
       */
      setFontSize(size: number): any
  
      /**
       * Changes the value of ccui.Text.
       *
       * @param {String} text
       */
      setString(text: string): any
  
      /**
       * Changes the value of ccui.Text.
       *
       * @param {String} text
       */
      setText(text: string): any
  
      /**
       * Sets text Area Size
       *
       * @param {cc.Size} size
       */
      setTextAreaSize(size: cc.Size): any
  
      /**
       * Sets Horizontal Alignment of cc.LabelTTF
       *
       * @param {cc.TEXT_ALIGNMENT_LEFT|cc.TEXT_ALIGNMENT_CENTER|cc.TEXT_ALIGNMENT_RIGHT} alignment Horizontal Alignment
       */
      setTextHorizontalAlignment(alignment: cc.TEXT_ALIGNMENT_LEFT | cc.TEXT_ALIGNMENT_CENTER | cc.TEXT_ALIGNMENT_RIGHT): any
  
      /**
       * Sets Vertical Alignment of label
       *
       * @param {cc.VERTICAL_TEXT_ALIGNMENT_TOP|cc.VERTICAL_TEXT_ALIGNMENT_CENTER|cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM} alignment
       */
      setTextVerticalAlignment(alignment: cc.VERTICAL_TEXT_ALIGNMENT_TOP | cc.VERTICAL_TEXT_ALIGNMENT_CENTER | cc.VERTICAL_TEXT_ALIGNMENT_BOTTOM): any
  
      /**
       * Sets the touch scale enabled of label.
       *
       * @param {Boolean} enable
       */
      setTouchScaleChangeEnabled(enable: boolean): any
  
  
      /**
       * - The action tag of the widget
       */
      actionTag: number
  
      /**
       * - Indicate whether the widget is bright
       */
      bright: boolean
  
      /**
       * - Indicate whether the widget is enabled
       */
      enabled: boolean
  
      /**
       * - Indicate whether the widget is focused
       */
      focused: boolean
  
      /**
       * - Height in percentage of parent height
       */
      heightPercent: number
  
      /**
       * - The name of the widget
       */
      name: string
  
      /**
       * When a widget lose/get focus, this method will be called. Be Caution when you provide your own version,
       * you must call widget.setFocused(true/false) to change the focus state of the current focused widget;
       */
      onFocusChanged: any
  
      /**
       * use this function to manually specify the next focused widget regards to each direction
       */
      onNextFocusedWidget: any
  
      /**
       * - The size type of the widget
       */
      sizeType: any
  
      /**
       * - Indicate whether touch events are enabled
       */
      touchEnabled: boolean
  
      /**
       * - Indicate whether the update function is scheduled
       */
      updateEnabled: boolean
  
      /**
       * - <@readonly> The direct parent when it's a widget also, otherwise equals null
       */
      widgetParent: ccui.Widget
  
      /**
       * - <@readonly> The type of the widget
       */
      widgetType: any
  
      /**
       * - Width in percentage of parent width
       */
      widthPercent: number
  
      /**
       * - Position x in percentage of width
       */
      xPercent: number
  
      /**
       * - Position y in percentage of height
       */
      yPercent: number
  
      /**
       * Set a event handler to the widget in order to use cocostudio editor and framework
       *
       * @param {function} callback
       */
      addCCSEventListener(callback: Function): any
  
      /**
       * Adds a node for widget (this function is deleted in -x)
       *
       * @param {cc.Node} node
       * @param {Number} zOrder
       * @param {Number} tag
       */
      addNode(node: cc.Node, zOrder: number, tag: number): any
  
      /**
       * Sets the touch event target/selector of the ccui.Widget
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addTouchEventListener(selector: Function, target: object): any
  
      /**
       * Calls the checkChildInfo of widget's parent, its subclass will override it.
       *
       * @param {number} handleState
       * @param {ccui.Widget} sender
       * @param {cc.Point} touchPoint
       */
      checkChildInfo(handleState: number, sender: ccui.Widget, touchPoint: cc.Point): any
  
      /**
       * Checks a point if in parent's area.
       *
       * @param {cc.Point} pt
       *
       * @returns {Boolean}
       */
      clippingParentAreaContainPoint(pt: cc.Point): boolean
  
      /**
       * Clones a new widget.
       *
       * @returns {ccui.Widget}
       */
      clone(): ccui.Widget
  
      /**
       * A call back function when widget lost of focus.
       */
      didNotSelectSelf(): any
  
      /**
       * Dispatch a EventFocus through a EventDispatcher
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      dispatchFocusEvent(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * When a widget is in a layout, you could call this method to get the next focused widget within a specified direction.
       * If the widget is not in a layout, it will return itself
       *
       * @param {any} direction the direction to look for the next focused widget in a layout
       * @param {any} current the current focused widget
       */
      findNextFocusedWidget(direction: any, current: any): any
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomBoundary(): number
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomInParent(): number
  
      /**
       * Gets callback name of widget
       *
       * @returns v3.3{String|Null}
       */
      getCallbackName(): string | null
  
      /**
       * Gets callback type of widget
       *
       * @returns v3.3{String|null}
       */
      getCallbackType(): string | null
  
      /**
       * no matter what widget object you call this method on , it will return you the exact one focused widget
       */
      getCurrentFocusedWidget(): any
  
      /**
       * Get custom size of ccui.Widget
       *
       * @returns {cc.Size}
       */
      getCustomSize(): cc.Size
  
      /**
       * Returns the "class name" of widget.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Gets layout parameter
       *
       * @param {ccui.LayoutParameter.NONE|ccui.LayoutParameter.LINEAR|ccui.LayoutParameter.RELATIVE} type
       *
       * @returns {ccui.LayoutParameter}
       */
      getLayoutParameter(type: any): ccui.LayoutParameter
  
      /**
       * Gets layout size of ccui.Widget.
       *
       * @returns {cc.Size}
       */
      getLayoutSize(): cc.Size
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftBoundary(): number
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftInParent(): number
  
      /**
       * Gets node by tag
       *
       * @param {Number} tag
       *
       * @returns {cc.Node}
       */
      getNodeByTag(tag: number): cc.Node
  
      /**
       * Returns all children.
       *
       * @returns {Array}
       */
      getNodes(): any[]
  
      /**
       * Gets the percent (x,y) of the widget
       *
       * @returns {cc.Point} The percent (x,y) of the widget in OpenGL coordinates
       */
      getPositionPercent(): cc.Point
  
      /**
       * Gets the position type of the widget
       *
       * @returns {Number} the position type of widget
       */
      getPositionType(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightBoundary(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightInParent(): number
  
      /**
       * Returns size of widget
       *
       * @returns {cc.Size}
       */
      getSize(): cc.Size
  
      /**
       * Returns size percent of ccui.Widget
       *
       * @returns {cc.Point}
       */
      getSizePercent(): cc.Point
  
      /**
       * Gets the size type of widget.
       *
       * @returns {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} that is widget's size type
       */
      getSizeType(): any
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopBoundary(): number
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopInParent(): number
  
      /**
       * Gets the position of touch began event.
       *
       * @returns {cc.Point}
       */
      getTouchBeganPosition(): cc.Point
  
      /**
       * Gets the touch end point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch end point.
       */
      getTouchEndPos(): cc.Point
  
      /**
       * Gets the position of touch end event
       *
       * @returns {cc.Point}
       */
      getTouchEndPosition(): cc.Point
  
      /**
       * Gets the touch move point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch move point.
       */
      getTouchMovePos(): cc.Point
  
      /**
       * Gets the position of touch moved event
       *
       * @returns {cc.Point}
       */
      getTouchMovePosition(): cc.Point
  
      /**
       * Gets the touch began point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch began point.
       */
      getTouchStartPos(): cc.Point
  
      /**
       * Gets the Virtual Renderer of widget.
       *
       * @returns {ccui.Widget}
       */
      getVirtualRenderer(): ccui.Widget
  
      /**
       * Gets the content size of widget. Content size is widget's texture size.
       */
      getVirtualRendererSize(): any
  
      /**
       * The direct parent when it's a widget also, otherwise equals null
       *
       * @returns {ccui.Widget|null}
       */
      getWidgetParent(): ccui.Widget | null
  
      /**
       * get widget type
       *
       * @returns {ccui.Widget.TYPE_WIDGET|ccui.Widget.TYPE_CONTAINER}
       */
      getWidgetType(): any
  
      /**
       * Gets world position of ccui.Widget.
       *
       * @returns {cc.Point} world position of ccui.Widget.
       */
      getWorldPosition(): cc.Point
  
      /**
       * Checks a point if is in widget's space
       *
       * @param {cc.Point} pt
       *
       * @returns {boolean} true if the point is in widget's space, false otherwise.
       */
      hitTest(pt: cc.Point): boolean
  
      /**
       * Ignore the widget size
       *
       * @param {Boolean} ignore true that widget will ignore it's size, use texture size, false otherwise. Default value is true.
       */
      ignoreContentAdaptWithSize(ignore: boolean): any
  
      /**
       * initializes state of widget. please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
       *
       * @returns {boolean}
       */
      init(): boolean
  
      /**
       * Sends the touch event to widget's parent, its subclass will override it, e.g. ccui.ScrollView, ccui.PageView
       *
       * @param {Number} eventType
       * @param {ccui.Widget} sender
       * @param {cc.Touch} touch
       */
      interceptTouchEvent(eventType: number, sender: ccui.Widget, touch: cc.Touch): any
  
      /**
       * Determines if the widget is bright
       *
       * @returns {boolean} true if the widget is bright, false if the widget is dark.
       */
      isBright(): boolean
  
      /**
       * returns whether clipping parent widget contains point.
       *
       * @param {cc.Point} pt location point
       *
       * @returns {Boolean}
       */
      isClippingParentContainsPoint(pt: cc.Point): boolean
  
      /**
       * Determines if the widget is enabled
       *
       * @returns {boolean}
       */
      isEnabled(): boolean
  
      /**
       * Returns the flag which indicates whether the widget is flipped horizontally or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleX(sprite.getScaleX() * -1);
       *
       * @returns {Boolean} true if the widget is flipped horizontally, false otherwise.
       */
      isFlippedX(): boolean
  
      /**
       * Return the flag which indicates whether the widget is flipped vertically or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleY(widget.getScaleY() * -1);
       *
       * @returns {Boolean} true if the widget is flipped vertically, false otherwise.
       */
      isFlippedY(): boolean
  
      /**
       * Determines if the widget is on focused
       *
       * @returns {boolean} whether the widget is focused or not
       */
      isFocused(): boolean
  
      /**
       * returns whether the widget could accept focus.
       *
       * @returns {boolean} true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      isFocusEnabled(): boolean
  
      /**
       * Determines if the widget is highlighted
       *
       * @returns {boolean} true if the widget is highlighted, false if the widget is not highlighted .
       */
      isHighlighted(): boolean
  
      /**
       * Gets whether ignore the content size (custom size)
       *
       * @returns {boolean} true that widget will ignore it's size, use texture size, false otherwise.
       */
      isIgnoreContentAdaptWithSize(): boolean
  
      /**
       * Returns whether enable layout component of a widget
       *
       * @returns {Boolean} true represent the widget use Layout Component, false represent the widget couldn't use Layout Component.
       */
      isLayoutComponentEnabled(): boolean
  
      /**
       * Return whether the widget is propagate touch events to its parents or not
       *
       * @returns v3.2{boolean}
       */
      isPropagateTouchEvents(): boolean
  
      /**
       * Return whether the widget is swallowing touch or not
       *
       * @returns v3.2{boolean}
       */
      isSwallowTouches(): boolean
  
      /**
       * Returns whether or not touch is enabled.
       *
       * @returns {boolean} true if the widget is touch enabled, false if the widget is touch disabled.
       */
      isTouchEnabled(): boolean
  
      /**
       *
       *
       * @returns v3.2{boolean} true represent the widget use Unify Size, false represent the widget couldn't use Unify Size
       */
      isUnifySizeEnabled(): boolean
  
      /**
       * Calls updateSizeAndPosition and its parent's onEnter
       */
      onEnter(): any
  
      /**
       * Calls unscheduleUpdate and its parent's onExit
       */
      onExit(): any
  
      /**
       * This method is called when a focus change event happens
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      onFocusChange(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * The callback of touch began event.
       * If the bounding box of ccui.Widget contains the touch point, it will do the following things:
       * 1. sets highlight state,
       * 2. sends event to parent widget by interceptTouchEvent
       * 3. calls the callback of touch began event.
       * 4. returns true,
       * otherwise returns false directly.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       *
       * @returns {boolean}
       */
      onTouchBegan(touch: cc.Touch, event: cc.Event): boolean
  
      /**
       * A call back function called when widget is selected, and on touch canceled.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchCancelled(touchPoint: cc.Point): any
  
      /**
       * The callback of touch end event
       * It sends event to parent widget by interceptTouchEvent,
       * calls the callback of touch end event (highlight= true) or touch canceled event (highlight= false).
       * sets the highlight state to false ,
       *
       * @param {any} touch
       * @param {any} event
       */
      onTouchEnded(touch: any, event: any): any
  
      /**
       * A call back function called when widget is selected, and on touch long clicked.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchLongClicked(touchPoint: cc.Point): any
  
      /**
       * The callback of touch moved event.
       * It sets the highlight state by touch, sends event to parent widget by interceptTouchEvent and calls the callback of touch moved event.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       */
      onTouchMoved(touch: cc.Touch, event: cc.Event): any
  
      /**
       * Removes all node
       */
      removeAllNodes(): any
  
      /**
       * Removes a node from ccui.Widget
       *
       * @param {cc.Node} node
       * @param {Boolean} cleanup
       */
      removeNode(node: cc.Node, cleanup: boolean): any
  
      /**
       * Removes node by tag
       *
       * @param {Number} tag
       * @param {Boolean} cleanup
       */
      removeNodeByTag(tag: number, cleanup: boolean): any
  
      /**
       * when a widget calls this method, it will get focus immediately.
       */
      requestFocus(): any
  
      /**
       * Sets whether the widget is bright. The default value is true, a widget is default to bright
       *
       * @param {Boolean} bright true if the widget is bright, false if the widget is dark.
       */
      setBright(bright: boolean): any
  
      /**
       * To set the bright style of ccui.Widget.
       *
       * @param {Number} style BRIGHT_NORMAL the widget is normal state, BRIGHT_HIGHLIGHT the widget is height light state.
       */
      setBrightStyle(style: number): any
  
      /**
       * Sets callback name to widget.
       *
       * @param {String} callbackName
       */
      setCallbackName(callbackName: string): any
  
      /**
       * Sets callback type to widget
       *
       * @param {String} callbackType
       */
      setCallbackType(callbackType: string): any
  
      /**
       * Sets _customSize of ccui.Widget, if ignoreSize is true, the content size is its renderer's contentSize, otherwise the content size is parameter.
       * and updates size percent by parent content size. At last, updates its children's size and position.
       *
       * @param {cc.Size|Number} contentSize content size or width of content size
       * @param {Number} height
       */
      setContentSize(contentSize: cc.Size | number, height: number): any
  
      /**
       * Sets whether the widget is enabled
       * true if the widget is enabled, widget may be touched , false if the widget is disabled, widget cannot be touched.
       * The default value is true, a widget is default to enabled
       *
       * @param {Boolean} enabled
       */
      setEnabled(enabled: boolean): any
  
      /**
       * Sets whether the widget should be flipped horizontally or not.
       *
       * @param {Boolean} flipX true if the widget should be flipped horizontally, false otherwise.
       */
      setFlippedX(flipX: boolean): any
  
      /**
       * Sets whether the widget should be flipped vertically or not.
       *
       * @param {Boolean} flipY true if the widget should be flipped vertically, false otherwise.
       */
      setFlippedY(flipY: boolean): any
  
      /**
       * Sets whether the widget is on focused
       * The default value is false, a widget is default to not on focused
       *
       * @param {boolean} focus pass true to let the widget get focus or pass false to let the widget lose focus
       */
      setFocused(focus: boolean): any
  
      /**
       * sets whether the widget could accept focus.
       *
       * @param {Boolean} enable true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      setFocusEnabled(enable: boolean): any
  
      /**
       * Sets whether the widget is highlighted. The default value is false, a widget is default to not highlighted
       *
       * @param {any} highlight true if the widget is highlighted, false if the widget is not highlighted.
       */
      setHighlighted(highlight: any): any
  
      /**
       * Whether enable layout component of a widget
       *
       * @param {Boolean} enable enable layout Component of a widget
       */
      setLayoutComponentEnabled(enable: boolean): any
  
      /**
       * Gets LayoutParameter of widget.
       *
       * @param {ccui.LayoutParameter} parameter
       */
      setLayoutParameter(parameter: ccui.LayoutParameter): any
  
      /**
       * Changes the position (x,y) of the widget .
       * The original point (0,0) is at the left-bottom corner of screen.
       *
       * @param {cc.Point|Number} pos
       * @param {Number} posY
       */
      setPosition(pos: cc.Point | number, posY: number): any
  
      /**
       * Changes the position (x,y) of the widget
       *
       * @param {cc.Point} percent
       */
      setPositionPercent(percent: cc.Point): any
  
      /**
       * Changes the position type of the widget
       *
       * @param {Number} type the position type of widget
       */
      setPositionType(type: number): any
  
      /**
       * Allow widget touch events to propagate to its parents. Set false will disable propagation
       *
       * @param {Boolean} isPropagate
       */
      setPropagateTouchEvents(isPropagate: boolean): any
  
      /**
       * Changes the size that is widget's size
       *
       * @param {cc.Size} size that is widget's size
       */
      setSize(size: cc.Size): any
  
      /**
       * Changes the percent that is widget's percent size
       *
       * @param {cc.Point} percent that is widget's percent size, width and height value from 0 to 1.
       */
      setSizePercent(percent: cc.Point): any
  
      /**
       * TEXTURE_RES_TYPE
       * Changes the size type of widget.
       *
       * @param {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} type that is widget's size type
       */
      setSizeType(type: any): any
  
      /**
       * Specify widget to swallow touches or not
       *
       * @param {Boolean} swallow
       */
      setSwallowTouches(swallow: boolean): any
  
      /**
       * Sets whether the widget is touch enabled. The default value is false, a widget is default to touch disabled
       *
       * @param {Boolean} enable true if the widget is touch enabled, false if the widget is touch disabled.
       */
      setTouchEnabled(enable: boolean): any
  
      /**
       *
       *
       * @param {Boolean} enable enable Unify Size of a widget
       */
      setUnifySizeEnabled(enable: boolean): any
  
      /**
       * updates its size by size type and its position by position type.
       *
       * @param {cc.Size} parentSize parent size
       */
      updateSizeAndPosition(parentSize: cc.Size): any
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    }
  }
  
  declare namespace ccui {
    interface ITextAtlas extends ccui.IWidget {
  
      string: string
  
      getString(): string
  
      getStringLength(): any | number | number | number
  
      getStringValue(): string
  
      setProperty(stringValue: string, charMapFile: string, itemWidth: number, itemHeight: number, startCharMap: string): any
  
      setString(value: string): any
  
      setStringValue(value: string): any
    }
  
    interface ITextAtlasOverrides {
  
      getDescription(): string
  
      getVirtualRenderer(): cc.Node
  
      getVirtualRendererSize(): cc.Size
    }
  
  
  
    class TextAtlas implements ITextAtlas, ITextAtlasOverrides {
  
      /**
       * Allocates and initializes a UILabelAtlas.
       * Constructor of ccui.TextAtlas, override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
       *
       * @param {String} stringValue
       * @param {String} charMapFile
       * @param {number} itemWidth
       * @param {number} itemHeight
       * @param {String} startCharMap
       */
      constructor(stringValue: string, charMapFile: string, itemWidth: number, itemHeight: number, startCharMap: string)
  
  
  
      /**
       * The zOrder value of ccui.TextAtlas's renderer.
       */
      static RENDERER_ZORDER: any
  
      /**
       * allocates and initializes a UILabelAtlas.
       *
       * @param {any} stringValue
       * @param {any} charMapFile
       * @param {any} itemWidth
       * @param {any} itemHeight
       * @param {any} startCharMap
       *
       * @returns {ccui.TextAtlas}
       */
      static create(stringValue: any, charMapFile: any, itemWidth: any, itemHeight: any, startCharMap: any): ccui.TextAtlas
  
  
      /**
       * Returns the "class name" of ccui.TextAtlas.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Returns the renderer of ccui.TextAtlas.
       *
       * @returns {cc.Node}
       */
      getVirtualRenderer(): cc.Node
  
      /**
       * Returns the renderer's content size
       *
       * @returns {cc.Size}
       */
      getVirtualRendererSize(): cc.Size
  
  
      /**
       * - Content string of the label
       */
      string: string
  
      /**
       * get string value for ui text atlas.
       *
       * @returns {String}
       */
      getString(): string
  
      /**
       * Returns the length of string.
       *
       * @returns {*|Number|long|int}
       */
      getStringLength(): any | number | number | number
  
      /**
       * get string value for text atlas.
       *
       * @returns {String}
       */
      getStringValue(): string
  
      /**
       * initializes the UILabelAtlas with a string, a char map file(the atlas), the width and height of each element and the starting char of the atlas
       *
       * @param {String} stringValue
       * @param {String} charMapFile
       * @param {number} itemWidth
       * @param {number} itemHeight
       * @param {String} startCharMap
       */
      setProperty(stringValue: string, charMapFile: string, itemWidth: number, itemHeight: number, startCharMap: string): any
  
      /**
       * Sets string value for ui text atlas.
       *
       * @param {String} value
       */
      setString(value: string): any
  
      /**
       * Sets string value for text atlas.
       *
       * @param {String} value
       */
      setStringValue(value: string): any
  
  
      /**
       * - The action tag of the widget
       */
      actionTag: number
  
      /**
       * - Indicate whether the widget is bright
       */
      bright: boolean
  
      /**
       * - Indicate whether the widget is enabled
       */
      enabled: boolean
  
      /**
       * - Indicate whether the widget is focused
       */
      focused: boolean
  
      /**
       * - Height in percentage of parent height
       */
      heightPercent: number
  
      /**
       * - The name of the widget
       */
      name: string
  
      /**
       * When a widget lose/get focus, this method will be called. Be Caution when you provide your own version,
       * you must call widget.setFocused(true/false) to change the focus state of the current focused widget;
       */
      onFocusChanged: any
  
      /**
       * use this function to manually specify the next focused widget regards to each direction
       */
      onNextFocusedWidget: any
  
      /**
       * - The size type of the widget
       */
      sizeType: any
  
      /**
       * - Indicate whether touch events are enabled
       */
      touchEnabled: boolean
  
      /**
       * - Indicate whether the update function is scheduled
       */
      updateEnabled: boolean
  
      /**
       * - <@readonly> The direct parent when it's a widget also, otherwise equals null
       */
      widgetParent: ccui.Widget
  
      /**
       * - <@readonly> The type of the widget
       */
      widgetType: any
  
      /**
       * - Width in percentage of parent width
       */
      widthPercent: number
  
      /**
       * - Position x in percentage of width
       */
      xPercent: number
  
      /**
       * - Position y in percentage of height
       */
      yPercent: number
  
      /**
       * Set a event handler to the widget in order to use cocostudio editor and framework
       *
       * @param {function} callback
       */
      addCCSEventListener(callback: Function): any
  
      /**
       * Adds a node for widget (this function is deleted in -x)
       *
       * @param {cc.Node} node
       * @param {Number} zOrder
       * @param {Number} tag
       */
      addNode(node: cc.Node, zOrder: number, tag: number): any
  
      /**
       * Sets the touch event target/selector of the ccui.Widget
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addTouchEventListener(selector: Function, target: object): any
  
      /**
       * Calls the checkChildInfo of widget's parent, its subclass will override it.
       *
       * @param {number} handleState
       * @param {ccui.Widget} sender
       * @param {cc.Point} touchPoint
       */
      checkChildInfo(handleState: number, sender: ccui.Widget, touchPoint: cc.Point): any
  
      /**
       * Checks a point if in parent's area.
       *
       * @param {cc.Point} pt
       *
       * @returns {Boolean}
       */
      clippingParentAreaContainPoint(pt: cc.Point): boolean
  
      /**
       * Clones a new widget.
       *
       * @returns {ccui.Widget}
       */
      clone(): ccui.Widget
  
      /**
       * A call back function when widget lost of focus.
       */
      didNotSelectSelf(): any
  
      /**
       * Dispatch a EventFocus through a EventDispatcher
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      dispatchFocusEvent(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * When a widget is in a layout, you could call this method to get the next focused widget within a specified direction.
       * If the widget is not in a layout, it will return itself
       *
       * @param {any} direction the direction to look for the next focused widget in a layout
       * @param {any} current the current focused widget
       */
      findNextFocusedWidget(direction: any, current: any): any
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomBoundary(): number
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomInParent(): number
  
      /**
       * Gets callback name of widget
       *
       * @returns v3.3{String|Null}
       */
      getCallbackName(): string | null
  
      /**
       * Gets callback type of widget
       *
       * @returns v3.3{String|null}
       */
      getCallbackType(): string | null
  
      /**
       * no matter what widget object you call this method on , it will return you the exact one focused widget
       */
      getCurrentFocusedWidget(): any
  
      /**
       * Get custom size of ccui.Widget
       *
       * @returns {cc.Size}
       */
      getCustomSize(): cc.Size
  
      /**
       * Returns the "class name" of widget.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Gets layout parameter
       *
       * @param {ccui.LayoutParameter.NONE|ccui.LayoutParameter.LINEAR|ccui.LayoutParameter.RELATIVE} type
       *
       * @returns {ccui.LayoutParameter}
       */
      getLayoutParameter(type: any): ccui.LayoutParameter
  
      /**
       * Gets layout size of ccui.Widget.
       *
       * @returns {cc.Size}
       */
      getLayoutSize(): cc.Size
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftBoundary(): number
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftInParent(): number
  
      /**
       * Gets node by tag
       *
       * @param {Number} tag
       *
       * @returns {cc.Node}
       */
      getNodeByTag(tag: number): cc.Node
  
      /**
       * Returns all children.
       *
       * @returns {Array}
       */
      getNodes(): any[]
  
      /**
       * Gets the percent (x,y) of the widget
       *
       * @returns {cc.Point} The percent (x,y) of the widget in OpenGL coordinates
       */
      getPositionPercent(): cc.Point
  
      /**
       * Gets the position type of the widget
       *
       * @returns {Number} the position type of widget
       */
      getPositionType(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightBoundary(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightInParent(): number
  
      /**
       * Returns size of widget
       *
       * @returns {cc.Size}
       */
      getSize(): cc.Size
  
      /**
       * Returns size percent of ccui.Widget
       *
       * @returns {cc.Point}
       */
      getSizePercent(): cc.Point
  
      /**
       * Gets the size type of widget.
       *
       * @returns {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} that is widget's size type
       */
      getSizeType(): any
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopBoundary(): number
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopInParent(): number
  
      /**
       * Gets the position of touch began event.
       *
       * @returns {cc.Point}
       */
      getTouchBeganPosition(): cc.Point
  
      /**
       * Gets the touch end point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch end point.
       */
      getTouchEndPos(): cc.Point
  
      /**
       * Gets the position of touch end event
       *
       * @returns {cc.Point}
       */
      getTouchEndPosition(): cc.Point
  
      /**
       * Gets the touch move point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch move point.
       */
      getTouchMovePos(): cc.Point
  
      /**
       * Gets the position of touch moved event
       *
       * @returns {cc.Point}
       */
      getTouchMovePosition(): cc.Point
  
      /**
       * Gets the touch began point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch began point.
       */
      getTouchStartPos(): cc.Point
  
      /**
       * Gets the Virtual Renderer of widget.
       *
       * @returns {ccui.Widget}
       */
      getVirtualRenderer(): ccui.Widget
  
      /**
       * Gets the content size of widget. Content size is widget's texture size.
       */
      getVirtualRendererSize(): any
  
      /**
       * The direct parent when it's a widget also, otherwise equals null
       *
       * @returns {ccui.Widget|null}
       */
      getWidgetParent(): ccui.Widget | null
  
      /**
       * get widget type
       *
       * @returns {ccui.Widget.TYPE_WIDGET|ccui.Widget.TYPE_CONTAINER}
       */
      getWidgetType(): any
  
      /**
       * Gets world position of ccui.Widget.
       *
       * @returns {cc.Point} world position of ccui.Widget.
       */
      getWorldPosition(): cc.Point
  
      /**
       * Checks a point if is in widget's space
       *
       * @param {cc.Point} pt
       *
       * @returns {boolean} true if the point is in widget's space, false otherwise.
       */
      hitTest(pt: cc.Point): boolean
  
      /**
       * Ignore the widget size
       *
       * @param {Boolean} ignore true that widget will ignore it's size, use texture size, false otherwise. Default value is true.
       */
      ignoreContentAdaptWithSize(ignore: boolean): any
  
      /**
       * initializes state of widget. please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
       *
       * @returns {boolean}
       */
      init(): boolean
  
      /**
       * Sends the touch event to widget's parent, its subclass will override it, e.g. ccui.ScrollView, ccui.PageView
       *
       * @param {Number} eventType
       * @param {ccui.Widget} sender
       * @param {cc.Touch} touch
       */
      interceptTouchEvent(eventType: number, sender: ccui.Widget, touch: cc.Touch): any
  
      /**
       * Determines if the widget is bright
       *
       * @returns {boolean} true if the widget is bright, false if the widget is dark.
       */
      isBright(): boolean
  
      /**
       * returns whether clipping parent widget contains point.
       *
       * @param {cc.Point} pt location point
       *
       * @returns {Boolean}
       */
      isClippingParentContainsPoint(pt: cc.Point): boolean
  
      /**
       * Determines if the widget is enabled
       *
       * @returns {boolean}
       */
      isEnabled(): boolean
  
      /**
       * Returns the flag which indicates whether the widget is flipped horizontally or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleX(sprite.getScaleX() * -1);
       *
       * @returns {Boolean} true if the widget is flipped horizontally, false otherwise.
       */
      isFlippedX(): boolean
  
      /**
       * Return the flag which indicates whether the widget is flipped vertically or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleY(widget.getScaleY() * -1);
       *
       * @returns {Boolean} true if the widget is flipped vertically, false otherwise.
       */
      isFlippedY(): boolean
  
      /**
       * Determines if the widget is on focused
       *
       * @returns {boolean} whether the widget is focused or not
       */
      isFocused(): boolean
  
      /**
       * returns whether the widget could accept focus.
       *
       * @returns {boolean} true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      isFocusEnabled(): boolean
  
      /**
       * Determines if the widget is highlighted
       *
       * @returns {boolean} true if the widget is highlighted, false if the widget is not highlighted .
       */
      isHighlighted(): boolean
  
      /**
       * Gets whether ignore the content size (custom size)
       *
       * @returns {boolean} true that widget will ignore it's size, use texture size, false otherwise.
       */
      isIgnoreContentAdaptWithSize(): boolean
  
      /**
       * Returns whether enable layout component of a widget
       *
       * @returns {Boolean} true represent the widget use Layout Component, false represent the widget couldn't use Layout Component.
       */
      isLayoutComponentEnabled(): boolean
  
      /**
       * Return whether the widget is propagate touch events to its parents or not
       *
       * @returns v3.2{boolean}
       */
      isPropagateTouchEvents(): boolean
  
      /**
       * Return whether the widget is swallowing touch or not
       *
       * @returns v3.2{boolean}
       */
      isSwallowTouches(): boolean
  
      /**
       * Returns whether or not touch is enabled.
       *
       * @returns {boolean} true if the widget is touch enabled, false if the widget is touch disabled.
       */
      isTouchEnabled(): boolean
  
      /**
       *
       *
       * @returns v3.2{boolean} true represent the widget use Unify Size, false represent the widget couldn't use Unify Size
       */
      isUnifySizeEnabled(): boolean
  
      /**
       * Calls updateSizeAndPosition and its parent's onEnter
       */
      onEnter(): any
  
      /**
       * Calls unscheduleUpdate and its parent's onExit
       */
      onExit(): any
  
      /**
       * This method is called when a focus change event happens
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      onFocusChange(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * The callback of touch began event.
       * If the bounding box of ccui.Widget contains the touch point, it will do the following things:
       * 1. sets highlight state,
       * 2. sends event to parent widget by interceptTouchEvent
       * 3. calls the callback of touch began event.
       * 4. returns true,
       * otherwise returns false directly.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       *
       * @returns {boolean}
       */
      onTouchBegan(touch: cc.Touch, event: cc.Event): boolean
  
      /**
       * A call back function called when widget is selected, and on touch canceled.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchCancelled(touchPoint: cc.Point): any
  
      /**
       * The callback of touch end event
       * It sends event to parent widget by interceptTouchEvent,
       * calls the callback of touch end event (highlight= true) or touch canceled event (highlight= false).
       * sets the highlight state to false ,
       *
       * @param {any} touch
       * @param {any} event
       */
      onTouchEnded(touch: any, event: any): any
  
      /**
       * A call back function called when widget is selected, and on touch long clicked.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchLongClicked(touchPoint: cc.Point): any
  
      /**
       * The callback of touch moved event.
       * It sets the highlight state by touch, sends event to parent widget by interceptTouchEvent and calls the callback of touch moved event.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       */
      onTouchMoved(touch: cc.Touch, event: cc.Event): any
  
      /**
       * Removes all node
       */
      removeAllNodes(): any
  
      /**
       * Removes a node from ccui.Widget
       *
       * @param {cc.Node} node
       * @param {Boolean} cleanup
       */
      removeNode(node: cc.Node, cleanup: boolean): any
  
      /**
       * Removes node by tag
       *
       * @param {Number} tag
       * @param {Boolean} cleanup
       */
      removeNodeByTag(tag: number, cleanup: boolean): any
  
      /**
       * when a widget calls this method, it will get focus immediately.
       */
      requestFocus(): any
  
      /**
       * Sets whether the widget is bright. The default value is true, a widget is default to bright
       *
       * @param {Boolean} bright true if the widget is bright, false if the widget is dark.
       */
      setBright(bright: boolean): any
  
      /**
       * To set the bright style of ccui.Widget.
       *
       * @param {Number} style BRIGHT_NORMAL the widget is normal state, BRIGHT_HIGHLIGHT the widget is height light state.
       */
      setBrightStyle(style: number): any
  
      /**
       * Sets callback name to widget.
       *
       * @param {String} callbackName
       */
      setCallbackName(callbackName: string): any
  
      /**
       * Sets callback type to widget
       *
       * @param {String} callbackType
       */
      setCallbackType(callbackType: string): any
  
      /**
       * Sets _customSize of ccui.Widget, if ignoreSize is true, the content size is its renderer's contentSize, otherwise the content size is parameter.
       * and updates size percent by parent content size. At last, updates its children's size and position.
       *
       * @param {cc.Size|Number} contentSize content size or width of content size
       * @param {Number} height
       */
      setContentSize(contentSize: cc.Size | number, height: number): any
  
      /**
       * Sets whether the widget is enabled
       * true if the widget is enabled, widget may be touched , false if the widget is disabled, widget cannot be touched.
       * The default value is true, a widget is default to enabled
       *
       * @param {Boolean} enabled
       */
      setEnabled(enabled: boolean): any
  
      /**
       * Sets whether the widget should be flipped horizontally or not.
       *
       * @param {Boolean} flipX true if the widget should be flipped horizontally, false otherwise.
       */
      setFlippedX(flipX: boolean): any
  
      /**
       * Sets whether the widget should be flipped vertically or not.
       *
       * @param {Boolean} flipY true if the widget should be flipped vertically, false otherwise.
       */
      setFlippedY(flipY: boolean): any
  
      /**
       * Sets whether the widget is on focused
       * The default value is false, a widget is default to not on focused
       *
       * @param {boolean} focus pass true to let the widget get focus or pass false to let the widget lose focus
       */
      setFocused(focus: boolean): any
  
      /**
       * sets whether the widget could accept focus.
       *
       * @param {Boolean} enable true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      setFocusEnabled(enable: boolean): any
  
      /**
       * Sets whether the widget is highlighted. The default value is false, a widget is default to not highlighted
       *
       * @param {any} highlight true if the widget is highlighted, false if the widget is not highlighted.
       */
      setHighlighted(highlight: any): any
  
      /**
       * Whether enable layout component of a widget
       *
       * @param {Boolean} enable enable layout Component of a widget
       */
      setLayoutComponentEnabled(enable: boolean): any
  
      /**
       * Gets LayoutParameter of widget.
       *
       * @param {ccui.LayoutParameter} parameter
       */
      setLayoutParameter(parameter: ccui.LayoutParameter): any
  
      /**
       * Changes the position (x,y) of the widget .
       * The original point (0,0) is at the left-bottom corner of screen.
       *
       * @param {cc.Point|Number} pos
       * @param {Number} posY
       */
      setPosition(pos: cc.Point | number, posY: number): any
  
      /**
       * Changes the position (x,y) of the widget
       *
       * @param {cc.Point} percent
       */
      setPositionPercent(percent: cc.Point): any
  
      /**
       * Changes the position type of the widget
       *
       * @param {Number} type the position type of widget
       */
      setPositionType(type: number): any
  
      /**
       * Allow widget touch events to propagate to its parents. Set false will disable propagation
       *
       * @param {Boolean} isPropagate
       */
      setPropagateTouchEvents(isPropagate: boolean): any
  
      /**
       * Changes the size that is widget's size
       *
       * @param {cc.Size} size that is widget's size
       */
      setSize(size: cc.Size): any
  
      /**
       * Changes the percent that is widget's percent size
       *
       * @param {cc.Point} percent that is widget's percent size, width and height value from 0 to 1.
       */
      setSizePercent(percent: cc.Point): any
  
      /**
       * TEXTURE_RES_TYPE
       * Changes the size type of widget.
       *
       * @param {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} type that is widget's size type
       */
      setSizeType(type: any): any
  
      /**
       * Specify widget to swallow touches or not
       *
       * @param {Boolean} swallow
       */
      setSwallowTouches(swallow: boolean): any
  
      /**
       * Sets whether the widget is touch enabled. The default value is false, a widget is default to touch disabled
       *
       * @param {Boolean} enable true if the widget is touch enabled, false if the widget is touch disabled.
       */
      setTouchEnabled(enable: boolean): any
  
      /**
       *
       *
       * @param {Boolean} enable enable Unify Size of a widget
       */
      setUnifySizeEnabled(enable: boolean): any
  
      /**
       * updates its size by size type and its position by position type.
       *
       * @param {cc.Size} parentSize parent size
       */
      updateSizeAndPosition(parentSize: cc.Size): any
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    }
  }
  
  declare namespace ccui {
    interface ITextField extends ccui.IWidget {
  
      font: string
  
      fontName: string
  
      fontSize: number
  
      maxLength: number
  
      maxLengthEnabled: boolean
  
      passwordEnabled: boolean
  
      placeHolder: string
  
      string: string
  
      addEventListener(target: object, selector: Function): any
  
      addEventListenerTextField(target: object, selector: Function): any
  
      attachWithIME(): boolean
  
      getAttachWithIME(): boolean
  
      getDeleteBackward(): boolean
  
      getDetachWithIME(): boolean
  
      getFontName(): string
  
      getFontSize(): number
  
      getInsertText(): string
  
      getMaxLength(): number
  
      getPasswordStyleText(): string
  
      getPlaceHolder(): string
  
      getPlaceHolderColor(): cc.Color
  
      getString(): string
  
      getStringLength(): number
  
      getStringValue(): string
  
      getTouchSize(): cc.Size
  
      isMaxLengthEnabled(): boolean
  
      isPasswordEnabled(): boolean
  
      setAttachWithIME(attach: boolean): any
  
      setDeleteBackward(deleteBackward: boolean): any
  
      setDetachWithIME(detach: boolean): any
  
      setFontName(name: string): any
  
      setFontSize(size: number): any
  
      setInsertText(insertText: string): any
  
      setMaxLength(length: number): any
  
      setMaxLengthEnabled(enable: boolean): any
  
      setPasswordEnabled(enable: boolean): any
  
      setPasswordStyleText(styleText: any): any
  
      setPlaceHolder(value: string): any
  
      setPlaceHolderColor(color: any): any
  
      setString(text: string): any
  
      setText(text: string): any
  
      setTextAreaSize(size: cc.Size): any
  
      setTextColor(textColor: any): any
  
      setTextHorizontalAlignment(alignment: any): any
  
      setTextVerticalAlignment(alignment: any): any
  
      setTouchAreaEnabled(enable: any): any
  
      setTouchSize(size: cc.Size): any
    }
  
    interface ITextFieldOverrides {
  
      didNotSelectSelf(): any
  
      getDescription(): string
  
      getVirtualRenderer(): cc.Node
  
      getVirtualRendererSize(): cc.Size
  
      hitTest(pt: cc.Point): boolean
  
      onEnter(): any
  
      onTouchBegan(touchPoint: cc.Point, unusedEvent: any): any
    }
  
  
  
    class TextField implements ITextField, ITextFieldOverrides {
  
      /**
       * allocates and initializes a UITextField.
       * Constructor of ccui.TextField. override it to extend the construction behavior, remember to call "this._super()" in the extended "ctor" function.
       *
       * @param {string} placeholder
       * @param {string} fontName
       * @param {Number} fontSize
       */
      constructor(placeholder: string, fontName: string, fontSize: number)
  
  
  
      /**
       * The attach with IME event flag of ccui.TextField
       */
      static EVENT_ATTACH_WITH_IME: any
  
      /**
       * The delete backward event flag of ccui.TextField
       */
      static EVENT_DELETE_BACKWARD: any
  
      /**
       * The detach with IME event flag of ccui.TextField
       */
      static EVENT_DETACH_WITH_IME: any
  
      /**
       * The insert text event flag of ccui.TextField
       */
      static EVENT_INSERT_TEXT: any
  
      /**
       * The zOrder value of ccui.TextField's renderer.
       */
      static RENDERER_ZORDER: any
  
      /**
       * Creates a ccui.TextField.
       *
       * @param {String} placeholder
       * @param {String} fontName
       * @param {Number} fontSize
       *
       * @returns {ccui.TextField}
       */
      static create(placeholder: string, fontName: string, fontSize: number): ccui.TextField
  
  
      /**
       * detach with IME
       */
      didNotSelectSelf(): any
  
      /**
       * Returns the "class name" of ccui.TextField.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Returns the renderer of ccui.TextField.
       *
       * @returns {cc.Node}
       */
      getVirtualRenderer(): cc.Node
  
      /**
       * Returns the ccui.TextField's content size.
       *
       * @returns {cc.Size}
       */
      getVirtualRendererSize(): cc.Size
  
      /**
       * Checks a point if is in ccui.TextField's space
       *
       * @param {cc.Point} pt
       *
       * @returns {boolean}
       */
      hitTest(pt: cc.Point): boolean
  
      /**
       * Calls parent class' onEnter and schedules update function.
       */
      onEnter(): any
  
      /**
       * The touch began event callback handler.
       *
       * @param {cc.Point} touchPoint
       * @param {any} unusedEvent
       */
      onTouchBegan(touchPoint: cc.Point, unusedEvent: any): any
  
  
      /**
       * - The text field font with a style string: e.g. "18px Verdana"
       */
      font: string
  
      /**
       * - The text field font name
       */
      fontName: string
  
      /**
       * - The text field font size
       */
      fontSize: number
  
      /**
       * - The max length of the text field
       */
      maxLength: number
  
      /**
       * - Indicate whether max length limit is enabled
       */
      maxLengthEnabled: boolean
  
      /**
       * - Indicate whether the text field is for entering password
       */
      passwordEnabled: boolean
  
      /**
       * - The place holder of the text field
       */
      placeHolder: string
  
      /**
       * - The content string of the label
       */
      string: string
  
      /**
       * Adds event listener callback.
       *
       * @param {Object} target
       * @param {Function} selector
       */
      addEventListener(target: object, selector: Function): any
  
      /**
       * Adds event listener to cuci.TextField.
       *
       * @param {Object} target
       * @param {Function} selector
       */
      addEventListenerTextField(target: object, selector: Function): any
  
      /**
       * Open keyboard and receive input text.
       *
       * @returns {Boolean}
       */
      attachWithIME(): boolean
  
      /**
       * Returns whether attach with IME.
       *
       * @returns {Boolean}
       */
      getAttachWithIME(): boolean
  
      /**
       * Returns the delete backward of ccui.TextField.
       *
       * @returns {Boolean}
       */
      getDeleteBackward(): boolean
  
      /**
       * Returns whether detach with IME.
       *
       * @returns {Boolean}
       */
      getDetachWithIME(): boolean
  
      /**
       * Returns font name of ccui.TextField.
       *
       * @returns {String} font name
       */
      getFontName(): string
  
      /**
       * Gets font size of ccui.TextField.
       *
       * @returns {Number} size
       */
      getFontSize(): number
  
      /**
       * Returns insertText string of ccui.TextField.
       *
       * @returns {String}
       */
      getInsertText(): string
  
      /**
       * Returns the max length of ccui.TextField.
       *
       * @returns {number} length
       */
      getMaxLength(): number
  
      /**
       * Returns the password style character.
       *
       * @returns {String}
       */
      getPasswordStyleText(): string
  
      /**
       * Returns the placeholder string.
       *
       * @returns {String}
       */
      getPlaceHolder(): string
  
      /**
       * Returns the color of ccui.TextField's place holder.
       *
       * @returns {cc.Color}
       */
      getPlaceHolderColor(): cc.Color
  
      /**
       * Returns string value of ccui.TextField.
       *
       * @returns {String}
       */
      getString(): string
  
      /**
       * Returns the length of ccui.TextField.
       *
       * @returns {Number}
       */
      getStringLength(): number
  
      /**
       * Returns textField string value
       *
       * @returns {String}
       */
      getStringValue(): string
  
      /**
       * Returns touch size of ccui.TextField.
       *
       * @returns {cc.Size}
       */
      getTouchSize(): cc.Size
  
      /**
       * Returns Whether to open string length limit.
       *
       * @returns {Boolean}
       */
      isMaxLengthEnabled(): boolean
  
      /**
       * Returns whether to open setting string as password character.
       *
       * @returns {Boolean}
       */
      isPasswordEnabled(): boolean
  
      /**
       * Sets attach with IME.
       *
       * @param {Boolean} attach
       */
      setAttachWithIME(attach: boolean): any
  
      /**
       * Sets the delete backward of ccui.TextField.
       *
       * @param {Boolean} deleteBackward
       */
      setDeleteBackward(deleteBackward: boolean): any
  
      /**
       * Sets detach with IME.
       *
       * @param {Boolean} detach
       */
      setDetachWithIME(detach: boolean): any
  
      /**
       * Sets font name for ccui.TextField
       *
       * @param {String} name
       */
      setFontName(name: string): any
  
      /**
       * Sets font size for ccui.TextField.
       *
       * @param {Number} size
       */
      setFontSize(size: number): any
  
      /**
       * Sets insertText string to ccui.TextField.
       *
       * @param {String} insertText
       */
      setInsertText(insertText: string): any
  
      /**
       * Sets the max length of ccui.TextField. Only when you turn on the string length limit, it is valid.
       *
       * @param {number} length
       */
      setMaxLength(length: number): any
  
      /**
       * Sets Whether to open string length limit for ccui.TextField.
       *
       * @param {Boolean} enable
       */
      setMaxLengthEnabled(enable: boolean): any
  
      /**
       * Sets whether to open setting string as password character.
       *
       * @param {Boolean} enable
       */
      setPasswordEnabled(enable: boolean): any
  
      /**
       * Sets the password style character, Only when you turn on setting string as password character, it is valid.
       *
       * @param {any} styleText
       */
      setPasswordStyleText(styleText: any): any
  
      /**
       * Sets the placeholder string.
       * display this string if string equal "".
       *
       * @param {String} value
       */
      setPlaceHolder(value: string): any
  
      /**
       * Sets the place holder color to ccui.TextField.
       *
       * @param {any} color
       */
      setPlaceHolderColor(color: any): any
  
      /**
       * Changes the string value of textField.
       *
       * @param {String} text
       */
      setString(text: string): any
  
      /**
       * Changes the string value of textField.
       *
       * @param {String} text
       */
      setText(text: string): any
  
      /**
       * Sets the text area size to ccui.TextField.
       *
       * @param {cc.Size} size
       */
      setTextAreaSize(size: cc.Size): any
  
      /**
       * Sets the text color to ccui.TextField
       *
       * @param {any} textColor
       */
      setTextColor(textColor: any): any
  
      /**
       * Sets the text horizontal alignment of ccui.TextField.
       *
       * @param {any} alignment
       */
      setTextHorizontalAlignment(alignment: any): any
  
      /**
       * Sets the text vertical alignment of ccui.TextField.
       *
       * @param {any} alignment
       */
      setTextVerticalAlignment(alignment: any): any
  
      /**
       * Sets whether use touch area.
       *
       * @param {any} enable
       */
      setTouchAreaEnabled(enable: any): any
  
      /**
       * Sets touch size of ccui.TextField.
       *
       * @param {cc.Size} size
       */
      setTouchSize(size: cc.Size): any
  
  
      /**
       * - The action tag of the widget
       */
      actionTag: number
  
      /**
       * - Indicate whether the widget is bright
       */
      bright: boolean
  
      /**
       * - Indicate whether the widget is enabled
       */
      enabled: boolean
  
      /**
       * - Indicate whether the widget is focused
       */
      focused: boolean
  
      /**
       * - Height in percentage of parent height
       */
      heightPercent: number
  
      /**
       * - The name of the widget
       */
      name: string
  
      /**
       * When a widget lose/get focus, this method will be called. Be Caution when you provide your own version,
       * you must call widget.setFocused(true/false) to change the focus state of the current focused widget;
       */
      onFocusChanged: any
  
      /**
       * use this function to manually specify the next focused widget regards to each direction
       */
      onNextFocusedWidget: any
  
      /**
       * - The size type of the widget
       */
      sizeType: any
  
      /**
       * - Indicate whether touch events are enabled
       */
      touchEnabled: boolean
  
      /**
       * - Indicate whether the update function is scheduled
       */
      updateEnabled: boolean
  
      /**
       * - <@readonly> The direct parent when it's a widget also, otherwise equals null
       */
      widgetParent: ccui.Widget
  
      /**
       * - <@readonly> The type of the widget
       */
      widgetType: any
  
      /**
       * - Width in percentage of parent width
       */
      widthPercent: number
  
      /**
       * - Position x in percentage of width
       */
      xPercent: number
  
      /**
       * - Position y in percentage of height
       */
      yPercent: number
  
      /**
       * Set a event handler to the widget in order to use cocostudio editor and framework
       *
       * @param {function} callback
       */
      addCCSEventListener(callback: Function): any
  
      /**
       * Adds a node for widget (this function is deleted in -x)
       *
       * @param {cc.Node} node
       * @param {Number} zOrder
       * @param {Number} tag
       */
      addNode(node: cc.Node, zOrder: number, tag: number): any
  
      /**
       * Sets the touch event target/selector of the ccui.Widget
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addTouchEventListener(selector: Function, target: object): any
  
      /**
       * Calls the checkChildInfo of widget's parent, its subclass will override it.
       *
       * @param {number} handleState
       * @param {ccui.Widget} sender
       * @param {cc.Point} touchPoint
       */
      checkChildInfo(handleState: number, sender: ccui.Widget, touchPoint: cc.Point): any
  
      /**
       * Checks a point if in parent's area.
       *
       * @param {cc.Point} pt
       *
       * @returns {Boolean}
       */
      clippingParentAreaContainPoint(pt: cc.Point): boolean
  
      /**
       * Clones a new widget.
       *
       * @returns {ccui.Widget}
       */
      clone(): ccui.Widget
  
      /**
       * A call back function when widget lost of focus.
       */
      didNotSelectSelf(): any
  
      /**
       * Dispatch a EventFocus through a EventDispatcher
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      dispatchFocusEvent(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * When a widget is in a layout, you could call this method to get the next focused widget within a specified direction.
       * If the widget is not in a layout, it will return itself
       *
       * @param {any} direction the direction to look for the next focused widget in a layout
       * @param {any} current the current focused widget
       */
      findNextFocusedWidget(direction: any, current: any): any
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomBoundary(): number
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomInParent(): number
  
      /**
       * Gets callback name of widget
       *
       * @returns v3.3{String|Null}
       */
      getCallbackName(): string | null
  
      /**
       * Gets callback type of widget
       *
       * @returns v3.3{String|null}
       */
      getCallbackType(): string | null
  
      /**
       * no matter what widget object you call this method on , it will return you the exact one focused widget
       */
      getCurrentFocusedWidget(): any
  
      /**
       * Get custom size of ccui.Widget
       *
       * @returns {cc.Size}
       */
      getCustomSize(): cc.Size
  
      /**
       * Returns the "class name" of widget.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Gets layout parameter
       *
       * @param {ccui.LayoutParameter.NONE|ccui.LayoutParameter.LINEAR|ccui.LayoutParameter.RELATIVE} type
       *
       * @returns {ccui.LayoutParameter}
       */
      getLayoutParameter(type: any): ccui.LayoutParameter
  
      /**
       * Gets layout size of ccui.Widget.
       *
       * @returns {cc.Size}
       */
      getLayoutSize(): cc.Size
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftBoundary(): number
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftInParent(): number
  
      /**
       * Gets node by tag
       *
       * @param {Number} tag
       *
       * @returns {cc.Node}
       */
      getNodeByTag(tag: number): cc.Node
  
      /**
       * Returns all children.
       *
       * @returns {Array}
       */
      getNodes(): any[]
  
      /**
       * Gets the percent (x,y) of the widget
       *
       * @returns {cc.Point} The percent (x,y) of the widget in OpenGL coordinates
       */
      getPositionPercent(): cc.Point
  
      /**
       * Gets the position type of the widget
       *
       * @returns {Number} the position type of widget
       */
      getPositionType(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightBoundary(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightInParent(): number
  
      /**
       * Returns size of widget
       *
       * @returns {cc.Size}
       */
      getSize(): cc.Size
  
      /**
       * Returns size percent of ccui.Widget
       *
       * @returns {cc.Point}
       */
      getSizePercent(): cc.Point
  
      /**
       * Gets the size type of widget.
       *
       * @returns {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} that is widget's size type
       */
      getSizeType(): any
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopBoundary(): number
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopInParent(): number
  
      /**
       * Gets the position of touch began event.
       *
       * @returns {cc.Point}
       */
      getTouchBeganPosition(): cc.Point
  
      /**
       * Gets the touch end point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch end point.
       */
      getTouchEndPos(): cc.Point
  
      /**
       * Gets the position of touch end event
       *
       * @returns {cc.Point}
       */
      getTouchEndPosition(): cc.Point
  
      /**
       * Gets the touch move point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch move point.
       */
      getTouchMovePos(): cc.Point
  
      /**
       * Gets the position of touch moved event
       *
       * @returns {cc.Point}
       */
      getTouchMovePosition(): cc.Point
  
      /**
       * Gets the touch began point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch began point.
       */
      getTouchStartPos(): cc.Point
  
      /**
       * Gets the Virtual Renderer of widget.
       *
       * @returns {ccui.Widget}
       */
      getVirtualRenderer(): ccui.Widget
  
      /**
       * Gets the content size of widget. Content size is widget's texture size.
       */
      getVirtualRendererSize(): any
  
      /**
       * The direct parent when it's a widget also, otherwise equals null
       *
       * @returns {ccui.Widget|null}
       */
      getWidgetParent(): ccui.Widget | null
  
      /**
       * get widget type
       *
       * @returns {ccui.Widget.TYPE_WIDGET|ccui.Widget.TYPE_CONTAINER}
       */
      getWidgetType(): any
  
      /**
       * Gets world position of ccui.Widget.
       *
       * @returns {cc.Point} world position of ccui.Widget.
       */
      getWorldPosition(): cc.Point
  
      /**
       * Checks a point if is in widget's space
       *
       * @param {cc.Point} pt
       *
       * @returns {boolean} true if the point is in widget's space, false otherwise.
       */
      hitTest(pt: cc.Point): boolean
  
      /**
       * Ignore the widget size
       *
       * @param {Boolean} ignore true that widget will ignore it's size, use texture size, false otherwise. Default value is true.
       */
      ignoreContentAdaptWithSize(ignore: boolean): any
  
      /**
       * initializes state of widget. please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
       *
       * @returns {boolean}
       */
      init(): boolean
  
      /**
       * Sends the touch event to widget's parent, its subclass will override it, e.g. ccui.ScrollView, ccui.PageView
       *
       * @param {Number} eventType
       * @param {ccui.Widget} sender
       * @param {cc.Touch} touch
       */
      interceptTouchEvent(eventType: number, sender: ccui.Widget, touch: cc.Touch): any
  
      /**
       * Determines if the widget is bright
       *
       * @returns {boolean} true if the widget is bright, false if the widget is dark.
       */
      isBright(): boolean
  
      /**
       * returns whether clipping parent widget contains point.
       *
       * @param {cc.Point} pt location point
       *
       * @returns {Boolean}
       */
      isClippingParentContainsPoint(pt: cc.Point): boolean
  
      /**
       * Determines if the widget is enabled
       *
       * @returns {boolean}
       */
      isEnabled(): boolean
  
      /**
       * Returns the flag which indicates whether the widget is flipped horizontally or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleX(sprite.getScaleX() * -1);
       *
       * @returns {Boolean} true if the widget is flipped horizontally, false otherwise.
       */
      isFlippedX(): boolean
  
      /**
       * Return the flag which indicates whether the widget is flipped vertically or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleY(widget.getScaleY() * -1);
       *
       * @returns {Boolean} true if the widget is flipped vertically, false otherwise.
       */
      isFlippedY(): boolean
  
      /**
       * Determines if the widget is on focused
       *
       * @returns {boolean} whether the widget is focused or not
       */
      isFocused(): boolean
  
      /**
       * returns whether the widget could accept focus.
       *
       * @returns {boolean} true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      isFocusEnabled(): boolean
  
      /**
       * Determines if the widget is highlighted
       *
       * @returns {boolean} true if the widget is highlighted, false if the widget is not highlighted .
       */
      isHighlighted(): boolean
  
      /**
       * Gets whether ignore the content size (custom size)
       *
       * @returns {boolean} true that widget will ignore it's size, use texture size, false otherwise.
       */
      isIgnoreContentAdaptWithSize(): boolean
  
      /**
       * Returns whether enable layout component of a widget
       *
       * @returns {Boolean} true represent the widget use Layout Component, false represent the widget couldn't use Layout Component.
       */
      isLayoutComponentEnabled(): boolean
  
      /**
       * Return whether the widget is propagate touch events to its parents or not
       *
       * @returns v3.2{boolean}
       */
      isPropagateTouchEvents(): boolean
  
      /**
       * Return whether the widget is swallowing touch or not
       *
       * @returns v3.2{boolean}
       */
      isSwallowTouches(): boolean
  
      /**
       * Returns whether or not touch is enabled.
       *
       * @returns {boolean} true if the widget is touch enabled, false if the widget is touch disabled.
       */
      isTouchEnabled(): boolean
  
      /**
       *
       *
       * @returns v3.2{boolean} true represent the widget use Unify Size, false represent the widget couldn't use Unify Size
       */
      isUnifySizeEnabled(): boolean
  
      /**
       * Calls updateSizeAndPosition and its parent's onEnter
       */
      onEnter(): any
  
      /**
       * Calls unscheduleUpdate and its parent's onExit
       */
      onExit(): any
  
      /**
       * This method is called when a focus change event happens
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      onFocusChange(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * The callback of touch began event.
       * If the bounding box of ccui.Widget contains the touch point, it will do the following things:
       * 1. sets highlight state,
       * 2. sends event to parent widget by interceptTouchEvent
       * 3. calls the callback of touch began event.
       * 4. returns true,
       * otherwise returns false directly.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       *
       * @returns {boolean}
       */
      onTouchBegan(touch: cc.Touch, event: cc.Event): boolean
  
      /**
       * A call back function called when widget is selected, and on touch canceled.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchCancelled(touchPoint: cc.Point): any
  
      /**
       * The callback of touch end event
       * It sends event to parent widget by interceptTouchEvent,
       * calls the callback of touch end event (highlight= true) or touch canceled event (highlight= false).
       * sets the highlight state to false ,
       *
       * @param {any} touch
       * @param {any} event
       */
      onTouchEnded(touch: any, event: any): any
  
      /**
       * A call back function called when widget is selected, and on touch long clicked.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchLongClicked(touchPoint: cc.Point): any
  
      /**
       * The callback of touch moved event.
       * It sets the highlight state by touch, sends event to parent widget by interceptTouchEvent and calls the callback of touch moved event.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       */
      onTouchMoved(touch: cc.Touch, event: cc.Event): any
  
      /**
       * Removes all node
       */
      removeAllNodes(): any
  
      /**
       * Removes a node from ccui.Widget
       *
       * @param {cc.Node} node
       * @param {Boolean} cleanup
       */
      removeNode(node: cc.Node, cleanup: boolean): any
  
      /**
       * Removes node by tag
       *
       * @param {Number} tag
       * @param {Boolean} cleanup
       */
      removeNodeByTag(tag: number, cleanup: boolean): any
  
      /**
       * when a widget calls this method, it will get focus immediately.
       */
      requestFocus(): any
  
      /**
       * Sets whether the widget is bright. The default value is true, a widget is default to bright
       *
       * @param {Boolean} bright true if the widget is bright, false if the widget is dark.
       */
      setBright(bright: boolean): any
  
      /**
       * To set the bright style of ccui.Widget.
       *
       * @param {Number} style BRIGHT_NORMAL the widget is normal state, BRIGHT_HIGHLIGHT the widget is height light state.
       */
      setBrightStyle(style: number): any
  
      /**
       * Sets callback name to widget.
       *
       * @param {String} callbackName
       */
      setCallbackName(callbackName: string): any
  
      /**
       * Sets callback type to widget
       *
       * @param {String} callbackType
       */
      setCallbackType(callbackType: string): any
  
      /**
       * Sets _customSize of ccui.Widget, if ignoreSize is true, the content size is its renderer's contentSize, otherwise the content size is parameter.
       * and updates size percent by parent content size. At last, updates its children's size and position.
       *
       * @param {cc.Size|Number} contentSize content size or width of content size
       * @param {Number} height
       */
      setContentSize(contentSize: cc.Size | number, height: number): any
  
      /**
       * Sets whether the widget is enabled
       * true if the widget is enabled, widget may be touched , false if the widget is disabled, widget cannot be touched.
       * The default value is true, a widget is default to enabled
       *
       * @param {Boolean} enabled
       */
      setEnabled(enabled: boolean): any
  
      /**
       * Sets whether the widget should be flipped horizontally or not.
       *
       * @param {Boolean} flipX true if the widget should be flipped horizontally, false otherwise.
       */
      setFlippedX(flipX: boolean): any
  
      /**
       * Sets whether the widget should be flipped vertically or not.
       *
       * @param {Boolean} flipY true if the widget should be flipped vertically, false otherwise.
       */
      setFlippedY(flipY: boolean): any
  
      /**
       * Sets whether the widget is on focused
       * The default value is false, a widget is default to not on focused
       *
       * @param {boolean} focus pass true to let the widget get focus or pass false to let the widget lose focus
       */
      setFocused(focus: boolean): any
  
      /**
       * sets whether the widget could accept focus.
       *
       * @param {Boolean} enable true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      setFocusEnabled(enable: boolean): any
  
      /**
       * Sets whether the widget is highlighted. The default value is false, a widget is default to not highlighted
       *
       * @param {any} highlight true if the widget is highlighted, false if the widget is not highlighted.
       */
      setHighlighted(highlight: any): any
  
      /**
       * Whether enable layout component of a widget
       *
       * @param {Boolean} enable enable layout Component of a widget
       */
      setLayoutComponentEnabled(enable: boolean): any
  
      /**
       * Gets LayoutParameter of widget.
       *
       * @param {ccui.LayoutParameter} parameter
       */
      setLayoutParameter(parameter: ccui.LayoutParameter): any
  
      /**
       * Changes the position (x,y) of the widget .
       * The original point (0,0) is at the left-bottom corner of screen.
       *
       * @param {cc.Point|Number} pos
       * @param {Number} posY
       */
      setPosition(pos: cc.Point | number, posY: number): any
  
      /**
       * Changes the position (x,y) of the widget
       *
       * @param {cc.Point} percent
       */
      setPositionPercent(percent: cc.Point): any
  
      /**
       * Changes the position type of the widget
       *
       * @param {Number} type the position type of widget
       */
      setPositionType(type: number): any
  
      /**
       * Allow widget touch events to propagate to its parents. Set false will disable propagation
       *
       * @param {Boolean} isPropagate
       */
      setPropagateTouchEvents(isPropagate: boolean): any
  
      /**
       * Changes the size that is widget's size
       *
       * @param {cc.Size} size that is widget's size
       */
      setSize(size: cc.Size): any
  
      /**
       * Changes the percent that is widget's percent size
       *
       * @param {cc.Point} percent that is widget's percent size, width and height value from 0 to 1.
       */
      setSizePercent(percent: cc.Point): any
  
      /**
       * TEXTURE_RES_TYPE
       * Changes the size type of widget.
       *
       * @param {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} type that is widget's size type
       */
      setSizeType(type: any): any
  
      /**
       * Specify widget to swallow touches or not
       *
       * @param {Boolean} swallow
       */
      setSwallowTouches(swallow: boolean): any
  
      /**
       * Sets whether the widget is touch enabled. The default value is false, a widget is default to touch disabled
       *
       * @param {Boolean} enable true if the widget is touch enabled, false if the widget is touch disabled.
       */
      setTouchEnabled(enable: boolean): any
  
      /**
       *
       *
       * @param {Boolean} enable enable Unify Size of a widget
       */
      setUnifySizeEnabled(enable: boolean): any
  
      /**
       * updates its size by size type and its position by position type.
       *
       * @param {cc.Size} parentSize parent size
       */
      updateSizeAndPosition(parentSize: cc.Size): any
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    }
  }
  
  declare namespace ccui {
    interface IVideoPlayer extends ccui.IWidget {
  
      path: string
  
      getURL(): string
  
      isFullScreenEnabled(): any
  
      isPlaying(): boolean
  
      onPlayEvent(): any
  
      pause(): any
  
      play(): any
  
      removeEventListener(event: any): any
  
      resume(): any
  
      seekTo(sec: number): any
  
      setEventListener(event: any, callback: Function): any
  
      setFullScreenEnabled(enable: boolean): any
  
      setKeepAspectRatioEnabled(enable: any): any
  
      setURL(address: string): any
  
      stop(): any
    }
  
    interface IVideoPlayerOverrides {
  
    }
  
  
  
    class VideoPlayer implements IVideoPlayer, IVideoPlayerOverrides {
  
      /**
       *
       */
      constructor()
  
  
      /**
       * The VideoPlayer support list of events
       */
      static EventType: any
  
  
  
  
  
  
      /**
       * - The video path
       */
      path: string
  
      /**
       * Get the video path
       *
       * @returns {String}
       */
      getURL(): string
  
      /**
       * Determine whether already full screen
       */
      isFullScreenEnabled(): any
  
      /**
       * Whether the video is playing
       *
       * @returns {boolean}
       */
      isPlaying(): boolean
  
      /**
       * Trigger playing events
       */
      onPlayEvent(): any
  
      /**
       * Pause the video
       */
      pause(): any
  
      /**
       * Play the video
       */
      play(): any
  
      /**
       * Delete events
       *
       * @param {ccui.VideoPlayer.EventType} event
       */
      removeEventListener(event: any): any
  
      /**
       * Resume the video
       */
      resume(): any
  
      /**
       * Jump to the specified point in time
       *
       * @param {Number} sec
       */
      seekTo(sec: number): any
  
      /**
       * The binding event
       *
       * @param {ccui.VideoPlayer.EventType} event
       * @param {Function} callback
       */
      setEventListener(event: any, callback: Function): any
  
      /**
       * Set whether the full screen
       * May appear inconsistent in different browsers
       *
       * @param {boolean} enable
       */
      setFullScreenEnabled(enable: boolean): any
  
      /**
       * Whether to keep the aspect ratio
       *
       * @param {any} enable
       */
      setKeepAspectRatioEnabled(enable: any): any
  
      /**
       * Set the video address
       * Automatically replace extname
       * All supported video formats will be added to the video
       *
       * @param {String} address
       */
      setURL(address: string): any
  
      /**
       * Stop the video
       */
      stop(): any
  
  
      /**
       * - The action tag of the widget
       */
      actionTag: number
  
      /**
       * - Indicate whether the widget is bright
       */
      bright: boolean
  
      /**
       * - Indicate whether the widget is enabled
       */
      enabled: boolean
  
      /**
       * - Indicate whether the widget is focused
       */
      focused: boolean
  
      /**
       * - Height in percentage of parent height
       */
      heightPercent: number
  
      /**
       * - The name of the widget
       */
      name: string
  
      /**
       * When a widget lose/get focus, this method will be called. Be Caution when you provide your own version,
       * you must call widget.setFocused(true/false) to change the focus state of the current focused widget;
       */
      onFocusChanged: any
  
      /**
       * use this function to manually specify the next focused widget regards to each direction
       */
      onNextFocusedWidget: any
  
      /**
       * - The size type of the widget
       */
      sizeType: any
  
      /**
       * - Indicate whether touch events are enabled
       */
      touchEnabled: boolean
  
      /**
       * - Indicate whether the update function is scheduled
       */
      updateEnabled: boolean
  
      /**
       * - <@readonly> The direct parent when it's a widget also, otherwise equals null
       */
      widgetParent: ccui.Widget
  
      /**
       * - <@readonly> The type of the widget
       */
      widgetType: any
  
      /**
       * - Width in percentage of parent width
       */
      widthPercent: number
  
      /**
       * - Position x in percentage of width
       */
      xPercent: number
  
      /**
       * - Position y in percentage of height
       */
      yPercent: number
  
      /**
       * Set a event handler to the widget in order to use cocostudio editor and framework
       *
       * @param {function} callback
       */
      addCCSEventListener(callback: Function): any
  
      /**
       * Adds a node for widget (this function is deleted in -x)
       *
       * @param {cc.Node} node
       * @param {Number} zOrder
       * @param {Number} tag
       */
      addNode(node: cc.Node, zOrder: number, tag: number): any
  
      /**
       * Sets the touch event target/selector of the ccui.Widget
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addTouchEventListener(selector: Function, target: object): any
  
      /**
       * Calls the checkChildInfo of widget's parent, its subclass will override it.
       *
       * @param {number} handleState
       * @param {ccui.Widget} sender
       * @param {cc.Point} touchPoint
       */
      checkChildInfo(handleState: number, sender: ccui.Widget, touchPoint: cc.Point): any
  
      /**
       * Checks a point if in parent's area.
       *
       * @param {cc.Point} pt
       *
       * @returns {Boolean}
       */
      clippingParentAreaContainPoint(pt: cc.Point): boolean
  
      /**
       * Clones a new widget.
       *
       * @returns {ccui.Widget}
       */
      clone(): ccui.Widget
  
      /**
       * A call back function when widget lost of focus.
       */
      didNotSelectSelf(): any
  
      /**
       * Dispatch a EventFocus through a EventDispatcher
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      dispatchFocusEvent(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * When a widget is in a layout, you could call this method to get the next focused widget within a specified direction.
       * If the widget is not in a layout, it will return itself
       *
       * @param {any} direction the direction to look for the next focused widget in a layout
       * @param {any} current the current focused widget
       */
      findNextFocusedWidget(direction: any, current: any): any
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomBoundary(): number
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomInParent(): number
  
      /**
       * Gets callback name of widget
       *
       * @returns v3.3{String|Null}
       */
      getCallbackName(): string | null
  
      /**
       * Gets callback type of widget
       *
       * @returns v3.3{String|null}
       */
      getCallbackType(): string | null
  
      /**
       * no matter what widget object you call this method on , it will return you the exact one focused widget
       */
      getCurrentFocusedWidget(): any
  
      /**
       * Get custom size of ccui.Widget
       *
       * @returns {cc.Size}
       */
      getCustomSize(): cc.Size
  
      /**
       * Returns the "class name" of widget.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Gets layout parameter
       *
       * @param {ccui.LayoutParameter.NONE|ccui.LayoutParameter.LINEAR|ccui.LayoutParameter.RELATIVE} type
       *
       * @returns {ccui.LayoutParameter}
       */
      getLayoutParameter(type: any): ccui.LayoutParameter
  
      /**
       * Gets layout size of ccui.Widget.
       *
       * @returns {cc.Size}
       */
      getLayoutSize(): cc.Size
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftBoundary(): number
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftInParent(): number
  
      /**
       * Gets node by tag
       *
       * @param {Number} tag
       *
       * @returns {cc.Node}
       */
      getNodeByTag(tag: number): cc.Node
  
      /**
       * Returns all children.
       *
       * @returns {Array}
       */
      getNodes(): any[]
  
      /**
       * Gets the percent (x,y) of the widget
       *
       * @returns {cc.Point} The percent (x,y) of the widget in OpenGL coordinates
       */
      getPositionPercent(): cc.Point
  
      /**
       * Gets the position type of the widget
       *
       * @returns {Number} the position type of widget
       */
      getPositionType(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightBoundary(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightInParent(): number
  
      /**
       * Returns size of widget
       *
       * @returns {cc.Size}
       */
      getSize(): cc.Size
  
      /**
       * Returns size percent of ccui.Widget
       *
       * @returns {cc.Point}
       */
      getSizePercent(): cc.Point
  
      /**
       * Gets the size type of widget.
       *
       * @returns {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} that is widget's size type
       */
      getSizeType(): any
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopBoundary(): number
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopInParent(): number
  
      /**
       * Gets the position of touch began event.
       *
       * @returns {cc.Point}
       */
      getTouchBeganPosition(): cc.Point
  
      /**
       * Gets the touch end point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch end point.
       */
      getTouchEndPos(): cc.Point
  
      /**
       * Gets the position of touch end event
       *
       * @returns {cc.Point}
       */
      getTouchEndPosition(): cc.Point
  
      /**
       * Gets the touch move point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch move point.
       */
      getTouchMovePos(): cc.Point
  
      /**
       * Gets the position of touch moved event
       *
       * @returns {cc.Point}
       */
      getTouchMovePosition(): cc.Point
  
      /**
       * Gets the touch began point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch began point.
       */
      getTouchStartPos(): cc.Point
  
      /**
       * Gets the Virtual Renderer of widget.
       *
       * @returns {ccui.Widget}
       */
      getVirtualRenderer(): ccui.Widget
  
      /**
       * Gets the content size of widget. Content size is widget's texture size.
       */
      getVirtualRendererSize(): any
  
      /**
       * The direct parent when it's a widget also, otherwise equals null
       *
       * @returns {ccui.Widget|null}
       */
      getWidgetParent(): ccui.Widget | null
  
      /**
       * get widget type
       *
       * @returns {ccui.Widget.TYPE_WIDGET|ccui.Widget.TYPE_CONTAINER}
       */
      getWidgetType(): any
  
      /**
       * Gets world position of ccui.Widget.
       *
       * @returns {cc.Point} world position of ccui.Widget.
       */
      getWorldPosition(): cc.Point
  
      /**
       * Checks a point if is in widget's space
       *
       * @param {cc.Point} pt
       *
       * @returns {boolean} true if the point is in widget's space, false otherwise.
       */
      hitTest(pt: cc.Point): boolean
  
      /**
       * Ignore the widget size
       *
       * @param {Boolean} ignore true that widget will ignore it's size, use texture size, false otherwise. Default value is true.
       */
      ignoreContentAdaptWithSize(ignore: boolean): any
  
      /**
       * initializes state of widget. please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
       *
       * @returns {boolean}
       */
      init(): boolean
  
      /**
       * Sends the touch event to widget's parent, its subclass will override it, e.g. ccui.ScrollView, ccui.PageView
       *
       * @param {Number} eventType
       * @param {ccui.Widget} sender
       * @param {cc.Touch} touch
       */
      interceptTouchEvent(eventType: number, sender: ccui.Widget, touch: cc.Touch): any
  
      /**
       * Determines if the widget is bright
       *
       * @returns {boolean} true if the widget is bright, false if the widget is dark.
       */
      isBright(): boolean
  
      /**
       * returns whether clipping parent widget contains point.
       *
       * @param {cc.Point} pt location point
       *
       * @returns {Boolean}
       */
      isClippingParentContainsPoint(pt: cc.Point): boolean
  
      /**
       * Determines if the widget is enabled
       *
       * @returns {boolean}
       */
      isEnabled(): boolean
  
      /**
       * Returns the flag which indicates whether the widget is flipped horizontally or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleX(sprite.getScaleX() * -1);
       *
       * @returns {Boolean} true if the widget is flipped horizontally, false otherwise.
       */
      isFlippedX(): boolean
  
      /**
       * Return the flag which indicates whether the widget is flipped vertically or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleY(widget.getScaleY() * -1);
       *
       * @returns {Boolean} true if the widget is flipped vertically, false otherwise.
       */
      isFlippedY(): boolean
  
      /**
       * Determines if the widget is on focused
       *
       * @returns {boolean} whether the widget is focused or not
       */
      isFocused(): boolean
  
      /**
       * returns whether the widget could accept focus.
       *
       * @returns {boolean} true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      isFocusEnabled(): boolean
  
      /**
       * Determines if the widget is highlighted
       *
       * @returns {boolean} true if the widget is highlighted, false if the widget is not highlighted .
       */
      isHighlighted(): boolean
  
      /**
       * Gets whether ignore the content size (custom size)
       *
       * @returns {boolean} true that widget will ignore it's size, use texture size, false otherwise.
       */
      isIgnoreContentAdaptWithSize(): boolean
  
      /**
       * Returns whether enable layout component of a widget
       *
       * @returns {Boolean} true represent the widget use Layout Component, false represent the widget couldn't use Layout Component.
       */
      isLayoutComponentEnabled(): boolean
  
      /**
       * Return whether the widget is propagate touch events to its parents or not
       *
       * @returns v3.2{boolean}
       */
      isPropagateTouchEvents(): boolean
  
      /**
       * Return whether the widget is swallowing touch or not
       *
       * @returns v3.2{boolean}
       */
      isSwallowTouches(): boolean
  
      /**
       * Returns whether or not touch is enabled.
       *
       * @returns {boolean} true if the widget is touch enabled, false if the widget is touch disabled.
       */
      isTouchEnabled(): boolean
  
      /**
       *
       *
       * @returns v3.2{boolean} true represent the widget use Unify Size, false represent the widget couldn't use Unify Size
       */
      isUnifySizeEnabled(): boolean
  
      /**
       * Calls updateSizeAndPosition and its parent's onEnter
       */
      onEnter(): any
  
      /**
       * Calls unscheduleUpdate and its parent's onExit
       */
      onExit(): any
  
      /**
       * This method is called when a focus change event happens
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      onFocusChange(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * The callback of touch began event.
       * If the bounding box of ccui.Widget contains the touch point, it will do the following things:
       * 1. sets highlight state,
       * 2. sends event to parent widget by interceptTouchEvent
       * 3. calls the callback of touch began event.
       * 4. returns true,
       * otherwise returns false directly.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       *
       * @returns {boolean}
       */
      onTouchBegan(touch: cc.Touch, event: cc.Event): boolean
  
      /**
       * A call back function called when widget is selected, and on touch canceled.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchCancelled(touchPoint: cc.Point): any
  
      /**
       * The callback of touch end event
       * It sends event to parent widget by interceptTouchEvent,
       * calls the callback of touch end event (highlight= true) or touch canceled event (highlight= false).
       * sets the highlight state to false ,
       *
       * @param {any} touch
       * @param {any} event
       */
      onTouchEnded(touch: any, event: any): any
  
      /**
       * A call back function called when widget is selected, and on touch long clicked.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchLongClicked(touchPoint: cc.Point): any
  
      /**
       * The callback of touch moved event.
       * It sets the highlight state by touch, sends event to parent widget by interceptTouchEvent and calls the callback of touch moved event.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       */
      onTouchMoved(touch: cc.Touch, event: cc.Event): any
  
      /**
       * Removes all node
       */
      removeAllNodes(): any
  
      /**
       * Removes a node from ccui.Widget
       *
       * @param {cc.Node} node
       * @param {Boolean} cleanup
       */
      removeNode(node: cc.Node, cleanup: boolean): any
  
      /**
       * Removes node by tag
       *
       * @param {Number} tag
       * @param {Boolean} cleanup
       */
      removeNodeByTag(tag: number, cleanup: boolean): any
  
      /**
       * when a widget calls this method, it will get focus immediately.
       */
      requestFocus(): any
  
      /**
       * Sets whether the widget is bright. The default value is true, a widget is default to bright
       *
       * @param {Boolean} bright true if the widget is bright, false if the widget is dark.
       */
      setBright(bright: boolean): any
  
      /**
       * To set the bright style of ccui.Widget.
       *
       * @param {Number} style BRIGHT_NORMAL the widget is normal state, BRIGHT_HIGHLIGHT the widget is height light state.
       */
      setBrightStyle(style: number): any
  
      /**
       * Sets callback name to widget.
       *
       * @param {String} callbackName
       */
      setCallbackName(callbackName: string): any
  
      /**
       * Sets callback type to widget
       *
       * @param {String} callbackType
       */
      setCallbackType(callbackType: string): any
  
      /**
       * Sets _customSize of ccui.Widget, if ignoreSize is true, the content size is its renderer's contentSize, otherwise the content size is parameter.
       * and updates size percent by parent content size. At last, updates its children's size and position.
       *
       * @param {cc.Size|Number} contentSize content size or width of content size
       * @param {Number} height
       */
      setContentSize(contentSize: cc.Size | number, height: number): any
  
      /**
       * Sets whether the widget is enabled
       * true if the widget is enabled, widget may be touched , false if the widget is disabled, widget cannot be touched.
       * The default value is true, a widget is default to enabled
       *
       * @param {Boolean} enabled
       */
      setEnabled(enabled: boolean): any
  
      /**
       * Sets whether the widget should be flipped horizontally or not.
       *
       * @param {Boolean} flipX true if the widget should be flipped horizontally, false otherwise.
       */
      setFlippedX(flipX: boolean): any
  
      /**
       * Sets whether the widget should be flipped vertically or not.
       *
       * @param {Boolean} flipY true if the widget should be flipped vertically, false otherwise.
       */
      setFlippedY(flipY: boolean): any
  
      /**
       * Sets whether the widget is on focused
       * The default value is false, a widget is default to not on focused
       *
       * @param {boolean} focus pass true to let the widget get focus or pass false to let the widget lose focus
       */
      setFocused(focus: boolean): any
  
      /**
       * sets whether the widget could accept focus.
       *
       * @param {Boolean} enable true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      setFocusEnabled(enable: boolean): any
  
      /**
       * Sets whether the widget is highlighted. The default value is false, a widget is default to not highlighted
       *
       * @param {any} highlight true if the widget is highlighted, false if the widget is not highlighted.
       */
      setHighlighted(highlight: any): any
  
      /**
       * Whether enable layout component of a widget
       *
       * @param {Boolean} enable enable layout Component of a widget
       */
      setLayoutComponentEnabled(enable: boolean): any
  
      /**
       * Gets LayoutParameter of widget.
       *
       * @param {ccui.LayoutParameter} parameter
       */
      setLayoutParameter(parameter: ccui.LayoutParameter): any
  
      /**
       * Changes the position (x,y) of the widget .
       * The original point (0,0) is at the left-bottom corner of screen.
       *
       * @param {cc.Point|Number} pos
       * @param {Number} posY
       */
      setPosition(pos: cc.Point | number, posY: number): any
  
      /**
       * Changes the position (x,y) of the widget
       *
       * @param {cc.Point} percent
       */
      setPositionPercent(percent: cc.Point): any
  
      /**
       * Changes the position type of the widget
       *
       * @param {Number} type the position type of widget
       */
      setPositionType(type: number): any
  
      /**
       * Allow widget touch events to propagate to its parents. Set false will disable propagation
       *
       * @param {Boolean} isPropagate
       */
      setPropagateTouchEvents(isPropagate: boolean): any
  
      /**
       * Changes the size that is widget's size
       *
       * @param {cc.Size} size that is widget's size
       */
      setSize(size: cc.Size): any
  
      /**
       * Changes the percent that is widget's percent size
       *
       * @param {cc.Point} percent that is widget's percent size, width and height value from 0 to 1.
       */
      setSizePercent(percent: cc.Point): any
  
      /**
       * TEXTURE_RES_TYPE
       * Changes the size type of widget.
       *
       * @param {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} type that is widget's size type
       */
      setSizeType(type: any): any
  
      /**
       * Specify widget to swallow touches or not
       *
       * @param {Boolean} swallow
       */
      setSwallowTouches(swallow: boolean): any
  
      /**
       * Sets whether the widget is touch enabled. The default value is false, a widget is default to touch disabled
       *
       * @param {Boolean} enable true if the widget is touch enabled, false if the widget is touch disabled.
       */
      setTouchEnabled(enable: boolean): any
  
      /**
       *
       *
       * @param {Boolean} enable enable Unify Size of a widget
       */
      setUnifySizeEnabled(enable: boolean): any
  
      /**
       * updates its size by size type and its position by position type.
       *
       * @param {cc.Size} parentSize parent size
       */
      updateSizeAndPosition(parentSize: cc.Size): any
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    }
  }
  
  declare namespace ccui {
    interface IWebView extends ccui.IWidget {
  
      path: string
  
      canGoBack(): any
  
      canGoForward(): any
  
      cleanup(): any
  
      evaluateJS(str: string): any
  
      goBack(): any
  
      goForward(): any
  
      loadURL(url: string): any
  
      reload(): any
  
      removeEventListener(event: any): any
  
      setEventListener(event: any, callback: Function): any
  
      setScalesPageToFit(): any
  
      stopLoading(): any
    }
  
    interface IWebViewOverrides {
  
      setContentSize(w: number, h: number): any
    }
  
  
  
    class WebView implements IWebView, IWebViewOverrides {
  
      /**
       *
       */
      constructor()
  
  
      /**
       * The WebView support list of events
       */
      static EventType: any
  
  
  
  
      /**
       * Set the contentSize
       *
       * @param {Number} w
       * @param {Number} h
       */
      setContentSize(w: number, h: number): any
  
  
      /**
       * - The url to be shown in the web view
       */
      path: string
  
      /**
       * Determine whether to go back
       */
      canGoBack(): any
  
      /**
       * Determine whether to go forward
       */
      canGoForward(): any
  
      /**
       * remove node
       */
      cleanup(): any
  
      /**
       * In the webview execution within a period of js string
       *
       * @param {String} str
       */
      evaluateJS(str: string): any
  
      /**
       * go back
       */
      goBack(): any
  
      /**
       * go forward
       */
      goForward(): any
  
      /**
       * Load an URL
       *
       * @param {String} url
       */
      loadURL(url: string): any
  
      /**
       * Reload the WebView
       */
      reload(): any
  
      /**
       * Delete events
       *
       * @param {ccui.WebView.EventType} event
       */
      removeEventListener(event: any): any
  
      /**
       * The binding event
       *
       * @param {ccui.WebView.EventType} event
       * @param {Function} callback
       */
      setEventListener(event: any, callback: Function): any
  
      /**
       * Limited scale
       */
      setScalesPageToFit(): any
  
      /**
       * Stop loading
       */
      stopLoading(): any
  
  
      /**
       * - The action tag of the widget
       */
      actionTag: number
  
      /**
       * - Indicate whether the widget is bright
       */
      bright: boolean
  
      /**
       * - Indicate whether the widget is enabled
       */
      enabled: boolean
  
      /**
       * - Indicate whether the widget is focused
       */
      focused: boolean
  
      /**
       * - Height in percentage of parent height
       */
      heightPercent: number
  
      /**
       * - The name of the widget
       */
      name: string
  
      /**
       * When a widget lose/get focus, this method will be called. Be Caution when you provide your own version,
       * you must call widget.setFocused(true/false) to change the focus state of the current focused widget;
       */
      onFocusChanged: any
  
      /**
       * use this function to manually specify the next focused widget regards to each direction
       */
      onNextFocusedWidget: any
  
      /**
       * - The size type of the widget
       */
      sizeType: any
  
      /**
       * - Indicate whether touch events are enabled
       */
      touchEnabled: boolean
  
      /**
       * - Indicate whether the update function is scheduled
       */
      updateEnabled: boolean
  
      /**
       * - <@readonly> The direct parent when it's a widget also, otherwise equals null
       */
      widgetParent: ccui.Widget
  
      /**
       * - <@readonly> The type of the widget
       */
      widgetType: any
  
      /**
       * - Width in percentage of parent width
       */
      widthPercent: number
  
      /**
       * - Position x in percentage of width
       */
      xPercent: number
  
      /**
       * - Position y in percentage of height
       */
      yPercent: number
  
      /**
       * Set a event handler to the widget in order to use cocostudio editor and framework
       *
       * @param {function} callback
       */
      addCCSEventListener(callback: Function): any
  
      /**
       * Adds a node for widget (this function is deleted in -x)
       *
       * @param {cc.Node} node
       * @param {Number} zOrder
       * @param {Number} tag
       */
      addNode(node: cc.Node, zOrder: number, tag: number): any
  
      /**
       * Sets the touch event target/selector of the ccui.Widget
       *
       * @param {Function} selector
       * @param {Object} target
       */
      addTouchEventListener(selector: Function, target: object): any
  
      /**
       * Calls the checkChildInfo of widget's parent, its subclass will override it.
       *
       * @param {number} handleState
       * @param {ccui.Widget} sender
       * @param {cc.Point} touchPoint
       */
      checkChildInfo(handleState: number, sender: ccui.Widget, touchPoint: cc.Point): any
  
      /**
       * Checks a point if in parent's area.
       *
       * @param {cc.Point} pt
       *
       * @returns {Boolean}
       */
      clippingParentAreaContainPoint(pt: cc.Point): boolean
  
      /**
       * Clones a new widget.
       *
       * @returns {ccui.Widget}
       */
      clone(): ccui.Widget
  
      /**
       * A call back function when widget lost of focus.
       */
      didNotSelectSelf(): any
  
      /**
       * Dispatch a EventFocus through a EventDispatcher
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      dispatchFocusEvent(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * When a widget is in a layout, you could call this method to get the next focused widget within a specified direction.
       * If the widget is not in a layout, it will return itself
       *
       * @param {any} direction the direction to look for the next focused widget in a layout
       * @param {any} current the current focused widget
       */
      findNextFocusedWidget(direction: any, current: any): any
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomBoundary(): number
  
      /**
       * Gets the bottom boundary position of this widget.
       *
       * @returns {number}
       */
      getBottomInParent(): number
  
      /**
       * Gets callback name of widget
       *
       * @returns v3.3{String|Null}
       */
      getCallbackName(): string | null
  
      /**
       * Gets callback type of widget
       *
       * @returns v3.3{String|null}
       */
      getCallbackType(): string | null
  
      /**
       * no matter what widget object you call this method on , it will return you the exact one focused widget
       */
      getCurrentFocusedWidget(): any
  
      /**
       * Get custom size of ccui.Widget
       *
       * @returns {cc.Size}
       */
      getCustomSize(): cc.Size
  
      /**
       * Returns the "class name" of widget.
       *
       * @returns {string}
       */
      getDescription(): string
  
      /**
       * Gets layout parameter
       *
       * @param {ccui.LayoutParameter.NONE|ccui.LayoutParameter.LINEAR|ccui.LayoutParameter.RELATIVE} type
       *
       * @returns {ccui.LayoutParameter}
       */
      getLayoutParameter(type: any): ccui.LayoutParameter
  
      /**
       * Gets layout size of ccui.Widget.
       *
       * @returns {cc.Size}
       */
      getLayoutSize(): cc.Size
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftBoundary(): number
  
      /**
       * Gets the left boundary position of this widget.
       *
       * @returns {number}
       */
      getLeftInParent(): number
  
      /**
       * Gets node by tag
       *
       * @param {Number} tag
       *
       * @returns {cc.Node}
       */
      getNodeByTag(tag: number): cc.Node
  
      /**
       * Returns all children.
       *
       * @returns {Array}
       */
      getNodes(): any[]
  
      /**
       * Gets the percent (x,y) of the widget
       *
       * @returns {cc.Point} The percent (x,y) of the widget in OpenGL coordinates
       */
      getPositionPercent(): cc.Point
  
      /**
       * Gets the position type of the widget
       *
       * @returns {Number} the position type of widget
       */
      getPositionType(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightBoundary(): number
  
      /**
       * Gets the right boundary position of this widget.
       *
       * @returns {number}
       */
      getRightInParent(): number
  
      /**
       * Returns size of widget
       *
       * @returns {cc.Size}
       */
      getSize(): cc.Size
  
      /**
       * Returns size percent of ccui.Widget
       *
       * @returns {cc.Point}
       */
      getSizePercent(): cc.Point
  
      /**
       * Gets the size type of widget.
       *
       * @returns {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} that is widget's size type
       */
      getSizeType(): any
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopBoundary(): number
  
      /**
       * Gets the top boundary position of this widget.
       *
       * @returns {number}
       */
      getTopInParent(): number
  
      /**
       * Gets the position of touch began event.
       *
       * @returns {cc.Point}
       */
      getTouchBeganPosition(): cc.Point
  
      /**
       * Gets the touch end point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch end point.
       */
      getTouchEndPos(): cc.Point
  
      /**
       * Gets the position of touch end event
       *
       * @returns {cc.Point}
       */
      getTouchEndPosition(): cc.Point
  
      /**
       * Gets the touch move point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch move point.
       */
      getTouchMovePos(): cc.Point
  
      /**
       * Gets the position of touch moved event
       *
       * @returns {cc.Point}
       */
      getTouchMovePosition(): cc.Point
  
      /**
       * Gets the touch began point of widget when widget is selected.
       *
       * @returns {cc.Point} the touch began point.
       */
      getTouchStartPos(): cc.Point
  
      /**
       * Gets the Virtual Renderer of widget.
       *
       * @returns {ccui.Widget}
       */
      getVirtualRenderer(): ccui.Widget
  
      /**
       * Gets the content size of widget. Content size is widget's texture size.
       */
      getVirtualRendererSize(): any
  
      /**
       * The direct parent when it's a widget also, otherwise equals null
       *
       * @returns {ccui.Widget|null}
       */
      getWidgetParent(): ccui.Widget | null
  
      /**
       * get widget type
       *
       * @returns {ccui.Widget.TYPE_WIDGET|ccui.Widget.TYPE_CONTAINER}
       */
      getWidgetType(): any
  
      /**
       * Gets world position of ccui.Widget.
       *
       * @returns {cc.Point} world position of ccui.Widget.
       */
      getWorldPosition(): cc.Point
  
      /**
       * Checks a point if is in widget's space
       *
       * @param {cc.Point} pt
       *
       * @returns {boolean} true if the point is in widget's space, false otherwise.
       */
      hitTest(pt: cc.Point): boolean
  
      /**
       * Ignore the widget size
       *
       * @param {Boolean} ignore true that widget will ignore it's size, use texture size, false otherwise. Default value is true.
       */
      ignoreContentAdaptWithSize(ignore: boolean): any
  
      /**
       * initializes state of widget. please do not call this function by yourself, you should pass the parameters to constructor to initialize it .
       *
       * @returns {boolean}
       */
      init(): boolean
  
      /**
       * Sends the touch event to widget's parent, its subclass will override it, e.g. ccui.ScrollView, ccui.PageView
       *
       * @param {Number} eventType
       * @param {ccui.Widget} sender
       * @param {cc.Touch} touch
       */
      interceptTouchEvent(eventType: number, sender: ccui.Widget, touch: cc.Touch): any
  
      /**
       * Determines if the widget is bright
       *
       * @returns {boolean} true if the widget is bright, false if the widget is dark.
       */
      isBright(): boolean
  
      /**
       * returns whether clipping parent widget contains point.
       *
       * @param {cc.Point} pt location point
       *
       * @returns {Boolean}
       */
      isClippingParentContainsPoint(pt: cc.Point): boolean
  
      /**
       * Determines if the widget is enabled
       *
       * @returns {boolean}
       */
      isEnabled(): boolean
  
      /**
       * Returns the flag which indicates whether the widget is flipped horizontally or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleX(sprite.getScaleX() * -1);
       *
       * @returns {Boolean} true if the widget is flipped horizontally, false otherwise.
       */
      isFlippedX(): boolean
  
      /**
       * Return the flag which indicates whether the widget is flipped vertically or not.
       * It only flips the texture of the widget, and not the texture of the widget's children.
       * Also, flipping the texture doesn't alter the anchorPoint.
       * If you want to flip the anchorPoint too, and/or to flip the children too use:
       * widget.setScaleY(widget.getScaleY() * -1);
       *
       * @returns {Boolean} true if the widget is flipped vertically, false otherwise.
       */
      isFlippedY(): boolean
  
      /**
       * Determines if the widget is on focused
       *
       * @returns {boolean} whether the widget is focused or not
       */
      isFocused(): boolean
  
      /**
       * returns whether the widget could accept focus.
       *
       * @returns {boolean} true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      isFocusEnabled(): boolean
  
      /**
       * Determines if the widget is highlighted
       *
       * @returns {boolean} true if the widget is highlighted, false if the widget is not highlighted .
       */
      isHighlighted(): boolean
  
      /**
       * Gets whether ignore the content size (custom size)
       *
       * @returns {boolean} true that widget will ignore it's size, use texture size, false otherwise.
       */
      isIgnoreContentAdaptWithSize(): boolean
  
      /**
       * Returns whether enable layout component of a widget
       *
       * @returns {Boolean} true represent the widget use Layout Component, false represent the widget couldn't use Layout Component.
       */
      isLayoutComponentEnabled(): boolean
  
      /**
       * Return whether the widget is propagate touch events to its parents or not
       *
       * @returns v3.2{boolean}
       */
      isPropagateTouchEvents(): boolean
  
      /**
       * Return whether the widget is swallowing touch or not
       *
       * @returns v3.2{boolean}
       */
      isSwallowTouches(): boolean
  
      /**
       * Returns whether or not touch is enabled.
       *
       * @returns {boolean} true if the widget is touch enabled, false if the widget is touch disabled.
       */
      isTouchEnabled(): boolean
  
      /**
       *
       *
       * @returns v3.2{boolean} true represent the widget use Unify Size, false represent the widget couldn't use Unify Size
       */
      isUnifySizeEnabled(): boolean
  
      /**
       * Calls updateSizeAndPosition and its parent's onEnter
       */
      onEnter(): any
  
      /**
       * Calls unscheduleUpdate and its parent's onExit
       */
      onExit(): any
  
      /**
       * This method is called when a focus change event happens
       *
       * @param {ccui.Widget} widgetLostFocus
       * @param {ccui.Widget} widgetGetFocus
       */
      onFocusChange(widgetLostFocus: ccui.Widget, widgetGetFocus: ccui.Widget): any
  
      /**
       * The callback of touch began event.
       * If the bounding box of ccui.Widget contains the touch point, it will do the following things:
       * 1. sets highlight state,
       * 2. sends event to parent widget by interceptTouchEvent
       * 3. calls the callback of touch began event.
       * 4. returns true,
       * otherwise returns false directly.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       *
       * @returns {boolean}
       */
      onTouchBegan(touch: cc.Touch, event: cc.Event): boolean
  
      /**
       * A call back function called when widget is selected, and on touch canceled.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchCancelled(touchPoint: cc.Point): any
  
      /**
       * The callback of touch end event
       * It sends event to parent widget by interceptTouchEvent,
       * calls the callback of touch end event (highlight= true) or touch canceled event (highlight= false).
       * sets the highlight state to false ,
       *
       * @param {any} touch
       * @param {any} event
       */
      onTouchEnded(touch: any, event: any): any
  
      /**
       * A call back function called when widget is selected, and on touch long clicked.
       *
       * @param {cc.Point} touchPoint
       */
      onTouchLongClicked(touchPoint: cc.Point): any
  
      /**
       * The callback of touch moved event.
       * It sets the highlight state by touch, sends event to parent widget by interceptTouchEvent and calls the callback of touch moved event.
       *
       * @param {cc.Touch} touch
       * @param {cc.Event} event
       */
      onTouchMoved(touch: cc.Touch, event: cc.Event): any
  
      /**
       * Removes all node
       */
      removeAllNodes(): any
  
      /**
       * Removes a node from ccui.Widget
       *
       * @param {cc.Node} node
       * @param {Boolean} cleanup
       */
      removeNode(node: cc.Node, cleanup: boolean): any
  
      /**
       * Removes node by tag
       *
       * @param {Number} tag
       * @param {Boolean} cleanup
       */
      removeNodeByTag(tag: number, cleanup: boolean): any
  
      /**
       * when a widget calls this method, it will get focus immediately.
       */
      requestFocus(): any
  
      /**
       * Sets whether the widget is bright. The default value is true, a widget is default to bright
       *
       * @param {Boolean} bright true if the widget is bright, false if the widget is dark.
       */
      setBright(bright: boolean): any
  
      /**
       * To set the bright style of ccui.Widget.
       *
       * @param {Number} style BRIGHT_NORMAL the widget is normal state, BRIGHT_HIGHLIGHT the widget is height light state.
       */
      setBrightStyle(style: number): any
  
      /**
       * Sets callback name to widget.
       *
       * @param {String} callbackName
       */
      setCallbackName(callbackName: string): any
  
      /**
       * Sets callback type to widget
       *
       * @param {String} callbackType
       */
      setCallbackType(callbackType: string): any
  
      /**
       * Sets _customSize of ccui.Widget, if ignoreSize is true, the content size is its renderer's contentSize, otherwise the content size is parameter.
       * and updates size percent by parent content size. At last, updates its children's size and position.
       *
       * @param {cc.Size|Number} contentSize content size or width of content size
       * @param {Number} height
       */
      setContentSize(contentSize: cc.Size | number, height: number): any
  
      /**
       * Sets whether the widget is enabled
       * true if the widget is enabled, widget may be touched , false if the widget is disabled, widget cannot be touched.
       * The default value is true, a widget is default to enabled
       *
       * @param {Boolean} enabled
       */
      setEnabled(enabled: boolean): any
  
      /**
       * Sets whether the widget should be flipped horizontally or not.
       *
       * @param {Boolean} flipX true if the widget should be flipped horizontally, false otherwise.
       */
      setFlippedX(flipX: boolean): any
  
      /**
       * Sets whether the widget should be flipped vertically or not.
       *
       * @param {Boolean} flipY true if the widget should be flipped vertically, false otherwise.
       */
      setFlippedY(flipY: boolean): any
  
      /**
       * Sets whether the widget is on focused
       * The default value is false, a widget is default to not on focused
       *
       * @param {boolean} focus pass true to let the widget get focus or pass false to let the widget lose focus
       */
      setFocused(focus: boolean): any
  
      /**
       * sets whether the widget could accept focus.
       *
       * @param {Boolean} enable true represent the widget could accept focus, false represent the widget couldn't accept focus
       */
      setFocusEnabled(enable: boolean): any
  
      /**
       * Sets whether the widget is highlighted. The default value is false, a widget is default to not highlighted
       *
       * @param {any} highlight true if the widget is highlighted, false if the widget is not highlighted.
       */
      setHighlighted(highlight: any): any
  
      /**
       * Whether enable layout component of a widget
       *
       * @param {Boolean} enable enable layout Component of a widget
       */
      setLayoutComponentEnabled(enable: boolean): any
  
      /**
       * Gets LayoutParameter of widget.
       *
       * @param {ccui.LayoutParameter} parameter
       */
      setLayoutParameter(parameter: ccui.LayoutParameter): any
  
      /**
       * Changes the position (x,y) of the widget .
       * The original point (0,0) is at the left-bottom corner of screen.
       *
       * @param {cc.Point|Number} pos
       * @param {Number} posY
       */
      setPosition(pos: cc.Point | number, posY: number): any
  
      /**
       * Changes the position (x,y) of the widget
       *
       * @param {cc.Point} percent
       */
      setPositionPercent(percent: cc.Point): any
  
      /**
       * Changes the position type of the widget
       *
       * @param {Number} type the position type of widget
       */
      setPositionType(type: number): any
  
      /**
       * Allow widget touch events to propagate to its parents. Set false will disable propagation
       *
       * @param {Boolean} isPropagate
       */
      setPropagateTouchEvents(isPropagate: boolean): any
  
      /**
       * Changes the size that is widget's size
       *
       * @param {cc.Size} size that is widget's size
       */
      setSize(size: cc.Size): any
  
      /**
       * Changes the percent that is widget's percent size
       *
       * @param {cc.Point} percent that is widget's percent size, width and height value from 0 to 1.
       */
      setSizePercent(percent: cc.Point): any
  
      /**
       * TEXTURE_RES_TYPE
       * Changes the size type of widget.
       *
       * @param {ccui.Widget.SIZE_ABSOLUTE|ccui.Widget.SIZE_PERCENT} type that is widget's size type
       */
      setSizeType(type: any): any
  
      /**
       * Specify widget to swallow touches or not
       *
       * @param {Boolean} swallow
       */
      setSwallowTouches(swallow: boolean): any
  
      /**
       * Sets whether the widget is touch enabled. The default value is false, a widget is default to touch disabled
       *
       * @param {Boolean} enable true if the widget is touch enabled, false if the widget is touch disabled.
       */
      setTouchEnabled(enable: boolean): any
  
      /**
       *
       *
       * @param {Boolean} enable enable Unify Size of a widget
       */
      setUnifySizeEnabled(enable: boolean): any
  
      /**
       * updates its size by size type and its position by position type.
       *
       * @param {cc.Size} parentSize parent size
       */
      updateSizeAndPosition(parentSize: cc.Size): any
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    }
  }
  
  declare namespace ccui {
    interface IRichElement extends ccui.IClass {
  
  
    }
  
    interface IRichElementOverrides {
  
    }
  
  
  
    class RichElement implements IRichElement, IRichElementOverrides {
  
      /**
       * Constructor of ccui.RichElement
       *
       * @param {any} tag
       * @param {any} color
       * @param {any} opacity
       */
      constructor(tag: any, color: any, opacity: any)
  
  
  
      /**
       * The custom type of rich element.
       */
      static CUSTOM: any
  
      /**
       * The image type of rich element.
       */
      static IMAGE: any
  
      /**
       * The text type of rich element.
       */
      static TEXT: any
  
  
  
  
  
  
  
  
  
  
  
  
    }
  }
  

  declare namespace ccui {
    interface IRichElementCustomNode extends ccui.IRichElement {
  
  
    }
  
    interface IRichElementCustomNodeOverrides {
  
    }
  
  
  
    class RichElementCustomNode implements IRichElementCustomNode, IRichElementCustomNodeOverrides {
  
      /**
       * Constructor of ccui.RichElementCustomNode
       *
       * @param {Number} tag
       * @param {cc.Color} color
       * @param {Number} opacity
       * @param {cc.Node} customNode
       */
      constructor(tag: number, color: cc.Color, opacity: number, customNode: cc.Node)
  
  
  
  
      /**
       * Create a richElementCustomNode
       *
       * @param {Number} tag
       * @param {Number} color
       * @param {Number} opacity
       * @param {cc.Node} customNode
       *
       * @returns {ccui.RichElementCustomNode}
       */
      static create(tag: number, color: number, opacity: number, customNode: cc.Node): ccui.RichElementCustomNode
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    }
}

declare namespace ccui {
    interface IRichElementImage extends ccui.IRichElement {
  
  
    }
  
    interface IRichElementImageOverrides {
  
    }
  
  
  
    class RichElementImage implements IRichElementImage, IRichElementImageOverrides {
  
      /**
       * Constructor of ccui.RichElementImage
       *
       * @param {Number} tag
       * @param {cc.Color} color
       * @param {Number} opacity
       * @param {String} filePath
       */
      constructor(tag: number, color: cc.Color, opacity: number, filePath: string)
  
  
  
  
      /**
       * Create a richElementImage
       *
       * @param {Number} tag
       * @param {cc.Color} color
       * @param {Number} opacity
       * @param {String} filePath
       *
       * @returns {ccui.RichElementImage}
       */
      static create(tag: number, color: cc.Color, opacity: number, filePath: string): ccui.RichElementImage
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    }
}

declare namespace ccui {
    interface IRichElementText extends ccui.IRichElement {
  
  
    }
  
    interface IRichElementTextOverrides {
  
    }
  
  
  
    class RichElementText implements IRichElementText, IRichElementTextOverrides {
  
      /**
       * Usage Example using FontDefinition:var rtEl = new ccui.RichElementText("tag", new cc.FontDefinition({
       * fillStyle: cc.color.BLACK,
       * fontName: "Arial",
       * fontSize: 12,
       * fontWeight: "bold",
       * fontStyle: "normal",
       * lineHeight: 14
       * }), 255, "Some Text");Constructor of ccui.RichElementText
       *
       * @param {Number} tag
       * @param {cc.Color|cc.FontDefinition} colorOrFontDef
       * @param {Number} opacity
       * @param {String} text
       * @param {String} fontName
       * @param {Number} fontSize
       */
      constructor(tag: number, colorOrFontDef: cc.Color | cc.FontDefinition, opacity: number, text: string, fontName: string, fontSize: number)
  
  
  
  
      /**
       * Create a richElementText
       *
       * @param {Number} tag
       * @param {cc.Color} color
       * @param {Number} opacity
       * @param {String} text
       * @param {String} fontName
       * @param {Number} fontSize
       *
       * @returns {ccui.RichElementText}
       */
      static create(tag: number, color: cc.Color, opacity: number, text: string, fontName: string, fontSize: number): ccui.RichElementText
    }
}

