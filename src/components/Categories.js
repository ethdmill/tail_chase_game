export function randomCategory() {
  return categories[Math.round(Math.random() * (categories.length - 1))]
}


const categories = [

"Musical Artists",
"Books",
"Authors",
"TV Shows",
"Movies",
"Historical Figures",
"Celebrities",
"Anime",
"Music Albums",
"Visual Artists",
"Animals",
"Food",
"Games",
]
