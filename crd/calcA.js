var app = new Vue({
    el: '#app',
    data :{
        noofplrs :2,
        swaya[]
        swaya1 :false,
        swaya2 :false,
        swaya3 :false,
        swaya4 :false,
        swaya5 :false,
        swaya6 :false,
        mal1:0,
        mal2:0,
        mal3:0,
        mal4:0,
        mal5:0,
        mal6:0,
        jit:0,
        final1:0,
        final2:0,
        final3:0,
        final4:0,
        final5:0,
        final6:0,
        totalm :0
    },
    methods :{
        myth(a)
        {          
           
              app.totalm=eval(app.mal1)+eval(app.mal2)+eval(app.mal3)+eval(app.mal4)+eval(app.mal5)+eval(app.mal6)
           
              app.final1 =app.mal1*app.noofplrs - app.totalm
              app.final2 =app.mal2*app.noofplrs - app.totalm
              app.final3 =app.mal3*app.noofplrs - app.totalm
              app.final4 =app.mal4*app.noofplrs - app.totalm
              app.final5 =app.mal5*app.noofplrs - app.totalm
              app.final6 =app.mal6*app.noofplrs - app.totalm
              


              
              if (app.jit==1)
              {
                app.wp1=app.swaya1?3:10                
                app.wp2=app.swaya2?3:10
                app.wp3=app.noofplrs>2: app.swaya3?3:10
                app.wp4=app.swaya4?3:10
                app.wp5=app.swaya5?3:10
                app.wp6=app.swaya6?3:10

                app.final1 =app.final1 +app.wp2+app.wp3+app.wp4+app.wp5+app.wp6  
              }
              else
              {
                app.final2 = app.final2-app.wp2
                app.final3 = app.final2-app.wp3
                app.final4 = app.final2-app.wp4
                app.final5 = app.final2-app.wp5
                app.final6 = app.final2-app.wp6
              }
              if (app.jit==2)
              {
                app.final2 =app.final2 +app.wp1+app.wp2+app.wp3+app.wp4+app.wp5+app.wp6  
              }
              else
              {
                app.final1 = app.final1-app.wp1
                app.final3 = app.final3-app.wp3
                app.final4 = app.final2-app.wp4
                app.final5 = app.final2-app.wp5
                app.final6 = app.final2-app.wp6
              }
              if (app.jit==3)
              {
                app.final3 =app.final3 +app.wp1+app.wp2+app.wp3+app.wp4+app.wp5+app.wp6  
              }
              else
              {
                app.final2 = app.final2-app.wp2
                app.final3 = app.final2-app.wp3
                app.final4 = app.final2-app.wp4
                app.final5 = app.final2-app.wp5
                app.final6 = app.final2-app.wp6
              }
              if (app.jit==4)
              {
                app.final4 =app.final4 +app.wp1+app.wp2+app.wp3+app.wp4+app.wp5+app.wp6  
              } 
              else
              {
                app.final2 = app.final2-app.wp2
                app.final3 = app.final2-app.wp3
                app.final4 = app.final2-app.wp4
                app.final5 = app.final2-app.wp5
                app.final6 = app.final2-app.wp6
              }
              if (app.jit==5)
              {
                app.final5 =app.final5 +app.wp1+app.wp2+app.wp3+app.wp4+app.wp5+app.wp6  
              }
              else
              {
                app.final2 = app.final2-app.wp2
                app.final3 = app.final2-app.wp3
                app.final4 = app.final2-app.wp4
                app.final5 = app.final2-app.wp5
                app.final6 = app.final2-app.wp6
              }
              if (app.jit==6)
              {
                app.final6 =app.final6 +app.wp1+app.wp2+app.wp3+app.wp4+app.wp5+app.wp6  
              }
              else
              {
                app.final2 = app.final2-app.wp2
                app.final3 = app.final2-app.wp3
                app.final4 = app.final2-app.wp4
                app.final5 = app.final2-app.wp5
                app.final6 = app.final2-app.wp6
              }
              

        }
    },
    computed:{
        wp1(){
            va = 0
            if (app.jit !=1 )
            {
                if (app.swaya1)
                {
                    va =3
                }
                else
                {
                    va =10
                }
            }
            
            return va            
        }
    }
    
})