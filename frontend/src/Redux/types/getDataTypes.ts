export enum GetDataActionTypesEnum {
    GET_DATA_POSTS = 'GET_DATA_POSTS',
    GET_DATA_ERROR = 'GET_DATA_ERROR',
    GET_DATA_NAVIGATION = 'GET_DATA_NAVIGATION',
    GET_DATA_STATUS_ITEM = 'GET_DATA_STATUS_ITEM',
}

export interface GetDataAction {
    type: GetDataActionTypesEnum.GET_DATA_POSTS;
    payload: any;
}

export interface GetDataNavigation {
    type: GetDataActionTypesEnum.GET_DATA_NAVIGATION;
    payload: any;
}

export interface GetDataErrorAction {
    type: GetDataActionTypesEnum.GET_DATA_ERROR;
    payload: string;
}

export interface GetDataActiveItemAction {
    type: GetDataActionTypesEnum.GET_DATA_STATUS_ITEM;
    active: string;
}

export type getDataActionType = GetDataAction | GetDataErrorAction | GetDataActiveItemAction | GetDataNavigation