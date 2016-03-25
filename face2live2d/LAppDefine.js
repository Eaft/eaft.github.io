var LAppDefine = {

    // デバッグ。trueのときにログを表示する。
    DEBUG_LOG : true,
    DEBUG_MOUSE_LOG : false, // マウス関連の冗長なログ
    // DEBUG_DRAW_HIT_AREA : false, // 当たり判定の可視化
    // DEBUG_DRAW_ALPHA_MODEL : false, // 半透明のモデル描画を行うかどうか。

    //  全体の設定

    // 画面
    VIEW_MAX_SCALE : 2,
    VIEW_MIN_SCALE : 0.8,

    VIEW_LOGICAL_LEFT : -1,
    VIEW_LOGICAL_RIGHT : 1,

    VIEW_LOGICAL_MAX_LEFT : -2,
    VIEW_LOGICAL_MAX_RIGHT : 2,
    VIEW_LOGICAL_MAX_BOTTOM : -2,
    VIEW_LOGICAL_MAX_TOP : 2,

    // モーションの優先度定数
    PRIORITY_NONE : 0,
    PRIORITY_IDLE : 1,
    PRIORITY_NORMAL : 2,
    PRIORITY_FORCE : 3,

    // モデルの後ろにある背景の画像ファイル
    BACK_IMAGE_NAME : "face2live2d/assets/image/back_class_normal.png",

    //  モデル定義
    MODEL_HARU : "face2live2d/assets/live2d/haru/haru.model.json",
    MODEL_HARU_B : "face2live2d/assets/live2d/haru/haru_02.model.json",
    MODEL_SHIZUKU : "face2live2d/assets/live2d/shizuku/shizuku.model.json",
    MODEL_WANKO : "face2live2d/assets/live2d/wanko/wanko.model.json",
    MODEL_1 : "face2live2d/assets/live2d/izumi/izumi_illust.model.json",
    MODEL_2 : "face2live2d/assets/live2d/hibiki/hibiki.model.json",
    MODEL_3 : "face2live2d/assets/live2d/Epsilon/Epsilon.model.json",
    MODEL_4 : "face2live2d/assets/live2d/chitose/chitose.model.json",
    MODEL_5 : "face2live2d/assets/live2d/libra/model.model.json",

    // 外部定義ファイル(json)と合わせる
    MOTION_GROUP_IDLE : "idle", // アイドリング
    MOTION_GROUP_TAP_BODY : "tap_body", // 体をタップしたとき
    MOTION_GROUP_FLICK_HEAD : "flick_head", // 頭を撫でた時
    MOTION_GROUP_PINCH_IN : "pinch_in", // 拡大した時
    MOTION_GROUP_PINCH_OUT : "pinch_out", // 縮小した時
    MOTION_GROUP_SHAKE : "shake", // シェイク

    // 外部定義ファイル(json)と合わせる
    HIT_AREA_HEAD : "head",
    HIT_AREA_BODY : "body"

};
