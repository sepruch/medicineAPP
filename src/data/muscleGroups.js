// ==========================================
// 1 УРОВЕНЬ: ГЛАВНЫЕ ГРУППЫ МЫШЦ СПИНЫ
// ==========================================
export const mainBackGroups = [
    {
        id: 'superficial',
        ruName: 'Поверхностные мышцы',
        latName: 'Висцеральные и трункопетальные',
        path: '/back-muscles/superficial'
    },
    {
        id: 'deep',
        ruName: 'Глубокие мышцы',
        latName: 'Аутохтонная мускулатура',
        path: '/back-muscles/deep'
    }
];

// ==========================================
// 2 УРОВЕНЬ: ПОДГРУППЫ ПОВЕРХНОСТНЫХ И ГЛУБОКИХ
// ==========================================

// Подгруппы поверхностных мышц
export const superficialSubgroups = [
    {
        id: 'shoulder-gridle',
        ruName: 'Прикрепляющиеся на поясе верхней конечности и плече',
        path: '/back-muscles/superficial/shoulder-gridle'
    },
    {
        id: 'ribs',
        ruName: 'Прикрепляющиеся на ребрах',
        path: '/back-muscles/superficial/ribs'
    }
];

// Подгруппы глубоких мышц
export const deepSubgroups = [
    {
        id: 'autochthonous',
        ruName: 'Аутохтонные мышцы',
        path: '/back-muscles/deep/autochthonous'
    },
    {
        id: 'ventral',
        ruName: 'Мышцы вентрального происхождения',
        path: '/back-muscles/deep/ventral'
    }
];

// ==========================================
// 3 УРОВЕНЬ: АУТОХТОННЫЕ МЫШЦЫ (Схема: пункты 1, 2 + ЛТ + МТ)
// ==========================================
export const autochthonousGroups = [
    // Эти две ведут сразу на страницу мышцы (п. 1 и 2 на схеме)
    { id: 'splenius-capitis', ruName: 'Ременная мышца головы', latName: 'm. splenius capitis', path: '/muscle/splenius-capitis' },
    { id: 'splenius-cervicis', ruName: 'Ременная мышца шеи', latName: 'm. splenius cervicis', path: '/muscle/splenius-cervicis' },

    // Эти две ведут на вложенные списки трактов
    { id: 'lateral', ruName: 'Латеральный тракт (ЛТ)', latName: 'Длинные мышцы', path: '/back-muscles/deep/autochthonous/lateral' },
    { id: 'medial', ruName: 'Медиальный тракт (МТ)', latName: 'Короткие мышцы', path: '/back-muscles/deep/autochthonous/medial' }
];

// ==========================================
// КОНЕЧНЫЕ СПИСКИ МЫШЦ
// ==========================================

// Глубокие -> Аутохтонные -> Латеральный тракт (ЛТ - скобка включает п. 3, 4, 5)
export const lateralTractMuscles = [
    { id: 'erector-spinae', ruName: 'Мышца, выпрямляющая позвоночник', latName: 'm. erector spinae', path: '/muscle/erector-spinae' },
    { id: 'intertransversarii-post-cervicis', ruName: 'Задние межпоперечные мышцы шеи', latName: 'mm. intertransversarii posteriores cervicis', path: '/muscle/intertransversarii-post-cervicis' },
    { id: 'intertransversarii-med-lumborum', ruName: 'Медиальные межпоперечные мышцы поясницы', latName: 'mm. intertransversarii mediales lumborum', path: '/muscle/intertransversarii-med-lumborum' }
];

// Глубокие -> Аутохтонные -> Медиальный тракт (МТ - скобка включает п. 6-11)
export const medialTractMuscles = [
    { id: 'transversospinales', ruName: 'Поперечно-остистые мышцы', latName: 'mm. transversospinales', path: '/muscle/transversospinales' },
    { id: 'interspinales', ruName: 'Межостистые мышцы', latName: 'mm. interspinales', path: '/muscle/interspinales' },
    { id: 'obliquus-capitis-sup', ruName: 'Верхняя косая мышца головы', latName: 'm. obliquus capitis superior', path: '/muscle/obliquus-capitis-sup' },
    { id: 'obliquus-capitis-inf', ruName: 'Нижняя косая мышца головы', latName: 'm. obliquus capitis inferior', path: '/muscle/obliquus-capitis-inf' },
    { id: 'rectus-capitis-minor', ruName: 'Малая задняя прямая мышца головы', latName: 'm. rectus capitis posterior minor', path: '/muscle/rectus-capitis-minor' },
    { id: 'rectus-capitis-major', ruName: 'Большая задняя прямая мышца головы', latName: 'm. rectus capitis posterior major', path: '/muscle/rectus-capitis-major' }
];

// Глубокие -> Вентральные (пункты 1, 2, 3 на схеме)
export const ventralDeepMuscles = [
    { id: 'levatores-costarum', ruName: 'Мышцы, поднимающие ребра', latName: 'mm. levatores costarum', path: '/muscle/levatores-costarum' },
    { id: 'intertransversarii-ant-cervicis', ruName: 'Передние межпоперечные мышцы шеи', latName: 'mm. intertransversarii anteriores cervicis', path: '/muscle/intertransversarii-ant-cervicis' },
    { id: 'intertransversarii-lat-lumborum', ruName: 'Латеральные межпоперечные мышцы поясницы', latName: 'mm. intertransversarii laterales lumborum', path: '/muscle/intertransversarii-lat-lumborum' }
];

// Поверхностные -> Пояс верхней конечности
export const shoulderGirdleMuscles = [
    { id: 'trapezius', ruName: 'Трапециевидная мышца', latName: 'm. trapezius', path: '/muscle/trapezius' },
    { id: 'latissimus-dorsi', ruName: 'Широчайшая мышца спины', latName: 'm. latissimus dorsi', path: '/muscle/latissimus-dorsi' },
    { id: 'levator-scapulae', ruName: 'Мышца, поднимающая лопатку', latName: 'm. levator scapulae', path: '/muscle/levator-scapulae' },
    { id: 'rhomboidei', ruName: 'Ромбовидная мышца', latName: 'mm. rhomboidei', path: '/muscle/rhomboidei' }
];

// Поверхностные -> Ребра
export const ribsMuscles = [
    { id: 'serratus-superior', ruName: 'Задняя верхняя зубчатая мышца', latName: 'm. serratus posterior superior', path: '/muscle/serratus-superior' },
    { id: 'serratus-inferior', ruName: 'Задняя нижняя зубчатая мышца', latName: 'm. serratus posterior inferior', path: '/muscle/serratus-inferior' }
];