
function sol(D){
    const week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    let keys = Object.keys(D), map = {}
    week.forEach(el => map[el] = null)

    for(let i = 0; i<keys.length; i++){
        let day = (new Date(keys[i])).getDay()
        if(!map[week[day]]) map[week[day]] = D[keys[i]]
        else map[week[day]] += D[keys[i]]
    }
  

    let continuous = false, m = null, n = null
    for(let i = 2; i<7; i++){
        let prev = i-1, next = i+1
        if(i == 6) next = 0
        if(!map[week[i]]){
            if(map[week[prev]] && map[week[next]]){
                map[week[i]] = (map[week[prev]] + map[week[next]])/2
            }
            else if(!map[week[next]]){
                if(!continuous){
                    continuous = true
                    m = prev
                }
            }
            else if(!map[week[prev]]){
                if(continuous){
                    continuous = false
                    n = next
                }
            }
        }
        if(m !== null & n !== null){
            let diff = n-m
            if(n<m) diff = m-n
            d = (map[week[n]] - map[week[m]])/diff
            
            for( let i = m + 1; i < (m<n ? n:7); i++ ){
                map[week[i]] = map[week[m]] + (i-m)*d
            }
            m == null
            n == null
        }
    }

    return map
}
let D = { "2020-01-01": 6, "2020-01-04": 12, "2020-01-05": 14, "2020-01-06": 2 }
console.log(sol(D))