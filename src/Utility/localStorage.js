//get
export const getData = () => {
  try {
    const data = localStorage.getItem("appList");

    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

//save
export const saveData = (app) => {
  const data = getData();

  try {
    const isDuplicate = data.some((a) => a.id === app.id);

    if (isDuplicate) return alert("Already Added");

    const updateData = [...data, app];

    localStorage.setItem("appList", JSON.stringify(updateData));
  } catch (error) {
    console.log(error);
    return [];
  }
};

//delete
export const deleteData = (app) =>{

    const data = getData();

    try {
        const det = data.filter ( a => a.id !== app.id);

        localStorage.setItem('appList',JSON.stringify(det));
        
    } catch (error) {
        console.log(error);
        return [];
        
    }

}
