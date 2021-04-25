const express = require('express');
const router = express.Router();
const version = "v1";

router.use(`/${version}/menu/`, require('./menuRoutes'));
router.use(`/${version}/state/`, require('./stateRoutes'));
router.use(`/${version}/city/`, require('./cityRoutes'));
router.use(`/${version}/customergroup/`, require('./customerGroupsRoutes'));
router.use(`/${version}/customer/`, require('./customerRoutes'));
router.use(`/${version}/customerunity/`, require('./customerUnityRoutes'));
router.use(`/${version}/unitycontact/`, require('./unityContactRoutes'));
router.use(`/${version}/area/`, require('./areaRoutes'));
router.use(`/${version}/areaaspect/`, require('./areaAspectRoutes'));
router.use(`/${version}/cep/`, require('./cepRoutes'));

module.exports = router;