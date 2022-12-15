import { DataSourceOptions } from 'typeorm';

const DbList = ['booru', 'futbol', 'mqtt', 'smash'];

const getDataSourceOptions = (dbname?: string): DataSourceOptions => {
  let name: string | undefined;
  let database: string;
  const isDefault = !dbname;
  // add data depending if is not main db
  if (isDefault) {
    database = `${process.cwd()}/databases/app.db`;
    return {
      type: 'better-sqlite3',
      database,
      synchronize: true,
      entities: [`${__dirname}/../../core/models/*.model.js`],
      subscribers: [`${__dirname}/../../core/subscribers/*.subscriber.js`],
    };
  } else {
    name = dbname;
    database = `${process.cwd()}/databases/${dbname}.db`;

    return {
      type: 'better-sqlite3',
      name,
      database,
      synchronize: true,
      entities: [`${__dirname}/../../apps/${dbname}/models/*.model.js`],
      subscribers: [
        `${__dirname}/../../apps/${dbname}/subscribers/*.subscriber.js`,
      ],
    };
  }
};

export default DbList.concat([undefined]).map((dbName: string | undefined) => {
  const opts = getDataSourceOptions(dbName);
  // console.log(opts);
  return opts;
});
