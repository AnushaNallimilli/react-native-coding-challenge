const Colors = {
    PRIMARY_COLOR: '#e8f2fdd9',
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    DARK_BLUE: '#273D5A',
    LIGHT_BLUE: '#4470DB',
    LIGHT_BLUE_DISABLED: '#4470DB90',
    DARK_GRAY: '#6C7C97',
    SHADOW_GRAY: '#7D86B240',
    NAVY_BLUE: '#1B212C',
    SKY_BLUE: '#F6F7FF',
    LIGHT_GRAY: '#091E420A',
    PURPLE: '#5243AA',
    RED_LOGOUT: '#FF1537',
    BORDER_COLOR: '#E9ECF2',
    BROWN_BLACK: '#1D1617',
    GREEN_COLOR: '#36B37E',
    YELLOW: '#F29D01',
    DARK_NAVY_BLUE: '#0A1633',
    GRAY_LINE: '#E9EBF5',
    LIGHT_BLACK: '#000',
    LIGHT_WHITE: '#f8f8f8',
    LIGHT_GRAY_BLACK: '#c1c1c1',
    DARK_GRAY_BLACK: '#424242',
    TRANSPARENT_BLACK: '#00000077',
    INPUT_TITLE_COLOR: '#8293B0',
    SUB_TITLE_COLOR: '#313A4B',

    BG_GRAY: '#F5F5F5',
    NEUTRAL_LIGHT: '#F4F5F7',
    LIGHT_GRAY_BORDER: '#D1D4E7',
    NAVY_NV400: '#95A7C1',
    NAVY_NV600: '#273D5A',
    GREEN: '#48A748',
    ORANGE: '#FFA500',
    SEVERE_GREEN: '#33BB61',
    LIGHT_TEXT_INACTIVE: '#A3B4CC',
    SECONDARY_GRAY: '#95A7C1',
    LIGHT_SECONDARY_GRAY: '#dbe0e9',
    PARTIAL_RED: '#FFE4E4',
    BORDER_GRAY: '#D1D4E7',
    LIGHT_GREEN: '#F1FFF8',
    NEUTRAL_BORDER_GRAY: '#091E4221',
    DISABLED_BUTTON_GRAY: '#EBECF0',
    NAVY_NV200: '#F1F2F6',
    NAVY_NV300: '#E9ECF2',
    CLEAN_COLOR: '#00000000',
    INVALID: '#FF1537',
    LIGHT_RED: '#FFEBE6',

    GRADIENT_START: '#F7F9FF',
    GRADIENT_MID: '#DDF1FD',
    GRADIENT_END: '#DAF1FB',
    STROKE: '#F6F8FE',

    OVERLAY: 'rgba(0, 0, 0, 0.5)',

    /**
     * Issue Severity
     */
    HIGH_SEVERITY: '#FF1537',
    MODERATE_SEVERITY: '#F57600',
    LOW_SEVERITY: '#FFA500',

    /**
     * Issue Priority colors
     */
    priority1: '#273D5A', // Dark Blue
    priority2: '#6C7C97', // Dark Gray
    priority3: '#95a7c1', // Nevy NA400
    priority4: '#dbe0e9',
    priority5: '#e9ecf2', // BORDER_COLOR

    /**
     * Issue Status colors
     */
    NEW: '#008DA6',
    OPEN: '#36B37E',
    NOT_AN_ISSUE: '#6C7C97',
    WONT_FIX: '#365AAF',
    CLOSED: '#000000',
    DRAFT: '#F5F5F5',
    REMOVED: '#BF2600',
    // TODO: Remove once Resolved has been removed from the API
    RESOLVED: '#5243AA',

    // Tasks
    TASK_COMPLETED: '#273D5A', // Dark Blue
    TASK_INPROGRESS: '#36B37E', // Dark Blue
    TASK_DUE: '#FF1537', // Dark Blue

    // Trends
    MUTED_300: '#B0C3E3',
    TREND_AXIS: '#F3F3F3',
};
export default Colors;

export enum TrendLineColors {
    trendLine1 = '#4470DB',
    trendLine2 = '#FFC107',
    trendLine3 = '#D10D54',
    trendLine4 = '#6F3FC9',
    trendLine5 = '#1DE9B6',
    trendLine6 = '#C750DF',
    trendLine7 = '#009BE1',
    trendLine8 = '#48A748',
    trendLine9 = '#1740D9',
    trendLine10 = '#F29D01',
    trendLine11 = '#CEB900',
    trendLine12 = '#9C27B0',
    trendLine13 = '#00BCD4',
    trendLine14 = '#C2D035',
    trendLine15 = '#FE5918',
    trendLine16 = '#52DEF0',
    trendLine17 = '#FF80AB',
    trendLine18 = '#8BC34A',
    trendLine19 = '#EA80FC',
    trendLine20 = '#006F7D',
}

export const TREND_LINE_COLORS = Object.values(TrendLineColors);
