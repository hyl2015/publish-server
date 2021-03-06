/**
 * Created by wolf on 17/01/15.
 */
import lokka from '../plugins/lokka-client'
import {
  MUTATION_RES_CREATE_VER,
  QUERY_RES_CREATE_INFO,
  QUERY_RES_VERSION_LIST,
  QUERY_RES_VERSION_INFO,
  MUTATION_RES_VER_PACKAGING,
  MUTATION_RES_VER_ONLINE,
  MUTATION_RES_VER_OFFLINE,
  MUTATION_RES_VER_REMOVE
  
  
} from './queries/ResQuery'
import store from '../store'
import {
  ACTION_RES_VERSION_LIST,
  ACTION_RES_VERSION_PAGINATION
} from '../store/action-types'

export default {
  resVersionList (page, pageSize) {
    return lokka.query(QUERY_RES_VERSION_LIST, {
      page,
      pageSize
    }, {loading: true}).then((data) => {
      const pageData = data.res.versionList
      
      store.dispatch(ACTION_RES_VERSION_LIST, pageData.listData)
      store.dispatch(ACTION_RES_VERSION_PAGINATION, {total: pageData.total})
      
      
      return Promise.resolve(data)
    }).catch(() => Promise.reject())
  },
  getCreateInfo() {
    return lokka.query(QUERY_RES_CREATE_INFO, null, {loading: true}).then((data) => {
      return Promise.resolve(data)
    }).catch(() => Promise.reject())
  },
  getVersionInfo(id) {
    return lokka.query(QUERY_RES_VERSION_INFO, {id}, {loading: true}).then((data) => {
      return Promise.resolve(data.res.versionInfo)
    }).catch(() => Promise.reject())
  },
  resCreateNewVer(info) {
    return lokka.mutate(MUTATION_RES_CREATE_VER, info, {loading: true}).then((data) => {
      return Promise.resolve(data)
    }).catch(() => Promise.reject())
  },
  resVerPackaging(id) {
    return lokka.mutate(MUTATION_RES_VER_PACKAGING, {
      id
    }, {loading: true}).then((data) => {
      return Promise.resolve(data.res_packaging)
    }).catch(() => Promise.reject())
  },
  resVerOnLine(id) {
    return lokka.mutate(MUTATION_RES_VER_ONLINE, {
      id
    }, {loading: true}).then((data) => {
      return Promise.resolve(data.res_online)
    }).catch(() => Promise.reject())
  },
  resVerOffLine(id) {
    return lokka.mutate(MUTATION_RES_VER_OFFLINE, {
      id
    }, {loading: true}).then((data) => {
      return Promise.resolve(data.res_offline)
    }).catch(() => Promise.reject())
  },
  resVerRemove(id) {
    return lokka.mutate(MUTATION_RES_VER_REMOVE, {
      id
    }, {loading: true}).then((data) => {
      return Promise.resolve(data.res_remove)
    }).catch(() => Promise.reject())
  }
  
  
}
