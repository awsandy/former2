/* ========================================================================== */
// Database Migration Service
/* ========================================================================== */

sections.push({
    'category': 'Migration &amp; Transfer',
    'service': 'Database Migration Service',
    'resourcetypes': {
        'Endpoints': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'ID',
                        field: 'id',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'enginename',
                        title: 'Engine Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'servername',
                        title: 'Server Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'databasename',
                        title: 'Database Name',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'endpointtype',
                        title: 'Endpoint Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Replication Instances': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'ID',
                        field: 'id',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'instanceclass',
                        title: 'Instance Class',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'availabilityzone',
                        title: 'Availability Zone',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'allocatedstorage',
                        title: 'Allocated Storage',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'creationtime',
                        title: 'Creation Time',
                        sortable: true,
                        editable: true,
                        formatter: dateFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Replication Tasks': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'ID',
                        field: 'id',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'sourceendpointarn',
                        title: 'Source Endpoint ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'targetendpointarn',
                        title: 'Target Endpoint ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'replicationinstancearn',
                        title: 'Replication Instance ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'migrationtype',
                        title: 'Migration Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Replication Subnet Groups': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'ID',
                        field: 'id',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'description',
                        title: 'Description',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'vpcid',
                        title: 'VPC ID',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Certificates': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'ID',
                        field: 'id',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'validfrom',
                        title: 'Valid From',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'validto',
                        title: 'Valid To',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'keylength',
                        title: 'Key Length',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'signingalgorithm',
                        title: 'Signing Algorithm',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        },
        'Event Subscriptions': {
            'columns': [
                [
                    {
                        field: 'state',
                        checkbox: true,
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        title: 'ID',
                        field: 'id',
                        rowspan: 2,
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: primaryFieldFormatter,
                        footerFormatter: textFormatter
                    },
                    {
                        title: 'Properties',
                        colspan: 4,
                        align: 'center'
                    }
                ],
                [
                    {
                        field: 'sourcetype',
                        title: 'Source Type',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'snstopicarn',
                        title: 'SNS Topic ARN',
                        sortable: true,
                        editable: true,
                        footerFormatter: textFormatter,
                        align: 'center'
                    },
                    {
                        field: 'enabled',
                        title: 'Enabled',
                        sortable: true,
                        editable: true,
                        formatter: tickFormatter,
                        footerFormatter: textFormatter,
                        align: 'center'
                    }
                ]
            ]
        }
    }
});

async function updateDatatableMigrationAndTransferDatabaseMigrationService() {
    blockUI('#section-migrationandtransfer-databasemigrationservice-endpoints-datatable');
    blockUI('#section-migrationandtransfer-databasemigrationservice-replicationinstances-datatable');
    blockUI('#section-migrationandtransfer-databasemigrationservice-replicationtasks-datatable');
    blockUI('#section-migrationandtransfer-databasemigrationservice-replicationsubnetgroups-datatable');
    blockUI('#section-migrationandtransfer-databasemigrationservice-certificates-datatable');
    blockUI('#section-migrationandtransfer-databasemigrationservice-eventsubscriptions-datatable');

    await sdkcall("DMS", "describeEndpoints", {
        // no params
    }, true).then((data) => {
        $('#section-migrationandtransfer-databasemigrationservice-endpoints-datatable').bootstrapTable('removeAll');

        data.Endpoints.forEach(endpoint => {
            $('#section-migrationandtransfer-databasemigrationservice-endpoints-datatable').bootstrapTable('append', [{
                f2id: endpoint.EndpointIdentifier,
                f2type: 'dms.endpoint',
                f2data: endpoint,
                f2region: region,
                id: endpoint.EndpointIdentifier,
                endpointtype: endpoint.EndpointType,
                enginename: endpoint.EngineDisplayName,
                databasename: endpoint.DatabaseName,
                servername: endpoint.ServerName
            }]);
        });

        unblockUI('#section-migrationandtransfer-databasemigrationservice-endpoints-datatable');
    });

    await sdkcall("DMS", "describeReplicationInstances", {
        // no params
    }, true).then((data) => {
        $('#section-migrationandtransfer-databasemigrationservice-replicationinstances-datatable').bootstrapTable('removeAll');

        data.ReplicationInstances.forEach(replicationInstance => {
            $('#section-migrationandtransfer-databasemigrationservice-replicationinstances-datatable').bootstrapTable('append', [{
                f2id: replicationInstance.ReplicationInstanceIdentifier,
                f2type: 'dms.replicationinstance',
                f2data: replicationInstance,
                f2region: region,
                id: replicationInstance.ReplicationInstanceIdentifier,
                instanceclass: replicationInstance.ReplicationInstanceClass,
                allocatedstorage: replicationInstance.AllocatedStorage + " GB",
                creationtime: replicationInstance.InstanceCreateTime,
                availabilityzone: replicationInstance.AvailabilityZone
            }]);
        });

        unblockUI('#section-migrationandtransfer-databasemigrationservice-replicationinstances-datatable');
    });

    await sdkcall("DMS", "describeReplicationTasks", {
        // no params
    }, true).then((data) => {
        $('#section-migrationandtransfer-databasemigrationservice-replicationtasks-datatable').bootstrapTable('removeAll');

        data.ReplicationTasks.forEach(replicationTask => {
            $('#section-migrationandtransfer-databasemigrationservice-replicationtasks-datatable').bootstrapTable('append', [{
                f2id: replicationTask.ReplicationTaskIdentifier,
                f2type: 'dms.replicationtask',
                f2data: replicationTask,
                f2region: region,
                id: replicationTask.ReplicationTaskIdentifier,
                sourceendpointarn: replicationTask.SourceEndpointArn,
                targetendpointarn: replicationTask.TargetEndpointArn,
                replicationinstancearn: replicationTask.ReplicationInstanceArn,
                migrationtype: replicationTask.MigrationType
            }]);
        });

        unblockUI('#section-migrationandtransfer-databasemigrationservice-replicationtasks-datatable');
    });

    await sdkcall("DMS", "describeReplicationSubnetGroups", {
        // no params
    }, true).then((data) => {
        $('#section-migrationandtransfer-databasemigrationservice-replicationsubnetgroups-datatable').bootstrapTable('removeAll');

        data.ReplicationSubnetGroups.forEach(replicationSubnetGroup => {
            $('#section-migrationandtransfer-databasemigrationservice-replicationsubnetgroups-datatable').bootstrapTable('append', [{
                f2id: replicationSubnetGroup.ReplicationSubnetGroupIdentifier,
                f2type: 'dms.replicationsubnetgroup',
                f2data: replicationSubnetGroup,
                f2region: region,
                id: replicationSubnetGroup.ReplicationSubnetGroupIdentifier,
                description: replicationSubnetGroup.ReplicationSubnetGroupDescription,
                vpcid: replicationSubnetGroup.VpcId
            }]);
        });

        unblockUI('#section-migrationandtransfer-databasemigrationservice-replicationsubnetgroups-datatable');
    });

    await sdkcall("DMS", "describeCertificates", {
        // no params
    }, true).then((data) => {
        $('#section-migrationandtransfer-databasemigrationservice-certificates-datatable').bootstrapTable('removeAll');

        data.Certificates.forEach(certificate => {
            $('#section-migrationandtransfer-databasemigrationservice-certificates-datatable').bootstrapTable('append', [{
                f2id: certificate.CertificateIdentifier,
                f2type: 'dms.certificate',
                f2data: certificate,
                f2region: region,
                id: certificate.CertificateIdentifier,
                validfrom: certificate.ValidFromDate.toString(),
                validto: certificate.ValidToDate.toString(),
                keylength: certificate.KeyLength,
                signingalgorithm: certificate.SigningAlgorithm
            }]);
        });

        unblockUI('#section-migrationandtransfer-databasemigrationservice-certificates-datatable');
    });

    await sdkcall("DMS", "describeEventSubscriptions", {
        // no params
    }, true).then((data) => {
        $('#section-migrationandtransfer-databasemigrationservice-eventsubscriptions-datatable').bootstrapTable('removeAll');

        data.EventSubscriptionsList.forEach(eventSubscriptions => {
            $('#section-migrationandtransfer-databasemigrationservice-eventsubscriptions-datatable').bootstrapTable('append', [{
                f2id: eventSubscriptions.CustSubscriptionId,
                f2type: 'dms.eventsubscription',
                f2data: eventSubscriptions,
                f2region: region,
                id: eventSubscriptions.CustSubscriptionId,
                snstopicarn: eventSubscriptions.SnsTopicArn,
                sourcetype: eventSubscriptions.SourceType,
                enabled: eventSubscriptions.Enabled
            }]);
        });

        unblockUI('#section-migrationandtransfer-databasemigrationservice-eventsubscriptions-datatable');
    });
}

service_mapping_functions.push(function(reqParams, obj, tracked_resources){
    
    } else {
        return false;
    }

    return true;
});
