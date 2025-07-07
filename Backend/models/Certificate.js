const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Certificate = sequelize.define('Certificate', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  user_name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  exam_set_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  contest_name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  contest_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  raw_marks: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  rank: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 0
  },
  generated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'certificates',
  timestamps: false
});

module.exports = Certificate;
