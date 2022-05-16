const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (dragonStrength) => {
  const minimumDamage = Math.floor(Math.random() * 15 + 1);
  return minimumDamage + dragonStrength;
}

const warriorDamage = (dragonStrength) => {
  const minimumDamage = Math.floor(Math.random() * 15 + 1);
  return minimumDamage + dragonStrength;
}