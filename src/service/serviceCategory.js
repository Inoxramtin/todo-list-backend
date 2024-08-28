import {createCategory, deleteCategory, updateCategory, getCategoryById} from "../model/category/category.js"


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

async function getCategoriesServiceById(userId){
    const category = await getCategoryById(userId) ;
    return category;
}



export{
    createCategoryService,
    updateCategoryService,
    deleteCategoryService,
    getCategoriesServiceById
}