import {createCategory, deleteCategory, updateCategory} from "../model/category/category.js"


async function createCategoryService(name_category,user_id){
    const category = await createCategory(name_category,user_id) ;
    return category;
}

async function updateCategoryService(newNameCategory,name_category,userId){
    const category = await updateCategory(newNameCategory,name_category,userId) ;
    return category;
}

async function deleteCategoryService(name_category,userId){
    const category = await deleteCategory(name_category,userId) ;
    return category;
}

export{
    createCategoryService,
    updateCategoryService,
    deleteCategoryService
}