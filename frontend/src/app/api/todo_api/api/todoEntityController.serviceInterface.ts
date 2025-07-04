/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { CollectionModelEntityModelTodoDto } from '../model/models';
import { EntityModelTodoDto } from '../model/models';
import { TodoRequestBodyDto } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface TodoEntityControllerApiInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * delete-todo
     * @param id 
     */
    deleteItemResourceTodoDelete(id: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * get-todo
     */
    getCollectionResourceTodoGet1(extraHttpRequestParams?: any): Observable<CollectionModelEntityModelTodoDto>;

    /**
     * 
     * get-todo
     * @param id 
     */
    getItemResourceTodoGet(id: string, extraHttpRequestParams?: any): Observable<EntityModelTodoDto>;

    /**
     * 
     * patch-todo
     * @param id 
     * @param todoRequestBodyDto 
     */
    patchItemResourceTodoPatch(id: string, todoRequestBodyDto: TodoRequestBodyDto, extraHttpRequestParams?: any): Observable<EntityModelTodoDto>;

    /**
     * 
     * create-todo
     * @param todoRequestBodyDto 
     */
    postCollectionResourceTodoPost(todoRequestBodyDto: TodoRequestBodyDto, extraHttpRequestParams?: any): Observable<EntityModelTodoDto>;

    /**
     * 
     * update-todo
     * @param id 
     * @param todoRequestBodyDto 
     */
    putItemResourceTodoPut(id: string, todoRequestBodyDto: TodoRequestBodyDto, extraHttpRequestParams?: any): Observable<EntityModelTodoDto>;

}
