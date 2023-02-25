class AppPage{
    get PeopleNames(){
        return $(`//*[@text='People Names']`);
    }
    getByAccessibilityId(id){
        return $(`~${id}`);
    }
}
module.exports = new AppPage();