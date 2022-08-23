export const generateRandomAvtar = () => {
  const avtars = [
    "https://gravatar.com/avatar/8fab154171e299e9b8fe24305267a8fd?s=200&d=robohash&r=r",
    "https://gravatar.com/avatar/9e5a6d786d0a582d2efd40c9a0fa7a03?s=200&d=robohash&r=r",
    "https://robohash.org/3be17b6865f19a865d952d3197603fc2?set=set4&bgset=&size=400x400",
    "https://robohash.org/1f2fb9642c825da07a83e5cac078e838?set=set3&bgset=&size=200x200",
    "https://robohash.org/bd8c21b3272a3425a1fc974899697109?set=set1&bgset=&size=200x200"
  ]

  return avtars[Math.floor(Math.random()*avtars.length)]
}

export const CURRENT_YEAR = new Date().getFullYear();