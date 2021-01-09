import IntroductionLang from './Introduction.json';

export const getLangSupport = lang => {
    return {
        INTRO: IntroductionLang[lang]
    }
}