const Drink = require("../models/Drink.model.js");

module.exports.drinkController = {
  getDrink: (req, res) => {
    Drink.find({})
      .then((docs) => {
        const arr = docs.map((el) => {
          const { _id, name, price } = el;
          const res = { _id, name, price };
          return res;
        });
        res.json(arr);
      })
      .catch((err) => {
        res.json(`${err} Ошибка при попытке просмотра всех напитков`);
      });
  },
  getDrinkInStock: (req, res) => {
    Drink.find({ inStock: true })
      .then((docs) => {
        const arr = docs.map((el) => {
          const { _id, name, price } = el;
          const res = { _id, name, price };

          return res;
        });
        res.json(arr);
      })
      .catch((err) => {
        res.json(`${err} Ошибка при попытке просмотра напитков`);
      });
  },
  getDrinkId: (req, res) => {
    Drink.findById(req.params.id)
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => {
        res.json(`${err} Ошибка при просмотре напитка`);
      });
  },
  postDrink: (req, res) => {
    const { name, price, inStock, containCaffeine, volume, description } =
      req.body;
    Drink.create({
      name,
      price,
      inStock,
      containCaffeine,
      volume,
      description,
    })
      .then((docs) => {
        res.json(`Напиток ${docs.name} добавлен!`);
      })
      .catch((err) => {
        res.json(`Ошибка${err}`);
      });
  },
  deleteDrink: (req, res) => {
    Drink.findByIdAndRemove(req.params.id)
      .then((docs) => {
        res.json(`Напиток ${docs.name} удален!`);
      })
      .catch((err) => {
        res.json(`ошибка ${err}`);
      });
  },
  patchDrink: (req, res) => {
    const { name, price, inStock, containCaffeine, volume, description } =
      req.body;
    Drink.findOneAndUpdate(req.params.id, {
      name: name,
      price: price,
      inStock: inStock,
      containCaffeine: containCaffeine,
      volume: volume,
      description: description,
    })
      .then((docs) => {
        res.json(docs);
      })
      .catch((err) => {
        res.json(`${err} Ошибка при изменении напитка`);
      });
  },
};

// GET /drinks – список всех напитков
// GET /drinks/in-stock – список всех напитков, которые есть в наличии
// GET /drinks/:id – подробная информация о конкретном напитке
// POST /drinks – добавление нового напитка
// DELETE /drinks/:id – удаление конкретного напитка
// PATCH /drinks/:id – изменение конкретного напитка
//     GET /drinks
// GET /drinks/in-stock
// GET /drinks/:id
// POST /drinks
// DELETE /drinks/:id
// PATCH /drinks/:id
