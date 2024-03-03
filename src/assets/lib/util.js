
export function getResultArrays(marks){
        let pass=marks.filter(mark=> mark>=50);
        let fail=marks.filter(mark=>mark<50);
        return {pass,fail}
      }