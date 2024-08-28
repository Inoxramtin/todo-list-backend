import {createCategoryService, updateCategoryService,  deleteCategoryService, getCategoriesServiceById} from '../../service/serviceCategory.js'



const createCategory = async (req , res, next) => {
    try {
        const {name_category} = req.body;
        const userId = req.user.id
         await createCategoryService(name_category,userId);
        res.status(201).json({
          message: `category  created successfully`
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        });
        
    }
}

const categoryUpdate = async (req , res, next) => {
    try {
        const categoryId = req.user.id;
        const {newNameCategory,name_category} = req.body
        const updateId = await updateCategoryService(categoryId, newNameCategory,name_category);
        res.json({
            message:`update is complet`
        })

    }catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        });
        
    }
}

const categoryDelete =  async(req, res, next) => {
    try {
        const categoryId = req.user.id;
        const {name_category} = req.body
        const deletTask = await  deleteCategoryService(categoryId, name_category );
        res.json({
            message:`category deleted`
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        });
    }
}


const categoryGetById =  async(req, res, next) => {
    try {
        const categoryId = req.user.id;
        const categoryGetId = await  getCategoriesServiceById(categoryId);
        res.json({ categoryGetId})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        });
    }
}



export{
    createCategory,
    categoryUpdate,
    categoryDelete,
    categoryGetById
}